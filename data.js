// =====================================================
// CORRUPTÓMETRO MX — BASE DE DATOS NACIONAL
// Fuentes: OSFEM, SCJN, TEPJF, ASF, SESNSP, SHCP, DOJ, DEA,
// Proceso, El Universal, Infobae, La Jornada, Milenio, y más
// Última actualización: 14 de julio de 2026
// =====================================================

const SCORING_CRITERIA = [
  {
    "id": "sentencias",
    "label": "Sentencias o procesos penales",
    "maxPoints": 25,
    "desc": "Condenas, consignaciones o procesos penales activos"
  },
  {
    "id": "fiscalizacion",
    "label": "Observaciones de fiscalización",
    "maxPoints": 20,
    "desc": "Hallazgos de OSFEM, ASF o auditorías con montos no comprobados"
  },
  {
    "id": "funcionarios",
    "label": "Funcionarios detenidos / red",
    "maxPoints": 15,
    "desc": "Colaboradores directos detenidos o red criminal documentada"
  },
  {
    "id": "deuda",
    "label": "Deuda / daño patrimonial",
    "maxPoints": 15,
    "desc": "Desvío de recursos, peculado o daño al erario documentado"
  },
  {
    "id": "denuncias",
    "label": "Denuncias documentadas",
    "maxPoints": 10,
    "desc": "Denuncias ciudadanas, periodísticas o de organismos verificadas"
  },
  {
    "id": "evasion",
    "label": "Evasión de justicia / desacato",
    "maxPoints": 10,
    "desc": "Amparos para evadir detención, fuga, desacato judicial"
  },
  {
    "id": "nepotismo",
    "label": "Nepotismo / conflicto de interés",
    "maxPoints": 5,
    "desc": "Concesiones irregulares, familiares en nómina, contratos dirigidos"
  }
];

const officials = [
  {
    "id": 101,
    "name": "Javier Duarte de Ochoa",
    "role": "Exgobernador de Veracruz (2010-2016)",
    "party": "PRI",
    "state": "Veracruz",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 25,
      "fiscalizacion": 20,
      "funcionarios": 14,
      "deuda": 15,
      "denuncias": 10,
      "evasion": 10,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Sentenciado a 9 años por asociación delictuosa y lavado de dinero. Vinculado a nuevo proceso en 2026 por desvío de $5M. Detenido en Guatemala en 2017.",
      "fiscalizacion": "ASF documentó desvíos masivos del erario veracruzano. Desaparición de recursos del sistema de salud estatal.",
      "funcionarios": "Múltiples excolaboradores detenidos y procesados. Red de corrupción sistémica en el gobierno estatal.",
      "deuda": "Daño al erario estimado en miles de millones. Desvío de recursos de programas de salud, educación e infraestructura.",
      "denuncias": "Caso ampliamente documentado por medios nacionales e internacionales. Denuncias de familiares de desaparecidos.",
      "evasion": "Prófugo durante 6 meses. Capturado en Guatemala. Jueza negó libertad anticipada en noviembre 2025 pese a cumplir 95% de condena.",
      "nepotismo": "Empresas fantasma vinculadas a su círculo. Propiedades a nombre de prestanombres."
    },
    "timeline": [
      {
        "year": "2010",
        "event": "Asume gubernatura de Veracruz"
      },
      {
        "year": "2016",
        "event": "Solicita licencia 20 días antes de terminar mandato. Se fuga."
      },
      {
        "year": "2017",
        "event": "Capturado en Guatemala. Extraditado a México."
      },
      {
        "year": "2018",
        "event": "Sentenciado a 9 años de prisión"
      },
      {
        "year": "2025",
        "event": "Jueza niega libertad anticipada"
      },
      {
        "year": "2026",
        "event": "Vinculado a nuevo proceso por desvío adicional"
      }
    ],
    "sources": [
      {
        "label": "Proceso — Captura",
        "url": "https://www.proceso.com.mx"
      },
      {
        "label": "Infobae — Sentencia",
        "url": "https://www.infobae.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 102,
    "name": "César Duarte Jáquez",
    "role": "Exgobernador de Chihuahua (2010-2016)",
    "party": "PRI",
    "state": "Chihuahua",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 23,
      "fiscalizacion": 20,
      "funcionarios": 13,
      "deuda": 15,
      "denuncias": 9,
      "evasion": 8,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Preso en el Altiplano. Acusado de lavado de dinero por más de $73M. Ficha roja de Interpol.",
      "fiscalizacion": "Red de corrupción que generó daños al erario por $6,000M según autoridades de Chihuahua.",
      "funcionarios": "Entre 50 y 80 amparos tramitados por excolaboradores para evitar detención.",
      "deuda": "Desvío estimado en $6,000 millones de pesos del erario chihuahuense.",
      "denuncias": "Documentado extensamente. Múltiples denuncias de la administración sucesora.",
      "evasion": "Prófugo con ficha roja de Interpol. Detenido en EE.UU. y extraditado.",
      "nepotismo": "Red de prestanombres y empresas fantasma documentada."
    },
    "timeline": [
      {
        "year": "2010",
        "event": "Asume gubernatura de Chihuahua"
      },
      {
        "year": "2016",
        "event": "Termina mandato. Huye del país."
      },
      {
        "year": "2020",
        "event": "Detenido en Estados Unidos"
      },
      {
        "year": "2023",
        "event": "Extraditado a México. Internado en penal del Altiplano."
      }
    ],
    "sources": [
      {
        "label": "Reforma — Detención",
        "url": "https://www.reforma.com"
      },
      {
        "label": "El Universal — Proceso",
        "url": "https://www.eluniversal.com.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 103,
    "name": "Roberto Borge Angulo",
    "role": "Exgobernador de Quintana Roo (2011-2016)",
    "party": "PRI",
    "state": "Quintana Roo",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 21,
      "fiscalizacion": 17,
      "funcionarios": 10,
      "deuda": 13,
      "denuncias": 8,
      "evasion": 8,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Detenido en Panamá en 2017. Procesado por lavado de dinero y delincuencia organizada. Absuelto de delincuencia organizada en 2026; continúa proceso bajo prisión domiciliaria.",
      "fiscalizacion": "Venta irregular de terrenos públicos de Quintana Roo a precios por debajo del mercado.",
      "funcionarios": "Red de funcionarios involucrados en operaciones inmobiliarias irregulares.",
      "deuda": "Daño patrimonial por venta de predios estatales. Operaciones con recursos de procedencia ilícita.",
      "denuncias": "Denunciado por la administración sucesora y organizaciones ciudadanas.",
      "evasion": "Prófugo. Capturado en Panamá y deportado a México.",
      "nepotismo": "Benefició a allegados con ventas de terrenos públicos a precios preferenciales."
    },
    "timeline": [
      {
        "year": "2011",
        "event": "Asume gubernatura de Quintana Roo"
      },
      {
        "year": "2017",
        "event": "Detenido en Panamá. Deportado a México."
      },
      {
        "year": "2026",
        "event": "Absuelto de delincuencia organizada. Prisión domiciliaria con brazalete."
      }
    ],
    "sources": [
      {
        "label": "La Verdad Noticias",
        "url": "https://laverdadnoticias.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 104,
    "name": "Tomás Yarrington Ruvalcaba",
    "role": "Exgobernador de Tamaulipas (1999-2005)",
    "party": "PRI",
    "state": "Tamaulipas",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 24,
      "fiscalizacion": 15,
      "funcionarios": 12,
      "deuda": 14,
      "denuncias": 10,
      "evasion": 9,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Procesado en EE.UU. por lavado de dinero y vínculos con narcotráfico. Orden de aprehensión desde 2012.",
      "fiscalizacion": "Acusaciones de recibir sobornos del crimen organizado durante su mandato.",
      "funcionarios": "Investigaciones contra red de exfuncionarios tamaulipecos.",
      "deuda": "Lavado de dinero por millones de dólares a través de propiedades en Texas.",
      "denuncias": "Caso documentado por la DEA y autoridades de EE.UU.",
      "evasion": "Prófugo durante años. Detenido en Italia en 2017.",
      "nepotismo": "Propiedades en EE.UU. a nombre de prestanombres."
    },
    "timeline": [
      {
        "year": "1999",
        "event": "Asume gubernatura de Tamaulipas"
      },
      {
        "year": "2012",
        "event": "Orden de aprehensión emitida"
      },
      {
        "year": "2017",
        "event": "Detenido en Italia"
      }
    ],
    "sources": [
      {
        "label": "Proceso — Detención",
        "url": "https://www.proceso.com.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 105,
    "name": "Eugenio Hernández Flores",
    "role": "Exgobernador de Tamaulipas (2005-2010)",
    "party": "PRI",
    "state": "Tamaulipas",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 22,
      "fiscalizacion": 14,
      "funcionarios": 10,
      "deuda": 13,
      "denuncias": 8,
      "evasion": 7,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenido en 2017. Procesado por lavado de dinero y vínculos con narcotráfico.",
      "fiscalizacion": "Señalamientos de desvío de recursos durante su administración.",
      "funcionarios": "Exfuncionarios investigados por vínculos con el crimen organizado.",
      "deuda": "Recursos de procedencia ilícita canalizados a través de empresas.",
      "denuncias": "Investigaciones de la PGR y DEA.",
      "evasion": "Mantuvo perfil bajo antes de su detención.",
      "nepotismo": "Red de prestanombres documentada."
    },
    "timeline": [
      {
        "year": "2005",
        "event": "Asume gubernatura de Tamaulipas"
      },
      {
        "year": "2017",
        "event": "Detenido por autoridades federales"
      }
    ],
    "sources": [
      {
        "label": "Milenio — Detención",
        "url": "https://www.milenio.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 106,
    "name": "Roberto Sandoval Castañeda",
    "role": "Exgobernador de Nayarit (2011-2017)",
    "party": "PRI",
    "state": "Nayarit",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 23,
      "fiscalizacion": 18,
      "funcionarios": 11,
      "deuda": 14,
      "denuncias": 9,
      "evasion": 5,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Sentenciado por falsificación de documentos. Preso en CEFERESO No. 4 desde 2021. Enfrenta cargos adicionales por lavado de dinero, enriquecimiento ilícito y asociación delictuosa.",
      "fiscalizacion": "Juicio político aprobado por desvío de $2,700M del erario nayarita.",
      "funcionarios": "Red de funcionarios involucrados en desvíos documentada.",
      "deuda": "Desvío estimado en $2,700 millones de pesos. Enriquecimiento ilícito.",
      "denuncias": "Ciudadanos documentaron en expedientes: desvío de recursos, violaciones a la Constitución estatal.",
      "evasion": "No logró evadir la justicia efectivamente.",
      "nepotismo": "Propiedades irregulares, incluida una en San Blas obtenida con documentos falsificados."
    },
    "timeline": [
      {
        "year": "2011",
        "event": "Asume gubernatura de Nayarit"
      },
      {
        "year": "2018",
        "event": "Congreso aprueba juicio político por desvío de $2,700M"
      },
      {
        "year": "2021",
        "event": "Preso en CEFERESO No. 4"
      },
      {
        "year": "2025",
        "event": "Sentenciado por falsificación de documentos"
      }
    ],
    "sources": [
      {
        "label": "El Informador — Sentencia",
        "url": "https://www.informador.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 107,
    "name": "Mario Marín Torres",
    "role": "Exgobernador de Puebla (2005-2011)",
    "party": "PRI",
    "state": "Puebla",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 22,
      "fiscalizacion": 10,
      "funcionarios": 8,
      "deuda": 8,
      "denuncias": 10,
      "evasion": 6,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Preso. Regresó al penal del Altiplano en abril 2025 tras revocación de prisión domiciliaria. Procesado por tortura contra la periodista Lydia Cacho.",
      "fiscalizacion": "Señalamientos de uso irregular de recursos públicos.",
      "funcionarios": "Caso vinculado a red de protección a Kamel Nacif (empresario).",
      "deuda": "Uso de aparato estatal para perseguir periodistas y proteger intereses privados.",
      "denuncias": "Caso Lydia Cacho ampliamente documentado nacional e internacionalmente. Grabaciones telefónicas lo implican directamente.",
      "evasion": "Prófugo antes de ser detenido. Gozó de prisión domiciliaria hasta su revocación.",
      "nepotismo": "Relación documentada con empresario Kamel Nacif para protección mutua."
    },
    "timeline": [
      {
        "year": "2005",
        "event": "Asume gubernatura de Puebla"
      },
      {
        "year": "2005",
        "event": "Caso Lydia Cacho: grabaciones lo implican en tortura a periodista"
      },
      {
        "year": "2021",
        "event": "Detenido tras años de investigación"
      },
      {
        "year": "2025",
        "event": "Regresa al penal del Altiplano tras revocación de prisión domiciliaria"
      }
    ],
    "sources": [
      {
        "label": "La Verdad Noticias",
        "url": "https://laverdadnoticias.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 108,
    "name": "Jaime Rodríguez Calderón \"El Bronco\"",
    "role": "Exgobernador de Nuevo León (2015-2021)",
    "party": "Independiente",
    "state": "Nuevo León",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 20,
      "fiscalizacion": 14,
      "funcionarios": 6,
      "deuda": 10,
      "denuncias": 8,
      "evasion": 4,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Preso en CERESO de Apodaca. Acusado de desvío de recursos públicos y lavado de dinero durante campaña presidencial 2018.",
      "fiscalizacion": "Investigado por uso de recursos públicos para financiar campaña presidencial.",
      "funcionarios": "Excolaboradores investigados por participación en irregularidades de campaña.",
      "deuda": "Desvío de recursos públicos estatales para fines electorales.",
      "denuncias": "Documentado por medios y autoridades electorales.",
      "evasion": "No evadió efectivamente la justicia.",
      "nepotismo": "Uso de estructura gubernamental para fines personales."
    },
    "timeline": [
      {
        "year": "2015",
        "event": "Gana gubernatura como candidato independiente"
      },
      {
        "year": "2018",
        "event": "Se postula a la presidencia. Irregularidades en campaña."
      },
      {
        "year": "2022",
        "event": "Detenido e ingresado a CERESO de Apodaca"
      }
    ],
    "sources": [
      {
        "label": "Semanario ZETA",
        "url": "https://zetatijuana.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 109,
    "name": "Andrés Granier Melo",
    "role": "Exgobernador de Tabasco (2007-2012)",
    "party": "PRI",
    "state": "Tabasco",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 18,
      "fiscalizacion": 17,
      "funcionarios": 7,
      "deuda": 14,
      "denuncias": 8,
      "evasion": 4,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Condenado a 10 años 10 meses por peculado. Sentencia revocada en 2019 tras 5 años y medio preso. Liberado.",
      "fiscalizacion": "Desvío de $196.9M del Seguro Popular documentado por auditorías.",
      "funcionarios": "Funcionarios de salud involucrados en desvío del Seguro Popular.",
      "deuda": "Peculado por $196.9 millones de pesos del programa Seguro Popular.",
      "denuncias": "Caso mediático: pijamas italianas, lujos en prisión documentados por medios.",
      "evasion": "No evadió la justicia pero gozó de privilegios en prisión.",
      "nepotismo": "Estilo de vida ostentoso incompatible con salario público."
    },
    "timeline": [
      {
        "year": "2007",
        "event": "Asume gubernatura de Tabasco"
      },
      {
        "year": "2013",
        "event": "Detenido por peculado"
      },
      {
        "year": "2019",
        "event": "Sentencia revocada. Liberado tras 5.5 años preso."
      }
    ],
    "sources": [
      {
        "label": "Infobae — Caso",
        "url": "https://www.infobae.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 110,
    "name": "Rodrigo Medina de la Cruz",
    "role": "Exgobernador de Nuevo León (2009-2015)",
    "party": "PRI",
    "state": "Nuevo León",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 14,
      "fiscalizacion": 14,
      "funcionarios": 5,
      "deuda": 11,
      "denuncias": 7,
      "evasion": 5,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Vinculado a proceso por ejercicio indebido de funciones públicas. Enfrentó proceso en libertad. Exonerado en 2018.",
      "fiscalizacion": "Presuntas irregularidades en incentivos a la armadora KIA Motors.",
      "funcionarios": "Investigaciones contra exfuncionarios de su administración.",
      "deuda": "Peculado y daño patrimonial señalados. Preso en Topo Chico brevemente.",
      "denuncias": "Caso KIA Motors documentado por medios nacionales.",
      "evasion": "Amparos utilizados para enfrentar proceso en libertad.",
      "nepotismo": "Incentivos fiscales cuestionados a empresa automotriz."
    },
    "timeline": [
      {
        "year": "2009",
        "event": "Asume gubernatura de Nuevo León"
      },
      {
        "year": "2016",
        "event": "Vinculado a proceso por caso KIA"
      },
      {
        "year": "2018",
        "event": "Exonerado tras proceso"
      }
    ],
    "sources": [
      {
        "label": "Alcaldes de México",
        "url": "https://www.alcaldesdemexico.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 111,
    "name": "Mario Villanueva Madrid",
    "role": "Exgobernador de Quintana Roo (1993-1999)",
    "party": "PRI",
    "state": "Quintana Roo",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 25,
      "fiscalizacion": 12,
      "funcionarios": 8,
      "deuda": 12,
      "denuncias": 9,
      "evasion": 7,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Sentenciado en 2020 por delitos contra la salud. 19 años en prisión. Actualmente en arresto domiciliario desde 2020 por edad y condiciones médicas.",
      "fiscalizacion": "Procesado por vínculos con narcotráfico durante su mandato.",
      "funcionarios": "Colaboradores involucrados en red de protección al narcotráfico.",
      "deuda": "Recursos de procedencia ilícita por protección a cárteles.",
      "denuncias": "Investigado por autoridades mexicanas y estadounidenses.",
      "evasion": "Prófugo antes de su captura. 19 años preso.",
      "nepotismo": "Red de protección al crimen organizado desde la gubernatura."
    },
    "timeline": [
      {
        "year": "1993",
        "event": "Asume gubernatura de Quintana Roo"
      },
      {
        "year": "2001",
        "event": "Detenido"
      },
      {
        "year": "2020",
        "event": "Arresto domiciliario tras 19 años preso"
      }
    ],
    "sources": [
      {
        "label": "Semanario ZETA",
        "url": "https://zetatijuana.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 112,
    "name": "Rubén Rocha Moya",
    "role": "Gobernador de Sinaloa (2021-presente)",
    "party": "MORENA",
    "state": "Sinaloa",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 10,
      "fiscalizacion": 8,
      "funcionarios": 5,
      "deuda": 5,
      "denuncias": 10,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Acusado por EE.UU. de vínculos con narcotráfico. FGR inició investigación. Sin sentencia ni orden de aprehensión hasta la fecha.",
      "fiscalizacion": "Bajo investigación. Sin hallazgos formales publicados aún.",
      "funcionarios": "Crisis de seguridad en Sinaloa con enfrentamientos entre facciones del Cártel de Sinaloa.",
      "deuda": "Sin documentación de daño patrimonial directo hasta ahora.",
      "denuncias": "Acusación de EE.UU. con alto impacto mediático. Investigación de FGR abierta.",
      "evasion": "Defiende su inocencia. No ha evadido proceso.",
      "nepotismo": "Señalamientos de cercanía con figuras del crimen organizado."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Sinaloa"
      },
      {
        "year": "2024",
        "event": "Crisis de seguridad en Culiacán tras captura de Zambada"
      },
      {
        "year": "2026",
        "event": "EE.UU. lo acusa de vínculos con narcotráfico. FGR investiga."
      }
    ],
    "sources": [
      {
        "label": "El Siglo de Torreón",
        "url": "https://www.elsiglodetorreon.com.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 113,
    "name": "Ricardo Gallardo Cardona",
    "role": "Gobernador de San Luis Potosí (2021-presente)",
    "party": "PVEM",
    "state": "San Luis Potosí",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 12,
      "fiscalizacion": 10,
      "funcionarios": 5,
      "deuda": 6,
      "denuncias": 8,
      "evasion": 4,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Estuvo preso en 2015. Antecedentes penales previos a la gubernatura. Bajo escrutinio por presuntas irregularidades.",
      "fiscalizacion": "Señalamientos de manejo opaco de recursos estatales.",
      "funcionarios": "Investigaciones contra miembros de su administración.",
      "deuda": "Cuestionamientos sobre licitaciones y contratos.",
      "denuncias": "Medios nacionales y organizaciones civiles han documentado señalamientos.",
      "evasion": "Antecedentes penales pero logró postularse y ganar gubernatura.",
      "nepotismo": "Señalamientos de concentración de poder y contratos dirigidos."
    },
    "timeline": [
      {
        "year": "2015",
        "event": "Estuvo preso por cargos penales"
      },
      {
        "year": "2021",
        "event": "Gana gubernatura por el PVEM"
      }
    ],
    "sources": [
      {
        "label": "Polls MX — Análisis",
        "url": "https://polls.politico.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 114,
    "name": "Luis Armando Reynoso Femat",
    "role": "Exgobernador de Aguascalientes (2004-2010)",
    "party": "PAN",
    "state": "Aguascalientes",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 16,
      "fiscalizacion": 14,
      "funcionarios": 4,
      "deuda": 9,
      "denuncias": 6,
      "evasion": 4,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Declarado culpable de ejercicio indebido del servicio público y peculado por $13.8M. Sentenciado a 2 años 9 meses (pagó pena en libertad por ser menor a 5 años).",
      "fiscalizacion": "Fingió adquisición de tomógrafo computarizado para el Instituto de Salud estatal.",
      "funcionarios": "Funcionarios de salud involucrados en compra ficticia.",
      "deuda": "Peculado por $13.8M del erario de Aguascalientes.",
      "denuncias": "Documentado por medios y autoridades judiciales.",
      "evasion": "Amparos para enfrentar proceso. Pena pagada en libertad.",
      "nepotismo": "Adquisición ficticia de equipo médico."
    },
    "timeline": [
      {
        "year": "2004",
        "event": "Asume gubernatura de Aguascalientes"
      },
      {
        "year": "2019",
        "event": "Declarado culpable por peculado y ejercicio indebido"
      }
    ],
    "sources": [
      {
        "label": "Semanario ZETA",
        "url": "https://zetatijuana.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 115,
    "name": "Flavino Ríos Alvarado",
    "role": "Exgobernador interino de Veracruz (2016)",
    "party": "PRI",
    "state": "Veracruz",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 18,
      "fiscalizacion": 8,
      "funcionarios": 4,
      "deuda": 6,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Procesado por encubrimiento. Facilitó la fuga de Javier Duarte al concederle licencia como gobernador.",
      "fiscalizacion": "Señalado por facilitar la impunidad de su antecesor.",
      "funcionarios": "Complicidad documentada con la red de Duarte.",
      "deuda": "Complicidad en encubrimiento, no desvío directo documentado.",
      "denuncias": "Medios documentaron su papel en facilitar la fuga de Duarte.",
      "evasion": "Enfrentó proceso judicial.",
      "nepotismo": "Lealtad política sobre legalidad al facilitar licencia de Duarte."
    },
    "timeline": [
      {
        "year": "2016",
        "event": "Asume interinato de Veracruz. Facilita licencia a Duarte."
      },
      {
        "year": "2017",
        "event": "Procesado por encubrimiento"
      }
    ],
    "sources": [
      {
        "label": "Alcaldes de México",
        "url": "https://www.alcaldesdemexico.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 116,
    "name": "Jorge Torres López",
    "role": "Exgobernador interino de Coahuila (2011)",
    "party": "PRI",
    "state": "Coahuila",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 20,
      "fiscalizacion": 14,
      "funcionarios": 6,
      "deuda": 12,
      "denuncias": 8,
      "evasion": 10,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Acusado por la DEA de conspiración para lavado de dinero. En la lista de \"fugitivos más buscados\" desde 2016.",
      "fiscalizacion": "Depositó fondos saqueados del erario de Coahuila en paraísos fiscales y bancos de Texas.",
      "funcionarios": "Red vinculada al exgobernador Humberto Moreira.",
      "deuda": "Saqueo del erario coahuilense canalizado a cuentas en el extranjero.",
      "denuncias": "Investigaciones de la DEA y autoridades de EE.UU.",
      "evasion": "PRÓFUGO. En lista de fugitivos más buscados de la DEA desde 2016.",
      "nepotismo": "Red de lavado de dinero transnacional."
    },
    "timeline": [
      {
        "year": "2011",
        "event": "Gobernador interino de Coahuila en sustitución de Moreira"
      },
      {
        "year": "2016",
        "event": "DEA lo declara fugitivo. Paradero desconocido."
      }
    ],
    "sources": [
      {
        "label": "Proceso — DEA",
        "url": "https://www.proceso.com.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 201,
    "name": "María Elena Martínez Robles",
    "role": "Expresidenta Municipal de Amanalco, EdoMex",
    "party": "MC/MORENA",
    "state": "Estado de México",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 25,
      "fiscalizacion": 8,
      "funcionarios": 10,
      "deuda": 5,
      "denuncias": 9,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Sentenciada a 70 AÑOS de prisión por homicidio calificado. Ordenó asesinato del síndico municipal y su chofer en enero 2023.",
      "fiscalizacion": "Señalamientos de uso irregular de recursos municipales.",
      "funcionarios": "Coordinó con integrantes de La Familia Michoacana para mantener control político.",
      "deuda": "No documentado específicamente.",
      "denuncias": "Caso documentado por FGJEM. Operación Enjambre.",
      "evasion": "Detenida en noviembre 2024.",
      "nepotismo": "Control político absoluto del municipio mediante intimidación."
    },
    "timeline": [
      {
        "year": "2022",
        "event": "Asume presidencia municipal. Se afilia a Morena."
      },
      {
        "year": "2023",
        "event": "Ordena asesinato del síndico municipal y chofer"
      },
      {
        "year": "2024",
        "event": "Detenida en Operación Enjambre"
      },
      {
        "year": "2025",
        "event": "Sentenciada a 70 años de prisión"
      }
    ],
    "sources": [
      {
        "label": "El Financiero — Enjambre",
        "url": "https://www.elfinanciero.com.mx"
      },
      {
        "label": "Telediario — Sentencia",
        "url": "https://www.telediario.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 202,
    "name": "Diego Rivera Navarro",
    "role": "Presidente Municipal de Tequila, Jalisco",
    "party": "MC",
    "state": "Jalisco",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 22,
      "fiscalizacion": 12,
      "funcionarios": 14,
      "deuda": 8,
      "denuncias": 9,
      "evasion": 3,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Detenido el 5 de febrero 2026. Prisión preventiva oficiosa en Almoloya de Juárez por extorsión y vínculos con CJNG.",
      "fiscalizacion": "Esquema de extorsión sistemática desde oficinas gubernamentales.",
      "funcionarios": "Detenido junto con director de Padrón y Licencias, Tesorería, Catastro y Obras Públicas. Todos vinculados a esquema de extorsión para el CJNG.",
      "deuda": "Recursos obtenidos mediante extorsión entregados al CJNG a través de intermediario \"El Rey Mago\".",
      "denuncias": "Denuncias de empresarios cerveceros y tequileros extorsionados.",
      "evasion": "No logró evadir detención.",
      "nepotismo": "Funcionarios de primer círculo como operadores del esquema criminal."
    },
    "timeline": [
      {
        "year": "2024",
        "event": "Secuestro de candidatos opositores durante campaña electoral"
      },
      {
        "year": "2025",
        "event": "Asume presidencia municipal de Tequila"
      },
      {
        "year": "2026",
        "event": "Detenido en Operación Enjambre junto con 4 funcionarios"
      }
    ],
    "sources": [
      {
        "label": "Infobae — Enjambre Jalisco",
        "url": "https://www.infobae.com"
      },
      {
        "label": "SinEmbargo — Detención",
        "url": "https://www.sinembargo.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 203,
    "name": "Agustín Toledano Amaro",
    "role": "Presidente Municipal de Atlatlahucan, Morelos",
    "party": "PAN",
    "state": "Morelos",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 18,
      "fiscalizacion": 8,
      "funcionarios": 8,
      "deuda": 6,
      "denuncias": 9,
      "evasion": 4,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenido el 20 de mayo 2026 por presuntos delitos de extorsión y delincuencia organizada.",
      "fiscalizacion": "Investigación por desvío de recursos municipales hacia red criminal.",
      "funcionarios": "Aparece en video con presuntos integrantes del crimen organizado.",
      "deuda": "Financiamiento irregular de campañas electorales señalado.",
      "denuncias": "Denuncias ciudadanas por extorsión. Video lo vincula con criminales.",
      "evasion": "Promovió amparo contra orden de aprehensión (desechado parcialmente).",
      "nepotismo": "Vínculos con exgobernador Marco Adame Castillo."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Asume presidencia municipal por coalición PAN-PRI-PRD"
      },
      {
        "year": "2025",
        "event": "Aparece en video con presuntos criminales"
      },
      {
        "year": "2026",
        "event": "Detenido en Operación Enjambre"
      }
    ],
    "sources": [
      {
        "label": "Expansión — Morelos",
        "url": "https://politica.expansion.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 204,
    "name": "Irving Sánchez Zavala",
    "role": "Exalcalde de Yecapixtla, Morelos",
    "party": "MORENA",
    "state": "Morelos",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 17,
      "fiscalizacion": 7,
      "funcionarios": 6,
      "deuda": 6,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenido en mayo 2026. Acusado de formar parte de estructura política que permitió financiamiento criminal de campañas.",
      "fiscalizacion": "Investigación por vínculos con red de corrupción.",
      "funcionarios": "Parte de red de funcionarios detenidos en Morelos.",
      "deuda": "Presunto financiamiento de campaña por el crimen organizado.",
      "denuncias": "FGR reveló vínculos con homicidio de expresidentes municipales y financiamiento criminal.",
      "evasion": "No evadió la justicia.",
      "nepotismo": "Red política-criminal en la región."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "Detenido en Operación Enjambre en Morelos"
      }
    ],
    "sources": [
      {
        "label": "Expansión — Detención",
        "url": "https://politica.expansion.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 205,
    "name": "Jesús Corona Damián",
    "role": "Alcalde de Cuautla, Morelos",
    "party": "MORENA",
    "state": "Morelos",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 19,
      "fiscalizacion": 8,
      "funcionarios": 10,
      "deuda": 7,
      "denuncias": 8,
      "evasion": 8,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenido el 30 de mayo 2026 por delincuencia organizada y extorsión.",
      "fiscalizacion": "Red de corrupción que operaba desde el ayuntamiento de Cuautla.",
      "funcionarios": "Detenido junto con tesorero (Jonathan Espinoza), oficial mayor (Pablo Portillo) y secretario municipal (Horacio).",
      "deuda": "Desvío de recursos públicos y esquema de extorsión.",
      "denuncias": "Denuncias de comerciantes, transportistas y familias extorsionadas.",
      "evasion": "PRÓFUGO inicialmente. Orden de aprehensión pendiente antes de captura.",
      "nepotismo": "Operadores administrativos como parte de la red criminal."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Asume alcaldía de Cuautla"
      },
      {
        "year": "2026",
        "event": "Orden de aprehensión. Prófugo brevemente. Detenido el 30 de mayo."
      }
    ],
    "sources": [
      {
        "label": "Infobae — Enjambre Morelos",
        "url": "https://www.infobae.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 206,
    "name": "Giovanni González Vieyra",
    "role": "Alcalde de Tlachichuca, Puebla",
    "party": "MORENA",
    "state": "Puebla",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 17,
      "fiscalizacion": 6,
      "funcionarios": 8,
      "deuda": 5,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Detenido el 7 de marzo 2025. Procesado por vínculos con organizaciones delictivas.",
      "fiscalizacion": "Bajo investigación federal.",
      "funcionarios": "Detenido junto con su hermano Uruviel (alcalde de Quimixtlán) y Ramiro (alcalde de San Nicolás Buenos Aires).",
      "deuda": "Red familiar controlando tres municipios señalada.",
      "denuncias": "Investigación federal por delincuencia organizada.",
      "evasion": "No evadió detención.",
      "nepotismo": "TRES HERMANOS como alcaldes simultáneos en Puebla. Red familiar de control municipal."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Detenido junto con hermanos alcaldes en Operación Enjambre"
      }
    ],
    "sources": [
      {
        "label": "Infobae — Hermanos González",
        "url": "https://www.infobae.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 207,
    "name": "Pedro Luis \"Wicho\"",
    "role": "Alcalde electo de Santo Tomás de los Plátanos, EdoMex",
    "party": "Sin dato",
    "state": "Estado de México",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 18,
      "fiscalizacion": 6,
      "funcionarios": 8,
      "deuda": 5,
      "denuncias": 8,
      "evasion": 9,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Detenido en febrero 2025 en Valle de Bravo. Procesado por extorsión.",
      "fiscalizacion": "Uso de archivos municipales y padrones de programas sociales para intimidación.",
      "funcionarios": "Su esposa María del Rosario (expresidenta del mismo municipio) también detenida.",
      "deuda": "No documentado específicamente.",
      "denuncias": "Documentado por FGJEM.",
      "evasion": "HUYÓ el día de su toma de protesta cuando policías intentaron cumplir orden de aprehensión. Un grupo de personas agredió a los agentes. Capturado 2 meses después.",
      "nepotismo": "Matrimonio controlando la presidencia municipal en periodos consecutivos."
    },
    "timeline": [
      {
        "year": "2024",
        "event": "Gana elección de Santo Tomás de los Plátanos"
      },
      {
        "year": "2024",
        "event": "Huye el día de su toma de protesta al intentar ser detenido"
      },
      {
        "year": "2025",
        "event": "Capturado en Valle de Bravo"
      }
    ],
    "sources": [
      {
        "label": "SinEmbargo — Enjambre",
        "url": "https://www.sinembargo.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 208,
    "name": "Ari Patrick Mendiola Mondragón",
    "role": "Exalcalde de Almoloya de Alquisiras, EdoMex",
    "party": "Sin dato",
    "state": "Estado de México",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 16,
      "fiscalizacion": 7,
      "funcionarios": 5,
      "deuda": 6,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Vinculado a proceso por extorsión y acaparamiento de granos.",
      "fiscalizacion": "Aseguramiento de 100 toneladas de granos.",
      "funcionarios": "Investigación por red de extorsión municipal.",
      "deuda": "Acaparamiento de granos como mecanismo de control económico.",
      "denuncias": "Documentado por autoridades del EdoMex.",
      "evasion": "No evadió la justicia.",
      "nepotismo": "Control económico del municipio mediante acaparamiento."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Detenido en Operación Enjambre. 100 toneladas de granos aseguradas."
      }
    ],
    "sources": [
      {
        "label": "Telediario — EdoMex",
        "url": "https://www.telediario.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 1,
    "name": "David Sánchez Isidoro",
    "role": "Presidente Municipal de Coacalco (4 periodos)",
    "party": "PRI",
    "state": "Estado de México",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 22,
      "fiscalizacion": 18,
      "funcionarios": 14,
      "deuda": 13,
      "denuncias": 9,
      "evasion": 9,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Condenado a 3 años 4 meses por desacato (2021). SCJN ordenó consignación penal en 2018. Proceso penal por concesión irregular del Deportivo Villa de las Flores.",
      "fiscalizacion": "OSFEM detectó 46 observaciones por $95.7M en ejercicio 2023. Obras sin comprobación, adjudicaciones indebidas, traspasos no autorizados.",
      "funcionarios": "Secretario particular (Alan Escalante) detenido por cohecho. Coordinador de Licencias detenido. Subdirector de Desarrollo Urbano detenido por extorsión.",
      "deuda": "Contrató $303M en deuda en 2013. Deuda total superó $1,000M. Endeudamiento >104%.",
      "denuncias": "Corrupción policiaca documentada. El Heraldo reportó corrupción generalizada (2025). Radar federal por Operación Enjambre.",
      "evasion": "Se amparó contra orden de detención de la SCJN. Desacató sentencia en más de 12 ocasiones. Ayuntamiento simuló amenazas de bomba para evadir embargos.",
      "nepotismo": "Concesionó Deportivo por 25 años. Contratos en Tesorería sin pasar por adquisiciones. Nómina especial con personal de despacho externo."
    },
    "timeline": [
      {
        "year": "2009",
        "event": "Primer periodo como alcalde"
      },
      {
        "year": "2013",
        "event": "Segundo periodo. Contrata $303M en deuda."
      },
      {
        "year": "2015",
        "event": "Concesiona Deportivo Villa de las Flores por 25 años"
      },
      {
        "year": "2018",
        "event": "SCJN ordena consignación penal"
      },
      {
        "year": "2021",
        "event": "Condenado a 3 años 4 meses. TEPJF revoca y restituye triunfo."
      },
      {
        "year": "2023",
        "event": "OSFEM detecta $95.7M en anomalías"
      },
      {
        "year": "2025",
        "event": "Cuarto trienio. Radar federal Operación Enjambre."
      }
    ],
    "sources": [
      {
        "label": "SCJN — Consignación",
        "url": "https://www.proceso.com.mx/nacional/2018/1/16/la-corte-destituye-consigna-alcaldes-cabildos-del-edomex-de-puebla-198309.html"
      },
      {
        "label": "OSFEM — Auditoría 2023",
        "url": "https://www.osfem.gob.mx"
      },
      {
        "label": "TEPJF — Sentencia",
        "url": "https://www.te.gob.mx/front3/bulletins/detail/4393/0"
      },
      {
        "label": "Heraldo — Radar federal 2026",
        "url": "https://heraldodemexico.com.mx/opinion/2026/2/9/coacalco-en-el-radar-del-gobierno-federal-767261.html"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 2,
    "name": "Roberto Ruiz Moronatti",
    "role": "Expresidente Municipal de Coacalco / Exdiputado Federal",
    "party": "PRI",
    "state": "Estado de México",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 16,
      "funcionarios": 3,
      "deuda": 15,
      "denuncias": 6,
      "evasion": 7,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Sin sentencias penales directas confirmadas.",
      "fiscalizacion": "OSFEM reportó pasivo de $640.7M. Endeudamiento 104.1%. Gastos financieros = 33% de ingresos.",
      "funcionarios": "No se documentaron detenciones directas.",
      "deuda": "Deuda per cápita: de $937 a $3,394. Tardarían 50 años en pagar.",
      "denuncias": "CONADE contradijo versión sobre devolución de $9.5M para estadio nunca construido.",
      "evasion": "Dejó alcaldía para buscar diputación federal con fuero.",
      "nepotismo": "No documentado con fuentes verificables."
    },
    "timeline": [
      {
        "year": "2009",
        "event": "Asume presidencia municipal de Coacalco"
      },
      {
        "year": "2012",
        "event": "Deja alcaldía. OSFEM reporta pasivo de $640.7M. Electo diputado federal."
      }
    ],
    "sources": [
      {
        "label": "OSFEM — Cuenta Pública 2012",
        "url": "https://www.osfem.gob.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 3,
    "name": "Erwin Castelán Enríquez",
    "role": "Expresidente Municipal de Coacalco (2016-2018)",
    "party": "PRI",
    "state": "Estado de México",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 20,
      "fiscalizacion": 12,
      "funcionarios": 5,
      "deuda": 10,
      "denuncias": 6,
      "evasion": 5,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "SCJN ordenó destitución y consignación penal (enero 2018). Pena de 5-10 años.",
      "fiscalizacion": "Heredó y no resolvió deuda >$800M en laudos.",
      "funcionarios": "Cabildo completo destituido por la SCJN.",
      "deuda": "Laudos laborales y administrativos por >$800M sin resolver.",
      "denuncias": "Empresarios denunciaron maniobras para evadir embargos (amenazas de bomba simuladas).",
      "evasion": "Desacató sentencia de amparo reiteradamente.",
      "nepotismo": "No documentado."
    },
    "timeline": [
      {
        "year": "2016",
        "event": "Asume presidencia municipal"
      },
      {
        "year": "2018",
        "event": "SCJN destituye cabildo completo y ordena consignación"
      }
    ],
    "sources": [
      {
        "label": "Proceso — SCJN",
        "url": "https://www.proceso.com.mx/nacional/2018/1/16/la-corte-destituye-consigna-alcaldes-cabildos-del-edomex-de-puebla-198309.html"
      },
      {
        "label": "El Universal — Adeudos",
        "url": "https://www.eluniversal.com.mx/metropoli/edomex/empresarios-acusan-adeudo-de-coacalco/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 301,
    "name": "Genaro García Luna",
    "role": "Exsecretario de Seguridad Pública Federal (2006-2012)",
    "party": "PAN",
    "state": "Federal",
    "level": "federal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 25,
      "fiscalizacion": 18,
      "funcionarios": 15,
      "deuda": 15,
      "denuncias": 10,
      "evasion": 5,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sentenciado a 38 años y 8 meses de prisión en EE.UU. (octubre 2024). Culpable de empresa criminal continua, conspiración para importar cocaína y declaraciones falsas. Multa de $2M USD.",
      "fiscalizacion": "Aceptó millones de dólares en sobornos del Cártel de Sinaloa. Facilitó importación de más de un millón de kg de estupefacientes a EE.UU.",
      "funcionarios": "Red de protección policial al Cártel de Sinaloa desde la Policía Federal. Múltiples mandos involucrados.",
      "deuda": "Sobornos millonarios del Cártel de Sinaloa. Propiedades y cuentas en EE.UU. Mintió en solicitud de naturalización.",
      "denuncias": "Más de 20 testigos cooperantes (exjefes de cárteles) declararon en su contra. Caso documentado por DOJ, DEA, CNN, Univision.",
      "evasion": "Intentó naturalizarse estadounidense mintiendo sobre antecedentes. Detenido en Texas en 2019.",
      "nepotismo": "Filtró información confidencial al Cártel. Utilizó la Policía Federal para atacar rivales del Cártel de Sinaloa."
    },
    "timeline": [
      {
        "year": "2001",
        "event": "Director de la Agencia Federal de Investigación (AFI)"
      },
      {
        "year": "2006",
        "event": "Secretario de Seguridad Pública bajo Felipe Calderón"
      },
      {
        "year": "2012",
        "event": "Termina cargo. Se muda a EE.UU."
      },
      {
        "year": "2019",
        "event": "Detenido en Texas por la DEA"
      },
      {
        "year": "2023",
        "event": "Declarado culpable por jurado en Brooklyn"
      },
      {
        "year": "2024",
        "event": "Sentenciado a 38 años y 8 meses de prisión"
      }
    ],
    "sources": [
      {
        "label": "DOJ — Sentencia oficial",
        "url": "https://www.justice.gov/es/usao-edny/pr/ex-secretario-de-seguridad-publica-mexicana-genaro-garcia-luna-condenado-mas-de-38"
      },
      {
        "label": "CNN — Condena",
        "url": "https://cnnespanol.cnn.com/2024/10/16/garcia-luna-sentencia-38-orix/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 302,
    "name": "Emilio Lozoya Austin",
    "role": "Exdirector de Pemex (2012-2016)",
    "party": "PRI",
    "state": "Federal",
    "level": "federal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 20,
      "fiscalizacion": 20,
      "funcionarios": 12,
      "deuda": 15,
      "denuncias": 10,
      "evasion": 7,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Vinculado a proceso por lavado de dinero, asociación delictuosa y cohecho (caso Odebrecht). Proceso penal abierto por caso Agronitrogenados. SCJN dejó firme sentencia por daño moral (marzo 2026).",
      "fiscalizacion": "Caso Odebrecht: recibió $10.5M USD en sobornos de la constructora brasileña. Caso Agronitrogenados: compra de planta de fertilizantes por $275M USD (planta inoperante 14 años, sobreprecio masivo).",
      "funcionarios": "Su hermana Gilda Lozoya detenida. René Gavira (caso Segalmex) vinculado. Red de operadores financieros.",
      "deuda": "Daño patrimonial a Pemex por cientos de millones de dólares. Residencia de $51M MXN decomisada por FGR (mayo 2026).",
      "denuncias": "Caso emblema de corrupción del sexenio Peña Nieto. Documentado por ASF, FGR, TOJIL, medios internacionales.",
      "evasion": "Prófugo. Detenido en Málaga, España (2020). Extraditado. Buscó criterio de oportunidad como testigo colaborador. Prisión domiciliaria desde 2024.",
      "nepotismo": "Propiedades familiares adquiridas con recursos ilícitos. Operaciones a través de familiares y prestanombres."
    },
    "timeline": [
      {
        "year": "2012",
        "event": "Nombrado director de Pemex por Peña Nieto"
      },
      {
        "year": "2014",
        "event": "Compra de Agronitrogenados por $275M USD a sobreprecio"
      },
      {
        "year": "2017",
        "event": "Caso Odebrecht estalla internacionalmente"
      },
      {
        "year": "2020",
        "event": "Detenido en Málaga, España. Extraditado a México."
      },
      {
        "year": "2021",
        "event": "Ingresado a Reclusorio Norte por riesgo de fuga"
      },
      {
        "year": "2024",
        "event": "Prisión domiciliaria con brazalete electrónico"
      },
      {
        "year": "2026",
        "event": "SCJN ratifica sentencia. FGR decomisa residencia de $51M."
      }
    ],
    "sources": [
      {
        "label": "La Jornada — SCJN",
        "url": "https://www.jornada.com.mx/noticia/2026/03/04/politica/scjn-deja-firme-primera-sentencia-contra-lozoya-por-acusaciones-en-caso-odebrecht"
      },
      {
        "label": "Infobae — Decomiso residencia",
        "url": "https://www.infobae.com/mexico/2026/05/09/caso-lozoya-fgr-logra-quitarle-residencia-de-51-millones-de-pesos-en-la-cdmx-al-exdirector-de-pemex/"
      },
      {
        "label": "TOJIL — Seguimiento",
        "url": "https://tojil.org/en/emilio-lozoya-y-el-caso-odebrecht/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 303,
    "name": "Ignacio Ovalle Fernández",
    "role": "Exdirector de Segalmex (2019-2022)",
    "party": "MORENA",
    "state": "Federal",
    "level": "federal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 20,
      "funcionarios": 14,
      "deuda": 15,
      "denuncias": 10,
      "evasion": 8,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "SIN INVESTIGACIÓN PENAL NI ADMINISTRATIVA a pesar de dirigir Segalmex durante el desfalco. 26 personas vinculadas a proceso pero Ovalle NO ha sido imputado.",
      "fiscalizacion": "ASF detectó desvío de $15,000M. Desfalco más grande del sexenio AMLO. Pagos a empresas fantasma, faltantes de granos, contratos sin entrega de bienes, certificados bursátiles por $700M sin autorización.",
      "funcionarios": "26 personas vinculadas a proceso (9 servidores públicos, 17 particulares). 47 órdenes de aprehensión. René Gavira (director de Finanzas) con 7 imputaciones por más de $2,639M.",
      "deuda": "Desfalco al erario por entre $9,500M y $15,000M según diferentes cálculos oficiales. AMLO reconoció que fue \"lo más doloroso\" de su gobierno.",
      "denuncias": "Documentado por Mexicanos Contra la Corrupción, ASF, Reforma, El Universal. AMLO lo exculpó públicamente.",
      "evasion": "No fue procesado. Fue PREMIADO con otro cargo (INAFED). SCJN determinó que peculado prescribe, lo que podría blindarlo permanentemente.",
      "nepotismo": "Recomendó funcionarios \"priistas de malas mañas\" según AMLO. Denominador común: también dirigió Conasupo en los 90 cuando hubo desfalco de $18,953M."
    },
    "timeline": [
      {
        "year": "1988",
        "event": "Director de Conasupo. Desfalco de 1.6 billones de viejos pesos."
      },
      {
        "year": "2019",
        "event": "Nombrado director de Segalmex por AMLO"
      },
      {
        "year": "2020",
        "event": "ASF detecta irregularidades por $15,000M"
      },
      {
        "year": "2022",
        "event": "Relevado de Segalmex. Enviado al INAFED como \"premio\"."
      },
      {
        "year": "2023",
        "event": "22 órdenes de aprehensión. Ovalle NO incluido."
      },
      {
        "year": "2026",
        "event": "SCJN determina que peculado prescribe. Ovalle deja INAFED."
      }
    ],
    "sources": [
      {
        "label": "El Universal — Impunidad",
        "url": "https://www.eluniversal.com.mx/nacion/ovalle-desaparece-del-gobierno-como-los-15-mil-mdp-de-segalmex/"
      },
      {
        "label": "Grupo Animal — Sin investigación",
        "url": "https://grupoanimal.mx/politica/segalmex-exdirector-ignacio-ovalle-sin-investigacion-desvios"
      },
      {
        "label": "Meganoticias — Saqueo impune",
        "url": "https://www.meganoticias.mx/cdmx/noticia/segalmex-el-saqueo-impune/740624"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 304,
    "name": "Rosario Robles Berlanga",
    "role": "Exsecretaria de Desarrollo Social y SEDATU (2012-2018)",
    "party": "PRI",
    "state": "Federal",
    "level": "federal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 18,
      "fiscalizacion": 19,
      "funcionarios": 10,
      "deuda": 14,
      "denuncias": 9,
      "evasion": 4,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Procesada por ejercicio indebido del servicio público (Estafa Maestra). Presa en Santa Martha Acatitla (2019-2022). Criterio de oportunidad como testigo colaborador.",
      "fiscalizacion": "Estafa Maestra: $7,670M desviados a través de 11 dependencias y universidades públicas que subcontrataron empresas fantasma para servicios nunca realizados.",
      "funcionarios": "Red de funcionarios de Sedesol y SEDATU involucrados en la triangulación de recursos.",
      "deuda": "Daño al erario de $7,670M del esquema Estafa Maestra.",
      "denuncias": "Investigación periodística de Animal Político y MCCI. Documentado por ASF.",
      "evasion": "Se entregó voluntariamente. Negoció criterio de oportunidad.",
      "nepotismo": "Red de universidades como intermediarias para canalizar recursos a empresas fantasma."
    },
    "timeline": [
      {
        "year": "2012",
        "event": "Secretaria de Desarrollo Social bajo Peña Nieto"
      },
      {
        "year": "2015",
        "event": "Titular de SEDATU"
      },
      {
        "year": "2019",
        "event": "Detenida por Estafa Maestra. Presa en Santa Martha."
      },
      {
        "year": "2022",
        "event": "Liberada. Criterio de oportunidad como testigo."
      }
    ],
    "sources": [
      {
        "label": "Animal Político — Estafa Maestra",
        "url": "https://www.animalpolitico.com/estafa-maestra/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 117,
    "name": "Guillermo Padrés Elías",
    "role": "Exgobernador de Sonora (2009-2015)",
    "party": "PAN",
    "state": "Sonora",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 17,
      "fiscalizacion": 15,
      "funcionarios": 7,
      "deuda": 12,
      "denuncias": 8,
      "evasion": 5,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Procesado por lavado de dinero y defraudación fiscal. Preso en el Reclusorio Norte.",
      "fiscalizacion": "Señalamientos de desvío de recursos del gobierno de Sonora.",
      "funcionarios": "Excolaboradores investigados por irregularidades financieras.",
      "deuda": "Acumulación de propiedades y riqueza inexplicable. Defraudación fiscal documentada.",
      "denuncias": "Documentado por medios nacionales y la administración sucesora.",
      "evasion": "Enfrentó proceso pero estuvo preso.",
      "nepotismo": "Propiedades a nombre de familiares y prestanombres."
    },
    "timeline": [
      {
        "year": "2009",
        "event": "Asume gubernatura de Sonora"
      },
      {
        "year": "2016",
        "event": "Detenido por lavado de dinero y defraudación fiscal"
      }
    ],
    "sources": [
      {
        "label": "Proceso",
        "url": "https://www.proceso.com.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 118,
    "name": "Humberto Moreira Valdés",
    "role": "Exgobernador de Coahuila (2005-2011) / Expresidente del PRI",
    "party": "PRI",
    "state": "Coahuila",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 14,
      "fiscalizacion": 20,
      "funcionarios": 10,
      "deuda": 15,
      "denuncias": 10,
      "evasion": 8,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Detenido brevemente en España en 2016 por lavado de dinero. Liberado. No ha sido procesado en México de forma efectiva.",
      "fiscalizacion": "Megadeuda de Coahuila: endeudó al estado en más de $36,000M de pesos de forma irregular, falsificando documentos y sin aprobación del Congreso.",
      "funcionarios": "Su hermano Rubén Moreira asumió la gubernatura. Jorge Torres López (sustituto) prófugo de la DEA. Red familiar y política.",
      "deuda": "Megadeuda de $36,000M que hipotecó a Coahuila por décadas. Fondos canalizados a paraísos fiscales y bancos en Texas.",
      "denuncias": "Caso emblemático documentado por Proceso, NYT, medios internacionales. Investigaciones de la DEA.",
      "evasion": "Detenido en España y liberado. No ha enfrentado justicia efectiva en México.",
      "nepotismo": "Presidente nacional del PRI. Su hermano lo sucedió como gobernador. Red familiar de control estatal."
    },
    "timeline": [
      {
        "year": "2005",
        "event": "Asume gubernatura de Coahuila"
      },
      {
        "year": "2011",
        "event": "Presidente nacional del PRI. Estalla escándalo de megadeuda."
      },
      {
        "year": "2016",
        "event": "Detenido brevemente en España. Liberado."
      }
    ],
    "sources": [
      {
        "label": "Proceso — Megadeuda",
        "url": "https://www.proceso.com.mx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 119,
    "name": "Jesús Reyna García",
    "role": "Exgobernador interino de Michoacán (2013)",
    "party": "PRI",
    "state": "Michoacán",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 18,
      "fiscalizacion": 8,
      "funcionarios": 6,
      "deuda": 6,
      "denuncias": 9,
      "evasion": 4,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenido en 2014 y arraigado por la PGR. Acusado de proteger al cártel de los Caballeros Templarios. Preso 4 años 8 meses sin juicio. PGR desistió en 2018.",
      "fiscalizacion": "Señalamientos de protección estatal al crimen organizado.",
      "funcionarios": "Red gubernamental de protección a Los Caballeros Templarios.",
      "deuda": "Corrupción por protección al narcotráfico más que por desvío directo.",
      "denuncias": "Acusado de reunirse con Nazario Moreno \"El Chayo\" y Servando Gómez \"La Tuta\".",
      "evasion": "Preso sin sentencia durante casi 5 años.",
      "nepotismo": "Red de protección gubernamental al crimen organizado."
    },
    "timeline": [
      {
        "year": "2013",
        "event": "Gobernador interino de Michoacán"
      },
      {
        "year": "2014",
        "event": "Detenido por vínculos con Caballeros Templarios"
      },
      {
        "year": "2018",
        "event": "PGR desiste de acusaciones. Liberado."
      }
    ],
    "sources": [
      {
        "label": "Semanario ZETA",
        "url": "https://zetatijuana.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 120,
    "name": "Silvano Aureoles Conejo",
    "role": "Exgobernador de Michoacán (2015-2021)",
    "party": "PRD",
    "state": "Michoacán",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 12,
      "fiscalizacion": 16,
      "funcionarios": 7,
      "deuda": 13,
      "denuncias": 9,
      "evasion": 6,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Bajo investigación por desvío de miles de millones. SCJN determinó que peculado prescribe, lo que podría beneficiarlo.",
      "fiscalizacion": "Señalamientos de desvío masivo de recursos del gobierno de Michoacán. Deuda pública estatal incrementada.",
      "funcionarios": "Funcionarios investigados por irregularidades financieras.",
      "deuda": "Desvío de miles de millones de pesos del erario michoacano.",
      "denuncias": "37 denuncias ante la FGR por irregularidades en manejo de recursos en Tabasco (nota: referencia cruzada con otros políticos señalados).",
      "evasion": "Ha evitado proceso efectivo hasta ahora.",
      "nepotismo": "Señalamientos de contratos dirigidos."
    },
    "timeline": [
      {
        "year": "2015",
        "event": "Asume gubernatura de Michoacán"
      },
      {
        "year": "2021",
        "event": "Termina mandato bajo señalamientos de corrupción"
      },
      {
        "year": "2026",
        "event": "SCJN: peculado prescribe. Podría beneficiarse."
      }
    ],
    "sources": [
      {
        "label": "Red Michoacán",
        "url": "https://www.redmichoacan.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 209,
    "name": "Uruviel González Vieyra",
    "role": "Alcalde de Quimixtlán, Puebla",
    "party": "MORENA",
    "state": "Puebla",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 17,
      "fiscalizacion": 6,
      "funcionarios": 8,
      "deuda": 5,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Detenido el 7 de marzo 2025 por vínculos con organizaciones delictivas.",
      "fiscalizacion": "Bajo investigación federal por irregularidades.",
      "funcionarios": "Hermano de Giovanni (Tlachichuca) y Ramiro (San Nicolás). Red familiar de control.",
      "deuda": "Presunta canalización de recursos hacia actividades ilícitas.",
      "denuncias": "Investigación federal por delincuencia organizada.",
      "evasion": "No evadió detención.",
      "nepotismo": "TRES HERMANOS gobernando municipios simultáneamente en Puebla. Red familiar."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Detenido en Operación Enjambre junto con hermanos"
      }
    ],
    "sources": [
      {
        "label": "Infobae — Enjambre Puebla",
        "url": "https://www.infobae.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 210,
    "name": "Ramiro González Vieyra",
    "role": "Alcalde de San Nicolás Buenos Aires, Puebla",
    "party": "MORENA",
    "state": "Puebla",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 16,
      "fiscalizacion": 6,
      "funcionarios": 8,
      "deuda": 5,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Detenido el 29 de mayo 2025 por vínculos con organizaciones delictivas.",
      "fiscalizacion": "Bajo investigación federal.",
      "funcionarios": "Tercer hermano González Vieyra detenido. Incluido en expedientes de delincuencia organizada.",
      "deuda": "Red familiar de control municipal con presunta actividad ilícita.",
      "denuncias": "Investigación federal documentada.",
      "evasion": "No evadió detención.",
      "nepotismo": "Hermano de Giovanni y Uruviel. Control familiar de tres municipios poblanos."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Detenido como tercer hermano en Operación Enjambre"
      }
    ],
    "sources": [
      {
        "label": "Infobae — Enjambre",
        "url": "https://www.infobae.com"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 211,
    "name": "José Ascención \"N\"",
    "role": "Alcalde de Teuchitlán, Jalisco",
    "party": "Sin dato",
    "state": "Jalisco",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 15,
      "fiscalizacion": 6,
      "funcionarios": 6,
      "deuda": 5,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenido por presuntos vínculos criminales en el marco de Operación Enjambre.",
      "fiscalizacion": "Bajo investigación federal.",
      "funcionarios": "Su hermano también fue detenido posteriormente, vinculado a robo de combustible.",
      "deuda": "Señalamientos de actividades ilícitas desde el gobierno municipal.",
      "denuncias": "Sheinbaum lo mencionó como ejemplo de la estrategia Enjambre.",
      "evasion": "No evadió detención.",
      "nepotismo": "Hermano vinculado a robo de combustible (huachicol)."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Detenido en Operación Enjambre en Jalisco"
      }
    ],
    "sources": [
      {
        "label": "Grupo Animal — Enjambre",
        "url": "https://grupoanimal.mx/seguridad/operativo-enjambre-alcaldes-funcionarios-corrupcion-delincuencia"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 401,
    "name": "Leopoldo Chávez",
    "role": "Candidato a Magistrado del Tribunal Colegiado, Durango",
    "party": "Sin partido",
    "state": "Durango",
    "level": "federal",
    "active": true,
    "status": "candidato",
    "scores": {
      "sentencias": 20,
      "fiscalizacion": 3,
      "funcionarios": 3,
      "deuda": 3,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Condenado a más de 5 años de prisión en EE.UU. por intento de venta de más de 4 kg de metanfetaminas.",
      "fiscalizacion": "Sin señalamientos de fiscalización.",
      "funcionarios": "Sin red documentada.",
      "deuda": "Antecedentes penales por narcotráfico.",
      "denuncias": "Documentado por Reuters, Defensorxs, CNN. Perfil \"altamente riesgoso\" según ONG.",
      "evasion": "Cumplió condena en EE.UU.",
      "nepotismo": "Escasa experiencia judicial (3 años no vinculados al ámbito judicial)."
    },
    "timeline": [
      {
        "year": "2020",
        "event": "Condenado en EE.UU. por delitos de metanfetaminas"
      },
      {
        "year": "2025",
        "event": "Postulado como candidato a magistrado en Durango"
      }
    ],
    "sources": [
      {
        "label": "Reuters — Antecedentes",
        "url": "https://www.reuters.com"
      },
      {
        "label": "Defensorxs — Justicia en la Mira",
        "url": "https://pijamasurf.com/2025/05/justicia_en_riesgo_los_perfiles_mas_cuestionables_rumbo_al_poder_judicial/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 402,
    "name": "Silvia Rocío Delgado",
    "role": "Candidata a Jueza Penal, Chihuahua",
    "party": "Sin partido",
    "state": "Chihuahua",
    "level": "federal",
    "active": true,
    "status": "candidato",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 2,
      "funcionarios": 3,
      "deuda": 2,
      "denuncias": 8,
      "evasion": 2,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Sin sentencias penales propias.",
      "fiscalizacion": "Sin señalamientos directos.",
      "funcionarios": "Formó parte del equipo jurídico del Chapo Guzmán. Enlace directo para amparos.",
      "deuda": "Sin daño patrimonial documentado.",
      "denuncias": "Señalada por Defensorxs, Infobae, CNN y El Español. Cuestionamientos éticos graves por defender al líder del Cártel de Sinaloa.",
      "evasion": "Sin evasión de justicia.",
      "nepotismo": "Vínculos profesionales directos con el Cártel de Sinaloa a través de defensa legal."
    },
    "timeline": [
      {
        "year": "2016",
        "event": "Abogada defensora de Joaquín \"El Chapo\" Guzmán"
      },
      {
        "year": "2025",
        "event": "Candidata a jueza penal en Chihuahua"
      }
    ],
    "sources": [
      {
        "label": "Infobae — Candidaturas riesgosas",
        "url": "https://www.infobae.com/mexico/2025/04/17/rumbo-al-poder-judicial-ongs-identifican-al-menos-13-candidaturas-con-antecedentes-turbios/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 403,
    "name": "Francisco Hernández Zaragoza",
    "role": "Candidato a Magistrado Penal, Jalisco",
    "party": "Sin partido",
    "state": "Jalisco",
    "level": "federal",
    "active": true,
    "status": "candidato",
    "scores": {
      "sentencias": 12,
      "fiscalizacion": 5,
      "funcionarios": 3,
      "deuda": 3,
      "denuncias": 9,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Destituido como juez en 2015 por el Consejo de la Judicatura Federal tras investigación por acoso sexual y corrupción.",
      "fiscalizacion": "Investigado por presuntos actos de corrupción y lavado de dinero durante gestión como juez penal.",
      "funcionarios": "Denuncias de personal del juzgado por violencia laboral y sexual.",
      "deuda": "Señalamientos de corrupción en resoluciones judiciales.",
      "denuncias": "Denuncia formal de trabajadora del Juzgado Sexto Penal por acoso sexual (2013). Documentado por SinEmbargo, Defensorxs.",
      "evasion": "Destituido pero sin consecuencias penales efectivas.",
      "nepotismo": "Reincidencia: postulado para magistratura pese a destitución previa."
    },
    "timeline": [
      {
        "year": "2013",
        "event": "Denunciado por acoso sexual por trabajadora del juzgado"
      },
      {
        "year": "2015",
        "event": "Destituido como juez por la Judicatura Federal"
      },
      {
        "year": "2025",
        "event": "Candidato a Magistrado. Aprobado por Poder Legislativo."
      }
    ],
    "sources": [
      {
        "label": "SinEmbargo — Ganadores cuestionados",
        "url": "https://www.sinembargo.mx/4660660/varios-ganadores-en-la-eleccion-judicial-tienen-acusaciones-y-hasta-denuncias/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 404,
    "name": "Madián Sinaí Menchaca Sierra",
    "role": "Candidata electa a Jueza, Jalisco",
    "party": "Sin partido",
    "state": "Jalisco",
    "level": "federal",
    "active": true,
    "status": "candidato",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 2,
      "funcionarios": 3,
      "deuda": 2,
      "denuncias": 9,
      "evasion": 2,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Detenida en Tlaquepaque por lesiones culposas (mayo 2024).",
      "fiscalizacion": "Sin señalamientos de fiscalización directos.",
      "funcionarios": "Vínculos con la secta La Luz del Mundo a través de su padre, el obispo Nicolás Menchaca.",
      "deuda": "Sin daño patrimonial directo.",
      "denuncias": "Hija del obispo Nicolás Menchaca, defensor legal de Naasón Joaquín García (líder de La Luz del Mundo sentenciado en EE.UU. por delitos sexuales contra menores). Víctimas denuncian que Menchaca ofreció dinero para silenciar denuncias.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "INE la declaró no elegible inicialmente pero TEPJF revocó y recibió constancia de mayoría. Nexos familiares con secta procesada por delitos sexuales."
    },
    "timeline": [
      {
        "year": "2024",
        "event": "Detenida por lesiones culposas en Jalisco"
      },
      {
        "year": "2025",
        "event": "INE la declara no elegible. TEPJF revoca. Recibe constancia."
      }
    ],
    "sources": [
      {
        "label": "Verificado — Candidaturas de alto riesgo",
        "url": "https://verificado.com.mx/eleccion-judicial-candidaturas-alto-riesgo/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 405,
    "name": "Hortencia García Rodríguez",
    "role": "Candidata a Magistrada Penal, Chihuahua",
    "party": "Sin partido",
    "state": "Chihuahua",
    "level": "estatal",
    "active": true,
    "status": "candidato",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 5,
      "funcionarios": 3,
      "deuda": 3,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin sentencias penales propias.",
      "fiscalizacion": "Cuestionada por resoluciones judiciales favorables a exgobernador César Duarte.",
      "funcionarios": "Ordenó la detención del exfiscal que procesaba a Duarte.",
      "deuda": "Señalamientos de uso del cargo para favorecer intereses políticos.",
      "denuncias": "Liberó a César Duarte sin audiencia formal para cambio de medida cautelar (2024). Ordenó detención del fiscal que investigaba a Duarte y a María Eugenia Campos.",
      "evasion": "Sin evasión propia.",
      "nepotismo": "Patrón de resoluciones judiciales que favorecen a actores políticos y obstaculizan la justicia."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Ordena detención del fiscal de Operación Justicia para Chihuahua"
      },
      {
        "year": "2024",
        "event": "Libera a César Duarte sin audiencia formal"
      },
      {
        "year": "2025",
        "event": "Candidata a magistrada penal en Chihuahua"
      }
    ],
    "sources": [
      {
        "label": "SinEmbargo — Ganadores cuestionados",
        "url": "https://www.sinembargo.mx/4660660/varios-ganadores-en-la-eleccion-judicial-tienen-acusaciones-y-hasta-denuncias/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 121,
    "name": "Cuauhtémoc Blanco Bravo",
    "role": "Exgobernador de Morelos (2018-2024)",
    "party": "MORENA",
    "state": "Morelos",
    "level": "estatal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 18,
      "funcionarios": 10,
      "deuda": 12,
      "denuncias": 10,
      "evasion": 5,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "4 denuncias penales por corrupción. Investigación por declaración patrimonial. Desafuero bloqueado por Morena (291 votos).",
      "fiscalizacion": "$323M pagados a empresas fantasma que dejaron sin medicinas a 238 hospitales. ASF investiga miles de millones. Irregularidades en 17 secretarías y 44 organismos.",
      "funcionarios": "Jefe de oficina investigado por UIF por lavado. Red de empresas de consejero de Morena. 23 denuncias encontradas en el cajón.",
      "deuda": "Desvío de $40M en primer bloque. $323M a empresas fantasma. Saqueo aún no calculado.",
      "denuncias": "Fotografiado 9 veces con líderes del CJNG y Comando Tlahuica. Animal Político documentó red de empresas.",
      "evasion": "Diputado federal con fuero. Desafuero bloqueado.",
      "nepotismo": "Medio hermano Ulises Bravo líder de Morena. Empresas de familiares con contratos. Secretario particular vinculado a empresa del gobernador."
    },
    "timeline": [
      {
        "year": "2018",
        "event": "Asume gubernatura"
      },
      {
        "year": "2022",
        "event": "Fotografiado con líderes del CJNG"
      },
      {
        "year": "2024",
        "event": "Sucesora denuncia saqueo generalizado"
      },
      {
        "year": "2025",
        "event": "4 denuncias penales. Desafuero bloqueado."
      }
    ],
    "sources": [
      {
        "label": "Animal Político",
        "url": "https://grupoanimal.mx/politica/corrupcion-morelos-cuauhtemoc-blanco-medicamentos"
      },
      {
        "label": "Proceso",
        "url": "https://www.proceso.com.mx/nacional/estados/2025/1/14/denuncian-corrupcion-generalizada-en-el-gobierno-de-cuauhtemoc-blanco-343742.html"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 212,
    "name": "Ernesto Cruz Díaz",
    "role": "Alcalde de Cintalapa, Chiapas",
    "party": "MORENA",
    "state": "Chiapas",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 18,
      "fiscalizacion": 10,
      "funcionarios": 6,
      "deuda": 8,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenido enero 2026 por abuso de autoridad, corrupción y malversación.",
      "fiscalizacion": "Desvío de fondos municipales.",
      "funcionarios": "Protección y aviso de operativos al Cártel Chiapas-Guatemala y CJNG.",
      "deuda": "Malversación de recursos públicos.",
      "denuncias": "Reelecto pese a señalamientos. Documentado por Nación321.",
      "evasion": "No evadió.",
      "nepotismo": "4 años en cargo con señalamientos."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Primera gestión"
      },
      {
        "year": "2024",
        "event": "Reelecto por Morena"
      },
      {
        "year": "2026",
        "event": "Detenido"
      }
    ],
    "sources": [
      {
        "label": "Nación321",
        "url": "https://www.nacion321.com/seguridad/2026/02/09/sin-impunidad-mas-de-la-mitad-de-los-alcaldes-detenidos-en-el-sexenio-son-morenistas/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 213,
    "name": "Rosember López",
    "role": "Alcalde de Bellavista, Chiapas",
    "party": "Chiapas Unido",
    "state": "Chiapas",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 15,
      "fiscalizacion": 5,
      "funcionarios": 5,
      "deuda": 4,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Detenido 2025 por vínculos con crimen organizado.",
      "fiscalizacion": "Bajo investigación federal.",
      "funcionarios": "Red de protección criminal.",
      "deuda": "Sin datos específicos.",
      "denuncias": "Lista de alcaldes detenidos.",
      "evasion": "No evadió.",
      "nepotismo": "Sin datos."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Detenido por vínculos criminales"
      }
    ],
    "sources": [
      {
        "label": "El Universal",
        "url": "https://www.eluniversal.com.mx/estados/alcaldes-y-exalcaldes-bajo-la-lupa-por-vinculos-con-el-crimen-organizado-reforma-busca-frenar-candidatos-con-nexos-delictivos/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 214,
    "name": "José Antonio \"N\"",
    "role": "Alcalde de Frontera Comalapa, Chiapas",
    "party": "Sin dato",
    "state": "Chiapas",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 19,
      "fiscalizacion": 6,
      "funcionarios": 7,
      "deuda": 5,
      "denuncias": 9,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenido por desaparición forzada, homicidio, extorsión y nexos criminales.",
      "fiscalizacion": "Bajo investigación por múltiples delitos.",
      "funcionarios": "Red de protección en zona fronteriza.",
      "deuda": "Extorsión como financiamiento.",
      "denuncias": "Cargos graves: desaparición forzada y homicidio.",
      "evasion": "No evadió.",
      "nepotismo": "Control criminal de municipio fronterizo."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Detenido por desaparición forzada, homicidio y nexos criminales"
      }
    ],
    "sources": [
      {
        "label": "La Razón",
        "url": "https://www.razon.com.mx/mexico/2026/02/07/caen-35-alcaldes-en-seis-anos-por-vinculos-con-la-actividad-criminal/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 215,
    "name": "Plácido Martínez Soler",
    "role": "Alcalde de San Juan Mazatlán, Oaxaca",
    "party": "MORENA",
    "state": "Oaxaca",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 20,
      "fiscalizacion": 4,
      "funcionarios": 3,
      "deuda": 3,
      "denuncias": 9,
      "evasion": 5,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenido oct 2024 por falsificación de documentos para evadir imputación por violación de menor (2013).",
      "fiscalizacion": "Sin señalamientos específicos.",
      "funcionarios": "Esposa también detenida.",
      "deuda": "Sin daño patrimonial específico.",
      "denuncias": "Imputado por violación equiparada contra adolescente.",
      "evasion": "Falsificó documentos para evadir imputación.",
      "nepotismo": "Esposa involucrada en encubrimiento."
    },
    "timeline": [
      {
        "year": "2013",
        "event": "Imputado por violación equiparada contra menor"
      },
      {
        "year": "2024",
        "event": "Detenido junto con esposa"
      }
    ],
    "sources": [
      {
        "label": "Nación321",
        "url": "https://www.nacion321.com/seguridad/2026/02/09/sin-impunidad-mas-de-la-mitad-de-los-alcaldes-detenidos-en-el-sexenio-son-morenistas/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 216,
    "name": "Mauro Yuriel Jáuregui Muñoz",
    "role": "Alcalde de Apulco, Zacatecas",
    "party": "MC",
    "state": "Zacatecas",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 16,
      "fiscalizacion": 5,
      "funcionarios": 5,
      "deuda": 5,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Desaforado y detenido en 2025.",
      "fiscalizacion": "Bajo investigación federal.",
      "funcionarios": "Red de protección criminal.",
      "deuda": "Vinculado a actividades delictivas.",
      "denuncias": "Lista de alcaldes con vínculos criminales.",
      "evasion": "Desaforado antes de detención.",
      "nepotismo": "Sin datos."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Desaforado y detenido por vínculos criminales"
      }
    ],
    "sources": [
      {
        "label": "Mural Sonorense",
        "url": "https://muralsonorense.com/alcaldes-y-exalcaldes-bajo-la-lupa-reforma-busca-frenar-candidatos-con-nexos-delictivos/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 217,
    "name": "Tania Vanessa Flores Guerra",
    "role": "Exalcaldesa de Múzquiz, Coahuila",
    "party": "PT",
    "state": "Coahuila",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 14,
      "fiscalizacion": 12,
      "funcionarios": 4,
      "deuda": 8,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Detenida 2026 por corrupción durante gestión 2021-2024.",
      "fiscalizacion": "ASEC documentó irregularidades.",
      "funcionarios": "Sin datos de red.",
      "deuda": "Actos de corrupción documentados.",
      "denuncias": "ASEC presentó denuncias ante Fiscalía.",
      "evasion": "No evadió.",
      "nepotismo": "Sin datos."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume alcaldía por PT"
      },
      {
        "year": "2026",
        "event": "Detenida por corrupción"
      }
    ],
    "sources": [
      {
        "label": "Localeando",
        "url": "https://www.localeando.com/2026/07/coahuila-y-la-detencion-de-alcaldesas-y.html"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 218,
    "name": "Ramiro Pérez Arciniega",
    "role": "Exalcalde de Parras, Coahuila",
    "party": "Oposición",
    "state": "Coahuila",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 14,
      "fiscalizacion": 10,
      "funcionarios": 3,
      "deuda": 7,
      "denuncias": 6,
      "evasion": 3,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Detenido enero 2023 por malos manejos.",
      "fiscalizacion": "ASEC detectó irregularidades.",
      "funcionarios": "Sin datos.",
      "deuda": "Malos manejos de recursos.",
      "denuncias": "Fiscalía Anticorrupción procesó caso.",
      "evasion": "No evadió.",
      "nepotismo": "Sin datos."
    },
    "timeline": [
      {
        "year": "2023",
        "event": "Detenido por malos manejos"
      }
    ],
    "sources": [
      {
        "label": "Localeando",
        "url": "https://www.localeando.com/2026/07/coahuila-y-la-detencion-de-alcaldesas-y.html"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 219,
    "name": "Gerardo García Castillo",
    "role": "Exalcalde de Monclova, Coahuila",
    "party": "Oposición",
    "state": "Coahuila",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 14,
      "fiscalizacion": 10,
      "funcionarios": 3,
      "deuda": 7,
      "denuncias": 6,
      "evasion": 3,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Detenido enero 2023 por irregularidades.",
      "fiscalizacion": "ASEC documentó malos manejos.",
      "funcionarios": "Sin datos.",
      "deuda": "Malos manejos de recursos.",
      "denuncias": "Fiscalía Anticorrupción procesó caso.",
      "evasion": "No evadió.",
      "nepotismo": "Sin datos."
    },
    "timeline": [
      {
        "year": "2023",
        "event": "Detenido por irregularidades"
      }
    ],
    "sources": [
      {
        "label": "Localeando",
        "url": "https://www.localeando.com/2026/07/coahuila-y-la-detencion-de-alcaldesas-y.html"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 220,
    "name": "Jorge Fabián \"N\"",
    "role": "Alcalde de Lerdo de Tejada, Veracruz",
    "party": "Sin dato",
    "state": "Veracruz",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 18,
      "fiscalizacion": 5,
      "funcionarios": 4,
      "deuda": 4,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Detenido 2020. Preso en penal federal de Durango por secuestro agravado.",
      "fiscalizacion": "Sin datos específicos.",
      "funcionarios": "Sin red documentada.",
      "deuda": "Secuestro agravado desde cargo.",
      "denuncias": "Documentado por La Razón.",
      "evasion": "No evadió.",
      "nepotismo": "Sin datos."
    },
    "timeline": [
      {
        "year": "2020",
        "event": "Detenido por secuestro agravado"
      }
    ],
    "sources": [
      {
        "label": "La Razón",
        "url": "https://www.razon.com.mx/mexico/2026/02/07/caen-35-alcaldes-en-seis-anos-por-vinculos-con-la-actividad-criminal/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 221,
    "name": "Artemio Moriya Sánchez",
    "role": "Alcalde de Tacámbaro, Michoacán",
    "party": "Sin dato",
    "state": "Michoacán",
    "level": "municipal",
    "active": false,
    "status": "ex_funcionario",
    "scores": {
      "sentencias": 10,
      "fiscalizacion": 5,
      "funcionarios": 5,
      "deuda": 5,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Señalado en informe SEDENA (sept 2021) por vínculos con crimen organizado.",
      "fiscalizacion": "Parte de 29 alcaldes michoacanos señalados por SEDENA.",
      "funcionarios": "Hija detenida en Texas con $250K USD y armas (2022).",
      "deuda": "Vinculación con CJNG por inteligencia militar.",
      "denuncias": "Informe clasificado de SEDENA. Detención de hija confirmó nexos.",
      "evasion": "No detenido directamente.",
      "nepotismo": "Hija transportando dinero y armas del narcotráfico."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "SEDENA lo señala entre 29 alcaldes"
      },
      {
        "year": "2022",
        "event": "Hija detenida en Texas con $250K USD"
      }
    ],
    "sources": [
      {
        "label": "La Razón",
        "url": "https://www.razon.com.mx/mexico/2026/02/07/caen-35-alcaldes-en-seis-anos-por-vinculos-con-la-actividad-criminal/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 305,
    "name": "Adán Augusto López Hernández",
    "role": "Senador de la República / Exgobernador de Tabasco (2019-2021)",
    "party": "MORENA",
    "state": "Tabasco",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 10,
      "fiscalizacion": 15,
      "funcionarios": 15,
      "deuda": 12,
      "denuncias": 10,
      "evasion": 6,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin sentencia ni orden de aprehensión directa. FGR no lo ha citado formalmente, según la Fiscalía de Tabasco. Denunciado por Alito Moreno (PRI) ante la FGR.",
      "fiscalizacion": "Animal Político documentó ingresos no reportados de $79-80M entre 2023-2024, con inconsistencias patrimoniales y fiscales. Parte del dinero vinculado a empresas fantasma.",
      "funcionarios": "Su secretario de Seguridad en Tabasco, Hernán Bermúdez Requena (\"Comandante H\"), es señalado como presunto líder de \"La Barredora\", célula del CJNG. Detenido en Paraguay, procesado por asociación delictuosa, secuestro agravado, extorsión y desaparición forzada.",
      "deuda": "5 notarías vinculadas a él (incluida la propia, notaría 27) constituyeron 13 empresas en lista negra del SAT por lavado de dinero y evasión fiscal. Contratos por $11,000M en obras de Dos Bocas, renta de maquinaria a Pemex y venta de equipo al IMSS-Bienestar.",
      "denuncias": "PRI presentó denuncias formales ante la FGR. Oposición ha exigido debate en el Senado en 3 ocasiones, bloqueado por mayoría morenista. NYT reportó que funcionarios de Morena buscan colaborar con EE.UU. ante posibles investigaciones.",
      "evasion": "Dejó la coordinación de Morena en el Senado en medio del escándalo (movimiento leído como distanciamiento estratégico). Bermúdez permanece sin declarar, lo que ha impedido avanzar la investigación contra él.",
      "nepotismo": "Red de notarías y empresarios cercanos beneficiados con contratos públicos en gobiernos de Morena. Impulsó leyes cuestionadas como gobernador (\"ley garrote\", \"ley compadre\", \"ley dedazo\"), algunas declaradas inconstitucionales."
    },
    "timeline": [
      {
        "year": "2019",
        "event": "Gobernador de Tabasco. Nombra a Hernán Bermúdez secretario de Seguridad."
      },
      {
        "year": "2021",
        "event": "Deja gubernatura. Asume como Secretario de Gobernación federal."
      },
      {
        "year": "2024",
        "event": "Coordinador de la campaña de Sheinbaum. Coordinador de Morena en el Senado."
      },
      {
        "year": "2025",
        "event": "Orden de aprehensión contra Bermúdez por nexos con La Barredora/CJNG. Bermúdez huye del país."
      },
      {
        "year": "2026",
        "event": "Bermúdez detenido en Paraguay. Animal Político revela inconsistencias patrimoniales de $79-80M. López deja coordinación del Senado."
      }
    ],
    "sources": [
      {
        "label": "Infobae — 7 polémicas",
        "url": "https://www.infobae.com/mexico/2026/02/02/las-7-polemicas-que-rodean-a-adan-augusto-lopez-tras-dejar-la-coordinacion-de-morena-en-el-senado/"
      },
      {
        "label": "El Independiente — Testigo protegido",
        "url": "https://elindependiente.mx/opinion/2026/04/07/tabasco-hernan-bermudez-testigo-protegido/"
      },
      {
        "label": "SinEmbargo — Anuario 2025",
        "url": "https://www.sinembargo.mx/4737478/anuario2025-gobernadores-en-la-mira-adan-los-duarte-cabeza-alfaro-evelyn/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 306,
    "name": "Francisco Javier García Cabeza de Vaca",
    "role": "Exgobernador de Tamaulipas (2016-2022) / Funcionario en América del Norte",
    "party": "PAN",
    "state": "Tamaulipas",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 12,
      "fiscalizacion": 16,
      "funcionarios": 8,
      "deuda": 14,
      "denuncias": 10,
      "evasion": 9,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Investigado por la FGR por delincuencia organizada, operaciones con recursos de procedencia ilícita y huachicol. Sin sentencia por residir en EE.UU. y gozar de protección política.",
      "fiscalizacion": "Presidente del Congreso de Tamaulipas presentó denuncia ante FGR por operaciones con recursos de procedencia ilícita, uso indebido de facultades, encubrimiento de delitos fiscales y contrabando de hidrocarburos.",
      "funcionarios": "Red de exfuncionarios tamaulipecos bajo investigación junto con él.",
      "deuda": "Señalado por contrabando de hidrocarburos (huachicol) a gran escala desde el gobierno estatal.",
      "denuncias": "Documentado extensamente por SinEmbargo en su Anuario 2025 de gobernadores señalados. Denuncia formal del Congreso de Tamaulipas.",
      "evasion": "Reside en Estados Unidos con un cargo en América del Norte. Se solicitó alerta migratoria en 2021 ante autoridades de EE.UU.",
      "nepotismo": "Red de protección política que le ha permitido evadir la justicia mexicana operando desde el extranjero."
    },
    "timeline": [
      {
        "year": "2016",
        "event": "Asume gubernatura de Tamaulipas por el PAN"
      },
      {
        "year": "2021",
        "event": "Se solicita alerta migratoria en EE.UU."
      },
      {
        "year": "2022",
        "event": "Termina mandato. Se establece en Estados Unidos."
      },
      {
        "year": "2025",
        "event": "Congreso de Tamaulipas presenta denuncia formal ante la FGR."
      }
    ],
    "sources": [
      {
        "label": "SinEmbargo — Anuario 2025",
        "url": "https://www.sinembargo.mx/4737478/anuario2025-gobernadores-en-la-mira-adan-los-duarte-cabeza-alfaro-evelyn/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 307,
    "name": "Marina del Pilar Ávila Olmeda",
    "role": "Gobernadora de Baja California (2021-presente)",
    "party": "MORENA",
    "state": "Baja California",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 6,
      "funcionarios": 4,
      "deuda": 4,
      "denuncias": 8,
      "evasion": 5,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal. Sin sentencias.",
      "fiscalizacion": "Sin hallazgos formales publicados de auditorías hasta el momento.",
      "funcionarios": "Sin red de funcionarios detenidos documentada.",
      "deuda": "Sin daño patrimonial directo documentado.",
      "denuncias": "Visa estadounidense revocada, hecho que medios vincularon con una investigación sobre su exesposo, de quien se divorció meses después. Documentado por SinEmbargo.",
      "evasion": "Se divorció de su esposo tras la revocación de la visa, interpretado por analistas como distanciamiento estratégico.",
      "nepotismo": "Vínculos con su entonces esposo bajo escrutinio de autoridades estadounidenses."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Baja California"
      },
      {
        "year": "2025",
        "event": "Visa estadounidense revocada"
      },
      {
        "year": "2025",
        "event": "Se divorcia de su esposo meses después"
      }
    ],
    "sources": [
      {
        "label": "SinEmbargo — Anuario 2025",
        "url": "https://www.sinembargo.mx/4737478/anuario2025-gobernadores-en-la-mira-adan-los-duarte-cabeza-alfaro-evelyn/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 308,
    "name": "Américo Villarreal Anaya",
    "role": "Gobernador de Tamaulipas (2022-presente)",
    "party": "MORENA",
    "state": "Tamaulipas",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 5,
      "funcionarios": 4,
      "deuda": 3,
      "denuncias": 9,
      "evasion": 4,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal contra él directamente.",
      "fiscalizacion": "Sin hallazgos formales de fiscalización publicados.",
      "funcionarios": "Personas cercanas a él señaladas por el PRI ante la FGR (mayo 2026).",
      "deuda": "Sin daño patrimonial directo documentado.",
      "denuncias": "Alejandro Moreno (PRI) anunció denuncias formales ante la FGR contra personas cercanas al gobernador, acusándolo de estar protegido por \"narcogobierno\" de Morena.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Señalamientos de red cercana bajo escrutinio."
    },
    "timeline": [
      {
        "year": "2022",
        "event": "Asume gubernatura de Tamaulipas"
      },
      {
        "year": "2026",
        "event": "PRI anuncia denuncias contra personas cercanas a él ante la FGR"
      }
    ],
    "sources": [
      {
        "label": "Infobae — PRI denuncias",
        "url": "https://www.infobae.com/mexico/2026/05/27/pri-va-contra-hijos-de-amlo-y-gobernadores-de-morena-alito-moreno-prepara-denuncias-ante-la-fgr/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 309,
    "name": "Red de nómina fantasma — Gobierno del Estado de México",
    "role": "Exsubsecretarios y funcionarios de la administración 2017-2023",
    "party": "PRI/Grupo Atlacomulco",
    "state": "Estado de México",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 10,
      "fiscalizacion": 20,
      "funcionarios": 15,
      "deuda": 15,
      "denuncias": 8,
      "evasion": 5,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Investigación penal en curso desde febrero 2026, iniciada desde el interior del propio gobierno estatal. Sin sentencias aún.",
      "fiscalizacion": "459 movimientos de alta de personal docente detectados como fantasma. 3 denuncias penales presentadas por la Secretaría de Educación (SECTI) en 2026.",
      "funcionarios": "2 exsubsecretarios de la administración 2017-2023, además de coordinadores, delegados administrativos, directores generales, directores de área, subdirectores, jefes de departamento y capturistas implicados.",
      "deuda": "Más de $96M obtenidos solo entre enero 2025 y febrero 2026 por concepto de salarios, aguinaldos y primas vacacionales de docentes fantasma. Daño patrimonial podría ser mayor si se acredita operación continua desde 2021.",
      "denuncias": "Fiscalía del Estado de México documentó el esquema como el caso más importante de nómina pública en la historia reciente del estado. Investigación no surgió por denuncia externa sino desde adentro del propio gobierno.",
      "evasion": "Estructura diseñada para que cuando un operador dejaba el cargo, su sustituto fuera incorporado al mismo mecanismo, garantizando continuidad e impunidad.",
      "nepotismo": "Relaciones familiares y vínculos de confianza personal entre los investigados fue el mecanismo que permitió la continuidad del esquema por más de 5 años, infiltrando Finanzas, Educación, Seguridad, Oficialía Mayor y SECTI."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Fiscalía estima que el esquema de nómina fantasma comenzó a operar"
      },
      {
        "year": "2026",
        "event": "Febrero: comienza investigación interna. Se detectan 459 altas fantasma y se presentan 3 denuncias penales (11 y 26 feb, 4 mayo)."
      }
    ],
    "sources": [
      {
        "label": "AD Noticias — Golpe histórico",
        "url": "https://adnoticias.mx/golpe-historico-corrupcion-edomex/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 310,
    "name": "David Monreal Ávila",
    "role": "Gobernador de Zacatecas (2021-presente)",
    "party": "MORENA",
    "state": "Zacatecas",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 8,
      "funcionarios": 5,
      "deuda": 4,
      "denuncias": 9,
      "evasion": 3,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal. Video de 2021 donde toca inapropiadamente a una candidata durante campaña.",
      "fiscalizacion": "Denuncias de corrupción en centros de acopio de frijol señaladas por productores directamente frente a Sheinbaum (marzo 2026). Su propio hermano Saúl denunció irregularidades en distribución de programas de Bienestar: beneficiarios que desaparecen de registros pero siguen cobrando.",
      "funcionarios": "Represión policial documentada contra manifestantes: campesinos detenidos arbitrariamente, colectivo de madres buscadoras \"Sangre de mi Sangre\" agredido por la Fuerza de Reacción Inmediata durante su informe de gobierno (2025).",
      "deuda": "Sin cifra específica de daño patrimonial documentada, pero denuncias de desvío en programas sociales.",
      "denuncias": "Es el gobernador peor evaluado de México (7.2% de aprobación en algunas encuestas, último lugar de los 32 estados). Zacatecas registra crisis de violencia con asesinato de un cuñado y un sobrino del gobernador.",
      "evasion": "Sin evasión de justicia documentada.",
      "nepotismo": "Dinastía familiar: hermano Ricardo (coordinador de Morena en Diputados, exgobernador), hermano Saúl (senador, busca sucederlo pese a reglas anti-nepotismo de Morena), Rodolfo (funcionario en Sinaloa), Eulogio (exdirector de Pasaportes). 9 de 14 hermanos en política."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Zacatecas"
      },
      {
        "year": "2025",
        "event": "Madres buscadoras agredidas por policía estatal durante informe de gobierno"
      },
      {
        "year": "2026",
        "event": "Productores de frijol lo abuchean por corrupción en centros de acopio. Hermano Saúl denuncia irregularidades en Bienestar."
      }
    ],
    "sources": [
      {
        "label": "SinEmbargo — Era Monreal",
        "url": "https://www.sinembargo.mx/4477289/close-up%c2%ac-la-era-monreal-ha-sido-la-pesadilla-de-zacatecas-david-cosecha-criticas/"
      },
      {
        "label": "Heraldo de México",
        "url": "https://heraldodemexico.com.mx/opinion/2026/7/8/monreal-viola-reglas-para-quedarse-con-zacatecas-845732.html"
      },
      {
        "label": "El Congresista — Denuncia de Saúl",
        "url": "https://elcongresista.mx/politica/zacatecas/saul-monreal-denuncia-corrupcion-gobierno-hermano-zacatecas/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 311,
    "name": "Alfonso Durazo Montaño",
    "role": "Gobernador de Sonora (2021-presente)",
    "party": "MORENA",
    "state": "Sonora",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 5,
      "funcionarios": 5,
      "deuda": 3,
      "denuncias": 9,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal. Investigado por autoridades de EE.UU. según fuentes citadas por el New York Times y Los Angeles Times.",
      "fiscalizacion": "Sin hallazgos formales de fiscalización publicados hasta el momento.",
      "funcionarios": "Sin red de funcionarios detenidos documentada públicamente.",
      "deuda": "Sin daño patrimonial directo documentado.",
      "denuncias": "Señalado por autoridades de EE.UU., junto con Américo Villarreal, por presuntos vínculos con narcotráfico según reportaje que citó a 5 fuentes no autorizadas a hablar públicamente. Fue secretario de Seguridad de AMLO, quien lo respalda públicamente.",
      "evasion": "Ha negado las acusaciones públicamente.",
      "nepotismo": "Cercanía política con AMLO como protección documentada según análisis periodístico."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Sonora"
      },
      {
        "year": "2026",
        "event": "Reportaje periodístico lo señala junto con Villarreal como objetivo de investigaciones de EE.UU. por narcotráfico"
      }
    ],
    "sources": [
      {
        "label": "Impacto — Un país de cínicos",
        "url": "https://impacto.mx/opinion/pulpo-politico/un-pais-de-cinicos-11072026/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 312,
    "name": "Rubén Rocha Moya",
    "role": "Gobernador de Sinaloa (2021-presente, con licencia)",
    "party": "MORENA",
    "state": "Sinaloa",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 12,
      "fiscalizacion": 8,
      "funcionarios": 6,
      "deuda": 5,
      "denuncias": 10,
      "evasion": 8,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Acusado por EE.UU. de vínculos con narcotráfico junto con Enrique Inzunza Cázarez y otros. FGR investiga. Sin sentencia ni orden de aprehensión formal en México.",
      "fiscalizacion": "Bajo investigación, sin hallazgos formales de fiscalización publicados.",
      "funcionarios": "Crisis de seguridad en Sinaloa desde la captura de \"El Mayo\" Zambada, con enfrentamientos entre facciones del Cártel de Sinaloa.",
      "deuda": "Sin documentación de daño patrimonial directo hasta ahora.",
      "denuncias": "77.1% de los sinaloenses estarían de acuerdo con que se le revoque el mandato por pérdida de confianza (encuesta CRIPESO). En julio de 2026 llevaba 69 días sin aparecer en público tras tomar una licencia envuelta en polémica.",
      "evasion": "Solicitó licencia del cargo en medio del escándalo. El gobierno negó estar protegiéndolo, asegurando que está en su casa sin escoltas federales, pero su ausencia pública prolongada genera sospechas.",
      "nepotismo": "Sin datos específicos adicionales a los ya documentados sobre su gestión."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Sinaloa"
      },
      {
        "year": "2024",
        "event": "Crisis de seguridad en Culiacán tras captura de Zambada"
      },
      {
        "year": "2026",
        "event": "EE.UU. lo acusa de vínculos con narcotráfico. Toma licencia. 69 días sin aparecer en público (julio 2026)."
      }
    ],
    "sources": [
      {
        "label": "El Siglo de Torreón",
        "url": "https://www.elsiglodetorreon.com.mx"
      },
      {
        "label": "TV Azteca — Mapa político",
        "url": "https://www.tvazteca.com/aztecanoticias/cuantos-estados-gobierna-morena-en-2026-el-mapa-politico-rumbo-a-elecciones-2027/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 313,
    "name": "Ricardo Monreal Ávila",
    "role": "Coordinador de Morena en la Cámara de Diputados / Exalcalde de Cuauhtémoc, CDMX",
    "party": "MORENA",
    "state": "Federal",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 3,
      "fiscalizacion": 5,
      "funcionarios": 3,
      "deuda": 3,
      "denuncias": 7,
      "evasion": 2,
      "nepotismo": 10
    },
    "breakdown": {
      "sentencias": "Sin proceso penal.",
      "fiscalizacion": "Sin hallazgos formales de fiscalización.",
      "funcionarios": "Sin red de funcionarios procesados.",
      "deuda": "Sin daño patrimonial documentado.",
      "denuncias": "Caso emblemático de nepotismo en México: 13 hermanos, 9 en política. Colocó a su hermano David como gobernador de Zacatecas, a su hermano Saúl como senador, sobrinos y otros hermanos en cargos en Sinaloa, Aguascalientes y el propio Poder Judicial.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "CASO MÁXIMO: dinastía familiar con control de la gubernatura de Zacatecas (desde 1998 con solo interrupciones), presidencias municipales de Fresnillo por décadas, un asiento en el Senado, y presencia hasta en el Poder Judicial. Declaró públicamente \"somos muchos, me disculpo con todos, pero eso lo decidió mi papá y mi mamá\"."
    },
    "timeline": [
      {
        "year": "1998",
        "event": "Gobernador de Zacatecas (primer Monreal en el cargo)"
      },
      {
        "year": "2018",
        "event": "Coordinador de Morena en el Senado"
      },
      {
        "year": "2021",
        "event": "Su hermano David asume gubernatura de Zacatecas"
      },
      {
        "year": "2024",
        "event": "Coordinador de Morena en Cámara de Diputados"
      },
      {
        "year": "2025",
        "event": "Escándalo por bloquear candidatura de exesposa de su hermano, sacrificando a Saúl"
      }
    ],
    "sources": [
      {
        "label": "El Financiero — Dinastía Monreal",
        "url": "https://www.elfinanciero.com.mx/nacional/2025/09/10/quienes-son-los-hermanos-de-ricardo-monreal-y-que-cargos-tienen-en-el-gobierno-de-zacatecas-imss-suprema-corte-y-senado/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 314,
    "name": "Layda Sansores San Román",
    "role": "Gobernadora de Campeche (2021-presente)",
    "party": "MORENA",
    "state": "Campeche",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 16,
      "funcionarios": 12,
      "deuda": 13,
      "denuncias": 10,
      "evasion": 6,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin sentencia penal. Denuncia propia por espionaje sigue sin resolverse tras más de 19 años (caso previo, 1998).",
      "fiscalizacion": "ASF denunció ante la Fiscalía Anticorrupción a su fiscal Renato Sales por adquisición de equipo de espionaje israelí por más de $807M que \"nunca llegó a su destino\" declarado. Contratos inflados y adjudicaciones directas millonarias documentadas por La Opinión de México.",
      "funcionarios": "Fiscal Renato Sales operó presunto centro de inteligencia con equipo de espionaje. Sobrino Gerardo Sánchez Sansores señalado por \"moches\" de $80M en extorsión a inmobiliarias, según audios filtrados.",
      "deuda": "Equipo de espionaje de $807M sin destino declarado. Nómina familiar: parientes de su sobrino cobrando simultáneamente del presupuesto estatal.",
      "denuncias": "Video de funcionarios recibiendo fajos de dinero en efectivo en oficina de gobierno (similar al caso \"Señor de las Ligas\"). Programa \"Martes del Jaguar\" usó información obtenida ilegalmente mediante espionaje a opositores. Chats propios filtrados revelaron peculado en financiamiento de campaña.",
      "evasion": "Su propio chat filtrado la muestra orquestando \"travesuras\" contra la prensa y pagando a medios (ofreció $500K a un periódico).",
      "nepotismo": "Sobrino Gerardo Sánchez Sansores es su operador político y busca sucederla como gobernador en 2027. Nombró a su hermano Raúl director del Sistema de TV y Radio de Campeche. Familia extendida en nómina pública."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Campeche. Nombra a Renato Sales fiscal."
      },
      {
        "year": "2022",
        "event": "ASF denuncia a Sales por equipo de espionaje de $807M sin destino."
      },
      {
        "year": "2023",
        "event": "Sus propios chats son filtrados por Proceso, revelando espionaje y peculado."
      },
      {
        "year": "2026",
        "event": "Su sobrino Gerardo Sánchez Sansores busca sucederla en medio de acusaciones de extorsión por $80M."
      }
    ],
    "sources": [
      {
        "label": "Proceso — Chats de Layda",
        "url": "https://www.proceso.com.mx/nacional/2023/1/24/chats-exhiben-ahora-layda-sansores-revelan-como-se-infiltro-su-sobrino-con-alito-300921.html"
      },
      {
        "label": "TV Azteca — Sobrino sucesión",
        "url": "https://www.tvazteca.com/aztecanoticias/elecciones-2027-quien-es-gerardo-sanchez-sansores-sobrino-layda-sansores-que-busca-candidatura-gobernador/"
      },
      {
        "label": "La Opinión de México",
        "url": "https://laopiniondemexico.mx/el-poder-sin-control-en-el-gobierno-de-layda-sansores/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 315,
    "name": "Gerardo Sánchez Sansores",
    "role": "Asesor General de la Gobernación de Campeche / Aspirante a gobernador 2027",
    "party": "MORENA",
    "state": "Campeche",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 10,
      "fiscalizacion": 12,
      "funcionarios": 5,
      "deuda": 14,
      "denuncias": 9,
      "evasion": 5,
      "nepotismo": 10
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal. Audios filtrados lo vinculan directamente a extorsión.",
      "fiscalizacion": "Escándalo de \"moches\" de $80M: audios revelan negociación de comisiones ilegales a cambio de autorizar licencias de construcción de departamentos.",
      "funcionarios": "Operador en las sombras de su tía desde que ella gobernaba en la Ciudad de México. Su esposa América del Carmen Azar Pérez trabajó como \"agente doble\" en el equipo de Alito Moreno mientras operaba para Sansores.",
      "deuda": "$80M en comisiones ilegales por licencias de construcción. Múltiples familiares políticos cobrando simultáneamente en nómina pública del estado, según denuncias civiles.",
      "denuncias": "Filtración de audios por parte de rivales internos de Morena en la contienda por la candidatura 2027. Morena amenazó con usar UIF y SAT para filtrar candidatos con este perfil.",
      "evasion": "Operó como agente encubierto dentro del equipo del PRI mientras reportaba a su tía, según sus propios chats filtrados.",
      "nepotismo": "CASO DIRECTO: sobrino de la gobernadora, aspira a sucederla en el cargo. Beneficiario directo de la estructura de poder familiar de los Sansores en Campeche."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Ayuda a su tía a llegar a la gubernatura operando como agente doble en el equipo de Alito Moreno"
      },
      {
        "year": "2023",
        "event": "Chats filtrados revelan su rol y el dinero obtenido"
      },
      {
        "year": "2026",
        "event": "Registra candidatura para suceder a su tía. Audios de \"moches\" de $80M salen a luz por rivales internos."
      }
    ],
    "sources": [
      {
        "label": "TV Azteca — Perfil",
        "url": "https://www.tvazteca.com/aztecanoticias/elecciones-2027-quien-es-gerardo-sanchez-sansores-sobrino-layda-sansores-que-busca-candidatura-gobernador/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 316,
    "name": "Clara Brugada Molina",
    "role": "Jefa de Gobierno de la Ciudad de México (2024-presente)",
    "party": "MORENA",
    "state": "Ciudad de México",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 14,
      "funcionarios": 8,
      "deuda": 10,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 6
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal. Denuncia formal del PAN CDMX presentada en 2026 por violaciones a la Ley de Responsabilidades de Servidores Públicos.",
      "fiscalizacion": "Denuncia formal del PAN por contratación directa y preferente a la empresa \"Impacto en Imagen\", que recibió 57 contratos desde que Brugada era alcaldesa en Iztapalapa (2018-2023), eludiendo licitación pública.",
      "funcionarios": "Denunciada junto con su secretario de Obras y Servicios, Raúl Basulto Luviano, señalado como cómplice directo en el patrón de contrataciones.",
      "deuda": "54 contratos por $137.4M otorgados a la misma empresa durante su gestión en Iztapalapa, incluidos 2 contratos de $4M y $11M por \"materiales de pintura\" para intervenir puentes y vialidades.",
      "denuncias": "MC también denunció presunto desvío de recursos en obras rumbo al Mundial 2026. Empresa señalada también habría financiado su campaña a la Jefatura de Gobierno.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Patrón sostenido de favorecer a la misma empresa contratista a través de dos administraciones distintas (Iztapalapa y CDMX)."
    },
    "timeline": [
      {
        "year": "2018",
        "event": "Alcaldesa de Iztapalapa. Empresa \"Impacto en Imagen\" recibe primeros contratos."
      },
      {
        "year": "2023",
        "event": "Termina segundo periodo en Iztapalapa con 54 contratos a la misma empresa ($137.4M)"
      },
      {
        "year": "2024",
        "event": "Asume Jefatura de Gobierno de CDMX"
      },
      {
        "year": "2026",
        "event": "PAN presenta denuncia formal. MC denuncia desvíos en obras del Mundial 2026."
      }
    ],
    "sources": [
      {
        "label": "La Querella Digital",
        "url": "https://www.laquerelladigital.com/pan-formaliza-denuncia-vs-desvio-de-recursos-en-cdmx/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 317,
    "name": "Ana Laura González Ábrego",
    "role": "Presidenta Municipal de Guadalupe y Calvo, Chihuahua",
    "party": "Sin dato",
    "state": "Chihuahua",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 6,
      "fiscalizacion": 10,
      "funcionarios": 3,
      "deuda": 8,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 6
    },
    "breakdown": {
      "sentencias": "Denuncia penal del PRI presentada el 22 de junio de 2026 ante la Fiscalía Anticorrupción de Chihuahua.",
      "fiscalizacion": "Investigada por utilización indebida de recursos públicos municipales para promoción de imagen personal.",
      "funcionarios": "Sin red de funcionarios documentada.",
      "deuda": "Uso del programa alimentario \"Raíces que Alimentan\" para autopromoción, con cajas de despensa etiquetadas con su nombre e imagen.",
      "denuncias": "Material gráfico institucional y despensas con su nombre, imagen y cargo documentados como evidencia en la denuncia formal.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Uso de programas sociales como vehículo de promoción personal con fondos públicos municipales."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "PRI presenta denuncia penal por peculado y uso indebido de recursos ante Fiscalía Anticorrupción de Chihuahua (22 de junio)"
      }
    ],
    "sources": [
      {
        "label": "El Diario de Chihuahua",
        "url": "https://www.eldiariodechihuahua.mx/estado/2026/jun/23/el-pri-denuncia-por-peculado-a-la-alcaldesa-de-guadalupe-y-calvo-810665.html"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 318,
    "name": "Alessandra Rojo de la Vega",
    "role": "Alcaldesa de Cuauhtémoc, CDMX",
    "party": "PVEM",
    "state": "Ciudad de México",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 3,
      "fiscalizacion": 6,
      "funcionarios": 2,
      "deuda": 3,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Sin proceso penal.",
      "fiscalizacion": "Sin hallazgos de fiscalización formal documentados.",
      "funcionarios": "Sin red documentada.",
      "deuda": "Sin daño patrimonial documentado.",
      "denuncias": "Una de las funcionarias más señaladas ante el IECM por actos anticipados de campaña, promoción personalizada y uso indebido de recursos públicos con miras al proceso electoral (2026).",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "IECM la señala entre los funcionarios más denunciados por actos anticipados de campaña"
      }
    ],
    "sources": [
      {
        "label": "El Universal — IECM",
        "url": "https://www.eluniversal.com.mx/metropoli/denuncian-actos-anticipados-de-campana-en-cdmx-iecm-reporta-39-quejas/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 319,
    "name": "Janecarlo Lozano",
    "role": "Alcalde de Gustavo A. Madero, CDMX",
    "party": "MORENA",
    "state": "Ciudad de México",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 3,
      "fiscalizacion": 5,
      "funcionarios": 2,
      "deuda": 3,
      "denuncias": 6,
      "evasion": 2,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Sin proceso penal.",
      "fiscalizacion": "Sin hallazgos formales.",
      "funcionarios": "Sin red documentada.",
      "deuda": "Sin daño patrimonial documentado.",
      "denuncias": "Investigado por el IECM por presuntos actos anticipados de precampaña y promoción personalizada (2026).",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "IECM abre investigación por actos anticipados de precampaña"
      }
    ],
    "sources": [
      {
        "label": "La Verdad Noticias",
        "url": "https://laverdadnoticias.com/ultimas-noticias/politica/ley-electoral-en-cdmx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 320,
    "name": "Giovani Gutiérrez",
    "role": "Alcalde de Coyoacán, CDMX",
    "party": "MORENA",
    "state": "Ciudad de México",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 3,
      "funcionarios": 2,
      "deuda": 2,
      "denuncias": 8,
      "evasion": 2,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Sin proceso penal.",
      "fiscalizacion": "Sin hallazgos de fiscalización.",
      "funcionarios": "Sin red documentada.",
      "deuda": "Sin daño patrimonial documentado.",
      "denuncias": "Investigado por el IECM por posibles actos de violencia política de género, falta considerada grave en el marco electoral.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "IECM abre indagatoria por violencia política de género"
      }
    ],
    "sources": [
      {
        "label": "La Verdad Noticias",
        "url": "https://laverdadnoticias.com/ultimas-noticias/politica/ley-electoral-en-cdmx"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 321,
    "name": "Daniel Asaf",
    "role": "Diputado Federal",
    "party": "MORENA",
    "state": "Federal",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 10,
      "fiscalizacion": 15,
      "funcionarios": 12,
      "deuda": 14,
      "denuncias": 9,
      "evasion": 4,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin sentencia formal. Señalado en la red de huachicol fiscal por versiones periodísticas.",
      "fiscalizacion": "Señalado como la figura que articulaba acuerdos y daba órdenes desde Palacio Nacional en la red de huachicol fiscal, controlando contratos, licitaciones y asignaciones directas en Pemex.",
      "funcionarios": "Operaba junto con Marcos Herrería Alamina (director corporativo de Pemex, cuñado de Pedro López Obrador). Su primo Antonio Martínez Dagnino Asaf es titular del SAT.",
      "deuda": "Vinculado al esquema de huachicol fiscal que representó pérdidas de aproximadamente $123,000M anuales según el Observatorio Ciudadano de Energía (2025).",
      "denuncias": "Documentado por PolíticoMX entre \"los personajes de la 4T en la mira por huachicol fiscal\".",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Primo (titular del SAT) y red de parentescos con funcionarios de Pemex dentro del mismo esquema."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "Señalado en investigaciones periodísticas sobre la red de huachicol fiscal desde Palacio Nacional"
      }
    ],
    "sources": [
      {
        "label": "PolíticoMX",
        "url": "https://politico.mx/2026/05/13/los-personajes-de-la-4t-en-la-mira-por-huachicol-fiscal/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 322,
    "name": "Antonio Martínez Dagnino Asaf",
    "role": "Titular del Servicio de Administración Tributaria (SAT)",
    "party": "MORENA",
    "state": "Federal",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 15,
      "funcionarios": 10,
      "deuda": 14,
      "denuncias": 8,
      "evasion": 4,
      "nepotismo": 8
    },
    "breakdown": {
      "sentencias": "Sin sentencia formal.",
      "fiscalizacion": "Como titular del SAT, la institución encargada de combatir el contrabando fiscal, es señalado dentro de la propia red de huachicol fiscal que debía combatir.",
      "funcionarios": "Primo de Daniel Asaf, diputado señalado como operador central del esquema.",
      "deuda": "Vinculado al esquema que generó pérdidas fiscales estimadas en $123,000M anuales.",
      "denuncias": "Documentado por PolíticoMX entre los funcionarios señalados en el huachicol fiscal.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Parentesco directo (primo) con el diputado señalado como articulador del esquema, mientras dirige la institución que debería fiscalizarlo."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "Señalado en la red de huachicol fiscal pese a dirigir la institución fiscal del Estado"
      }
    ],
    "sources": [
      {
        "label": "PolíticoMX",
        "url": "https://politico.mx/2026/05/13/los-personajes-de-la-4t-en-la-mira-por-huachicol-fiscal/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 323,
    "name": "José Ramón Gómez Leal",
    "role": "Senador de la República",
    "party": "MORENA",
    "state": "Tamaulipas",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 10,
      "fiscalizacion": 14,
      "funcionarios": 8,
      "deuda": 12,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Sin sentencia. Un informe de la SSPC incorporado a investigaciones de la FGR lo vincula directamente con la red (julio 2026).",
      "fiscalizacion": "Vinculado a la red de corrupción y contrabando de hidrocarburos que operaba en la Aduana de Matamoros.",
      "funcionarios": "Parte de la red de huachicol fiscal en Tamaulipas junto con otros operadores señalados.",
      "deuda": "Contrabando de hidrocarburos en una de las aduanas más activas del país.",
      "denuncias": "Informe oficial de la SSPC, no solo señalamiento periodístico, lo relaciona con la red.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "Informe de la SSPC lo vincula con la red de huachicol fiscal en la Aduana de Matamoros (julio)"
      }
    ],
    "sources": [
      {
        "label": "Reforma",
        "url": "https://www.reforma.com/salpican-a-senador-en-red-de-huachicol/ar3236442"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 324,
    "name": "Erasmo González",
    "role": "Diputado Federal",
    "party": "MORENA",
    "state": "Tamaulipas",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 12,
      "funcionarios": 6,
      "deuda": 12,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Sin sentencia formal. Señalado en denuncia formal de senadores del PAN ante la FGR.",
      "fiscalizacion": "Nombrado en denuncia por presunto financiamiento ilegal de campañas con recursos del huachicol fiscal.",
      "funcionarios": "Vinculado con operadores financieros de Morena en Tamaulipas cercanos al gobernador Villarreal.",
      "deuda": "Señalado dentro del esquema de financiamiento de $500M documentado en grabaciones de operadores morenistas.",
      "denuncias": "Nombrado expresamente en la denuncia formal presentada por senadores del PAN ante la FGR (abril 2024, ampliada en 2026).",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2024",
        "event": "Senadores del PAN lo señalan en denuncia formal ante la FGR por financiamiento ilegal con huachicol"
      }
    ],
    "sources": [
      {
        "label": "PAN Senado",
        "url": "https://www.pan.senado.gob.mx/2024/04/denuncian-senadores-ante-fgr-presunto-financiamiento-ilegal-a-morena/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 325,
    "name": "Andrés Manuel \"Andy\" López Beltrán",
    "role": "Hijo del expresidente AMLO / Figura política de Morena",
    "party": "MORENA",
    "state": "Federal",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 14,
      "funcionarios": 6,
      "deuda": 13,
      "denuncias": 10,
      "evasion": 5,
      "nepotismo": 8
    },
    "breakdown": {
      "sentencias": "Denunciado por diputados del PAN (Federico Döring y Marcelo Torres Cofiño) ante la FGR en septiembre 2025 por conspiración, delincuencia organizada, tráfico de hidrocarburos, contrabando, encubrimiento, operaciones con recursos ilícitos, asociación delictuosa, tráfico de influencia y enriquecimiento ilícito bajo el nombre \"Cártel del Palenque\".",
      "fiscalizacion": "Investigaciones del FBI y el IRS en Texas sobre la empresa Icon Midstream señalan presuntos vínculos con esquema de importación irregular de combustible.",
      "funcionarios": "Vinculado con la red de huachicol fiscal que involucra a exmandos militares, empresarios y funcionarios del gobierno federal.",
      "deuda": "Señalado dentro del entramado que la ASF y organizaciones ciudadanas estiman en pérdidas de $123,000M anuales para el erario.",
      "denuncias": "Denuncia formal de diputados federales del PAN. Investigación de agencias estadounidenses (FBI, IRS) en curso.",
      "evasion": "Sin evasión documentada hasta el momento.",
      "nepotismo": "Hijo del expresidente López Obrador, mencionado como uno de los nombres \"más mediáticos\" del escándalo, junto con su hermano Gonzalo Alfonso."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Diputados del PAN lo denuncian formalmente ante la FGR (septiembre)"
      },
      {
        "year": "2026",
        "event": "Persisten investigaciones del FBI/IRS sobre Icon Midstream en Texas"
      }
    ],
    "sources": [
      {
        "label": "PolíticoMX — Huachicol fiscal",
        "url": "https://politico.mx/2026/05/13/los-personajes-de-la-4t-en-la-mira-por-huachicol-fiscal/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 326,
    "name": "Gonzalo Alfonso López Beltrán",
    "role": "Hijo del expresidente AMLO / Figura política de Morena",
    "party": "MORENA",
    "state": "Federal",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 12,
      "funcionarios": 5,
      "deuda": 11,
      "denuncias": 9,
      "evasion": 4,
      "nepotismo": 8
    },
    "breakdown": {
      "sentencias": "Denunciado junto con su hermano ante la FGR por diputados del PAN en septiembre 2025 bajo los mismos cargos del caso \"Cártel del Palenque\".",
      "fiscalizacion": "Investigado dentro del mismo entramado señalado contra su hermano Andy.",
      "funcionarios": "Vinculado a la misma red de huachicol fiscal.",
      "deuda": "Parte del entramado que representa pérdidas estimadas en $123,000M anuales para el erario.",
      "denuncias": "Denuncia formal de diputados federales del PAN.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Hijo del expresidente López Obrador, señalado junto con su hermano en el mismo caso."
    },
    "timeline": [
      {
        "year": "2025",
        "event": "Denunciado junto con su hermano ante la FGR (septiembre)"
      }
    ],
    "sources": [
      {
        "label": "PolíticoMX",
        "url": "https://politico.mx/2026/05/13/los-personajes-de-la-4t-en-la-mira-por-huachicol-fiscal/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 327,
    "name": "Samuel García Sepúlveda",
    "role": "Gobernador de Nuevo León (2021-presente)",
    "party": "MC",
    "state": "Nuevo León",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 17,
      "funcionarios": 6,
      "deuda": 15,
      "denuncias": 10,
      "evasion": 4,
      "nepotismo": 8
    },
    "breakdown": {
      "sentencias": "Sin sentencia. Congreso de Nuevo León aprobó iniciar juicio político en su contra (junio 2026) por presunta triangulación de recursos.",
      "fiscalizacion": "Denunciado ante la FGR por Morena Nuevo León por triangulación de $1,400M. Contratos estatales otorgados a proveedores (como \"Suministro MYR\") que transfirieron fondos a intermediarias, terminando en un despacho jurídico donde su propio padre, Samuel Orlando García Mascorro, es socio principal y beneficiario directo.",
      "funcionarios": "Funcionarios señalados en denuncias: Emmanuel Loo (subsecretario), Marco Antonio González Valdez (secretario de Desarrollo Regional), Bernardo Bichara Assad (Parque Fundidora), Javier Luis Navarro Velasco (coordinador de Gabinete).",
      "deuda": "Triangulación denunciada por $1,400M según Morena NL. Uso de un helicóptero Black Hawk asignado a Fuerza Civil para fines recreativos (trasladarse a ver un partido). Parte de los recursos habría sido enviada a Estados Unidos para dificultar rastreo, según la denuncia.",
      "denuncias": "Denunciado simultáneamente por Morena (peculado, triangulación) y por PAN/PRI (uso indebido de recursos durante el Mundial 2026: playeras, cervezas, promoción personalizada). Oposición exige que solicite licencia para enfrentar el proceso sin fuero.",
      "evasion": "Mantiene el cargo con protección de fuero constitucional pese a las denuncias y el juicio político en curso.",
      "nepotismo": "CASO DIRECTO: su propio padre es socio principal del despacho jurídico que recibió los fondos triangulados, según la denuncia. Su esposa Mariana Rodríguez también denunciada por beneficiarse de recursos para promoción personal."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Nuevo León"
      },
      {
        "year": "2026",
        "event": "Mayo: Morena denuncia triangulación de $1,400M ante la FGR. Junio: Congreso NL aprueba juicio político. Julio: PAN/PRI denuncian uso de recursos durante el Mundial."
      }
    ],
    "sources": [
      {
        "label": "La Jornada — Denuncia Morena",
        "url": "https://www.jornada.com.mx/noticia/2026/05/26/politica/morena-nl-denuncia-a-samuel-garcia-ante-fgr-lo-senalan-de-corrupcion"
      },
      {
        "label": "Infobae — Juicio político",
        "url": "https://www.infobae.com/mexico/2026/06/12/aprueban-juicio-politico-contra-samuel-garcia-por-presunta-triangulacion-de-recursos-publicos/"
      },
      {
        "label": "Proceso — Mundial 2026",
        "url": "https://www.proceso.com.mx/nacional/estados/2026/7/2/acusan-a-samuel-garcia-y-mariana-por-usar-fondos-publicos-en-mundial-para-promover-a-mc-375245.html"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 328,
    "name": "Mariana Rodríguez Cantú",
    "role": "Esposa del Gobernador de Nuevo León / Figura pública con recursos públicos asignados",
    "party": "MC",
    "state": "Nuevo León",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 12,
      "funcionarios": 2,
      "deuda": 10,
      "denuncias": 9,
      "evasion": 3,
      "nepotismo": 9
    },
    "breakdown": {
      "sentencias": "Sin sentencia. Incluida en la denuncia penal de Morena ante la FGR junto con su esposo (mayo 2026).",
      "fiscalizacion": "Señalada de beneficiarse directamente de recursos triangulados para financiar \"promoción personalizada y costosas campañas digitales\".",
      "funcionarios": "Sin red propia; opera dentro del entorno del gobernador.",
      "deuda": "Parte de los $1,400M denunciados por triangulación de recursos públicos estatales.",
      "denuncias": "Denunciada también por PAN/PRI por uso de recursos públicos durante el Mundial 2026 para promoción personal y del partido MC.",
      "evasion": "Sin cargo público formal, lo que ha sido señalado como una forma de operar sin las restricciones de transparencia que aplican a servidores públicos.",
      "nepotismo": "CASO DIRECTO: beneficiaria de recursos públicos pese a no ocupar cargo formal, únicamente por su relación conyugal con el gobernador."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "Denunciada junto con su esposo por triangulación de $1,400M (mayo) y uso de recursos en el Mundial (julio)"
      }
    ],
    "sources": [
      {
        "label": "El Informador",
        "url": "https://www.informador.mx/mexico/morena-en-nuevo-leon-denuncia-a-samuel-garcia-ante-la-fgr-por-corrupcion-lo-acusan-de-desvio-millonario-20260526-0176.html"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 329,
    "name": "Evelyn Salgado Pineda",
    "role": "Gobernadora de Guerrero (2021-presente)",
    "party": "MORENA",
    "state": "Guerrero",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 3,
      "fiscalizacion": 8,
      "funcionarios": 10,
      "deuda": 9,
      "denuncias": 9,
      "evasion": 4,
      "nepotismo": 15
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal.",
      "fiscalizacion": "Sin hallazgos formales de fiscalización publicados, pero señalamientos de asignación de obras dirigida a empresas ligadas a su entorno familiar.",
      "funcionarios": "Su esposo Rubén Hernández Fuentes fungió como jefe de gabinete cobrando $58,000 mensuales mientras sostenía relación con ella (confirmada por acta de matrimonio vía transparencia). Su hermano Óscar Omar Hernández Fuentes es director de Costos, Presupuestos, Licitaciones y Contratos en la Secretaría de Desarrollo Urbano y Obras Públicas del estado.",
      "deuda": "Según Reforma, ambos hermanos Hernández Fuentes controlarían la asignación de obras del Gobierno de Guerrero con empresas constructoras a través de esa Secretaría.",
      "denuncias": "Caso confirmado por solicitud de transparencia (no rumor): existe registro oficial de matrimonio con su entonces subordinado. Su padre, el senador Félix Salgado Macedonio, busca sucederla en 2027 pese a las reglas antinepotismo de Morena.",
      "evasion": "Negó reiteradamente la boda en público antes de reconocerla en su informe de gobierno de 2025.",
      "nepotismo": "CASO EXTREMO documentado con evidencia oficial: se casó con su propio subordinado (jefe de gabinete) mientras él seguía en la nómina del gobierno estatal. El hermano del esposo controla licitaciones de obra pública. Su padre, senador, busca sucederla en la gubernatura."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Guerrero"
      },
      {
        "year": "2023",
        "event": "Inicia relación con su jefe de gabinete, Rubén Hernández Fuentes, mientras él sigue en nómina"
      },
      {
        "year": "2024",
        "event": "Se casan en diciembre. Solicitud de transparencia confirma el matrimonio en agosto 2025."
      },
      {
        "year": "2025",
        "event": "Reconoce públicamente la relación en su informe de gobierno"
      },
      {
        "year": "2026",
        "event": "Su padre Félix Salgado busca sucederla pese a reglas antinepotismo de Morena"
      }
    ],
    "sources": [
      {
        "label": "Etcétera — Confirmación oficial",
        "url": "https://etcetera.com.mx/nacional/nepotismo-evelyn-salgado-pineda-ruben-hernandez-fuentes-fue-funcionario/"
      },
      {
        "label": "PolíticoMX — Familiares en el gobierno",
        "url": "https://politico.mx/2025/01/17/fotos-nepotismo-ellos-son-los-familiares-de-evelyn-y-felix-salgado-macedonio-en-el-gobierno-de-guerrero/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 330,
    "name": "Rubén Hernández Fuentes",
    "role": "Esposo de la Gobernadora de Guerrero / Coordinador Operativo del Gobierno",
    "party": "MORENA",
    "state": "Guerrero",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 3,
      "fiscalizacion": 8,
      "funcionarios": 5,
      "deuda": 8,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 15
    },
    "breakdown": {
      "sentencias": "Sin proceso penal.",
      "fiscalizacion": "Cobraba $58,000 mensuales como \"subsecretario de despacho\" mientras sostenía relación sentimental no declarada con la gobernadora.",
      "funcionarios": "Su hermano Óscar Omar Hernández Fuentes es director de Costos, Presupuestos, Licitaciones y Contratos en la Secretaría de Desarrollo Urbano y Obras Públicas.",
      "deuda": "Según Reforma, controla junto con su hermano la asignación de obras públicas del estado con empresas constructoras.",
      "denuncias": "Empresarios guerrerenses han señalado que \"hay que estar bien con ellos\" para obtener contratos de obra pública, según testimonios recabados desde 2023.",
      "evasion": "La relación se mantuvo oculta durante el periodo en que él era subordinado directo de ella en el gobierno.",
      "nepotismo": "CASO DIRECTO: ascendió de subsecretario a jefe de gabinete y luego a coordinador operativo mientras sostenía relación con su superiora jerárquica, con quien finalmente se casó."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Se incorpora al gobierno de Guerrero"
      },
      {
        "year": "2023",
        "event": "Inicia relación con la gobernadora mientras es su subordinado"
      },
      {
        "year": "2024",
        "event": "Contrae matrimonio con Evelyn Salgado (diciembre)"
      }
    ],
    "sources": [
      {
        "label": "Periódico Enfoque",
        "url": "https://www.periodicoenfoque.com.mx/estados/quien-es-ruben-hernandez-el-futuro-esposo-de-evelyn-salgado"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 331,
    "name": "Félix Salgado Macedonio",
    "role": "Senador de la República / Padre de la gobernadora de Guerrero",
    "party": "MORENA",
    "state": "Guerrero",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 6,
      "fiscalizacion": 4,
      "funcionarios": 3,
      "deuda": 3,
      "denuncias": 9,
      "evasion": 5,
      "nepotismo": 15
    },
    "breakdown": {
      "sentencias": "Múltiples denuncias por presunto acoso sexual documentadas por medios, sin condena hasta el momento. Su candidatura a gobernador fue cancelada en 2021 por autoridades electorales.",
      "fiscalizacion": "Sin hallazgos de fiscalización directos contra él.",
      "funcionarios": "Red familiar extensa colocada en el gobierno de Guerrero durante la gestión de su hija.",
      "deuda": "Sin daño patrimonial directo documentado.",
      "denuncias": "Acusaciones de acoso sexual ampliamente documentadas. Militantes de su propio partido en Guerrero piden que se le investiguen \"vínculos con la delincuencia o antecedentes de corrupción\" antes de permitir su candidatura 2027.",
      "evasion": "Insiste en buscar la gubernatura pese a las reglas antinepotismo internas de Morena, argumentando que constitucionalmente tiene el derecho.",
      "nepotismo": "CASO MÁXIMO: busca suceder directamente a su propia hija como gobernador de Guerrero, en abierto desafío a las reglas antinepotismo que su propio partido estableció. Otros familiares (sobrina Carvajal Salgado) también han buscado cargos de elección popular en el estado."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Candidatura a gobernador cancelada por autoridades electorales. Su hija Evelyn asume el cargo en su lugar."
      },
      {
        "year": "2026",
        "event": "Insiste públicamente en buscar sucederla en 2027 pese a las reglas antinepotismo de Morena"
      }
    ],
    "sources": [
      {
        "label": "La Política Online",
        "url": "https://www.lapoliticaonline.com/mexico/politica-mx/felix-rumbo-al-2027-planea-remover-a-evelyn-para-eludir-la-ley-anti-nepotismo-de-sheinbaum/"
      },
      {
        "label": "Grupo Animal",
        "url": "https://grupoanimal.mx/estados/felix-salgado-ley-suceder-hija-guerrero-no-rompera-morena"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 332,
    "name": "Rutilio Escandón Cadenas",
    "role": "Cónsul General de México en Miami / Exgobernador de Chiapas (2018-2024)",
    "party": "MORENA",
    "state": "Chiapas",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 18,
      "funcionarios": 10,
      "deuda": 15,
      "denuncias": 10,
      "evasion": 6,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Bajo investigación de EE.UU. (Departamento de Estado) por presuntos vínculos con \"La Barredora\" y el CJNG durante su gestión como gobernador. Denuncia del exgobernador interino Willy Ochoa ante oficinas del Secretario de Estado Marco Rubio.",
      "fiscalizacion": "ASF y SFP documentaron desvío de $2,576M a través de 10 empresas factureras (Comercializadora TGZ, SAHEC Comercial, Productos Médicos Takahashi, entre otras) durante 2 años de su gestión.",
      "funcionarios": "Exsecretario de Obras Públicas adquirió propiedades de lujo en Tuxtla Gutiérrez y San Cristóbal incompatibles con su declaración patrimonial. Denuncias sin investigación seria por control político del Congreso estatal.",
      "deuda": "$2,576M desviados según ASF. Casa de $26M \"desaparecida\" de sus declaraciones patrimoniales tras dejar el cargo. 17 inmuebles declarados con ingresos de $3.87M anuales que no justifican el patrimonio.",
      "denuncias": "PRI anunció denuncias formales en EE.UU. Senador del PVEM (Luis Armando Melgar) exigió públicamente su renuncia por \"corrupción documentada, empresas fantasma, contratos millonarios\". Cuñado de Adán Augusto López, ambos bajo investigación conjunta de EE.UU.",
      "evasion": "Fue nombrado cónsul en Miami tras dejar la gubernatura, obteniendo protección diplomática. Su antecesor en el consulado renunció exhibiendo su desempeño.",
      "nepotismo": "Esposa Rosalinda López Hernández es hermana del senador Adán Augusto López. Parte del \"Grupo Tabasco\" liderado por su cuñado. Hija exhibida en redes con lujos (bolso de más de $100K)."
    },
    "timeline": [
      {
        "year": "2018",
        "event": "Asume gubernatura de Chiapas"
      },
      {
        "year": "2020",
        "event": "Inicia periodo de desvío documentado por ASF: $2,576M vía empresas factureras"
      },
      {
        "year": "2024",
        "event": "Termina gubernatura. Nombrado cónsul general en Miami."
      },
      {
        "year": "2026",
        "event": "Bajo investigación de EE.UU. PRI y PVEM exigen su renuncia. Denuncia formal ante oficinas de Marco Rubio."
      }
    ],
    "sources": [
      {
        "label": "Excélsior — Opacidad",
        "url": "https://www.excelsior.com.mx/nacional/el-gobernador-de-chiapas-rutilio-escandon-cierra-los-ojos-ante-corrupcion/1680694"
      },
      {
        "label": "PolíticoMX — Declaración patrimonial",
        "url": "https://politico.mx/2026/02/04/melgar-exige-salida-de-rutilio-escandon-y-el-senador-pepe-cruz-y-estos-ladrones-para-cuando-renuncian/"
      },
      {
        "label": "Sin Fronteras Agencias — Investigación EE.UU.",
        "url": "https://www.sinfronterasagencias.com/?p=72170"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 333,
    "name": "José \"Pepe\" Cruz",
    "role": "Senador de la República",
    "party": "MORENA",
    "state": "Tabasco",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 6,
      "fiscalizacion": 12,
      "funcionarios": 6,
      "deuda": 10,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 6
    },
    "breakdown": {
      "sentencias": "Sin sentencia. Señalado públicamente por corrupción documentada según senador del PVEM.",
      "fiscalizacion": "Señalado por empresas fantasma y contratos millonarios según investigaciones periodísticas citadas en el Senado.",
      "funcionarios": "Parte del \"Grupo Tabasco\" liderado por el senador Adán Augusto López Hernández.",
      "deuda": "Vinculado a redes de impunidad con contratos millonarios, según denuncia pública de senador opositor.",
      "denuncias": "El senador Luis Armando Melgar (PVEM) exigió públicamente su renuncia, calificando el caso de \"corrupción documentada\" con \"investigaciones periodísticas, datos y expedientes\".",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Pertenencia al mismo grupo político familiar/regional (Grupo Tabasco) que otros funcionarios señalados."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "Senador del PVEM exige públicamente su renuncia por corrupción documentada (febrero)"
      }
    ],
    "sources": [
      {
        "label": "PolíticoMX",
        "url": "https://politico.mx/2026/02/04/melgar-exige-salida-de-rutilio-escandon-y-el-senador-pepe-cruz-y-estos-ladrones-para-cuando-renuncian/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 334,
    "name": "Linda Pérez Quijano",
    "role": "Alcaldesa de Conkal, Yucatán",
    "party": "PAN",
    "state": "Yucatán",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 16,
      "funcionarios": 3,
      "deuda": 12,
      "denuncias": 8,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal, aunque señalada en investigación de Sol Yucatán.",
      "fiscalizacion": "Sobrecosto documentado: repavimentación de una sola calle (200m x 5m) facturada en $1.6M, cinco veces el costo real de mercado.",
      "funcionarios": "Sin red de funcionarios documentada.",
      "deuda": "No pudo comprobar el paradero de $6,930,274.51 pesos de recursos públicos, según revisión de cuenta pública.",
      "denuncias": "Documentada en investigación periodística \"Tres alcaldes desviaron 34 MDP\" de Sol Yucatán, con cifras específicas de la Auditoría Superior del Estado.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2024",
        "event": "Asume alcaldía de Conkal"
      },
      {
        "year": "2026",
        "event": "Investigación periodística documenta sobrecostos y $6.9M sin comprobar"
      }
    ],
    "sources": [
      {
        "label": "Sol Yucatán — Investigación",
        "url": "https://solyucatan.mx/tres-alcaldes-desviaron-34-mdp/"
      },
      {
        "label": "Sol Yucatán — Año de Hidalgo",
        "url": "https://solyucatan.mx/alcaldes-en-el-ano-de-hidalgo/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 335,
    "name": "Francisco Medina Martín",
    "role": "Alcalde de Chichimilá, Yucatán",
    "party": "Sin dato",
    "state": "Yucatán",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 14,
      "funcionarios": 5,
      "deuda": 12,
      "denuncias": 8,
      "evasion": 5,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal.",
      "fiscalizacion": "Acumulación de patrimonio incompatible con su salario público durante su gestión.",
      "funcionarios": "Busca dejar a su tesorero como sucesor para mantener protección política, según denuncias ciudadanas.",
      "deuda": "Más de $23M en tierras y propiedades repartidas por todo Yucatán, acumuladas durante su gestión como alcalde.",
      "denuncias": "Ciudadanos de Chichimilá documentan públicamente el caso, calificándolo de \"cacique\" que se enriquece mientras el municipio permanece en pobreza.",
      "evasion": "Pacta con sucesor (su tesorero) para mantener protección política y continuidad del esquema.",
      "nepotismo": "Designación de tesorero de su confianza como sucesor para blindar el esquema."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "Ciudadanos documentan acumulación de más de $23M en propiedades"
      }
    ],
    "sources": [
      {
        "label": "Sol Yucatán",
        "url": "https://solyucatan.mx/tres-alcaldes-desviaron-34-mdp/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 336,
    "name": "Pablo Alejandro Cutz Domínguez",
    "role": "Alcalde de Mocochá, Yucatán",
    "party": "Sin dato",
    "state": "Yucatán",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 14,
      "funcionarios": 3,
      "deuda": 11,
      "denuncias": 6,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal.",
      "fiscalizacion": "Revisión de cuenta pública por la Auditoría Superior del Estado de Yucatán detectó irregularidades.",
      "funcionarios": "Sin red documentada.",
      "deuda": "No pudo comprobar el paradero de más de $4M, muchos de ellos emitidos en cheques a su propio nombre.",
      "denuncias": "Parte de la investigación conjunta de Sol Yucatán sobre 3 municipios con $34M en irregularidades combinadas.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "Auditoría revela más de $4M sin comprobar, varios en cheques a su nombre"
      }
    ],
    "sources": [
      {
        "label": "Sol Yucatán",
        "url": "https://solyucatan.mx/tres-alcaldes-desviaron-34-mdp/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 337,
    "name": "Leonor Chan Uicab",
    "role": "Oficial Mayor de Kanasín, Yucatán / Exalcalde",
    "party": "PAN",
    "state": "Yucatán",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 6,
      "fiscalizacion": 14,
      "funcionarios": 3,
      "deuda": 8,
      "denuncias": 7,
      "evasion": 8,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal, pero incumplimiento activo de mandato judicial (queja 1/2026).",
      "fiscalizacion": "Como alcalde, construyó un basurero municipal en 2011 declarando un gasto de $10M sin las medidas ambientales requeridas por PROFEPA.",
      "funcionarios": "Continúa en el gobierno municipal como Oficial Mayor en la administración actual.",
      "deuda": "$10M declarados en construcción de basurero que se convirtió en foco de contaminación de aire y agua.",
      "denuncias": "PROFEPA y un juez evidenciaron la falta de medidas ambientales, calificándolo como fuente de graves daños patrimoniales.",
      "evasion": "Se niega a cumplir el mandato judicial de clausura del basurero pese a suspensión provisional concedida en la queja 1/2026.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2011",
        "event": "Como alcalde, construye basurero municipal declarando $10M de gasto"
      },
      {
        "year": "2026",
        "event": "Juez ordena clausura por incumplimiento ambiental. El actual Oficial Mayor se niega a acatar."
      }
    ],
    "sources": [
      {
        "label": "Sol Yucatán",
        "url": "https://solyucatan.mx/alcaldes-en-el-ano-de-hidalgo/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 338,
    "name": "Ismael Burgueño Ruiz",
    "role": "Presidente Municipal de Tijuana, Baja California",
    "party": "MORENA",
    "state": "Baja California",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 12,
      "fiscalizacion": 8,
      "funcionarios": 5,
      "deuda": 8,
      "denuncias": 9,
      "evasion": 7,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Investigado por la FEMDO de la FGR por operaciones con recursos de procedencia ilícita (carpeta FED/FEMDO/FIEDMHDARV/BC/0000556/2025). Fue citado a comparecer como imputado en noviembre 2025 y no se presentó.",
      "fiscalizacion": "Denuncia anónima presentada en octubre de 2025 relacionada con presunto lavado de dinero.",
      "funcionarios": "Dado de baja un agente de movilidad captado en presunto acto de corrupción durante su gestión.",
      "deuda": "Sin monto específico documentado más allá de la investigación por lavado de dinero.",
      "denuncias": "Se negó a comparecer ante la FGR en la fecha citada (noviembre 2025). Posteriormente presentó documento asegurando el \"no ejercicio de acción penal\" (mayo 2026), aunque el proceso generó amplia cobertura mediática y cuestionamientos.",
      "evasion": "No acudió a la cita de comparecencia programada por la FGR en Paseo de la Reforma. Amagó con demandar a medios que publicaron los citatorios en su contra.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2024",
        "event": "Asume presidencia municipal de Tijuana"
      },
      {
        "year": "2025",
        "event": "Octubre: denuncia anónima por lavado de dinero. Noviembre: citado por FEMDO/FGR, no comparece."
      },
      {
        "year": "2026",
        "event": "Mayo: presenta documento de no ejercicio de acción penal. Anuncia licencia para buscar candidatura de Morena rumbo a 2027."
      }
    ],
    "sources": [
      {
        "label": "La Prensa — Se niega a comparecer",
        "url": "https://oem.com.mx/la-prensa/mexico/alcalde-de-tijuana-se-niega-a-comparecer-acusado-de-presunta-corrupcion-y-delincuencia-organizada-26861056"
      },
      {
        "label": "Proceso — Ya no lo investiga",
        "url": "https://www.proceso.com.mx/nacional/estados/2026/6/19/alcalde-de-tijuana-asegura-que-ya-no-lo-investiga-la-femdo-de-la-fgr-374339.html"
      },
      {
        "label": "Reporte Naranja",
        "url": "https://reportenaranja.com.mx/contra-alcalde/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 339,
    "name": "Montserrat Caballero Ramírez",
    "role": "Exalcaldesa de Tijuana, Baja California",
    "party": "MORENA",
    "state": "Baja California",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 15,
      "funcionarios": 5,
      "deuda": 12,
      "denuncias": 8,
      "evasion": 4,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Investigada por la Fiscalía Especializada en Delitos de Corrupción de Baja California, sin sentencia formal.",
      "fiscalizacion": "Investigada por presunto uso ilegal de recursos públicos por $37M y desvío de recursos mediante contratos de adjudicación directa.",
      "funcionarios": "Sin red de funcionarios específicamente documentada.",
      "deuda": "$37M en presunto uso ilegal de recursos públicos durante su gestión como alcaldesa.",
      "denuncias": "Investigación formal de la Fiscalía Especializada en Delitos de Corrupción del estado de Baja California.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume alcaldía de Tijuana"
      },
      {
        "year": "2024",
        "event": "Termina gestión. Bajo investigación por $37M en adjudicaciones directas irregulares."
      }
    ],
    "sources": [
      {
        "label": "Reporte Naranja",
        "url": "https://reportenaranja.com.mx/contra-alcalde/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 340,
    "name": "Carmen Albarrán",
    "role": "Presidenta Municipal de Donato Guerra, Estado de México",
    "party": "MORENA/PT/PVEM",
    "state": "Estado de México",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 10,
      "fiscalizacion": 16,
      "funcionarios": 5,
      "deuda": 14,
      "denuncias": 7,
      "evasion": 3,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "La Auditoría Superior de la Federación presentó 3 denuncias penales ante la FGR en su contra (junio 2026), correspondientes a la Cuenta Pública 2024.",
      "fiscalizacion": "Su municipio concentra 3 de las 21 denuncias penales del paquete de la ASF, el segundo mayor número después de Alvarado y Nayarit.",
      "funcionarios": "Parte del conjunto de 30-31 servidores públicos denunciados en el mismo paquete de irregularidades.",
      "deuda": "Parte del daño patrimonial conjunto de $600M documentado por la ASF en el paquete de 21 denuncias.",
      "denuncias": "ASF también presentó 30 expedientes de responsabilidad administrativa grave por colusión y contratación indebida en el mismo informe.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume presidencia municipal de Donato Guerra por la coalición Morena-PT-PVEM"
      },
      {
        "year": "2026",
        "event": "ASF presenta 3 denuncias penales por irregularidades en Cuenta Pública 2024 (junio)"
      }
    ],
    "sources": [
      {
        "label": "La Jornada — ASF 21 denuncias",
        "url": "https://www.jornada.com.mx/noticia/2026/07/01/politica/asf-interpone-21-denuncias-penales-por-el-presunto-desvio-de-600-mdp"
      },
      {
        "label": "La Razón — Detalle municipios",
        "url": "https://www.razon.com.mx/mexico/2026/06/30/auditoria-superior-presenta-21-denuncias-por-dano-de-mas-de-600-mdp/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 341,
    "name": "Javier Lamarque Cano",
    "role": "Presidente Municipal de Cajeme, Sonora (con licencia)",
    "party": "MORENA",
    "state": "Sonora",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 8,
      "funcionarios": 8,
      "deuda": 5,
      "denuncias": 10,
      "evasion": 6,
      "nepotismo": 6
    },
    "breakdown": {
      "sentencias": "Sin sentencia penal formal.",
      "fiscalizacion": "Denuncias ciudadanas documentadas en redes sociales sobre presuntos actos de corrupción en su administración municipal.",
      "funcionarios": "Señalado por proteger a policías municipales con presuntos vínculos al crimen organizado, según denuncias ciudadanas ampliamente difundidas.",
      "deuda": "Sin monto específico documentado, aunque hay señalamientos de irregularidades administrativas con sanciones y despidos reconocidos por su propia administración.",
      "denuncias": "Una página en redes sociales documenta sistemáticamente presuntos actos de corrupción y nexos de la policía municipal con el crimen organizado. El alcalde reconoció que en casos con sustento se han aplicado sanciones administrativas y despidos.",
      "evasion": "Solicitó licencia de 90 días para buscar el proceso interno de Morena rumbo a la gubernatura de Sonora, en medio de los señalamientos. Su hijastro Plutarco Sánchez Patiño ocupa cargos en SADER y busca ser consejero estatal de Morena.",
      "nepotismo": "Su hijastro forma parte de su entorno político cercano con cargos en dependencias federales y aspiraciones dentro de Morena."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume presidencia municipal de Cajeme"
      },
      {
        "year": "2026",
        "event": "Enero: denuncias públicas por proteger policías con nexos criminales. Solicita licencia de 90 días para buscar candidatura a gobernador de Sonora."
      }
    ],
    "sources": [
      {
        "label": "Infobae — Denuncias",
        "url": "https://www.infobae.com/mexico/2026/01/29/alcalde-de-cajeme-sonora-denuncia-amenazas-en-medio-de-senalamientos-por-proteger-policias-vinculados-al-crimen-organizado/"
      },
      {
        "label": "El Universal — Licencia",
        "url": "https://www.eluniversal.com.mx/estados/javier-lamarque-alcalde-de-cajeme-sonora-solicita-licencia-por-90-dias-apunta-al-proceso-interno-de-morena/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 342,
    "name": "Alejandra Gutiérrez Campos",
    "role": "Presidenta Municipal de León, Guanajuato",
    "party": "MC (antes PAN)",
    "state": "Guanajuato",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 14,
      "funcionarios": 6,
      "deuda": 11,
      "denuncias": 9,
      "evasion": 4,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal. Denuncia ante Contraloría Municipal por cobros ilegales de la Dirección de Comercio (julio 2026).",
      "fiscalizacion": "Contratos por $7.3M otorgados a Office and Publicity MDF (12 contratos, 2024-2025) y $11.9M a Centro Publicitario y de Marketing TLGR (35 contratos, 2022-2024), ambas empresas vinculadas a su ex secretario Allan León Aguirre. Síndico panista presentó denuncia formal ante la Fiscalía Anticorrupción de Guanajuato.",
      "funcionarios": "Su ex secretario de Vinculación, Allan León Aguirre, renunció en medio del escándalo de contratos a empresas \"fantasma\". Filtración masiva de datos de 180,000 pacientes de servicios de emergencia por fallas de seguridad que intentó minimizar públicamente.",
      "deuda": "$19.2M combinados en contratos cuestionados a dos empresas vinculadas a su colaborador cercano.",
      "denuncias": "Denunciada ante el IEEG por promoción personalizada con recursos públicos (mayo 2026). Regidor panista denunció cobros ilegales de la Dirección de Comercio. Calificación ciudadana de desempeño no supera 3 puntos con 75% de repudio, según mediciones de opinión pública.",
      "evasion": "Abandonó el PAN tras 20 años para integrarse a Movimiento Ciudadano en medio de los señalamientos de corrupción (abril 2026), lo que analistas interpretaron como un movimiento estratégico ante la presión política.",
      "nepotismo": "Su esposo, figura clave del PAN local antes de su salida del partido, generó controversia adicional por ataques públicos a exgobernadores panistas."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume presidencia municipal de León"
      },
      {
        "year": "2024",
        "event": "Reelecta con amplia ventaja"
      },
      {
        "year": "2026",
        "event": "Abril: renuncia al PAN y se une a MC en medio de señalamientos de corrupción por contratos de $19.2M. Mayo: denunciada ante IEEG por promoción personalizada. Junio: filtración de datos de 180,000 pacientes."
      }
    ],
    "sources": [
      {
        "label": "Proceso — Salida del PAN",
        "url": "https://www.proceso.com.mx/nacional/2026/5/25/el-municipio-mas-disputado-de-guanajuato-ya-tiene-pleito-electoral-en-2027-374608.html"
      },
      {
        "label": "Diario — Contratos fantasma",
        "url": "https://diario.mx/nacional/2026/jun/23/indagan-contratos-de-alcaldia-de-leon-1124246.html"
      },
      {
        "label": "Agora GTO — Denuncia IEEG",
        "url": "https://agoragto.com/estado/denuncian-a-alcaldesa-de-leon-ante-el-ieeg-por-promoverse-con-recursos-publicos/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 343,
    "name": "Hilda Araceli Brown Figueredo",
    "role": "Diputada Federal / Exalcaldesa de Playas de Rosarito, Baja California",
    "party": "MORENA",
    "state": "Baja California",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 10,
      "fiscalizacion": 8,
      "funcionarios": 6,
      "deuda": 8,
      "denuncias": 10,
      "evasion": 5,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Señalada por el gobierno de Estados Unidos por presuntamente apoyar a la facción de \"Los Mayos\" del Cártel de Sinaloa. Sin sentencia formal en México.",
      "fiscalizacion": "Sin hallazgos formales de fiscalización publicados en México, más allá del señalamiento de EE.UU.",
      "funcionarios": "Parte del entramado de funcionarios de Morena de Baja California señalados por vínculos con el crimen organizado.",
      "deuda": "Sin monto específico documentado de daño patrimonial.",
      "denuncias": "Señalamiento directo del gobierno de Estados Unidos como parte de la lista de funcionarios de la administración morenista con vínculos al narcotráfico, mencionada explícitamente en cobertura sobre el primer informe de gobierno de Sheinbaum.",
      "evasion": "Transitó de la alcaldía de Rosarito a una diputación federal, obteniendo fuero.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume alcaldía de Playas de Rosarito por Morena"
      },
      {
        "year": "2024",
        "event": "Electa diputada federal"
      },
      {
        "year": "2025",
        "event": "Señalada por EE.UU. por presunto apoyo a facción \"Los Mayos\" del Cártel de Sinaloa"
      }
    ],
    "sources": [
      {
        "label": "LatinUS — Escándalos previos al informe",
        "url": "https://latinus.us/mexico/2025/10/4/entre-escandalos-de-corrupcion-sheinbaum-se-lanza-contra-los-de-dinero-mal-habido-horas-de-su-primer-informe-153569.html"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 344,
    "name": "Miguel Ángel Navarro Quintero",
    "role": "Gobernador de Nayarit (2023-presente)",
    "party": "MORENA",
    "state": "Nayarit",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 17,
      "funcionarios": 8,
      "deuda": 14,
      "denuncias": 9,
      "evasion": 5,
      "nepotismo": 4
    },
    "breakdown": {
      "sentencias": "Denunciado penalmente por trabajadores del estado por el robo de $2,500M del Fondo de Pensiones. Sin sentencia ni orden de aprehensión; la Fiscalía estatal no ha dado seguimiento a la denuncia.",
      "fiscalizacion": "ASF tiene 57 acciones pendientes de aclarar o recuperar por $757.3M en el Sistema Público de Consulta de Auditorías, de las cuales 23 ($129.5M) están bajo análisis en la Dirección General de Investigación. Diputada federal de MC solicitó formalmente revisión de $1,500M en obras públicas de origen federal.",
      "funcionarios": "\"Megaoperativo Nuevo Nayarit\" señalado por Proceso como sistema de extorsión institucional que favorece a nuevos socios inmobiliarios y políticos ligados a un grupo político externo al estado.",
      "deuda": "$2,500M denunciados como desviados del Fondo de Pensiones de los Trabajadores. $1,500M en obras federales bajo revisión de la ASF. Estadio construido con fondos públicos cedido en comodato a personas vinculadas a un diputado federal, quienes lo administran como negocio privado.",
      "denuncias": "Trabajadores estatales (SUTSEM) denunciaron penalmente el desvío del fondo de pensiones. Crisis financiera reconocida por el propio gobierno: no pudo cumplir obligaciones de diciembre 2025, usó línea de crédito con cargo a participaciones de 2026.",
      "evasion": "Respondió a la denuncia del desvío de $2,500M anunciando una demanda por daño moral contra el denunciante en lugar de abrir investigación exhaustiva inmediata.",
      "nepotismo": "Estadio construido con recursos públicos entregado en comodato a personas vinculadas a un diputado federal (Pedro Haces) para explotación privada."
    },
    "timeline": [
      {
        "year": "2023",
        "event": "Asume gubernatura de Nayarit"
      },
      {
        "year": "2024",
        "event": "Febrero: denunciado por desvío de $2,500M del Fondo de Pensiones. Responde anunciando demanda por daño moral contra el denunciante."
      },
      {
        "year": "2025",
        "event": "Octubre: ASF revisa $1,500M en obras públicas tras solicitud de diputada federal."
      },
      {
        "year": "2026",
        "event": "Enero: crisis financiera y protestas de burocracia estatal por incumplimiento de pagos. Uso de crédito de corto plazo."
      }
    ],
    "sources": [
      {
        "label": "Excélsior — Denuncia $2,500M",
        "url": "https://www.excelsior.com.mx/nacional/denuncian-gobernador-navarro-quintero-por-robo/1636869"
      },
      {
        "label": "Proceso — ASF obras millonarias",
        "url": "https://www.proceso.com.mx/nacional/estados/2025/10/27/alertan-la-asf-por-irregularidades-en-obras-millonarias-en-nayarit-361591.html"
      },
      {
        "label": "Proceso — Megaoperativo extorsión",
        "url": "https://www.proceso.com.mx/temas/nayarit-347.html"
      },
      {
        "label": "La Jornada — Respuesta del gobernador",
        "url": "https://www.jornada.com.mx/noticia/2024/02/28/estados/pedira-gobernador-de-nayarit-disculpa-tras-acusaciones-por-desfalco-5010"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 345,
    "name": "Enrique Inzunza Cázarez",
    "role": "Senador de la República / Exsecretario General de Gobierno de Sinaloa",
    "party": "MORENA",
    "state": "Sinaloa",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 20,
      "fiscalizacion": 5,
      "funcionarios": 10,
      "deuda": 8,
      "denuncias": 10,
      "evasion": 8,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Acusado formalmente en el Distrito Sur de Nueva York (29 de abril de 2026) por conspiración para importación de narcóticos y posesión/conspiración para usar ametralladoras y dispositivos destructivos. Incluido en el expediente S9 23 Cr. 180 junto al gobernador con licencia Rubén Rocha Moya y otros 8 funcionarios.",
      "fiscalizacion": "Sin hallazgos de fiscalización formal en México.",
      "funcionarios": "Como secretario general de Gobierno de Sinaloa (2021-2024), según el expediente estadounidense habría acompañado a Rocha Moya en una reunión con \"Los Chapitos\" tras la elección de junio de 2021, acordando que el Cártel tendría control sobre la Policía Estatal de Sinaloa. Su suplente en el Senado es funcionario del gabinete de Rocha Moya.",
      "deuda": "Sin monto de daño patrimonial documentado; el caso es de protección al crimen organizado, no de desvío directo de recursos.",
      "denuncias": "Departamento de Justicia de EE.UU. presentó cargos formales. Se reportó una posible detención en San Diego, California (mayo 2026), que negó categóricamente. Ficha roja de Interpol.",
      "evasion": "Solicitó licencia temporal del Senado tras la acusación pero luego reapareció y anunció que permanecerá en el cargo hasta 2030. FGR lo citó como testigo, no como imputado. No existe solicitud de desafuero pese a las acusaciones.",
      "nepotismo": "Esposa es magistrada del Poder Judicial de Sinaloa desde noviembre de 2021, mientras él ocupaba cargos de alto nivel en el mismo gobierno estatal."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Nombrado Secretario General de Gobierno de Sinaloa por Rocha Moya. Presunta reunión con \"Los Chapitos\"."
      },
      {
        "year": "2024",
        "event": "Deja el cargo estatal para postularse como senador. Asume el 1 de septiembre."
      },
      {
        "year": "2026",
        "event": "29 de abril: DOJ de EE.UU. lo acusa formalmente. Mayo: solicita licencia temporal, luego la retira. Reportes de posible detención en San Diego, desmentidos. Ficha roja de Interpol."
      }
    ],
    "sources": [
      {
        "label": "Wikipedia — Perfil y acusación",
        "url": "https://es.wikipedia.org/wiki/Enrique_Inzunza_C%C3%A1zarez"
      },
      {
        "label": "Infobae — Sin solicitud de desafuero",
        "url": "https://www.infobae.com/mexico/2026/05/21/pese-a-acusaciones-de-eeuu-no-existe-solicitud-de-desafuero-contra-el-senador-enrique-inzunza/"
      },
      {
        "label": "PolíticoMX — Cargos DOJ",
        "url": "https://politico.mx/2026/04/29/quien-es-enrique-inzunza-el-senador-de-morena-acusado-de-narcotrafico-por-eua/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 346,
    "name": "Juan de Dios Gámez Mendívil",
    "role": "Presidente Municipal de Culiacán, Sinaloa (con licencia)",
    "party": "MORENA",
    "state": "Sinaloa",
    "level": "municipal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 12,
      "fiscalizacion": 5,
      "funcionarios": 6,
      "deuda": 5,
      "denuncias": 9,
      "evasion": 8,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Incluido entre los 10 funcionarios de Sinaloa reclamados por el Departamento de Justicia de EE.UU. por presuntos vínculos con el narcotráfico. Sin sentencia ni orden de aprehensión en México.",
      "fiscalizacion": "Sin hallazgos formales de fiscalización publicados.",
      "funcionarios": "Parte del entramado de funcionarios sinaloenses señalados junto con Rocha Moya e Inzunza.",
      "deuda": "Sin monto específico documentado.",
      "denuncias": "Señalado directamente en el expediente S9 23 Cr. 180 del Distrito Sur de Nueva York.",
      "evasion": "Solicitó licencia del cargo de manera similar al gobernador y al senador Inzunza, tras conocerse la acusación de EE.UU.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2024",
        "event": "Asume presidencia municipal de Culiacán"
      },
      {
        "year": "2026",
        "event": "Abril: incluido en acusación del DOJ. Solicita licencia del cargo."
      }
    ],
    "sources": [
      {
        "label": "La Voz de Michoacán",
        "url": "https://www.lavozdemichoacan.com.mx/mexico/senado/senador-mexicano-enrique-inzunza-acusado-narcotrafico-eeuu-pide-licencia-2026/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 347,
    "name": "Dámaso Castro Saavedra",
    "role": "Vicefiscal de la Fiscalía General de Sinaloa (con licencia)",
    "party": "MORENA",
    "state": "Sinaloa",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 18,
      "fiscalizacion": 4,
      "funcionarios": 6,
      "deuda": 5,
      "denuncias": 9,
      "evasion": 7,
      "nepotismo": 2
    },
    "breakdown": {
      "sentencias": "Uno de los 10 funcionarios y exfuncionarios de Sinaloa acusados formalmente por el Departamento de Justicia de EE.UU. (29 de abril de 2026) en el expediente S9 23 Cr. 180 del Distrito Sur de Nueva York, por conspiración para importar narcóticos y posesión de ametralladoras y dispositivos destructivos.",
      "fiscalizacion": "Sin hallazgos de fiscalización formal en México, más allá de la acusación estadounidense.",
      "funcionarios": "Parte del entramado de funcionarios de la Fiscalía y gobierno de Sinaloa señalados junto con Rocha Moya, Inzunza y Gerardo Mérida por presunta protección a la facción de \"Los Chapitos\" del Cártel de Sinaloa.",
      "deuda": "Sin monto de daño patrimonial documentado.",
      "denuncias": "Señalado directamente en la acusación del DOJ como parte de la conspiración de importación masiva de fentanilo, heroína, cocaína y metanfetamina hacia EE.UU.",
      "evasion": "Solicitó licencia a su cargo sin goce de sueldo tras conocerse la acusación, evitando así comparecer mientras mantiene el cargo formal.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2026",
        "event": "Abril: incluido en la acusación formal del Departamento de Justicia de EE.UU. Solicita licencia sin goce de sueldo."
      }
    ],
    "sources": [
      {
        "label": "El Financiero — Expediente completo",
        "url": "https://www.elfinanciero.com.mx/estados/2026/05/15/detencion-de-gerardo-merida-como-ayudo-el-exsecretario-de-seguridad-de-sinaloa-a-los-chapitos/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 348,
    "name": "Víctor Manuel Castro Cosío",
    "role": "Gobernador de Baja California Sur (2021-presente)",
    "party": "MORENA",
    "state": "Baja California Sur",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 16,
      "funcionarios": 14,
      "deuda": 12,
      "denuncias": 9,
      "evasion": 8,
      "nepotismo": 10
    },
    "breakdown": {
      "sentencias": "No procesado directamente, pero señalado por proteger a su ahijado bajo investigación.",
      "fiscalizacion": "Su Contraloría Estatal detectó, mediante algoritmo de análisis patrimonial, que el patrimonio de un funcionario cercano no coincidía con sus ingresos declarados (carpeta LPZ-2329/2026), por más de $100M en enriquecimiento ilícito.",
      "funcionarios": "Su ahijado y protegido, Juan Ignacio Rivas González, Director General de Informática de la Secretaría de Finanzas, es investigado por enriquecimiento ilícito. Como jefe de área de informática, controlaba el diseño de términos de referencia de licitaciones sin necesidad de firmar contratos directamente.",
      "deuda": "Al ahijado del gobernador se le decomisaron 2 camionetas de lujo (incluida una Mercedes Benz AMG) por $4.1M, con 4 vehículos adicionales pendientes de decomiso ($12.6M más), sumando $16M solo en vehículos, además de múltiples propiedades en zonas de lujo y bienes a nombre de familiares.",
      "denuncias": "Según fuente de la Secretaría de Finanzas citada por Semanario ZETA, la Contraloría ya conocía el caso desde principios de 2025 pero \"no tenían luz verde del gobernador, pues es su ahijado y protegido\".",
      "evasion": "Bloqueó durante más de un año el avance de la investigación contra su protegido, según fuentes internas de la Secretaría de Finanzas.",
      "nepotismo": "CASO DIRECTO: protegió durante más de un año a su propio ahijado, funcionario clave en el manejo de licitaciones informáticas del gobierno estatal, mientras este acumulaba un patrimonio de más de $100M incompatible con su salario."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Baja California Sur"
      },
      {
        "year": "2025",
        "event": "Contraloría detecta irregularidades patrimoniales de su ahijado pero no avanza la investigación"
      },
      {
        "year": "2026",
        "event": "Abril: decomiso de vehículos de lujo al funcionario. Investigación por enriquecimiento ilícito de más de $100M avanza tras presión mediática."
      }
    ],
    "sources": [
      {
        "label": "Semanario ZETA — Investigación completa",
        "url": "https://zetatijuana.com/2026/05/funcionario-investigado-por-corrupcion/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 349,
    "name": "Indira Vizcaíno Silva",
    "role": "Gobernadora de Colima (2021-2027)",
    "party": "MORENA",
    "state": "Colima",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 14,
      "funcionarios": 6,
      "deuda": 11,
      "denuncias": 8,
      "evasion": 4,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal.",
      "fiscalizacion": "ASF documentó desvíos multimillonarios en Colima durante el ejercicio fiscal 2024, bajo responsabilidad compartida entre su gestión y la de su antecesor.",
      "funcionarios": "Instruyó al consejero jurídico presentar denuncias ante la Fiscalía Anticorrupción tras hallazgos en el proceso de entrega-recepción, pero los resultados de fiscalización posteriores mostraron nuevas anomalías durante su propia administración.",
      "deuda": "Colima aparece entre los 9 estados con mayor percepción de corrupción de México según la ENCIG 2025 del INEGI, con niveles superiores al promedio nacional de 75%.",
      "denuncias": "Pese a declaraciones públicas comprometiéndose contra la corrupción desde 2023 (\"no hay espacio para actos de corrupción\"), los hallazgos de la ASF para el ejercicio 2024 (ya bajo su responsabilidad) muestran anomalías persistentes.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos específicos adicionales."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Colima"
      },
      {
        "year": "2023",
        "event": "Declara públicamente cero tolerancia a la corrupción"
      },
      {
        "year": "2025",
        "event": "ASF documenta anomalías del ejercicio fiscal 2024, ya bajo su gestión"
      },
      {
        "year": "2026",
        "event": "Colima entre los 9 estados con mayor percepción de corrupción según INEGI"
      }
    ],
    "sources": [
      {
        "label": "Punto por Punto — Corruptelas",
        "url": "https://www.puntoporpunto.com/secciones/punto-de-encuentro/los-gobiernos-de-colima-morelos-y-baja-california-fueron-el-escenario-de-presuntas-corruptelas/"
      },
      {
        "label": "El Imparcial — ENCIG INEGI",
        "url": "https://www.elimparcial.com/mexico/2026/06/25/morena-gobierna-los-nueve-estados-con-mayor-percepcion-de-corrupcion-rumbo-a-las-elecciones-de-2027/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 350,
    "name": "Salomón Jara Cruz",
    "role": "Gobernador de Oaxaca (2022-2028)",
    "party": "MORENA",
    "state": "Oaxaca",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 14,
      "funcionarios": 10,
      "deuda": 8,
      "denuncias": 10,
      "evasion": 6,
      "nepotismo": 15
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal. Excaliado Benjamín Robles Montoya (PT) lo llamó \"criminal\" y lo acusó de financiar campañas locales con dinero de \"huachicol\", sin presentar pruebas formales.",
      "fiscalizacion": "Señalamientos de \"burdos abusos presupuestales con precios inflados y procedimientos de contratación dirigidos\". Descuento del 16% al presupuesto entregado a comunidades por autoridad municipal, reconocido por el propio gobernador en asamblea pública.",
      "funcionarios": "Director del IEEPO (educación) llegó al cargo con antecedentes cuestionados como exalcalde de Juchitán. Red completa de hermanos López Jarquín y López Sánchez colocados en direcciones estatales tras la \"reestructuración\" de febrero 2026.",
      "deuda": "Sin monto total consolidado, pero múltiples señalamientos de desvío de recursos y \"moches\" reconocidos por el propio gobernador en giras.",
      "denuncias": "Consulta de revocación de mandato en enero 2026: 38.16% de los votantes pidió su salida por \"pérdida de confianza\". Jornada marcada por denuncias de compra de votos (mantas a cambio de voto en San Pedro Amuzgos) y un sistema de cómputo alojado en servidor comercial de bajo costo sin el blindaje prometido.",
      "evasion": "Removió a 16 funcionarios en febrero 2026 tras la presión, pero la investigación periodística mostró que solo reacomodó a la misma red familiar en otros cargos (\"se cambió para seguir igual\").",
      "nepotismo": "CASO EXTREMO documentado por La Jornada: al menos 20 funcionarios con parentesco directo con el gobernador. Morena Oaxaca dirigido por un sobrino (Emmanuel Navarro Jara) y dos de sus propios hijos (Shabín y Bxido Jara Bolaños). Familias completas (López Jarquín, López Sánchez) con múltiples hermanos colocados simultáneamente en direcciones de gobierno, incluyendo un caso de 4 hermanos en 4 cargos distintos (director de infraestructura educativa, regularización de tierras, Colegio de Ciencias y Tecnología, Policía Vial, y presidencia municipal)."
    },
    "timeline": [
      {
        "year": "2022",
        "event": "Asume gubernatura de Oaxaca (\"Primavera Oaxaqueña\")"
      },
      {
        "year": "2025",
        "event": "La Jornada documenta al menos 20 funcionarios con parentesco directo con el gobernador"
      },
      {
        "year": "2026",
        "event": "Enero: consulta de revocación de mandato, 38% pide su salida. Febrero: \"reestructuración\" de gabinete que solo reacomoda a la misma red familiar."
      }
    ],
    "sources": [
      {
        "label": "Proceso — Reestructuración de gabinete",
        "url": "https://www.proceso.com.mx/nacional/estados/2026/2/18/salomon-jara-ajusta-su-gabinete-tras-acusaciones-de-nepotismo-consulta-de-revocacion-de-mandato-366610.html"
      },
      {
        "label": "La Jornada — 20 funcionarios con parentesco",
        "url": "https://www.jornada.com.mx/noticia/2026/02/18/estados/salomon-jara-anuncia-cambios-en-su-gabinete-tras-acusaciones-de-nepotismo-y-jornada-de-revocacion-de-mandato"
      },
      {
        "label": "MCCI — Revocación de mandato",
        "url": "https://contralacorrupcion.mx/revocacion-de-mandato-en-oaxaca-entre-el-abstencionismo-y-las-acusaciones-de-fraude/"
      },
      {
        "label": "Primera Línea — Sucesión y nepotismo",
        "url": "https://www.primeralinea.mx/2025/03/25/sucesion-oaxaquena-en-2028-se-perfila-como-un-ajuste-de-cuentas-para-jara-nace-el-tucos-en-ciudad-de-mexico/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 351,
    "name": "Ruth Miriam González Silva",
    "role": "Senadora de la República / Esposa del Gobernador de San Luis Potosí",
    "party": "PVEM",
    "state": "San Luis Potosí",
    "level": "federal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 5,
      "fiscalizacion": 12,
      "funcionarios": 8,
      "deuda": 11,
      "denuncias": 10,
      "evasion": 5,
      "nepotismo": 15
    },
    "breakdown": {
      "sentencias": "Sin proceso penal directo, pero señalada por periodistas potosinos como promotora de denuncias penales contra al menos 8 periodistas (incluida Anahí Torres González, directora de En Primera) por difundir un video cuestionado sobre su esposo.",
      "fiscalizacion": "Expediente de la UIF vinculado a su esposo detalla presuntos desvíos de $724.6M de recursos públicos extraídos de los municipios de Soledad de Graciano Sánchez y San Luis Potosí, ambos gobernados en su momento por su esposo y su suegro.",
      "funcionarios": "Aparece junto a exfuncionarios \"adoptados\" del PRI en actos del gallardismo. Su suegro, Ricardo Gallardo Juárez, es diputado federal; su esposo es gobernador; estructura familiar de tres generaciones en el poder.",
      "deuda": "$724.6M en desvíos documentados por la UIF vinculados a los municipios gobernados por su familia política.",
      "denuncias": "Señalada directamente por periodistas de haber promovido órdenes de aprehensión contra al menos 8 comunicadores. Organizaciones como Artículo 19, CPJ y Propuesta Cívica han denunciado el uso de leyes penales como herramienta de represión contra la prensa.",
      "evasion": "El Congreso de SLP aprobó en diciembre 2025 la llamada \"Ley Esposa\" (reforma de paridad de género que obligaba a postular solo mujeres a la gubernatura), ampliamente señalada como un mecanismo diseñado para blindar su candidatura. Su propio esposo terminó por vetarla tras el rechazo nacional, incluido el de la presidenta Sheinbaum.",
      "nepotismo": "CASO DIRECTO Y EXTREMO: esposa del gobernador en funciones, destapada públicamente por él mismo como su sucesora (\"les voy a presentar a una gran mujer... va a cuidar San Luis Potosí como cuida a sus hijos\"). Estructura de tres generaciones: su suegro fundó el movimiento político, su esposo lo heredó como gobernador, y ella busca sucederlo. Se amparó en que la ley antinepotismo de Morena/Sheinbaum entra en vigor hasta 2030."
    },
    "timeline": [
      {
        "year": "2015",
        "event": "Presidenta del DIF municipal de Soledad de Graciano Sánchez con su esposo como alcalde"
      },
      {
        "year": "2021",
        "event": "Presidenta honoraria del DIF estatal cuando su esposo asume gubernatura"
      },
      {
        "year": "2024",
        "event": "Asume como senadora por San Luis Potosí (PVEM)"
      },
      {
        "year": "2025",
        "event": "Diciembre: Congreso de SLP aprueba \"Ley Esposa\" (reforma de paridad señalada como diseñada para ella)"
      },
      {
        "year": "2026",
        "event": "Enero: su esposo veta la reforma tras rechazo nacional. Mayo-julio: es destapada oficialmente como candidata a sucederlo en 2027 en medio de señalamientos de nepotismo y persecución a periodistas."
      }
    ],
    "sources": [
      {
        "label": "Proceso — Destape y críticas de nepotismo",
        "url": "https://www.proceso.com.mx/nacional/2026/7/11/entre-nepotismo-y-acarreados-el-gobernador-de-slp-presenta-a-su-esposa-para-sucederlo-375876.html"
      },
      {
        "label": "Crónica de Tierra Blanca — UIF $724.6M y periodistas",
        "url": "https://cronicadetierrablanca.com/rumbo-a-2027-ricardo-gallardo-destapa-a-su-esposa-ruth-gonzalez-como-candidata-a-la-gubernatura-de-san-luis-potosi/"
      },
      {
        "label": "Wikipedia — Ley Esposa",
        "url": "https://es.wikipedia.org/wiki/Ruth_Gonz%C3%A1lez_Silva"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 352,
    "name": "Alfredo Ramírez Bedolla",
    "role": "Gobernador de Michoacán (2021-presente)",
    "party": "MORENA",
    "state": "Michoacán",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 8,
      "funcionarios": 14,
      "deuda": 6,
      "denuncias": 10,
      "evasion": 6,
      "nepotismo": 10
    },
    "breakdown": {
      "sentencias": "Sin proceso penal directo contra él. Su tío, Adalberto Fructuoso Comparán Rodríguez (\"El Fruto\"), fue sentenciado a 11 años de prisión en EE.UU. por tráfico de metanfetaminas para Cárteles Unidos. Su primo hermano, Adalberto Comparán Bedolla, sentenciado a 10 años por el mismo delito.",
      "fiscalizacion": "Sin hallazgos formales de fiscalización financiera directa contra el gobernador.",
      "funcionarios": "Admitió públicamente (julio 2026) que el crimen organizado está infiltrado en policías municipales de al menos 6 municipios (Ecuandureo, Zinapécuaro, Chavinda, Zacapu, Ario de Rosales, Uruapan), donde 7 policías fueron detenidos por el asesinato del alcalde de Uruapan, Carlos Manzo.",
      "deuda": "Sin monto de daño patrimonial documentado directamente contra el gobernador.",
      "denuncias": "Señalado en documentos de inteligencia de la SEDENA por vinculación con Cárteles Unidos. El TEPJF reconoció formalmente que hubo intervención del crimen organizado en su elección de 2021 (expediente SUP-JRC-166/2021), aunque validó el triunfo. El precursor de autodefensas Hipólito Mora lo acusó de haber ganado gracias al apoyo de ese cártel. Ha sido amenazado por el CJNG, que lo acusa de proteger a Cárteles Unidos.",
      "evasion": "Prometió al inicio de su gestión evitar confrontación directa con el narcotráfico, priorizando políticas sociales, lo que ha sido interpretado como parte de una estrategia de convivencia con el grupo criminal que opera en la región de su familia.",
      "nepotismo": "CASO GRAVE: tío y primo hermano sentenciados en EE.UU. por operar para el mismo cártel (Cárteles Unidos) que se le acusa de proteger. Su tío fue alcalde de Aguililla (2008-2011) y formó parte de La Familia Michoacana, Los Caballeros Templarios y Los Viagras antes de su detención en Guatemala y extradición a EE.UU."
    },
    "timeline": [
      {
        "year": "2008",
        "event": "Su tío Adalberto Fructuoso Comparán es alcalde de Aguililla, vinculado a organizaciones criminales"
      },
      {
        "year": "2021",
        "event": "Gana gubernatura de Michoacán. TEPJF reconoce intervención del crimen organizado en la elección pero valida el triunfo."
      },
      {
        "year": "2021",
        "event": "Marzo: su tío es detenido en Guatemala y extraditado a EE.UU. Su primo detenido en Miami el mismo mes."
      },
      {
        "year": "2025",
        "event": "Sentencias de 11 y 10 años contra su tío y primo en EE.UU."
      },
      {
        "year": "2026",
        "event": "Julio: admite públicamente infiltración del crimen organizado en policías de al menos 6 municipios."
      }
    ],
    "sources": [
      {
        "label": "Narcopolíticos — Perfil completo",
        "url": "https://narcopoliticos.com/project/alfredo-ramirez-bedolla/"
      },
      {
        "label": "El Financiero — Admite infiltración policial",
        "url": "https://www.elfinanciero.com.mx/estados/2026/07/13/crimen-organizado-esta-infiltrado-en-municipios-de-michoacan-admite-gobernador-alfredo-ramirez-bedolla/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 353,
    "name": "Mara Lezama Espinosa",
    "role": "Gobernadora de Quintana Roo (2022-presente)",
    "party": "MORENA",
    "state": "Quintana Roo",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 12,
      "fiscalizacion": 15,
      "funcionarios": 8,
      "deuda": 13,
      "denuncias": 10,
      "evasion": 9,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Incluida en documento de inteligencia de la DEA y el Departamento de Justicia de EE.UU. (16 de marzo de 2026) entre 8 gobernadores morenistas investigados por narcotráfico, protección a grupos delictivos y lavado de dinero. Sin sentencia en México.",
      "fiscalizacion": "Como entonces alcaldesa de Benito Juárez (Cancún), la UIF y la FGR investigaron transferencias bancarias millonarias, escrituras públicas y declaraciones patrimoniales presuntamente falseadas a través de la empresa \"Desarrolladora Cumpal\", señalada por actividades financieras atípicas.",
      "funcionarios": "Investigaciones conjuntas FGR-DEA la relacionaron con pactos de no agresión con grupos criminales que operaban en la zona hotelera de Cancún, extendidos a Playa del Carmen, Isla Mujeres, Cozumel y Tulum.",
      "deuda": "Incremento patrimonial \"descomunal\" y desproporcionado a su salario público como alcaldesa, según las investigaciones de la UIF que fueron canceladas antes de concluir.",
      "denuncias": "Documentado extensamente por SinEmbargo. Las investigaciones por enriquecimiento ilícito, lavado de dinero y vínculos con crimen organizado no prosperaron mientras AMLO era presidente, ya que fue protegida para ser la candidata de Morena a la gubernatura.",
      "evasion": "Las investigaciones en su contra fueron canceladas antes de concluir gracias a protección política de más alto nivel, según reporteo de SinEmbargo.",
      "nepotismo": "Sin datos específicos adicionales."
    },
    "timeline": [
      {
        "year": "2018",
        "event": "Asume alcaldía de Benito Juárez (Cancún). Comienzan pactos con grupos criminales según investigaciones FGR-DEA."
      },
      {
        "year": "2021",
        "event": "UIF y FGR investigan enriquecimiento ilícito y lavado de dinero a través de Desarrolladora Cumpal"
      },
      {
        "year": "2022",
        "event": "Investigaciones canceladas. Es electa gobernadora de Quintana Roo con respaldo de AMLO."
      },
      {
        "year": "2026",
        "event": "Marzo: incluida en documento de inteligencia DEA/DOJ entre 8 gobernadores investigados por vínculos criminales."
      }
    ],
    "sources": [
      {
        "label": "SinEmbargo — El auge del narco",
        "url": "https://www.sinembargo.mx/4633242/quintana-roo-mara-lezama-y-el-auge-del-narco/"
      },
      {
        "label": "Periodistas Sin Censura — Lista DEA",
        "url": "https://www.periodistassincensura.com.mx/columna/mas-morenistas-investigados-por-la-dea/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 354,
    "name": "Javier May Rodríguez",
    "role": "Gobernador de Tabasco (2024-presente)",
    "party": "MORENA",
    "state": "Tabasco",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 6,
      "funcionarios": 6,
      "deuda": 5,
      "denuncias": 9,
      "evasion": 5,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Incluido en el documento de inteligencia de la DEA y el DOJ (marzo 2026) entre 8 gobernadores morenistas bajo investigación por narcotráfico, protección a grupos delictivos y lavado de dinero. Sin sentencia ni proceso formal en México.",
      "fiscalizacion": "Sin hallazgos formales de fiscalización financiera publicados de forma independiente.",
      "funcionarios": "Gobierna un estado donde operó \"La Barredora\", la organización criminal vinculada a su antecesor Adán Augusto López y al exsecretario de Seguridad Hernán Bermúdez, aunque no hay señalamientos directos de continuidad bajo su gestión.",
      "deuda": "Sin monto de daño patrimonial documentado directamente contra él.",
      "denuncias": "Señalado únicamente por el documento de inteligencia estadounidense compartido en columnas periodísticas; sin denuncia formal documentada en México.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2024",
        "event": "Asume gubernatura de Tabasco, sucediendo a Carlos Manuel Merino Campos"
      },
      {
        "year": "2026",
        "event": "Marzo: incluido en documento de inteligencia DEA/DOJ entre 8 gobernadores investigados"
      }
    ],
    "sources": [
      {
        "label": "Periodistas Sin Censura — Lista DEA",
        "url": "https://www.periodistassincensura.com.mx/columna/mas-morenistas-investigados-por-la-dea/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 355,
    "name": "Lorena Cuéllar Cisneros",
    "role": "Gobernadora de Tlaxcala (2021-presente)",
    "party": "MORENA",
    "state": "Tlaxcala",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 9,
      "funcionarios": 5,
      "deuda": 7,
      "denuncias": 9,
      "evasion": 5,
      "nepotismo": 3
    },
    "breakdown": {
      "sentencias": "Incluida entre los primeros nombres del documento de inteligencia de la DEA y el DOJ (marzo 2026): \"encabeza la lista Roberto Sandoval... le sigue María Elena Lezama... y Lorena Cuéllar Cisneros\". Sin sentencia en México.",
      "fiscalizacion": "Tlaxcala aparece entre los 9 estados con mayor percepción de corrupción según la ENCIG 2025 del INEGI, en sexto lugar nacional.",
      "funcionarios": "Sin red de funcionarios detenidos documentada específicamente.",
      "deuda": "Sin monto de daño patrimonial documentado directamente contra ella.",
      "denuncias": "Señalada en el documento de inteligencia estadounidense junto con otros 7 gobernadores morenistas.",
      "evasion": "Sin evasión documentada.",
      "nepotismo": "Sin datos adicionales."
    },
    "timeline": [
      {
        "year": "2021",
        "event": "Asume gubernatura de Tlaxcala"
      },
      {
        "year": "2026",
        "event": "Marzo: incluida en documento de inteligencia DEA/DOJ. Tlaxcala en sexto lugar de percepción de corrupción según INEGI."
      }
    ],
    "sources": [
      {
        "label": "Periodistas Sin Censura — Lista DEA",
        "url": "https://www.periodistassincensura.com.mx/columna/mas-morenistas-investigados-por-la-dea/"
      },
      {
        "label": "El Imparcial — ENCIG INEGI",
        "url": "https://www.elimparcial.com/mexico/2026/06/25/morena-gobierna-los-nueve-estados-con-mayor-percepcion-de-corrupcion-rumbo-a-las-elecciones-de-2027/"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 356,
    "name": "Delfina Gómez Álvarez",
    "role": "Gobernadora del Estado de México (2023-presente)",
    "party": "MORENA",
    "state": "Estado de México",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 6,
      "fiscalizacion": 18,
      "funcionarios": 12,
      "deuda": 14,
      "denuncias": 9,
      "evasion": 5,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal vigente. Denunciada en 2018 por el PAN (con cheques firmados como evidencia) por enriquecimiento ilícito, peculado y abuso de autoridad durante su gestión como alcaldesa de Texcoco.",
      "fiscalizacion": "Como titular de la SEP, la ASF dejó pendiente de esclarecer $830M de la Cuenta Pública 2021: pagos excedentes en sueldos, salarios de plazas no consideradas, trabajadores fallecidos en nómina, bienes no localizados. Como gobernadora, su Secretaría de Educación denunció una red de más de 300 plazas docentes fantasma.",
      "funcionarios": "Al menos 10 exfuncionarios del sexenio priista anterior y del actual gobierno mexiquense tienen órdenes de aprehensión por venta de plazas; 5 ya cumplimentadas, incluido el exsubsecretario de Administración detenido en Metepec (junio 2026).",
      "deuda": "$830M sin esclarecer en la SEP federal. Red de al menos 300 plazas fantasma detectada en su propio gobierno, con al menos 70 funcionarios cobrando más de $120,000 mensuales sin trabajar. Como alcaldesa de Texcoco, descontó 10% del salario a 472 trabajadores, presuntamente para financiar campañas de Morena, y se le acusó de desviar $55.5M del fondo de ahorro de empleados.",
      "denuncias": "MCCI documentó el patrón de \"diezmos y desvíos\" desde su etapa como alcaldesa. Denuncia formal del secretario de Educación mexiquense contra la red de nómina fantasma (marzo 2026), confirmada públicamente por la propia gobernadora.",
      "evasion": "Sin evasión documentada; a diferencia de otros casos, reconoció públicamente el problema y prometió una \"limpia\".",
      "nepotismo": "Señalada en 2023 por medios de oposición como \"nepotista y corrupta\" en el contexto de su campaña a la gubernatura, aunque sin casos específicos de familiares en nómina documentados con el mismo rigor que otros gobernadores de esta base."
    },
    "timeline": [
      {
        "year": "2015",
        "event": "Alcaldesa de Texcoco. Denuncias posteriores por desvío de $55.5M del fondo de ahorro de empleados."
      },
      {
        "year": "2018",
        "event": "PAN presenta denuncia con cheques firmados por ella como evidencia de financiamiento irregular a Morena"
      },
      {
        "year": "2021",
        "event": "Titular de la SEP federal. ASF deja pendiente esclarecer $830M de la Cuenta Pública 2021."
      },
      {
        "year": "2023",
        "event": "Asume gubernatura del Estado de México, primera mujer en el cargo"
      },
      {
        "year": "2026",
        "event": "Marzo: se denuncia red de +300 plazas docentes fantasma. Junio: 10 exfuncionarios con órdenes de aprehensión, 5 detenidos."
      }
    ],
    "sources": [
      {
        "label": "El Heraldo — Confirma investigación",
        "url": "https://heraldodemexico.com.mx/nacional/2026/4/15/confirma-delfina-gomez-investigacion-por-ventas-de-plazas-en-educacion-ratifica-lucha-contra-corrupcion-796838.html"
      },
      {
        "label": "TOJIL — ASF $830M SEP",
        "url": "https://corruptometro.tojil.org/auditorias-arrojan-mas-de-830-millones-manejados-irregularmente-en-la-sep-con-delfina-gomez/"
      },
      {
        "label": "El Heraldo — 10 exfuncionarios detenidos",
        "url": "https://heraldodemexico.com.mx/nacional/2026/6/24/caen-10-exfuncionarios-por-venta-de-300-plazas-docentes-en-edomex-838382.html"
      },
      {
        "label": "MCCI — Diezmos y desvíos",
        "url": "https://contralacorrupcion.mx/cuentasclaras/delfina-y-pavlovich-historias-de-diezmos-y-desvios"
      }
    ],
    "lastVerified": "2026-07-14"
  },
  {
    "id": 357,
    "name": "Rocío Nahle García",
    "role": "Gobernadora de Veracruz (2024-presente)",
    "party": "MORENA",
    "state": "Veracruz",
    "level": "estatal",
    "active": true,
    "status": "en_funciones",
    "scores": {
      "sentencias": 8,
      "fiscalizacion": 16,
      "funcionarios": 8,
      "deuda": 13,
      "denuncias": 10,
      "evasion": 6,
      "nepotismo": 5
    },
    "breakdown": {
      "sentencias": "Sin proceso penal formal. Como secretaria de Energía (2018-2023) fue señalada por enriquecimiento ilícito y conflicto de interés.",
      "fiscalizacion": "ASF y el Órgano de Fiscalización Superior de Veracruz (ORFIS) solicitaron información adicional sobre el manejo de más de $2,000M de recursos públicos del ejercicio 2024. Revisión de Cuenta Pública 2024 reveló irregularidades por $241M en tres obras (estadio Luis \"Pirata\" Fuente, \"Nido del Halcón\" y Aquarium de Veracruz), con pagos sin sustento documental.",
      "funcionarios": "Su gobierno presentó denuncias contra el administrador de la Secretaría de Salud, Jorge Eduardo Sisniega Fernández, por daño patrimonial, quien fue inhabilitado 4 meses. Latinus reveló que como secretaria de Energía otorgó contratos por más de $1,500M a una empresa vinculada a su amiga Marina Vitela.",
      "deuda": "Como secretaria de Energía, contratos de $1,500M a empresa de allegada. Como gobernadora, denuncia deuda heredada de $119,388M reducida a $69,645M mediante refinanciamiento (ahorro de $155M). El \"Nido del Halcón\", iniciado en 2022, sigue sin concluir pese a que debía entregarse en 2024, dejando sin sede a dos equipos de basquetbol profesional.",
      "denuncias": "Un empresario denunció públicamente amenazas de muerte anónimas y responsabilizó directamente a Nahle, Cuitláhuac García y otros dos funcionarios. Su propio gobierno documentó irregularidades masivas heredadas de la administración anterior.",
      "evasion": "La presidenta Sheinbaum salió en defensa de Cuitláhuac García (su antecesor y correligionario) en dos ocasiones cuando la ASF y el ORFIS pidieron información sobre el manejo de más de $2,000M, lo que ha sido interpretado como protección política cruzada dentro de Morena.",
      "nepotismo": "Sin datos de familiares en nómina, pero señalada por otorgar contratos multimillonarios a una amiga cercana durante su gestión federal previa."
    },
    "timeline": [
      {
        "year": "2018",
        "event": "Asume Secretaría de Energía federal bajo AMLO"
      },
      {
        "year": "2023",
        "event": "Deja el cargo federal en medio de señalamientos por conflicto de interés y contratos a Marina Vitela"
      },
      {
        "year": "2024",
        "event": "Diciembre: asume gubernatura de Veracruz. Declara deuda heredada de $119,388M."
      },
      {
        "year": "2025",
        "event": "Mayo: denuncia a administrador de Salud por daño patrimonial. Junio-octubre: Sheinbaum defiende a Cuitláhuac ante solicitudes de la ASF/ORFIS."
      },
      {
        "year": "2026",
        "event": "Marzo: ORFIS documenta $241M en irregularidades en tres obras deportivas/turísticas heredadas. Abril: refinancia deuda, logra ahorro de $155M."
      }
    ],
    "sources": [
      {
        "label": "La Silla Rota — Críticas y deuda heredada",
        "url": "https://lasillarota.com/veracruz/reportajes/2026/3/10/las-criticas-de-nahle-obras-pendientes-que-heredo-del-gobierno-de-cuitlahuac-589829.html"
      },
      {
        "label": "LatinUS — Toma de posesión entre acusaciones",
        "url": "https://latinus.us/mexico/2024/12/1/rocio-nahle-asume-hoy-la-gubernatura-de-veracruz-entre-acusaciones-de-corrupcion-polemicas-patrimoniales-129600.html"
      },
      {
        "label": "Diario Gráfico — Denuncias por desfalcos",
        "url": "https://graficoaldia.mx/2026/04/29/reduccion-de-deuda-y-denuncias-por-desfalcos-desatan-ira-y-frustracion-de-cuitlahuistas/"
      }
    ],
    "lastVerified": "2026-07-14"
  }
];

const NATIONAL_STATS = {
  totalOfficials: officials.length,
  totalStates: new Set(officials.map(o => o.state)).size,
  lastUpdate: '2026-07-14',
};


officials.push(
    {id:358,name:'Nancy Nápoles',role:'Presidenta Municipal de Tenancingo, Estado de México',party:'Sin dato',state:'Estado de México',level:'municipal',active:true,status:'en_funciones',lastVerified:'2026-07-14',
    scores:{sentencias:15,fiscalizacion:10,funcionarios:8,deuda:13,denuncias:9,evasion:8,nepotismo:5},
    breakdown:{sentencias:'Investigada por la Fiscalía General de Justicia del Estado de México tras determinar que su reporte de secuestro (31 de mayo de 2026) habría sido simulado.',
    fiscalizacion:'La investigación surgió no por denuncia de corrupción sino por la simulación de un secuestro, que las autoridades vincularon a un plan para justificar la desaparición de recursos municipales.',
    funcionarios:'La carpeta de investigación señala la presunta participación de su esposo, José Roberto "N", y su cuñado, Óscar "N", como coautores del esquema.',
    deuda:'Los indicios reunidos por la FGJEM apuntan a que el secuestro simulado buscaba justificar la desaparición de aproximadamente $40M del erario municipal.',
    denuncias:'Caso documentado extensamente por AD Noticias como parte de una lista creciente de alcaldes mexiquenses procesados. Generó amplia movilización institucional cuando se reportó como secuestro real.',
    evasion:'La hipótesis inicial de secuestro real habría sido usada como cobertura para ocultar el desvío de fondos y evitar escrutinio inmediato.',
    nepotismo:'Esposo y cuñado señalados como presuntos coautores directos del esquema de desvío de recursos municipales.'},
    timeline:[{year:'2025',event:'Asume presidencia municipal de Tenancingo'},{year:'2026',event:'31 de mayo: reportada como víctima de secuestro. La investigación posterior de la FGJEM apunta a que fue simulado para ocultar el desvío de $40M, con participación señalada de su esposo y cuñado.'}],
    sources:[{label:'AD Noticias — Lista de alcaldes procesados',url:'https://adnoticias.mx/alcaldes-procesados-edomex-zinacantepec-tenancingo/'}]},

    {id:359,name:'Gerardo Nava Sánchez',role:'Expresidente Municipal de Zinacantepec, Estado de México',party:'Sin dato',state:'Estado de México',level:'municipal',active:false,status:'ex_funcionario',lastVerified:'2026-07-14',
    scores:{sentencias:25,fiscalizacion:3,funcionarios:2,deuda:2,denuncias:8,evasion:5,nepotismo:2},
    breakdown:{sentencias:'Sentenciado a 42 años y 6 meses de prisión, uno de los fallos más severos dictados contra un alcalde mexiquense, tras ser encontrado penalmente responsable de homicidio calificado en grado de tentativa.',
    fiscalizacion:'Sin hallazgos de fiscalización financiera documentados; el caso es de naturaleza penal por violencia, no de desvío de recursos.',
    funcionarios:'Sin red de funcionarios documentada en este caso específico.',
    deuda:'Sin daño patrimonial documentado.',
    denuncias:'En enero de 2021, la Fiscalía General de Justicia del Estado de México cumplimentó una orden de aprehensión en su contra.',
    evasion:'Enfrentó un largo proceso judicial antes de la sentencia final.',
    nepotismo:'Sin datos adicionales.'},
    timeline:[{year:'2021',event:'Enero: orden de aprehensión cumplimentada por homicidio calificado en grado de tentativa'},{year:'2026',event:'Sentenciado a 42 años y 6 meses de prisión'}],
    sources:[{label:'AD Noticias — Lista de alcaldes procesados',url:'https://adnoticias.mx/alcaldes-procesados-edomex-zinacantepec-tenancingo/'}]},

    {id:360,name:'Diego Moreno Valle',role:'Expresidente Municipal de Santiago Tianguistenco, Estado de México',party:'Sin dato',state:'Estado de México',level:'municipal',active:false,status:'ex_funcionario',lastVerified:'2026-07-14',
    scores:{sentencias:18,fiscalizacion:2,funcionarios:2,deuda:2,denuncias:8,evasion:5,nepotismo:2},
    breakdown:{sentencias:'Detenido y vinculado a proceso tras una investigación ministerial derivada de una denuncia por violación.',
    fiscalizacion:'Sin hallazgos de fiscalización financiera documentados; el caso es de naturaleza penal.',
    funcionarios:'Sin red de funcionarios documentada en este caso.',
    deuda:'Sin daño patrimonial documentado.',
    denuncias:'Una denuncia por violación dio origen a la investigación ministerial que concluyó en su detención.',
    evasion:'El caso provocó una crisis política en el municipio; el Ayuntamiento tuvo que designar autoridades sustitutas.',
    nepotismo:'Sin datos adicionales.'},
    timeline:[{year:'2025',event:'Denuncia por violación origina investigación ministerial en su contra'},{year:'2026',event:'Detención y vinculación a proceso. El Ayuntamiento designa autoridades sustitutas.'}],
    sources:[{label:'AD Noticias — Lista de alcaldes procesados',url:'https://adnoticias.mx/alcaldes-procesados-edomex-zinacantepec-tenancingo/'}]}
);


officials.push(
    {id:361,name:'Juan José Sabines Guerrero',role:'Cónsul General de México en Orlando, Florida / Exgobernador de Chiapas (2006-2012)',party:'PRI (transitó a MORENA)',state:'Chiapas',level:'federal',active:true,status:'en_funciones',lastVerified:'2026-07-14',
    scores:{sentencias:15,fiscalizacion:20,funcionarios:14,deuda:15,denuncias:10,evasion:10,nepotismo:3},
    breakdown:{sentencias:'PGR admitió en abril de 2013 querella contra él y 50 excolaboradores por asociación delictuosa, delincuencia organizada, enriquecimiento ilícito, tortura y otros 13 delitos. Fue detenido en el aeropuerto de la CDMX en diciembre de 2016 al regresar de Orlando, aunque la investigación nunca derivó en sentencia formal.',
    fiscalizacion:'Consultora PricewaterhouseCoopers detectó que los libros de la Secretaría de Finanzas fueron alterados para ocultar faltantes. La Secretaría de la Función Pública estatal documentó irregularidades en fondos federales por $1,098M en ejercicios 2008-2011, sin subsanar pese a las observaciones.',
    funcionarios:'La querella de 129 hojas y 900 anexos probatorios incluyó a 50 excolaboradores, entre ellos el expresidente municipal Seth Yassir Vázquez Hernández, señalado por irregularidades adicionales de $558M en el sistema municipal de agua potable.',
    deuda:'Incrementó la deuda de Chiapas en 704% en 72 meses: de $4.68 millones de pesos a $33,747M. El desfalco total estimado alcanzó los $40,000M según la querella penal, superando incluso la megadeuda de Coahuila de Humberto Moreira. El 95% de los contratos de su gestión se otorgaron por adjudicación directa, usando empresas fantasma y dejando 120 obras inconclusas.',
    denuncias:'Demandado penalmente por el activista Horacio Culebro Borrayas, quien pasó casi 2 años preso por cargos que él mismo calificó de fabricados en represalia. Sabines lo contrademandó por daño moral en un intento de silenciar el litigio.',
    evasion:'Fue nombrado Cónsul General en Orlando por Peña Nieto en julio de 2015, apenas 2.5 años después de dejar el cargo, obteniendo inmunidad diplomática que lo blindó de la investigación penal en curso. Mantuvo el cargo durante el sexenio de AMLO pese al cambio de partido en el poder.',
    nepotismo:'Ascendió políticamente con el respaldo directo de su antecesor, el gobernador Pablo Salazar Mendiguchía, quien lo llevó a la presidencia del Congreso local y después a la gubernatura.'},
    timeline:[{year:'2006',event:'Asume gubernatura de Chiapas con apoyo de su antecesor Pablo Salazar Mendiguchía'},{year:'2012',event:'Termina gestión dejando deuda de $33,747M (incremento de 704%)'},{year:'2013',event:'PGR admite querella penal por desfalco de $40,000M contra él y 50 excolaboradores'},{year:'2015',event:'Julio: nombrado Cónsul General de México en Orlando, Florida, obteniendo inmunidad diplomática'},{year:'2016',event:'Diciembre: detenido brevemente en el aeropuerto de la CDMX'},{year:'2026',event:'Continúa como cónsul en Orlando bajo el gobierno de Morena, sin que las carpetas de investigación hayan avanzado'}],
    sources:[{label:'SinEmbargo — Nombramiento como cónsul',url:'https://www.sinembargo.mx/1402074/la-sre-premia-a-juan-sabines-con-el-consulado-de-orlando-aun-cuando-no-ha-aclarado-mega-deuda-de-chiapas/'},{label:'eje central — Depredó Chiapas',url:'https://www.ejecentral.com.mx/la-portada-juan-sabines-depredo-chiapas'},{label:'Diario de Chiapas — Detención',url:'https://diariodechiapas.com/metropoli/pgr-detiene-al-ex-gobernador-juan-sabines-guerrero/'},{label:'ChiapasParalelo — Diplomacia de la impunidad',url:'https://www.chiapasparalelo.com/opinion/2015/07/sabines-diplomacia-de-la-impunidad/'},{label:'Proceso — Demanda por daño moral',url:'https://proceso.com.mx/484852/juan-sabines-denuncia-dano-moral-a-activista-lo-acuso-defraudar-al-erario-40-mil-mdp'}]}
);


// =====================================================
// HIDALGO — CASO "ESTAFA SINIESTRA" ($522M)
// =====================================================
officials.push(
    {id:362,name:'Omar Fayad Meneses',role:'Embajador de México en Noruega / Exgobernador de Hidalgo (2016-2022)',party:'PRI (expulsado, cercano a MORENA)',state:'Hidalgo',level:'federal',active:true,status:'en_funciones',lastVerified:'2026-07-14',
    scores:{sentencias:10,fiscalizacion:18,funcionarios:15,deuda:14,denuncias:9,evasion:10,nepotismo:3},
    breakdown:{sentencias:'No ha sido indiciado directamente en ninguna carpeta de investigación pese a que el esquema de desvío operó durante su sexenio y con su círculo íntimo. Su colaborador más cercano por 29 años, Martiniano Vega Orozco, fue sentenciado a 12 años de prisión.',
    fiscalizacion:'Bajo su gestión (2016-2022) operó la "Estafa Siniestra", un esquema de desvío de recursos por al menos $522M a través de 13 municipios y 2 secretarías estatales, usando empresas fachada para simular obras y servicios durante la pandemia de COVID-19.',
    funcionarios:'Martiniano Vega Orozco enfrenta 4 causas penales: peculado de $116M por un seguro catastrófico no cobrado tras el huracán Grace, venta ilegal de 3 helicópteros por debajo de su valor, y compras fantasma de software por $23.8M. Ya sentenciado a 12 años por un contrato fantasma de $18.2M para crema quirúrgica antiséptica durante la emergencia de COVID.',
    deuda:'Su exoperador financiero Pablo Pérez Martínez declaró que durante dos décadas se tejió una red de corrupción con desvíos de hasta $2,700M solo de la Secretaría de Educación Pública de Hidalgo, mediante "pellizcos" sistemáticos al presupuesto.',
    denuncias:'La senadora priista Carolina Viggiano fue citada a declarar tras afirmar en un podcast que un alcalde en funciones le reveló el mecanismo de desvíos antes de que se judicializara. Exfuncionarios presos han señalado desde la cárcel que Fayad está "protegido por acuerdos políticos".',
    evasion:'Renunció al PRI en 2023 y fue nombrado embajador en Noruega por AMLO cinco meses después, obteniendo inmunidad diplomática antes de que avanzara cualquier investigación en su contra. Es el quinto exgobernador priista en recibir una embajada de Morena tras perder su estado.',
    nepotismo:'Designó a su esposa, la actriz Victoria Ruffo, como directora local del Sistema Nacional para el Desarrollo Integral de la Familia durante su gestión como alcalde de Pachuca.'},
    timeline:[{year:'2016',event:'Asume gubernatura de Hidalgo por el PRI'},{year:'2020',event:'Opera el esquema "Estafa Siniestra" durante la pandemia, desviando al menos $522M'},{year:'2022',event:'Termina gestión. El nuevo gobernador Julio Menchaca destapa la red de corrupción.'},{year:'2023',event:'Junio: renuncia al PRI. Noviembre: AMLO lo nombra embajador en Noruega.'},{year:'2025',event:'Su exsecretario particular Martiniano Vega Orozco es detenido, enfrenta 4 causas penales y una condena de 12 años'},{year:'2026',event:'Continúa como embajador en Noruega sin haber sido indiciado'}],
    sources:[{label:'La Jornada — Cae otro exalcalde',url:'https://www.jornada.com.mx/2025/10/25/estados/022n3est'},{label:'NotiVer — Excolaborador señala a Fayad',url:'https://www.notiver.com/nacionales/ex-alcaldes-de-hidalgo-senalan-a-ex-contralor-de-fayad-de-recibir-dinero-malversado/'},{label:'Proceso — Se convierte en embajador',url:'https://www.proceso.com.mx/nacional/politica/2023/12/14/omar-fayad-se-convierte-en-embajador-promotor-de-amlo-320441.html'},{label:'Los Ángeles Press — Lavandería de contratos',url:'https://losangelespress.org/investigaciones/2022/nov/30/estafa-siniestra-en-hidalgo-se-fraguo-incluso-sin-la-intermediacion-de-alcaldes-4729.html'}]},

    {id:363,name:'Elías San Juan',role:'Expresidente Municipal de Yahualica, Hidalgo',party:'PRI',state:'Hidalgo',level:'municipal',active:false,status:'ex_funcionario',lastVerified:'2026-07-14',
    scores:{sentencias:15,fiscalizacion:8,funcionarios:3,deuda:8,denuncias:6,evasion:3,nepotismo:2},
    breakdown:{sentencias:'Detenido el 23 de noviembre de 2022 junto con otros 3 alcaldes, preso por peculado agravado y uso ilícito de atribuciones y facultades.',
    fiscalizacion:'Parte de la red "Estafa Siniestra" que operó a través de empresas fachada durante la pandemia de COVID-19.',
    funcionarios:'Contactado por funcionarios de nivel Secretario del Gobierno de Hidalgo para simular obras, quedarse con el 30% y regresar el 70% a empresas fachada.',
    deuda:'Desvió $29,224,727.36 pesos, de los cuales $15M se destinaron supuestamente a una aplicación móvil y desarrollo web, y el resto a fumigación y arcos sanitizantes durante la pandemia.',
    denuncias:'Parte del maxiproceso de la Estafa Siniestra que involucró a 13 municipios y 2 secretarías estatales.',
    evasion:'No evadió la detención.',
    nepotismo:'Sin datos adicionales.'},
    timeline:[{year:'2022',event:'Detenido el 23 de noviembre por peculado agravado, parte de la Estafa Siniestra'}],
    sources:[{label:'La Voz de Michoacán',url:'https://www.lavozdemichoacan.com.mx/mexico/corrupcion/aprehenden-a-4-alcaldes-de-hidalgo-por-la-estafa-siniestra-hay-otros-9-bajo-investigacion/'},{label:'El Diario de Chihuahua',url:'https://www.eldiariodechihuahua.mx/nacional/que-es-la-estafa-siniestra-de-hidalgo-20230724-2079675.html'}]},

    {id:364,name:'Marcos Miguel Taboada Vargas',role:'Expresidente Municipal de Singuilucan, Hidalgo (2020-2024)',party:'Nueva Alianza',state:'Hidalgo',level:'municipal',active:false,status:'ex_funcionario',lastVerified:'2026-07-14',
    scores:{sentencias:14,fiscalizacion:8,funcionarios:3,deuda:9,denuncias:6,evasion:4,nepotismo:2},
    breakdown:{sentencias:'Capturado en octubre de 2025 por agentes ministeriales de Hidalgo por su participación en la Estafa Siniestra, acusado de uso ilícito de atribuciones y facultades e incumplimiento agravado de un deber legal.',
    fiscalizacion:'Su municipio fue de los señalados desde el inicio del destape del esquema en 2022.',
    funcionarios:'Parte de la red de 13 municipios y 2 secretarías estatales que operó el esquema de empresas fachada.',
    deuda:'Desvió más de $109M según la investigación, con contratos irregulares a favor de 22 personas físicas y morales. Devolvió $26M de los $110M desviados tras ser señalado.',
    denuncias:'Documentado por La Jornada como parte del maxiproceso que continúa activo en 2025-2026.',
    evasion:'Terminó su gestión con normalidad en 2024 antes de ser detenido más de un año después.',
    nepotismo:'Sin datos adicionales.'},
    timeline:[{year:'2020',event:'Asume presidencia municipal de Singuilucan'},{year:'2022',event:'Señalado como parte de la Estafa Siniestra, regresa $26M de los $110M desviados'},{year:'2024',event:'Termina su gestión con normalidad'},{year:'2025',event:'Octubre: detenido por la Estafa Siniestra'}],
    sources:[{label:'La Jornada — Cae exalcalde',url:'https://www.jornada.com.mx/2025/10/25/estados/022n3est'}]}
);


// =====================================================
// QUERÉTARO
// =====================================================
officials.push(
    {id:365,name:'Carmelo Mendieta',role:'Expresidente Municipal de Corregidora, Querétaro (2009-2012)',party:'PRI',state:'Querétaro',level:'municipal',active:false,status:'ex_funcionario',lastVerified:'2026-07-14',
    scores:{sentencias:14,fiscalizacion:8,funcionarios:2,deuda:9,denuncias:6,evasion:8,nepotismo:2},
    breakdown:{sentencias:'Detenido en octubre de 2024 por la Fiscalía Especializada en el Combate a la Corrupción de Querétaro, acusado de peculado en agravio del servicio público y del erario municipal. Ya había sido detenido antes por el mismo tipo de delito en 2020, pero fue liberado.',
    fiscalizacion:'La Fiscalía Anticorrupción de Querétaro cumplimentó una nueva orden de aprehensión en su contra tras reabrir la investigación.',
    funcionarios:'Sin red de colaboradores documentada en este caso específico.',
    deuda:'Compra-venta irregular de un terreno valuado en $9.5M cuyo origen de recursos no pudo ser comprobado. Adquirió una vivienda con recursos de procedencia ilícita utilizando a un tercero sin solvencia económica como comprador de fachada.',
    denuncias:'La denuncia que originó su segunda detención fue presentada por un particular.',
    evasion:'Fue detenido, liberado en 2020, y detenido nuevamente en 2024 por la misma naturaleza de delito, evidenciando fallas en el seguimiento judicial del caso.',
    nepotismo:'Sin datos adicionales.'},
    timeline:[{year:'2009',event:'Asume presidencia municipal de Corregidora'},{year:'2012',event:'Termina su gestión'},{year:'2020',event:'Primera detención por desvío de recursos. Es liberado.'},{year:'2024',event:'Octubre: nueva orden de aprehensión cumplimentada por peculado'}],
    sources:[{label:'Infobae — Detención',url:'https://www.infobae.com/mexico/2024/10/17/detienen-a-ex-alcalde-de-corregidora-queretaro-por-desvio-de-recursos-al-erario/'},{label:'Milenio — Peculado y desvío',url:'https://www.milenio.com/estados/detienen-a-ex-alcalde-de-corregidora-por-peculado-y-desvio-de-recursos'}]},

    {id:366,name:'Alejandro N.',role:'Expresidente Municipal de Colón, Querétaro',party:'PAN',state:'Querétaro',level:'municipal',active:false,status:'ex_funcionario',lastVerified:'2026-07-14',
    scores:{sentencias:12,fiscalizacion:6,funcionarios:3,deuda:8,denuncias:6,evasion:3,nepotismo:3},
    breakdown:{sentencias:'Detenido por la Policía de Investigación del Delito adscrita a la Fiscalía Especializada en Combate a la Corrupción de Querétaro, acusado de tráfico de influencias y promoción de conductas ilícitas, junto con un empresario.',
    fiscalizacion:'Investigación de la Fiscalía Anticorrupción de Querétaro por facilitar beneficios irregulares a un particular desde su posición administrativa.',
    funcionarios:'Detenido junto con el representante legal de una empresa beneficiada, quien también fue arrestado.',
    deuda:'Facilitó acuerdos económicos por cantidades millonarias para que un desarrollo industrial se asentara en el municipio de Colón cumpliendo irregularmente con el Código Urbano estatal.',
    denuncias:'Caso documentado por la Fiscalía Especializada en Combate a la Corrupción de Querétaro.',
    evasion:'No evadió la detención.',
    nepotismo:'Otorgó y aprobó beneficios administrativos a un particular con quien mantenía acuerdos económicos.'},
    timeline:[{year:'2023',event:'Septiembre: detenido junto con un empresario por tráfico de influencias'}],
    sources:[{label:'Milenio — Detención',url:'https://www.milenio.com/estados/detienen-a-ex-alcalde-de-queretaro-y-a-empresario-por-corrupcion'}]}
);


officials.push(
    {id:367,name:'Fernando Gustavo Flores Fernández',role:'Presidente Municipal de Metepec, Estado de México',party:'Sin dato',state:'Estado de México',level:'municipal',active:true,status:'en_funciones',lastVerified:'2026-07-14',
    scores:{sentencias:5,fiscalizacion:12,funcionarios:8,deuda:8,denuncias:10,evasion:6,nepotismo:3},
    breakdown:{sentencias:'Sin sentencia. Denunciado formalmente ante la Fiscalía Especializada en Combate a la Corrupción del Estado de México (FECC), con sede en Toluca, recibida el 16 de junio de 2026.',
    fiscalizacion:'La denuncia señala presuntas anomalías en procesos de adquisición municipal: sobreprecios en compras de uniformes y equipamiento para la Policía Municipal, sin justificación clara de montos ni procedimientos de contratación transparentes.',
    funcionarios:'La denuncia involucra formalmente también al director de Seguridad Pública de Metepec, Jesús Alberto Ramírez Manzur, señalado además por presunto contubernio en un caso de abuso sexual cometido por uno de sus elementos, y a Clara Cardozo, colaboradora cercana desde su primera campaña.',
    deuda:'Se documentan entregas de dinero en efectivo presuntamente vinculadas a recursos obtenidos por el cobro de multas de tránsito, además de sobreprecios no justificados en compras de insumos de seguridad pública.',
    denuncias:'La denuncia proviene de una exfuncionaria que colaboró en su equipo desde 2021. Enfrenta además una investigación paralela por hechos ocurridos en el Club Deportivo La Asunción, donde llegó con escoltas armadas, incidente que generó controversia pública adicional y una audiencia programada en la Fiscalía General de Justicia del Estado de México.',
    evasion:'La presidenta de la Mesa Directiva del Congreso mexiquense descartó estar analizando su destitución, argumentando que no existe una solicitud formal ni expediente abierto pese a la denuncia ya presentada.',
    nepotismo:'Su director de Seguridad Pública ha mantenido continuidad en el cargo a través de administraciones de distintos partidos, lo que ha sido señalado como parte de una estructura de protección interna.'},
    timeline:[{year:'2021',event:'Inicia su primera campaña política con el equipo que después lo acompañaría al gobierno municipal'},{year:'2026',event:'Junio: exfuncionaria presenta denuncia formal ante la FECC por sobreprecios, entregas de efectivo y contubernio en caso de abuso sexual. Controversia adicional por incidente en club deportivo privado con escoltas armadas.'}],
    sources:[{label:'Capital Edomex — Investigación',url:'https://www.capitaledomex.com.mx/local/destapan-la-cloaca-del-alcalde-de-metepec/'},{label:'PolíticoMX — Denuncia formal',url:'https://politico.mx/2026/06/19/exfuncionaria-denuncia-por-presunta-corrupcion-a-fernando-flores-alcalde-de-metepec/'},{label:'La Silla Rota — Descartan destitución',url:'https://lasillarota.com/metropoli/2026/6/19/denuncian-al-alcalde-de-metepec-fernando-flores-por-presunta-corrupcion-descartan-destitucion-604662.html'}]}
);


officials.push(
    {id:368,name:'María del Rosario "N"',role:'Expresidenta Municipal saliente de Santo Tomás de los Plátanos, Estado de México',party:'Sin dato',state:'Estado de México',level:'municipal',active:false,status:'ex_funcionario',lastVerified:'2026-07-14',
    scores:{sentencias:14,fiscalizacion:5,funcionarios:6,deuda:3,denuncias:7,evasion:5,nepotismo:8},
    breakdown:{sentencias:'Detenida el 23 de enero de 2025 en el marco de la Operación Enjambre, derivado de sus presuntos vínculos con el cártel de La Familia Michoacana.',
    fiscalizacion:'Sin hallazgos de fiscalización financiera documentados; el caso es de naturaleza penal por vínculos criminales, no de desvío de recursos.',
    funcionarios:'Habría utilizado su vínculo con La Familia Michoacana para obligar a un síndico municipal a firmar diversos documentos bajo coacción.',
    deuda:'Sin monto de daño patrimonial documentado en este caso específico.',
    denuncias:'Caso documentado ampliamente por Milenio y otros medios como parte de la cronología oficial de la Operación Enjambre.',
    evasion:'Fue detenida antes de que su esposo, Pedro Luis "Wicho", asumiera el cargo que ella dejaba, evidenciando un patrón de relevo familiar en el control del municipio.',
    nepotismo:'CASO DIRECTO: su esposo, Pedro Luis "Wicho" (ya documentado en esta base), fue electo para sucederla como alcalde del mismo municipio. Según las investigaciones, habría ordenado el secuestro de un familiar de una candidata rival para facilitar la llegada de su esposa al Ayuntamiento en el proceso electoral previo.'},
    timeline:[{year:'2025',event:'23 de enero: detenida por sus presuntos vínculos con La Familia Michoacana, dos semanas antes de que su esposo fuera detenido el 8 de febrero'}],
    sources:[{label:'Milenio — Cronología Operación Enjambre',url:'https://www.milenio.com/policia/cronologia-operacion-enjambre-quienes-han-sido-detenidos-lista'}]}
);
