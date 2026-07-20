# Corruptómetro MX ⚖

Dashboard ciudadano de transparencia gubernamental en México.

## ¿Qué es?

Un proyecto de código abierto que recopila, estructura y visualiza datos públicos sobre corrupción gubernamental en México.

## Esto no es un veredicto

El puntaje mide **qué tan documentado y respaldado por fuentes** está un señalamiento, no si la persona es culpable de un delito. Una sentencia firme y una denuncia sin resolver pesan distinto en el puntaje precisamente porque no son equivalentes. Revisa siempre la evidencia y la fuente citada en cada categoría de un perfil, no solo el número final — el sitio incluye un desglose completo con la fuente exacta detrás de cada punto otorgado.

## ¿Qué fuentes se aceptan?

Instituciones oficiales (OSFEM, ASF, SCJN, TEPJF, FGR, UIF, sentencias judiciales), autoridades extranjeras cuando aplica (DOJ, DEA), y medios de cobertura nacional o regional con trayectoria editorial verificable ([lista completa de dominios reconocidos](.github/scripts/dominios-confiables.txt)). No se aceptan rumores, publicaciones de redes sociales sin verificar, ni fuentes sin URL rastreable.

## ¿Cuándo se documenta un caso?

Cuando existe al menos un hecho verificable en una fuente reconocida: una sentencia, una auditoría con hallazgos, una denuncia formal admitida por una autoridad, una detención, o una investigación abierta. La sola sospecha, opinión o crítica política sin respaldo documental no califica para ser incluida.

## Sistema de puntuación

Cada servidor público es evaluado en 7 categorías independientes, con un máximo de 100 puntos en total. Cada categoría se puntúa por separado según la evidencia disponible para esa persona específica, no de forma comparativa contra otros casos:

| Categoría | Puntos máx. | Descripción |
|---|---|---|
| Sentencias o procesos penales | 25 | Condenas, consignaciones o procesos activos |
| Observaciones de fiscalización | 20 | Hallazgos de OSFEM, ASF o auditorías |
| Funcionarios detenidos | 15 | Colaboradores directos detenidos durante su gestión |
| Deuda pública irregular | 15 | Incremento desproporcionado de pasivos |
| Denuncias documentadas | 10 | Denuncias ciudadanas o periodísticas verificadas |
| Evasión de justicia | 10 | Desacato judicial, amparos para evadir detención |
| Nepotismo / conflicto de interés | 5 | Concesiones irregulares, contratos dirigidos |

Los pesos de cada categoría son una decisión de diseño del proyecto, no están validados por un panel de expertos externo ni tienen pruebas de confiabilidad entre evaluadores — es un área abierta a mejora. Si tienes retroalimentación sobre la metodología, [abre un Issue](../../issues).

## Descarga de datos

Puedes descargar la base completa en JSON o CSV directamente desde el sitio (botón en la sección de Metodología), o consultar el archivo fuente [`data.js`](data.js) en este repositorio.

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
