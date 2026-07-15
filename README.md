# Corruptómetro MX ⚖

Dashboard ciudadano de transparencia gubernamental en México.

## ¿Qué es?

Un proyecto de código abierto que recopila, estructura y visualiza datos públicos sobre corrupción gubernamental en México. Cada dato proviene de fuentes oficiales verificables: OSFEM, SCJN, TEPJF, ASF, SESNSP, SHCP y fuentes periodísticas de registro.

## Sistema de puntuación

Cada servidor público es evaluado en 7 categorías con un máximo de 100 puntos:

| Categoría | Puntos máx. | Descripción |
|---|---|---|
| Sentencias o procesos penales | 25 | Condenas, consignaciones o procesos activos |
| Observaciones de fiscalización | 20 | Hallazgos de OSFEM, ASF o auditorías |
| Funcionarios detenidos | 15 | Colaboradores directos detenidos durante su gestión |
| Deuda pública irregular | 15 | Incremento desproporcionado de pasivos |
| Denuncias documentadas | 10 | Denuncias ciudadanas o periodísticas verificadas |
| Evasión de justicia | 10 | Desacato judicial, amparos para evadir detención |
| Nepotismo / conflicto de interés | 5 | Concesiones irregulares, contratos dirigidos |

## ¿Cómo contribuir?

Usa nuestro **[formulario estructurado de contribución](../../issues/new?template=nueva-contribucion.yml)** — no necesitas saber programar.

### Qué pasa después de enviar tu contribución

1. **Verificación automática (minutos):** un bot revisa que tu envío esté completo, que las URLs de tus fuentes carguen (no estén rotas o inventadas), y que provengan de dominios reconocidos (instituciones oficiales `.gob.mx`, medios de cobertura nacional). El bot publica un reporte como comentario en tu Issue.
2. **Revisión humana:** pasar el chequeo automático **no significa que el caso ya esté verificado como cierto** — solo confirma que la estructura y las fuentes son reales y accesibles. Un mantenedor del proyecto revisa después la calidad y veracidad del contenido antes de fusionarlo a `data.js`.

### Qué verifica el bot (y qué no)

✅ Verifica automáticamente:
- Que todos los campos obligatorios estén completos
- Que cada categoría puntuada tenga evidencia escrita (mínimo de caracteres)
- Que los puntajes no excedan el máximo de su categoría
- Que las URLs de fuentes respondan (no estén rotas)
- Que las fuentes vengan de dominios reconocidos ([ver lista](.github/scripts/dominios-confiables.txt))
- Que el nombre no sea ya un duplicado exacto en la base de datos

❌ No puede verificar (por eso la revisión humana sigue siendo obligatoria):
- Si los hechos descritos en tu texto realmente ocurrieron
- Si la fuente citada realmente respalda lo que dices que respalda
- Si el tono es neutral y basado en hechos, no en opinión

### Reglas para que tu contribución se acepte

- **Fuentes reales y verificables** — no rumores, no "se dice que...". Prioriza OSFEM, ASF, SCJN, TEPJF, FGR, sentencias judiciales, y medios de cobertura nacional.
- **Una fuente por cada categoría puntuada** — si le das 15 puntos a "fiscalización", necesitas evidencia escrita y una URL que lo respalde.
- **Sin rumores de dominios no verificados** — blogs personales, redes sociales sin verificar, o sitios sin trayectoria editorial no cuentan como fuente sólida.

## Aviso legal

Este dashboard presenta exclusivamente datos de fuentes oficiales públicas. No emite juicios de valor ni conclusiones. El sistema de puntuación es una métrica cuantitativa basada en hechos documentados, no una opinión editorial. Los ciudadanos pueden verificar cada dato en la fuente original citada.

## Stack técnico

- HTML + CSS + React (CDN)
- GitHub Pages (hosting estático)
- Sin backend, sin cookies, sin tracking

## Licencia

MIT — Úsalo, compártelo, mejóralo.
