#!/usr/bin/env python3
"""
Corruptómetro MX — Verificador automático de contribuciones.

Este script NO determina si los hechos reportados son verdaderos.
Solo valida:
  1. Que la estructura del envío esté completa (cada score > 0 tiene evidencia)
  2. Que los scores respeten los máximos por categoría
  3. Que las fuentes sean URLs reales y respondan (no estén rotas/inventadas)
  4. Que las fuentes provengan de dominios reconocidos (o las marca para revisión)
  5. Que el nombre no sea ya un duplicado exacto en data.js

Todo lo demás queda marcado explícitamente para revisión humana.
"""
import os
import re
import sys
import json
import urllib.request
import urllib.error
from urllib.parse import urlparse

MAX_SCORES = {
    "score_sentencias": 25,
    "score_fiscalizacion": 20,
    "score_funcionarios": 15,
    "score_deuda": 15,
    "score_denuncias": 10,
    "score_evasion": 10,
    "score_nepotismo": 5,
}

EVIDENCE_KEY_MAP = {
    "score_sentencias": "evidencia_sentencias",
    "score_fiscalizacion": "evidencia_fiscalizacion",
    "score_funcionarios": "evidencia_funcionarios",
    "score_deuda": "evidencia_deuda",
    "score_denuncias": "evidencia_denuncias",
    "score_evasion": "evidencia_evasion",
    "score_nepotismo": "evidencia_nepotismo",
}

MIN_EVIDENCE_CHARS = 20


def parse_issue_body(body: str) -> dict:
    """Parses GitHub issue-form rendered markdown (### Label \n\n value) into a dict
    keyed by a normalized slug of the label, since GitHub renders the `id` as an
    HTML comment we can also try to use. We primarily split on '### ' headers."""
    fields = {}
    # GitHub renders each field as: "### <label>\n\n<value>\n\n"
    blocks = re.split(r"\n### ", body)
    for block in blocks:
        block = block.strip()
        if not block:
            continue
        lines = block.split("\n", 1)
        label = lines[0].strip().lstrip("#").strip()
        value = lines[1].strip() if len(lines) > 1 else ""
        if value == "_No response_":
            value = ""
        fields[label] = value
    return fields


def slugify_label_map(fields: dict) -> dict:
    """Map human-readable labels back to our internal field ids by keyword matching,
    since the issue form renders the label text, not the yml id."""
    mapping = {}
    for label, value in fields.items():
        low = label.lower()
        if "nombre completo" in low:
            mapping["nombre"] = value
        elif low.startswith("cargo"):
            mapping["cargo"] = value
        elif "nivel de gobierno" in low:
            mapping["nivel"] = value
        elif "situación actual" in low or "situacion actual" in low:
            mapping["status"] = value
        elif low.startswith("estado"):
            mapping["estado"] = value
        elif "partido" in low:
            mapping["partido"] = value
        elif "sentencias o procesos penales (máx" in low:
            mapping["score_sentencias"] = value
        elif low.startswith("evidencia") and "sentencias" in low:
            mapping["evidencia_sentencias"] = value
        elif "observaciones de fiscalización" in low:
            mapping["score_fiscalizacion"] = value
        elif low.startswith("evidencia") and "fiscalizaci" in low:
            mapping["evidencia_fiscalizacion"] = value
        elif "funcionarios detenidos" in low:
            mapping["score_funcionarios"] = value
        elif low.startswith("evidencia") and "funcionarios" in low:
            mapping["evidencia_funcionarios"] = value
        elif "deuda / daño patrimonial" in low or "deuda / dano patrimonial" in low:
            mapping["score_deuda"] = value
        elif low.startswith("evidencia") and "deuda" in low:
            mapping["evidencia_deuda"] = value
        elif "denuncias documentadas" in low:
            mapping["score_denuncias"] = value
        elif low.startswith("evidencia") and "denuncias" in low:
            mapping["evidencia_denuncias"] = value
        elif "evasión de justicia" in low or "evasion de justicia" in low:
            mapping["score_evasion"] = value
        elif low.startswith("evidencia") and "evasi" in low:
            mapping["evidencia_evasion"] = value
        elif "nepotismo / conflicto" in low:
            mapping["score_nepotismo"] = value
        elif low.startswith("evidencia") and "nepotismo" in low:
            mapping["evidencia_nepotismo"] = value
        elif "urls de fuentes" in low:
            mapping["fuentes"] = value
        elif "cronología" in low or "cronologia" in low:
            mapping["timeline"] = value
        elif "confirmación" in low or "confirmacion" in low:
            mapping["confirmacion"] = value
    return mapping


def load_trusted_domains(path: str) -> list:
    domains = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#"):
                domains.append(line.lower())
    return domains


def domain_is_trusted(url: str, trusted: list) -> bool:
    try:
        netloc = urlparse(url).netloc.lower()
        netloc = netloc.split("@")[-1]  # strip userinfo if present
        netloc = netloc.split(":")[0]  # strip port
    except Exception:
        return False
    for d in trusted:
        if netloc == d or netloc.endswith("." + d):
            return True
    return False


def check_url_alive(url: str, timeout=8) -> tuple:
    """Returns (ok: bool, status_code_or_error: str)"""
    req = urllib.request.Request(url, headers={"User-Agent": "CorruptometroMX-Verifier/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            code = resp.getcode()
            return (200 <= code < 400, str(code))
    except urllib.error.HTTPError as e:
        # Some sites block bots with 403 but the page is legit; treat 403/999 as "unknown", not dead
        if e.code in (403, 999, 429):
            return (True, f"{e.code} (bloqueado a bots, no verificable pero no roto)")
        return (False, str(e.code))
    except Exception as e:
        return (False, type(e).__name__)


def extract_urls(text: str) -> list:
    urls = re.findall(r"https?://[^\s\)\]\>\"]+", text)
    # dedupe preserving order
    seen = set()
    out = []
    for u in urls:
        u = u.rstrip(".,;")
        if u not in seen:
            seen.add(u)
            out.append(u)
    return out


def check_duplicate_name(name: str, data_js_path: str) -> bool:
    if not name or not os.path.exists(data_js_path):
        return False
    with open(data_js_path, "r", encoding="utf-8") as f:
        content = f.read()
    pattern = re.escape(name.strip())
    return bool(re.search(rf"name\s*:\s*'{pattern}'", content, re.IGNORECASE))


def main():
    issue_body = os.environ.get("ISSUE_BODY", "")
    repo_root = os.environ.get("REPO_ROOT", ".")

    raw_fields = parse_issue_body(issue_body)
    f = slugify_label_map(raw_fields)

    report_lines = []
    ok_structural = True
    ok_links = True
    any_untrusted = False

    report_lines.append("## 🤖 Verificación automática\n")
    report_lines.append(
        "_Este es un chequeo automático de estructura y fuentes. **No confirma que los "
        "hechos sean ciertos** — eso requiere revisión humana, que sigue pendiente._\n"
    )

    # --- 1. Structural completeness ---
    report_lines.append("### 1. Completitud estructural\n")
    required_basic = ["nombre", "cargo", "nivel", "status", "estado", "partido"]
    missing_basic = [r for r in required_basic if not f.get(r, "").strip()]
    if missing_basic:
        ok_structural = False
        report_lines.append(f"❌ Faltan campos obligatorios: {', '.join(missing_basic)}\n")
    else:
        report_lines.append("✅ Todos los campos básicos están completos.\n")

    # --- 2. Score validation ---
    report_lines.append("### 2. Puntuación por categoría\n")
    total_score = 0
    score_table = ["| Categoría | Puntos | Máx | Evidencia | Estado |",
                    "|---|---|---|---|---|"]
    for score_key, max_val in MAX_SCORES.items():
        raw_val = f.get(score_key, "0").strip()
        try:
            val = int(re.sub(r"[^\d\-]", "", raw_val) or "0")
        except ValueError:
            val = 0
        evidence = f.get(EVIDENCE_KEY_MAP[score_key], "").strip()
        cat_name = score_key.replace("score_", "")

        status = "✅"
        if val > max_val:
            status = f"❌ excede máximo ({max_val})"
            ok_structural = False
        elif val < 0:
            status = "❌ negativo"
            ok_structural = False
        elif val > 0 and len(evidence) < MIN_EVIDENCE_CHARS:
            status = "❌ sin evidencia suficiente"
            ok_structural = False
        elif val == 0:
            status = "➖ no aplica"

        total_score += min(max(val, 0), max_val)
        score_table.append(f"| {cat_name} | {val} | {max_val} | {'Sí' if evidence else 'No'} | {status} |")

    report_lines.extend(score_table)
    report_lines.append(f"\n**Score total calculado: {total_score}/100**\n")

    # --- 3. Duplicate check ---
    report_lines.append("### 3. Duplicados\n")
    data_js_path = os.path.join(repo_root, "data.js")
    is_dup = check_duplicate_name(f.get("nombre", ""), data_js_path)
    if is_dup:
        report_lines.append(
            f"⚠️ **Ya existe un perfil con el nombre \"{f.get('nombre')}\"** en `data.js`. "
            "Si es información nueva sobre la misma persona, considera actualizar el perfil "
            "existente en vez de crear uno duplicado.\n"
        )
    else:
        report_lines.append("✅ No se encontró un perfil duplicado con este nombre exacto.\n")

    # --- 4. Source verification ---
    report_lines.append("### 4. Verificación de fuentes\n")
    fuentes_raw = f.get("fuentes", "")
    urls = extract_urls(fuentes_raw)

    if not urls:
        ok_links = False
        report_lines.append("❌ No se detectaron URLs válidas en el campo de fuentes.\n")
    else:
        trusted_path = os.path.join(repo_root, ".github", "scripts", "dominios-confiables.txt")
        trusted_domains = load_trusted_domains(trusted_path) if os.path.exists(trusted_path) else []

        src_table = ["| URL | Enlace activo | Dominio reconocido |", "|---|---|---|"]
        for url in urls:
            alive, code = check_url_alive(url)
            trusted = domain_is_trusted(url, trusted_domains)
            if not alive:
                ok_links = False
            if not trusted:
                any_untrusted = True
            alive_str = f"✅ ({code})" if alive else f"❌ ({code})"
            trusted_str = "✅ reconocido" if trusted else "⚠️ no en lista"
            short_url = url if len(url) <= 60 else url[:57] + "..."
            src_table.append(f"| {short_url} | {alive_str} | {trusted_str} |")
        report_lines.extend(src_table)
        report_lines.append("")

    # --- Summary & labels ---
    labels_to_add = ["pendiente-revision-humana"]
    report_lines.append("### Resumen\n")
    if ok_structural and ok_links:
        report_lines.append(
            "✅ **Pasó el chequeo automático.** Estructura completa y fuentes activas. "
            "Un editor humano revisará ahora la veracidad y calidad del contenido antes de fusionarlo.\n"
        )
        labels_to_add.append("verificacion-automatica-ok")
    else:
        problems = []
        if not ok_structural:
            problems.append("estructura incompleta o inconsistente")
        if not ok_links:
            problems.append("una o más fuentes rotas/inválidas")
        report_lines.append(
            f"❌ **No pasó el chequeo automático** ({', '.join(problems)}). "
            "Por favor corrige los puntos señalados arriba y edita este issue "
            "(la verificación se re-ejecuta automáticamente al editar).\n"
        )
        labels_to_add.append("requiere-correcciones")

    if any_untrusted:
        report_lines.append(
            "ℹ️ Al menos una fuente proviene de un dominio fuera de nuestra lista reconocida. "
            "Esto no la descalifica automáticamente, pero un editor la revisará con más cuidado.\n"
        )
        labels_to_add.append("fuente-no-reconocida")

    comment_body = "\n".join(report_lines)

    result = {
        "comment": comment_body,
        "labels": labels_to_add,
        "passed": ok_structural and ok_links,
    }
    print(json.dumps(result))


if __name__ == "__main__":
    main()
