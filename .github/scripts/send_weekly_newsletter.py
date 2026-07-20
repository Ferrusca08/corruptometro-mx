#!/usr/bin/env python3
"""
Corruptómetro MX — Envío del boletín semanal.

Se ejecuta desde GitHub Actions una vez por semana. Lógica:
  1. Descarga la lista de suscriptores desde el CSV público del Google Sheet
     vinculado al formulario de suscripción (sin credenciales, solo lectura).
  2. Filtra los perfiles de data.js cuyo campo `lastVerified` cae dentro de
     los últimos 7 días — así no hace falta comparar contra un commit
     anterior, el propio dato de "última verificación" ya nos dice qué es
     nuevo.
  3. Si no hay perfiles nuevos esa semana, NO envía nada (evita spamear a
     los suscriptores con un correo vacío).
  4. Arma un correo HTML simple y lo manda vía la API de Resend, uno por
     suscriptor.
"""
import os
import re
import csv
import io
import sys
import json
import urllib.request
import urllib.error
from datetime import datetime, timedelta

SITE_URL = "https://ferrusca08.github.io/corruptometro-mx/"
FROM_EMAIL = os.environ.get("NEWSLETTER_FROM", "Corruptómetro MX <onboarding@resend.dev>")


def load_officials(repo_root):
    """Carga officials desde data.js evaluándolo como JS simple con Node."""
    import subprocess
    data_js_path = os.path.join(repo_root, "data.js")
    script = f"""
    const fs = require('fs');
    let code = fs.readFileSync('{data_js_path}', 'utf8');
    code = code.replace('const officials', 'var officials').replace('const SCORING_CRITERIA', 'var SCORING_CRITERIA').replace('const NATIONAL_STATS', 'var NATIONAL_STATS');
    eval(code);
    console.log(JSON.stringify(officials));
    """
    result = subprocess.run(["node", "-e", script], capture_output=True, text=True, check=True)
    return json.loads(result.stdout)


def get_recent_officials(officials, days=7):
    cutoff = datetime.utcnow() - timedelta(days=days)
    recent = []
    for o in officials:
        lv = o.get("lastVerified")
        if not lv:
            continue
        try:
            d = datetime.strptime(lv, "%Y-%m-%d")
        except ValueError:
            continue
        if d >= cutoff:
            recent.append(o)
    return recent


def get_total_score(scores):
    return sum(scores.values())


def fetch_subscribers(csv_url):
    if not csv_url:
        return []
    req = urllib.request.Request(csv_url, headers={"User-Agent": "CorruptometroMX-Newsletter/1.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        content = resp.read().decode("utf-8")
    reader = csv.reader(io.StringIO(content))
    rows = list(reader)
    if not rows:
        return []
    header = rows[0]
    email_col = 0
    for i, col in enumerate(header):
        if "correo" in col.lower() or "email" in col.lower():
            email_col = i
            break
    emails = []
    for row in rows[1:]:
        if len(row) > email_col:
            email = row[email_col].strip()
            if re.match(r"^[^\s@]+@[^\s@]+\.[^\s@]+$", email):
                emails.append(email)
    # dedupe
    return list(dict.fromkeys(emails))


def build_email_html(recent_officials):
    items_html = []
    for o in recent_officials[:15]:  # cap por si acaso
        total = get_total_score(o["scores"])
        items_html.append(f"""
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #21262D;">
            <div style="font-family:Arial,sans-serif;font-size:16px;font-weight:bold;color:#E6EDF3;">{o['name']}</div>
            <div style="font-family:Arial,sans-serif;font-size:13px;color:#8B949E;margin-top:2px;">{o['role']} · {o['state']}</div>
            <div style="font-family:monospace;font-size:14px;color:#F85149;margin-top:6px;">Score: {total}/100</div>
          </td>
        </tr>
        """)
    body = "".join(items_html)
    return f"""
    <div style="background:#06090F;padding:32px 16px;">
      <div style="max-width:520px;margin:0 auto;background:#0D1117;border:1px solid #21262D;border-radius:10px;padding:28px;">
        <div style="font-family:Arial,sans-serif;font-size:20px;font-weight:bold;color:#E6EDF3;margin-bottom:4px;">
          Corrupt&oacute;metro <span style="color:#F85149;">MX</span>
        </div>
        <div style="font-family:Arial,sans-serif;font-size:13px;color:#8B949E;margin-bottom:20px;">
          Boletín semanal · {len(recent_officials)} caso{'s' if len(recent_officials) != 1 else ''} nuevo{'s' if len(recent_officials) != 1 else ''} esta semana
        </div>
        <table width="100%" cellpadding="0" cellspacing="0">{body}</table>
        <div style="margin-top:24px;">
          <a href="{SITE_URL}" style="display:inline-block;background:#F85149;color:#fff;text-decoration:none;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;padding:10px 20px;border-radius:6px;">
            Ver todos los casos
          </a>
        </div>
        <div style="font-family:Arial,sans-serif;font-size:11px;color:#484F58;margin-top:24px;">
          Recibes esto porque te suscribiste en corruptometro-mx. Datos públicos, fuentes verificables, sin opiniones.
        </div>
      </div>
    </div>
    """


def send_via_resend(api_key, to_email, html):
    url = "https://api.resend.com/emails"
    payload = json.dumps({
        "from": FROM_EMAIL,
        "to": [to_email],
        "subject": "Corruptómetro MX — Boletín semanal",
        "html": html,
    }).encode("utf-8")
    req = urllib.request.Request(url, data=payload, method="POST", headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
        "User-Agent": "CorruptometroMX-Newsletter/1.0 (+https://ferrusca08.github.io/corruptometro-mx/)",
        "Accept": "application/json",
    })
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return True, resp.getcode()
    except urllib.error.HTTPError as e:
        return False, f"{e.code}: {e.read().decode('utf-8', errors='ignore')}"
    except Exception as e:
        return False, str(e)


def main():
    repo_root = os.environ.get("REPO_ROOT", ".")
    api_key = os.environ.get("RESEND_API_KEY")
    csv_url = os.environ.get("SUBSCRIBERS_CSV_URL")
    test_mode = os.environ.get("TEST_MODE", "false").lower() == "true"
    test_email = os.environ.get("TEST_EMAIL", "")
    test_limit = int(os.environ.get("TEST_LIMIT", "2"))

    if not api_key:
        print("ERROR: falta RESEND_API_KEY")
        sys.exit(1)

    officials = load_officials(repo_root)

    if test_mode:
        # Modo de prueba: NO toca la lista real de suscriptores. Toma los
        # primeros N perfiles (ordenados por score) solo para validar que
        # el envío técnico funciona, y lo manda únicamente a test_email.
        if not test_email:
            print("ERROR: TEST_MODE activo pero falta TEST_EMAIL")
            sys.exit(1)
        recent = sorted(officials, key=lambda o: get_total_score(o["scores"]), reverse=True)[:test_limit]
        subscribers = [test_email]
        print(f"[MODO PRUEBA] Enviando {len(recent)} caso(s) de muestra solo a {test_email}")
    else:
        if not csv_url:
            print("ERROR: falta SUBSCRIBERS_CSV_URL (publica el Google Sheet como CSV)")
            sys.exit(1)
        recent = get_recent_officials(officials, days=7)
        if not recent:
            print("Sin casos nuevos esta semana. No se envía boletín.")
            return
        subscribers = fetch_subscribers(csv_url)
        if not subscribers:
            print("Sin suscriptores. No se envía nada.")
            return

    html = build_email_html(recent)
    sent, failed = 0, 0
    for email in subscribers:
        ok, info = send_via_resend(api_key, email, html)
        if ok:
            sent += 1
        else:
            failed += 1
            print(f"Fallo al enviar a {email}: {info}")

    print(f"Casos nuevos: {len(recent)} | Enviados: {sent} | Fallidos: {failed}")


if __name__ == "__main__":
    main()
