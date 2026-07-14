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

1. Abre un [Issue](../../issues) con los datos del servidor público
2. Incluye **fuentes verificables** (URLs de documentos oficiales, sentencias, auditorías)
3. No se aceptan datos sin fuente oficial o periodística verificable

### Formato para contribuciones

```yaml
nombre: [Nombre completo]
cargo: [Cargo actual o último]
partido: [Partido político]
estado: [Entidad federativa]
categoría: [sentencias|fiscalizacion|funcionarios|deuda|denuncias|evasion|nepotismo]
descripción: [Descripción breve del hecho]
fuente_url: [URL de la fuente oficial]
fuente_tipo: [OSFEM|SCJN|TEPJF|ASF|SESNSP|SHCP|Periodística]
```

## Aviso legal

Este dashboard presenta exclusivamente datos de fuentes oficiales públicas. No emite juicios de valor ni conclusiones. El sistema de puntuación es una métrica cuantitativa basada en hechos documentados, no una opinión editorial. Los ciudadanos pueden verificar cada dato en la fuente original citada.

## Stack técnico

- HTML + CSS + React (CDN)
- GitHub Pages (hosting estático)
- Sin backend, sin cookies, sin tracking

## Licencia

MIT — Úsalo, compártelo, mejóralo.
