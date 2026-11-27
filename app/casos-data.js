// Banco de 10 casos — TSE013-1 Trabajo Social y Discapacidad (U. de Aysén)
// Versión pública: sin pautas, aceptables ni ejemplos de justificación.
// Generado desde el repo docente privado (fuente-datos/) — no editar a mano.
var CASOS = [
  {
    "id": 1,
    "slug": "martina-cochrane",
    "titulo": "Caso 1 · Los tres escalones de Cochrane (Provincia Capitán Prat) — certificación, barreras y voto",
    "territorio": "Cochrane",
    "resumen": "Martina Riquelme, 41 años, vive en Cochrane y se desplaza en silla de ruedas tras un accidente laboral en una planta salmonera. Entre un certificado estatal que se hace esperar, una pensión rechazada y un local de votación con tres escalones, su caso recorre la relación entre discapacidad, Estado y derechos políticos en la Provincia Capitán Prat.",
    "timeline": {
      "imagen": "assets/image2.png",
      "anclajes": [
        {
          "era": "Eugenesia",
          "hecho": "La certificación médica nace con el modelo médico"
        },
        {
          "era": "Modelo social",
          "hecho": "Los tres escalones: la sociedad incapacita"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "CDPD 2006: derechos, pero el COMPIN sigue de puerta"
        }
      ]
    },
    "relato": [
      "Martina Riquelme tiene 41 años y vive en Cochrane con su pareja Pedro (44), artesano, y sus dos hijos de 15 y 11 años. Hace ocho años sufrió un accidente en la planta salmonera donde trabajaba fileteando, que le produjo una lesión medular; desde entonces progresivamente terminó degenerando su condición hasta desplazarse actualmente en silla de ruedas. Tras el accidente, la empresa no renovó su contrato.",
      "Para acceder a cualquier beneficio estatal, Martina debió obtener primero el certificado de la COMPIN. Su primera postulación a la pensión de invalidez fue rechazada porque la comisión estimó un porcentaje de incapacidad insuficiente; después de dos años de reaplicaciones obtuvo una pensión mínima. En la municipalidad le explicaron que la rampa del local de votación «no estaba en el presupuesto del año». En las últimas elecciones no pudo sufragar en dos de las tres últimas votaciones: el local tiene tres escalones y ningún acceso alternativo.",
      "La agrupación comunal de personas en situación de discapacidad la invitó a dirigirla, y ella aceptó. La prensa local tituló la nota sobre su caso: «la luchadora que no se rinde». Martina tramita actualmente su credencial de discapacidad y estudia, con apoyo de la agrupación, exigir por vía legal la accesibilidad del local electoral."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Martina Riquelme"
        },
        {
          "label": "Territorio",
          "valor": "Cochrane, Provincia Capitán Prat, Región de Aysén"
        },
        {
          "label": "Edad",
          "id": "c1-f1"
        },
        {
          "label": "Dispositivo estatal que certifica su condición ante el Estado",
          "id": "c1-f2"
        },
        {
          "label": "Resultado de su primera postulación a la pensión",
          "id": "c1-f3"
        },
        {
          "label": "Barrera que le impidió votar",
          "id": "c1-f4"
        },
        {
          "label": "Momento histórico en que se inscribe la certificación médica como puerta de acceso a los derechos",
          "id": "c1-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Tabla de verificación: dispositivos y momentos",
      "columnas": [
        "Dispositivo / hecho",
        "¿Mencionado en el relato?",
        "Momento histórico asociado"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Workhouse o asilo"
            },
            {
              "id": "c1-t1"
            },
            {
              "valor": "Encierro fabril (Revolución Industrial)"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Certificado COMPIN"
            },
            {
              "valor": "Sí"
            },
            {
              "id": "c1-t2"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Pensión de invalidez"
            },
            {
              "valor": "Sí"
            },
            {
              "id": "c1-t3"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Acceso universal al voto"
            },
            {
              "valor": "Sí (negado en los hechos)"
            },
            {
              "id": "c1-t4"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Modelo médico",
        "texto": "Desde esta mirada, el problema reside en la persona: la condición de Martina se comprende como una ⟦1⟧ individual que debe ser tratada. La institucionalidad concentra su respuesta en la ⟦2⟧ del cuerpo y en la certificación: sin el dictamen de la ⟦3⟧ no hay acceso a beneficio alguno. Al centrar el análisis en el déficit, esta lectura opera una ⟦4⟧ de la discapacidad: el accidente en la faena —su producción social— queda fuera de cuadro y la condición aparece como un simple dato del cuerpo. Su horizonte declarado es reintegrar a la persona al ⟦5⟧, más que transformar el entorno.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "deficiencia (individual)"
          },
          {
            "n": 2,
            "respuesta": "rehabilitación"
          },
          {
            "n": 3,
            "respuesta": "certificación médica (COMPIN)"
          },
          {
            "n": 4,
            "respuesta": "naturalización"
          },
          {
            "n": 5,
            "respuesta": "orden productivo"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Modelo social",
        "texto": "Esta lectura desplaza el problema desde el cuerpo hacia la sociedad: lo que impide votar a Martina no es su silla, sino las ⟦1⟧ que el entorno levanta. Su frase programática lo resume: la sociedad incapacita porque está diseñada para un ⟦2⟧. Nacido de la experiencia de las propias personas afectadas —la ⟦3⟧ de 1976 y el trabajo de Mike Oliver—, este modelo se comprende a sí mismo como un discurso ⟦4⟧ frente a la naturalización médica. En el caso, los tres escalones del local de votación son su escena exacta: la ⟦5⟧ se expresa aquí como exclusión política construida por la ciudad, no por el cuerpo.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "barreras"
          },
          {
            "n": 2,
            "respuesta": "cuerpo estándar"
          },
          {
            "n": 3,
            "respuesta": "UPIAS"
          },
          {
            "n": 4,
            "respuesta": "antihegemónico"
          },
          {
            "n": 5,
            "respuesta": "opresión social"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Campana–Simmel: periodización histórica",
        "texto": "Leído con Simmel, el caso muestra que la categoría «persona con discapacidad» se define por la ⟦1⟧: Martina es «discapacitada» ante el Estado en la medida en que recibe —o debería recibir— pensión, beneficio o certificación. El recorrido histórico evidencia que cada época nombra distinto a esta población —defectuoso, inválido, minusválido, persona con discapacidad—, proceso que el marco denomina ⟦2⟧. Los registros, las comisiones y los porcentajes de incapacidad configuran un ⟦3⟧ que administra y segmenta a la población sin eliminar las barreras. La pregunta que atraviesa el caso —quién cuenta como discapacitado según la ⟦4⟧— reaparece hoy dentro del paradigma de derechos. Y la trayectoria misma de Martina condensa una de las tesis de síntesis: el Estado ⟦5⟧, pues produce discapacidad —guerra, trabajo industrial, pobreza— y luego la gestiona individualmente como déficit.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "relación de asistencia"
          },
          {
            "n": 2,
            "respuesta": "problematización"
          },
          {
            "n": 3,
            "respuesta": "gobierno de la discapacidad"
          },
          {
            "n": 4,
            "respuesta": "norma administrativa"
          },
          {
            "n": 5,
            "respuesta": "produce lo que administra"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "slug": "benjamin-puerto-aysen",
    "titulo": "Caso 2 · El diagnóstico que viaja dos horas (Puerto Aysén) — TEA, servicios lejanos y focalización",
    "territorio": "Puerto Aysén",
    "resumen": "Benjamín Cárdenas, 19 años, vive en Puerto Aysén con su madre Rosa y su abuela. Su diagnóstico llegó tarde y lejos: cada control especializado exige dos horas de viaje por la Ruta 7, mientras la escuela, la Seremi y los programas municipales muestran cómo se gobierna la discapacidad en un territorio aislado.",
    "timeline": {
      "imagen": "assets/image3.png",
      "anclajes": [
        {
          "era": "Bienestar",
          "hecho": "El diagnóstico tardío hereda la lógica médico-rehabilitadora"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "SUF 1981 y cursos de capacidades: focalizar sin transformar el entorno"
        }
      ]
    },
    "relato": [
      "Benjamín Cárdenas tiene 19 años y vive en Puerto Aysén con su madre Rosa (47) y su abuela. Fue diagnosticado con trastorno del espectro autista a los 6 años, en Coyhaique, luego de dos años de espera y de viajes financiados con rifas. En Puerto Aysén no hay atención especializada: cada control exige un traslado de dos horas por la Ruta 7.",
      "Rosa dejó su empleo de temporera para acompañarlo. Recibe el Subsidio Único Familiar por carga de discapacidad, una asistencia mínima que exige acreditar periódicamente la condición ante la municipalidad. La escuela donde Benjamín estudió nunca contó con educadora diferencial; citaba las reuniones de apoderados en horario laboral y la dirección interpretó las ausencias de Rosa como descompromiso familiar. Benjamín egresó de cuarto medio sin plan de transición a la vida adulta.",
      "Un programa municipal de «inclusión laboral» le ofreció un curso de capacitación en habilidades personales para el empleo; el municipio celebra el programa en su cuenta pública, aunque ninguna empresa local ha modificado sus puestos ni sus accesos. La Seremi de Salud resolvió no abrir un cupo de especialista en la comuna por «baja densidad de casos», decisión adoptada en Coyhaique sin consulta local. Rosa participa en una agrupación de familias que exige el cumplimiento efectivo de la Ley 20.422."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Benjamín Cárdenas"
        },
        {
          "label": "Edad actual",
          "valor": "19 años"
        },
        {
          "label": "Diagnóstico y edad en que lo recibió",
          "id": "c2-f1"
        },
        {
          "label": "Tiempo de espera para acceder al diagnóstico",
          "id": "c2-f2"
        },
        {
          "label": "Traslado que exige cada control especializado",
          "id": "c2-f3"
        },
        {
          "label": "Subsidio que recibe Rosa y condición que exige",
          "id": "c2-f4"
        },
        {
          "label": "Momento histórico en que nace el subsidio focalizado en Chile",
          "id": "c2-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Tabla de verificación: los cinco niveles del entorno",
      "columnas": [
        "Nivel",
        "Elemento del caso"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Microsistema"
            },
            {
              "id": "c2-t1"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Mesosistema"
            },
            {
              "id": "c2-t2"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Exosistema"
            },
            {
              "id": "c2-t3"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Macrosistema"
            },
            {
              "valor": "Centralismo: las políticas se diseñan en Santiago y se aplican igual en Aysén; cultura del mérito."
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Cronosistema"
            },
            {
              "id": "c2-t4"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Modelo ecológico",
        "texto": "La resolución de la Seremi —adoptada en la capital regional sin que la familia participara— pertenece al ⟦1⟧: decisiones que afectan a Benjamín en espacios donde él no está presente. En el ⟦2⟧, en cambio, están sus espacios inmediatos: la familia, la escuela, la vecindad. Que la escuela interpretara como descompromiso las ausencias de Rosa revela una falla del ⟦3⟧: los microsistemas coexisten, pero no se articulan. Que las políticas se diseñen en Santiago y se apliquen igual en Aysén remite al ⟦4⟧ —el centralismo y la cultura del mérito—, mientras que la acumulación de esperas, viajes y renuncias laborales a lo largo de la vida de Benjamín corresponde al ⟦5⟧: el tiempo como dimensión del caso.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "exosistema"
          },
          {
            "n": 2,
            "respuesta": "microsistema"
          },
          {
            "n": 3,
            "respuesta": "mesosistema"
          },
          {
            "n": 4,
            "respuesta": "macrosistema"
          },
          {
            "n": 5,
            "respuesta": "cronosistema"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Modelo de derechos humanos",
        "texto": "Desde este modelo, lo que está en juego no es caridad sino la ⟦1⟧ de los derechos: la agrupación de Rosa no pide favores, demanda cumplimiento. Chile ratificó la ⟦2⟧, que instituciona el modelo social y reconoce a las personas con discapacidad como sujetos plenos de derecho; la normativa interna incluye la ⟦3⟧, que establece la igualdad de oportunidades y la inclusión social. El lema del movimiento —⟦4⟧— exige participación en las decisiones que les afectan, exactamente lo que la Seremi omitió al decidir sin consulta local. Sin embargo, el caso exhibe la tensión que el propio paradigma no resuelve: la certificación médica estatal sigue siendo la ⟦5⟧ a los derechos.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "exigibilidad (de los derechos)"
          },
          {
            "n": 2,
            "respuesta": "CDPD (Convención de 2006)"
          },
          {
            "n": 3,
            "respuesta": "Ley 20.422"
          },
          {
            "n": 4,
            "respuesta": "«Nada sobre nosotros sin nosotros»"
          },
          {
            "n": 5,
            "respuesta": "puerta de acceso"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Campana–Simmel: gobierno neoliberal",
        "texto": "El subsidio que recibe Rosa condensa el giro de 1981: el ⟦1⟧ llegó a la discapacidad como asistencia mínima, dirigida a poblaciones «objetivo» —en este caso, a mujeres con responsabilidades de cuidado— y sujeta a requisitos de acreditación. El marco describe esta fuerte presencia del Estado en el mundo popular, en su dimensión asistencial, como ⟦2⟧. El programa municipal de empleo, por su parte, ilustra el ⟦3⟧: potencia habilidades individuales sin transformar los entornos ni el mercado de trabajo. Diría Campana: apunta a las ⟦4⟧, nunca a las causas. La ⟦5⟧ opera así como gestión diferencial de la pobreza trasladada al terreno de la discapacidad.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "Subsidio Único Familiar"
          },
          {
            "n": 2,
            "respuesta": "hiperestatalización asistencial"
          },
          {
            "n": 3,
            "respuesta": "discurso de capacidades"
          },
          {
            "n": 4,
            "respuesta": "manifestaciones (no las causas)"
          },
          {
            "n": 5,
            "respuesta": "focalización condicional"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "slug": "elena-coyhaique-tortel",
    "titulo": "Caso 3 · La usuaria que quería ser coautora (Coyhaique) — agencia, palabra y ayuda bienintencionada",
    "territorio": "Coyhaique/Tortel",
    "resumen": "Elena Fuentes, 32 años, nació en Tortel y vive en Coyhaique. Trabaja, vota y es presentada por el municipio como un caso exitoso de inclusión, pero cuando se ofreció a colaborar en su centro le recordaron que es «una usuaria»: su historia pregunta quién puede producir conocimiento y decidir sobre lo decidible.",
    "timeline": {
      "imagen": "assets/image4.png",
      "anclajes": [
        {
          "era": "Encierro fabril",
          "hecho": "El centro especial hereda la lógica asilar del taller protegido"
        },
        {
          "era": "Modelo social",
          "hecho": "Berkeley: control sobre la propia vida con asistencia"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "Derechos reconocidos, palabra forcluida: la tensión actual"
        }
      ]
    },
    "relato": [
      "Elena Fuentes tiene 32 años. Nació en Tortel y vive desde niña en Coyhaique. Es una mujer con síndrome de Down cuya trayectoria —escuela especial, centro ocupacional y empleo en un centro especial— es presentada por el municipio como un caso exitoso de inclusión. Vota desde los 18 años y cada semana puede elegir entre las opciones que el centro le ofrece: cine o teatro el jueves, el menú del viernes.",
      "Durante un año participó en Pensamiento Libre, un programa de filosofía aplicada donde cada participante es tratado como persona pensante y «maestra», no como usuaria. Al finalizar, Elena se ofreció a colaborar en su centro: apoyar a personas con autismo y proponer ideas para los talleres. El psicólogo del centro respondió: «Tú eres una usuaria; el resto de cuestiones lo llevan los profesionales». Su familia —que, en sus propias palabras, «lo ha dado todo» por ella— decide los pases, el dinero y los horarios sin consultarle.",
      "Ningún indicador clásico registra lo ocurrido: Elena trabaja, vota y elige. Pero no participa del diagnóstico que la nombra, ni del diseño de los programas que usa, ni de las decisiones sobre lo decidible, ni de la evaluación de los resultados. En la prensa local, la nota sobre el centro la presenta como «un angelito que inspira»."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Elena Fuentes"
        },
        {
          "label": "Edad",
          "valor": "32 años"
        },
        {
          "label": "Localidad de nacimiento",
          "id": "c3-f1"
        },
        {
          "label": "Trayectoria institucional (tres etapas)",
          "id": "c3-f2"
        },
        {
          "label": "Programa de filosofía aplicada en que participó",
          "id": "c3-f3"
        },
        {
          "label": "Respuesta del psicólogo del centro",
          "id": "c3-f4"
        },
        {
          "label": "Lo que los indicadores clásicos de inclusión no registran en su caso",
          "id": "c3-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Tabla de verificación: la trazabilidad de la institución",
      "columnas": [
        "Eslabón de la trazabilidad",
        "¿Participa Elena? (Sí / No, según el relato)"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Diagnóstico"
            },
            {
              "id": "c3-t1"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Diseño de programas y opciones"
            },
            {
              "id": "c3-t2"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Decisión sobre lo decidible"
            },
            {
              "id": "c3-t3"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Evaluación de los resultados"
            },
            {
              "id": "c3-t4"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Forclusión",
        "texto": "El «tú eres una usuaria» que recibe Elena no es una constatación neutral: es una ⟦1⟧, un déficit de credibilidad otorgado a su palabra por prejuicio identitario, que puede operar incluso en profesionales bienintencionados. El caso muestra que se puede estar integrado socialmente y a la vez excluido del estatuto de ⟦2⟧: Elena está y no está, elige y no decide. Su elección entre cine y teatro ilustra lo que Sánchez Alcón llama ⟦3⟧: elegir entre opciones sin producir las opciones ni decidir qué es decidible. El rótulo «usuaria» evidencia, además, el carácter de ⟦4⟧ de las categorías institucionales: no describen un hecho natural, lo crean. La salida no es solo distributiva sino epistémica: un ⟦5⟧ que repare su posición como productora de conocimiento e incluya su palabra en toda la trazabilidad de la institución.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "injusticia testimonial"
          },
          {
            "n": 2,
            "respuesta": "agente epistémico"
          },
          {
            "n": 3,
            "respuesta": "elección sin deliberación"
          },
          {
            "n": 4,
            "respuesta": "categorías performativas"
          },
          {
            "n": 5,
            "respuesta": "re-plazamiento"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Modelo crítico-interseccional",
        "texto": "Esta mirada pregunta quién define la ⟦1⟧ y qué relaciones de ⟦2⟧ la sostienen. La nota de prensa que retrata a Elena como «angelito que inspira» muestra cómo los ⟦3⟧ locales construyen la discapacidad desde el paternalismo. La situación de Elena se cruza, además, con su condición de mujer y de origen rural: la lectura es, en rigor, ⟦4⟧. Y el modelo obliga a revisar los propios instrumentos del trabajo social con la advertencia de Benjamin: el expediente y el plan de intervención, nuestros ⟦5⟧, pueden forcluir al propio destinatario incluso desde las buenas prácticas.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "normalidad"
          },
          {
            "n": 2,
            "respuesta": "poder"
          },
          {
            "n": 3,
            "respuesta": "imaginarios"
          },
          {
            "n": 4,
            "respuesta": "interseccional"
          },
          {
            "n": 5,
            "respuesta": "documentos de civilización"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Campana–Simmel: asistencia ambivalente",
        "texto": "El centro especial de empleo es heredero de una larga historia: la ⟦1⟧ de los asilos y talleres que separaron a las personas con discapacidad del trabajo común. Leído con Simmel y Arias, el ⟦2⟧ que allí se constituye es individual, conservador y de derechos/deberes: la asistencia integra, pero lo hace como ⟦3⟧. Berkeley, en 1970, mostró la salida: la ⟦4⟧ no es hacer sin ayuda, sino control sobre la propia vida con ayuda. El caso de Elena condensa la cuarta tesis de síntesis: la asistencia es ⟦5⟧ —puede ser degradación o, rediseñada desde el control del propio destino, condición de autonomía.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "lógica asilar"
          },
          {
            "n": 2,
            "respuesta": "vínculo asistencial"
          },
          {
            "n": 3,
            "respuesta": "miembro subordinado"
          },
          {
            "n": 4,
            "respuesta": "independencia con asistencia"
          },
          {
            "n": 5,
            "respuesta": "ambivalente"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "slug": "manuel-chile-chico",
    "titulo": "Caso 4 · Don Manuel (Chile Chico) — vejez, ceguera adquirida y aislamiento de frontera",
    "territorio": "Chile Chico",
    "resumen": "Hombre mayor de Chile Chico que perdió la visión por una retinopatía diabética y vive solo desde que enviudó. Entre la barcaza del Lago General Carrera, la posta rural sin especialista y la certificación de invalidez, su pensión y sus cuidados cotidianos quedan en suspenso. Caso ficticio con fines exclusivamente evaluativos.",
    "timeline": {
      "imagen": "assets/linea_tiempo_caso4.png",
      "anclajes": [
        {
          "era": "Caridad",
          "hecho": "La ayuda de la vecina remeda la antigua caridad comunitaria"
        },
        {
          "era": "Bienestar",
          "hecho": "La pensión de invalidez hereda la lógica del Estado de bienestar"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "La certificación COMPIN sigue siendo puerta de acceso a derechos"
        }
      ]
    },
    "relato": [
      "Manuel Oyarzo tiene 71 años y vive solo en su casa de Chile Chico, a orillas del Lago General Carrera, cerca del paso fronterizo. Enviudó hace tres años: su esposa Elba, con quien compartió cuatro décadas de trabajo en una chacra de cerezos, falleció en 2023. Su única hija, Carolina (45), vive en Coyhaique, donde trabaja como vendedora en el comercio; lo llama por teléfono cada semana y lo visita cada dos o tres meses. Hace dos años le diagnosticaron una retinopatía diabética que le produjo una pérdida visual progresiva e irreversible; durante meses él la atribuyó «a la edad», hasta que la médica le explicó el diagnóstico. Hoy distingue solo luces y sombras.",
      "La posta rural de Chile Chico no tiene oftalmólogo: la médica general controla su diabetes y lo deriva al especialista en Coyhaique. El viaje exige cruzar el lago en la barcaza —dos horas y media de navegación, sujeta a suspensión por viento— y luego una hora y media de ruta; ida y vuelta suma una jornada completa. Para acceder a la pensión básica solidaria de invalidez, de unos $210.000 mensuales, don Manuel debió obtener primero el certificado de la COMPIN, lo que significó repetir el viaje para la evaluación de la comisión. Su Registro Social de Hogares lo ubica en el tramo del 62%. La pensión le alcanza para lo esencial, pero no para costear un acompañante en los viajes médicos, y la posta no dispone de rehabilitación visual ni de entrenamiento en orientación y movilidad.",
      "En lo cotidiano lo sostiene su vecina Juana Cárdenas (63), jubilada, que le hace las compras, le lee la correspondencia y lo acompaña a la posta cuando el tiempo lo permite. Nadie coordina estos apoyos: la posta deriva, la hija llama y Juana ayuda, cada uno por su lado. La municipalidad le ofreció un cupo en un taller de «envejecimiento activo» en el centro comunitario, al que no ha podido asistir porque no tiene quién lo guíe las seis cuadras que lo separan de su casa. Don Manuel dice que no quiere «dar lata» y que, mientras pueda moverse dentro de su casa, se arregla solo."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Manuel Oyarzo"
        },
        {
          "label": "Territorio",
          "valor": "Chile Chico, Provincia General Carrera, Región de Aysén"
        },
        {
          "label": "Edad",
          "id": "c4-f1"
        },
        {
          "label": "Causa de la pérdida visual",
          "id": "c4-f2"
        },
        {
          "label": "Instancia estatal que certifica su invalidez",
          "id": "c4-f3"
        },
        {
          "label": "Tiempo total de viaje ida y vuelta al especialista (calcular con los datos del relato)",
          "id": "c4-f4"
        },
        {
          "label": "Era histórica en que nace la pensión de invalidez (no se menciona en el relato: inferir desde el marco histórico)",
          "id": "c4-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Integrantes del hogar y datos de verificación",
      "columnas": [
        "Nombre",
        "Vínculo",
        "Edad",
        "Situación ocupacional / de salud"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Manuel Oyarzo"
            },
            {
              "valor": "Jefe de hogar (vive solo)"
            },
            {
              "id": "c4-t1"
            },
            {
              "valor": "Pensionado por invalidez; pérdida visual por retinopatía diabética"
            }
          ]
        },
        {
          "celdas": [
            {
              "id": "c4-t2"
            },
            {
              "valor": "Hija; vive en Coyhaique"
            },
            {
              "id": "c4-t3"
            },
            {
              "valor": "Vendedora en el comercio; lo visita cada dos o tres meses"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Juana Cárdenas"
            },
            {
              "id": "c4-t4"
            },
            {
              "valor": "63 años"
            },
            {
              "valor": "Jubilada; le hace las compras, le lee la correspondencia y lo acompaña a la posta"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Modelo médico",
        "texto": "Desde esta mirada, la pérdida de visión de don Manuel se comprende como un problema localizado en su cuerpo: una ⟦1⟧ orgánica consecuencia de la diabetes, que la institucionalidad aborda a través del ⟦2⟧ y del tratamiento especializado —control oftalmológico, terapia láser— aunque el viaje lo vuelva inviable. El certificado de la COMPIN opera como ⟦3⟧: sin esa validación clínico-administrativa no hay pensión ni beneficios, de modo que la medicina no solo trata sino que decide quién accede. El horizonte que propone este modelo es la ⟦4⟧ del individuo —o su reintegración funcional—, enseñándole a adaptarse a su condición, horizonte que en el caso queda trunco porque la posta no ofrece orientación y movilidad. Lo que queda fuera de cuadro es la ⟦5⟧ de la condición: cuatro décadas de trabajo rural sin controles de salud oportunos y un territorio que convierte cada consulta en una jornada de ocho horas.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "deficiencia"
          },
          {
            "n": 2,
            "respuesta": "diagnóstico"
          },
          {
            "n": 3,
            "respuesta": "puerta de acceso"
          },
          {
            "n": 4,
            "respuesta": "rehabilitación"
          },
          {
            "n": 5,
            "respuesta": "producción social"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Modelo ecológico",
        "texto": "El modelo ecológico ordena el caso en niveles anidados. En el ⟦1⟧ se sitúan el centralismo sanitario que concentra la oftalmología en Coyhaique y la cultura que naturaliza la pérdida de visión como «cosa de la edad», idea que el propio don Manuel compartió durante meses. La trayectoria que va del trabajo en la chacra a la viudez y luego a la ceguera progresiva se lee en el ⟦2⟧, donde se acumulan las transiciones vitales. En el ⟦3⟧ aparece la desarticulación de sus apoyos inmediatos: la posta rural, la hija lejana y la vecina coexisten sin coordinarse entre sí. Las decisiones que lo afectan sin que él esté presente —la comisión que evalúa su invalidez en otra ciudad, el calendario de la barcaza que se suspende por viento— pertenecen al ⟦4⟧. Y en el ⟦5⟧ está su vida cotidiana: la casa donde vive solo, las compras con Juana y las llamadas semanales de Carolina.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "macrosistema"
          },
          {
            "n": 2,
            "respuesta": "cronosistema"
          },
          {
            "n": 3,
            "respuesta": "mesosistema"
          },
          {
            "n": 4,
            "respuesta": "exosistema"
          },
          {
            "n": 5,
            "respuesta": "microsistema"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Campana–Simmel: asistencia ambivalente",
        "texto": "Leído con Simmel, don Manuel es «inválido» ante el Estado no por su retina sino por la ⟦1⟧ que lo vincula con ella: recibe —y antes debió solicitar y acreditar— pensión y certificación. El ⟦2⟧ así constituido es individual, conservador y de derechos y deberes: llega a él como caso aislado, exige demostrar la condición ante una comisión y deja intacto el territorio que produce su aislamiento. La cuarta tesis de síntesis ilumina la paradoja cotidiana del caso: la asistencia es ⟦3⟧, pues la pensión lo integra a la sociedad, pero lo hace como ⟦4⟧, un beneficiario subalterno cuyos $210.000 alcanzan para lo esencial y no para el acompañante que haría posible el viaje médico. La ayuda de la vecina —indispensable y a la vez precaria— muestra el rostro comunitario de esa misma ambivalencia. La lección de Berkeley abre, sin embargo, otra posibilidad: una asistencia rediseñada como ⟦5⟧ —transporte subsidiado, un guía acompañante, un lector de pantalla— pondría el control de la propia vida en manos de don Manuel, en vez de dejarlo dependiendo de la buena voluntad de otros.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "relación de asistencia"
          },
          {
            "n": 2,
            "respuesta": "vínculo asistencial"
          },
          {
            "n": 3,
            "respuesta": "ambivalente"
          },
          {
            "n": 4,
            "respuesta": "miembro subordinado"
          },
          {
            "n": 5,
            "respuesta": "condición de autonomía"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "slug": "camila-puerto-cisnes",
    "titulo": "Caso 5 · Camila (Puerto Cisnes) — lengua de señas, universidad y accesibilidad comunicacional",
    "territorio": "Puerto Cisnes",
    "resumen": "Joven sorda de Puerto Cisnes, usuaria de lengua de señas chilena y primera generación universitaria de su familia. Cada semana viaja a Coyhaique para estudiar, pero el intérprete no está garantizado y los materiales llegan sin subtítulos: la barrera no está en su oído. Caso ficticio con fines exclusivamente evaluativos.",
    "timeline": {
      "imagen": "assets/linea_tiempo_caso5.png",
      "anclajes": [
        {
          "era": "Caridad",
          "hecho": "La solicitud tratada como favor evoca la lógica de la caridad"
        },
        {
          "era": "Modelo social",
          "hecho": "«La universidad tiene que cambiar»: eco de Berkeley y UPIAS"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "CDPD 2006: accesibilidad y ajustes razonables como derecho"
        }
      ]
    },
    "relato": [
      "Camila Vargas tiene 23 años y nació sorda en Puerto Cisnes, localidad costera de la comuna de Cisnes. Su primera lengua es la lengua de señas chilena (LSCh); el español escrito funciona para ella como segunda lengua. Vive con su madre Marisol (48), que trabaja como procesadora en una planta de mariscos, y con su hermano menor Diego (17), estudiante de enseñanza media. En su familia nadie domina la LSCh con fluidez: se comunican con apuntes, gestos cotidianos y mensajes de texto. Camila es la primera generación universitaria de su familia: estudia Pedagogía en Educación Básica en la sede Coyhaique.",
      "Como en Puerto Cisnes no hay educación superior, cada domingo viaja tres horas por la Ruta 7 hasta Coyhaique, donde arrienda una pieza junto a su prima Daniela (24), y regresa a su casa los viernes. Este semestre cursa cuatro asignaturas y solo en dos cuenta con intérprete de LSCh, financiado por un programa de apoyo cuya continuidad se revisa cada semestre. Tres de sus cuatro docentes proyectan videos sin subtítulos y ninguno comparte las presentaciones antes de la clase; en los trabajos grupales depende de la lectura labial y de apuntes prestados por sus compañeros. Un docente le sugirió «congelar el ramo hasta que haya intérprete». Camila presentó por escrito una solicitud formal de ajustes —intérprete garantizado, materiales subtitulados y presentaciones anticipadas—; la respuesta institucional llegó un semestre después.",
      "Sostiene sus estudios con una beca de mantención y con trabajo de fines de semana en la planta de mariscos, junto a su madre. En Coyhaique participa en una agrupación regional de personas sordas que pide intérpretes en las actividades públicas y subtítulos en los materiales del municipio. En esa agrupación conoció a otras mujeres sordas de la región que abandonaron sus carreras por las mismas barreras que ella enfrenta. Camila dice que no piensa congelar: «La universidad es la que tiene que cambiar, no yo»."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Camila Vargas"
        },
        {
          "label": "Territorio",
          "valor": "Puerto Cisnes, comuna de Cisnes, Región de Aysén"
        },
        {
          "label": "Edad",
          "id": "c5-f1"
        },
        {
          "label": "Primera lengua",
          "id": "c5-f2"
        },
        {
          "label": "Posición de su familia respecto de la educación superior",
          "id": "c5-f3"
        },
        {
          "label": "Porcentaje de sus asignaturas con intérprete de LSCh (calcular con los datos del relato)",
          "id": "c5-f4"
        },
        {
          "label": "Instrumento internacional que funda su derecho a ajustes razonables (no se menciona en el relato: inferir desde el marco histórico)",
          "id": "c5-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Integrantes del hogar y datos de verificación",
      "columnas": [
        "Nombre",
        "Vínculo",
        "Edad",
        "Situación ocupacional / de salud"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Camila Vargas"
            },
            {
              "valor": "Hija mayor"
            },
            {
              "id": "c5-t1"
            },
            {
              "valor": "Estudiante universitaria; persona sorda usuaria de LSCh"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Marisol"
            },
            {
              "valor": "Madre"
            },
            {
              "valor": "48 años"
            },
            {
              "id": "c5-t2"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Diego"
            },
            {
              "valor": "Hermano menor"
            },
            {
              "valor": "17 años"
            },
            {
              "id": "c5-t3"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Daniela"
            },
            {
              "id": "c5-t4"
            },
            {
              "valor": "24 años"
            },
            {
              "valor": "Convive con Camila durante la semana en Coyhaique"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Modelo social",
        "texto": "Desde esta lectura, la sordera de Camila es una deficiencia auditiva; la ⟦1⟧, en cambio, la produce el entorno: clases sin intérprete, videos sin subtítulos, docentes que no comparten sus presentaciones. Esa distinción es la piedra angular del modelo: entre la ⟦2⟧ que está en el cuerpo y la exclusión que la sociedad construye a su alrededor. El documento fundacional —los ⟦3⟧ de la UPIAS, en 1976— lo formuló con claridad: es la sociedad la que incapacita, no la persona. En el caso, las barreras son sobre todo ⟦4⟧, y no arquitectónicas: nadie necesita una rampa para comprender una clase subtitulada. Por eso la salida que propone el modelo no es que Camila «se esfuerce más» o congele el ramo, como le sugirió un docente, sino la ⟦5⟧: que la accesibilidad pase a ser una propiedad de la universidad y no un favor concedido al estudiante.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "discapacidad"
          },
          {
            "n": 2,
            "respuesta": "deficiencia"
          },
          {
            "n": 3,
            "respuesta": "Principios Fundamentales de la Discapacidad"
          },
          {
            "n": 4,
            "respuesta": "comunicacionales"
          },
          {
            "n": 5,
            "respuesta": "transformación del entorno"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Modelo de derechos humanos",
        "texto": "Esta lectura parte de la ⟦1⟧ inherente de la persona: Camila no es una beneficiaria de favores sino una titular de derechos. La CDPD de 2006 obliga a los Estados y a sus instituciones a garantizar la ⟦2⟧ universal y, cuando una barrera persiste en una situación concreta, a realizar ⟦3⟧: el intérprete de lengua de señas y los materiales subtitulados no son concesiones de buena voluntad, sino la forma jurídica de cumplir la ley. El artículo 24 de la Convención consagra el derecho a una ⟦4⟧ en todos los niveles, incluida la educación superior en que estudia Camila. En este marco, el Estado comparece como ⟦5⟧ de los derechos, no como benefactor: que la universidad haya tardado un semestre en responder su solicitud escrita no es un mero problema administrativo, sino un incumplimiento de una obligación.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "dignidad"
          },
          {
            "n": 2,
            "respuesta": "accesibilidad"
          },
          {
            "n": 3,
            "respuesta": "ajustes razonables"
          },
          {
            "n": 4,
            "respuesta": "educación inclusiva"
          },
          {
            "n": 5,
            "respuesta": "garante"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Modelo crítico-interseccional",
        "texto": "El modelo crítico-interseccional advierte que las opresiones no se suman como guarismo: se cruzan. La situación de Camila solo se comprende en la ⟦1⟧ de ser mujer, sorda, joven y de una localidad costera alejada, en una carrera y una ciudad pensadas para estudiantes oyentes y urbanos. Su experiencia muestra la ⟦2⟧ de la discapacidad: no hay nada en su sordera que impida estudiar pedagogía; lo que se lo impide es una universidad que no presupuestó intérpretes ni subtítulos. El viaje semanal de tres horas desde Puerto Cisnes y el trabajo de fin de semana en la planta encarnan la noción de ⟦3⟧: la distancia y el centralismo educacional se inscriben en su cuerpo como cansancio y como costo. La agrupación regional donde conoció a otras mujeres sordas que abandonaron sus carreras evidencia que no se trata de un caso aislado, sino de un patrón que expulsa sobre todo a quienes acumulan esas condiciones. El horizonte del modelo es la ⟦4⟧: reconocer la lengua de señas como lengua plena y la experiencia de las personas sordas como conocimiento legítimo para rediseñar la docencia. Y Camila comparece, en definitiva, no como víctima sino como ⟦5⟧ que organiza, demanda y enuncia: «la universidad es la que tiene que cambiar».",
        "espacios": [
          {
            "n": 1,
            "respuesta": "interseccionalidad"
          },
          {
            "n": 2,
            "respuesta": "producción social"
          },
          {
            "n": 3,
            "respuesta": "cuerpo-territorio"
          },
          {
            "n": 4,
            "respuesta": "justicia epistémica"
          },
          {
            "n": 5,
            "respuesta": "sujeto político"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "slug": "javier-la-junta",
    "titulo": "Caso 6 · Javier (La Junta) — accidente laboral y protección del trabajador",
    "territorio": "La Junta",
    "resumen": "Javier (38), maestro de fundo del valle de La Junta, perdió un brazo en un accidente con maquinaria agrícola. Entre la mutualidad, la evaluación del 45% de incapacidad y una economía ganadera estacional, su familia intenta rehacer el sustento.",
    "timeline": {
      "imagen": "assets/linea_tiempo_caso6.png",
      "anclajes": [
        {
          "era": "Encierro fabril",
          "hecho": "La maquinaria produce la lesión y descalifica al trabajador"
        },
        {
          "era": "Bienestar",
          "hecho": "Ley 16.744 de 1968: seguro del trabajador accidentado"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "Beneficio municipal condicionado a un curso previo"
        }
      ]
    },
    "relato": [
      "Javier Sandoval tiene 38 años y vive con su esposa Marcela (36) y sus hijos Diego (12) y Marta (7) en una vivienda rural del valle de La Junta. Trabajó durante casi veinte años como maestro de fundo en las faenas ganaderas del valle. Hace dos años, al engancharse su manga con la prensa enrolladora, sufrió la amputación del brazo derecho por encima del codo. Como el accidente ocurrió en el trabajo, quedó cubierto por la Ley 16.744, de 1968: la mutualidad a la que estaba adherido el fundo financió la atención de urgencia, la rehabilitación en Coyhaique y una prótesis mioeléctrica. En la casa, sin embargo, la prótesis pesa y Javier termina haciendo la mayoría de las tareas sin ella; Diego y Marta, que estudian en la escuela rural del valle, le ayudan con la yegua y los corderos.",
      "La comisión médica de la mutualidad le evaluó un 45% de incapacidad: porcentaje suficiente para una indemnización única, pero insuficiente para una pensión, que se reserva a quienes alcanzan un 70%. Antes del accidente Javier ganaba $650.000 mensuales en temporada; hoy el hogar vive de los $260.000 que gana Marcela como vendedora de media jornada en un almacén de La Junta. El fundo no adaptó las faenas ni le ofreció un puesto compatible, y en una economía ganadera estacional los empleadores del valle prefieren contratar personas sin restricciones físicas. Javier postuló a la credencial de discapacidad ante la COMPIN y a un programa municipal de empleo que le exige completar primero un curso de habilidades personales para acceder al beneficio.",
      "Cada evaluación y reaplicación ante la COMPIN y la municipalidad se resuelve en oficinas donde Javier no está presente; él solo recibe las notificaciones. Cuando los vecinos organizaron una rifa para la familia y la parroquia le ofreció mercadería mensual, Javier lo agradeció, pero confiesa que le cuesta aceptarlo: «trabajé toda mi vida; no quiero vivir de la limosna». La mutualidad cerró su proceso tras pagar la indemnización. Javier espera la resolución de la credencial y piensa en instalar un pequeño almacén de artículos de campo, mientras Marcela asume más horas en su empleo."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Javier Sandoval"
        },
        {
          "label": "Territorio",
          "valor": "Valle de La Junta, comuna de La Junta, Región de Aysén"
        },
        {
          "label": "Ley que cubrió el accidente y su año de promulgación",
          "id": "c6-f1"
        },
        {
          "label": "Institución que financió la rehabilitación y la prótesis",
          "id": "c6-f2"
        },
        {
          "label": "Porcentaje de incapacidad evaluado y beneficio que correspondió",
          "id": "c6-f3"
        },
        {
          "label": "Ingreso mensual que el hogar dejó de percibir tras el accidente",
          "id": "c6-f4"
        },
        {
          "label": "Condición que exige el programa municipal para acceder al beneficio",
          "id": "c6-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Tabla de verificación: dispositivos y momentos históricos",
      "columnas": [
        "Dispositivo / hecho",
        "¿Mencionado en el relato?",
        "Momento histórico asociado"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Seguro de accidentes del trabajo (Ley 16.744)"
            },
            {
              "valor": "Sí"
            },
            {
              "id": "c6-t1"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Workhouse o asilo fabril"
            },
            {
              "id": "c6-t2"
            },
            {
              "valor": "Encierro fabril (Revolución Industrial)"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Beneficio condicionado a un curso previo (focalización)"
            },
            {
              "valor": "Sí"
            },
            {
              "id": "c6-t3"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Ayuda privada de vecinos y parroquia (rifa, mercadería)"
            },
            {
              "valor": "Sí"
            },
            {
              "id": "c6-t4"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Modelo médico",
        "texto": "Desde esta mirada, el centro del problema está en el cuerpo de Javier: la amputación se comprende como un ⟦1⟧ individual que la medicina debe tratar. Todo el itinerario institucional se ordena alrededor de esa premisa: la mutualidad financia la rehabilitación y la ⟦2⟧ mioeléctrica que debiera devolverle la función perdida, y la comisión médica traduce su condición a un ⟦3⟧ —el 45%— que decide qué beneficios le corresponden. El horizonte declarado de este modelo es la ⟦4⟧: reintegrar al trabajador a una vida productiva lo más parecida posible a la anterior. Lo que queda fuera de cuadro es la ⟦5⟧ de la lesión: el accidente deja de ser un hecho producido por la organización del trabajo ganadero y pasa a ser un simple dato del cuerpo.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "déficit"
          },
          {
            "n": 2,
            "respuesta": "prótesis"
          },
          {
            "n": 3,
            "respuesta": "porcentaje de incapacidad"
          },
          {
            "n": 4,
            "respuesta": "normalización"
          },
          {
            "n": 5,
            "respuesta": "producción social"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Campana–Simmel: gobierno neoliberal",
        "texto": "Leído con Simmel, lo que constituye la mutualidad no es solo un seguro: es un ⟦1⟧ que integra a Javier como miembro subordinado —individual, conservador y de derechos/deberes—, muy distinto de su antigua posición de trabajador. Su malestar ante la rifa de los vecinos y la mercadería de la parroquia tiene nombre propio en el marco: la vergüenza del ⟦2⟧, para quien aceptar la ayuda implica pérdida de estatus y humillación. El programa municipal, que exige un curso de habilidades antes de entregar cualquier beneficio, ilustra la ⟦3⟧ del neoliberalismo: asistencia mínima, dirigida a poblaciones objetivo y condicionada a la conducta. Diría Campana que ese programa apunta a las ⟦4⟧, nunca a las causas: potencia al individuo sin transformar el mercado de trabajo ganadero que lo expulsó. Y el Estado, como ⟦5⟧ de la sociabilidad moderna, se hace cargo de él ya no como trabajador sino como carga administrable: registros, porcentajes y comisiones.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "vínculo asistencial"
          },
          {
            "n": 2,
            "respuesta": "pobre vergonzante"
          },
          {
            "n": 3,
            "respuesta": "focalización condicional"
          },
          {
            "n": 4,
            "respuesta": "manifestaciones"
          },
          {
            "n": 5,
            "respuesta": "círculo máximo"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Modelo ecológico",
        "texto": "Esta lectura ordena el caso por niveles. La falla más visible está en el ⟦1⟧: el fundo donde trabajaba, la escuela rural de sus hijos y el almacén de Marcela existen codo a codo en el valle, pero ninguno se articula con los otros para sostener su reincorporación. En el ⟦2⟧ opera la cultura de la economía ganadera estacional, que mide el valor del trabajador por su fuerza física y expulsa al cuerpo que ya no rinde al mismo ritmo. El ⟦3⟧ es el mundo cotidiano de Javier: la casa, la prótesis que pesa y que termina abandonada, los hijos que le ayudan con la yegua y los corderos. El ⟦4⟧ recorre su trayectoria: veinte años de faena, un accidente y una transición vital forzada hacia un futuro laboral incierto. Y en el ⟦5⟧ se sitúan la COMPIN y la municipalidad, instituciones que deciden sobre su credencial y sus beneficios en mesas donde él nunca está presente.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "mesosistema"
          },
          {
            "n": 2,
            "respuesta": "macrosistema"
          },
          {
            "n": 3,
            "respuesta": "microsistema"
          },
          {
            "n": 4,
            "respuesta": "cronosistema"
          },
          {
            "n": 5,
            "respuesta": "exosistema"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "slug": "rosa-coyhaique",
    "titulo": "Caso 7 · Mariela (Coyhaique) — migración, cuidado y palabra desacreditada",
    "territorio": "Coyhaique",
    "resumen": "Mariela (41) llegó desde Venezuela en 2019 con su hija Valentina (8), que tiene parálisis cerebral. Entre el CESFAM, la escuela y el trabajo informal por días, su palabra de madre cuidadora lucha por ser escuchada por las instituciones.",
    "timeline": {
      "imagen": "assets/linea_tiempo_caso7.png",
      "anclajes": [
        {
          "era": "Caridad",
          "hecho": "Fundación religiosa entrega pañales y leche cada mes"
        },
        {
          "era": "Modelo social",
          "hecho": "Las barreras institucionales, no el cuerpo de Valentina, excluyen"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "CDPD 2006: derechos; la credencial sigue siendo la puerta"
        }
      ]
    },
    "relato": [
      "Mariela Vargas tiene 41 años, llegó a Chile desde Maracaibo (Venezuela) en 2019 y vive con su hija Valentina (8) en un pasaje de Coyhaique. Valentina tiene parálisis cerebral de nacimiento: se desplaza con ayuda y cursa tercero básico en una escuela municipal con Proyecto de Integración Escolar (PIE). Mariela se sostiene cocinando y aseando por días, sin contrato: gana $18.000 por jornada y alcanza unas 15 jornadas al mes, menos de lo que pagan a trabajadoras chilenas por el mismo trabajo.",
      "En el CESFAM, donde Valentina recibe kinesiología por Fonasa, la trabajadora social registró en la ficha «madre sobreprotectora» cuando Mariela insistió en que los espasmos de su hija aumentaban con el frío. Los funcionarios le explican los trámites con siglas —PIE, COMPIN, RSH— que nadie le traduce, y la escuela le pidió certificados de estudios apostillados desde Venezuela que no ha podido conseguir. El Registro Social de Hogares la ubicó en el tramo del 85%. Postuló a la credencial de discapacidad de Valentina ante la COMPIN y espera la resolución. La escuela y el CESFAM no se comunican entre sí: es Mariela quien lleva y trae los papeles de una oficina a otra.",
      "Cuando Mariela trabaja, las vecinas del pasaje la apoyan: Yennifer (35), venezolana, se turna el cuidado de Valentina los días de semana, y Dubraska (38), colombiana, organiza la olla común de los fines de semana. Una fundación evangélica les entrega mensualmente pañales y leche. Mariela conoce mejor que nadie las señales de su hija y ahora orienta a otras madres recién llegadas sobre cómo pedir hora en el CESFAM y matricular a sus hijos. En un taller de una organización de migrantes supo que existe la Convención sobre los Derechos de las Personas con Discapacidad (2006) y que Valentina es sujeta de derechos; desde entonces anota en un cuaderno todo lo que su hija necesita, para llevarlo a la próxima reunión con la escuela."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Mariela Vargas"
        },
        {
          "label": "Territorio",
          "valor": "Coyhaique, Región de Aysén (migrante venezolana)"
        },
        {
          "label": "Año de llegada a Chile",
          "id": "c7-f1"
        },
        {
          "label": "Condición de salud de Valentina",
          "id": "c7-f2"
        },
        {
          "label": "Ingreso mensual aproximado de Mariela",
          "id": "c7-f3"
        },
        {
          "label": "Rótulo que la ficha del CESFAM registra sobre Mariela",
          "id": "c7-f4"
        },
        {
          "label": "Programa de la escuela en que está integrada Valentina",
          "id": "c7-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Integrantes del hogar y datos de verificación",
      "columnas": [
        "Nombre",
        "Vínculo",
        "Edad",
        "Situación ocupacional / de salud"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Mariela Vargas"
            },
            {
              "valor": "Madre y jefa de hogar"
            },
            {
              "id": "c7-t1"
            },
            {
              "valor": "Cocina y aseo por días; trabajo informal sin contrato"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Valentina"
            },
            {
              "valor": "Hija"
            },
            {
              "id": "c7-t2"
            },
            {
              "valor": "Parálisis cerebral; cursa tercero básico con PIE"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Yennifer"
            },
            {
              "valor": "Vecina venezolana, integrante de la red de cuidados del pasaje"
            },
            {
              "valor": "35"
            },
            {
              "id": "c7-t3"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Dubraska"
            },
            {
              "valor": "Vecina colombiana, integrante de la red de cuidados del pasaje"
            },
            {
              "valor": "38"
            },
            {
              "id": "c7-t4"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Forclusión",
        "texto": "La experiencia de Mariela en el CESFAM ilustra la ⟦1⟧: los recursos interpretativos disponibles —siglas, formularios, categorías administrativas— no contienen ninguna casilla para nombrar lo que ella vive como madre migrante y cuidadora, de modo que su experiencia no logra hacerse inteligible ni para ella ni para la institución. A ello se suma la ⟦2⟧: cuando Mariela describe el empeoramiento de los espasmos de Valentina, la funcionaria le otorga un déficit de credibilidad por prejuicio identitario y registra «madre sobreprotectora». Ese rótulo muestra, además, el carácter ⟦3⟧ de las categorías institucionales: no describen un hecho natural, producen una posición de sujeto. Sin embargo, el relato evidencia que Mariela es una ⟦4⟧ cabal: conoce las señales de su hija mejor que cualquier profesional y el saber práctico que produce ya circula entre las madres recién llegadas. La salida que propone este marco es el ⟦5⟧: incluir su palabra en toda la trazabilidad —diagnóstico, diseño, decisión y evaluación— de las instituciones que atienden a Valentina.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "injusticia hermenéutica"
          },
          {
            "n": 2,
            "respuesta": "injusticia testimonial"
          },
          {
            "n": 3,
            "respuesta": "performativo"
          },
          {
            "n": 4,
            "respuesta": "agente epistémico"
          },
          {
            "n": 5,
            "respuesta": "re-plazamiento"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Modelo crítico-interseccional",
        "texto": "Desde esta mirada, la discapacidad de Valentina no se explica por su cuerpo sino por su ⟦1⟧: las barreras documentales, institucionales y laborales son producidas por la organización social, no por la parálisis cerebral. La situación de Mariela tampoco se agota en ninguna categoría por separado: ser mujer, migrante, trabajadora informal y cuidadora se cruzan en una sola posición —la lectura es, en rigor, ⟦2⟧—, y esa posición se inscribe en un ⟦3⟧ que va de Maracaibo a Coyhaique, atravesado por fronteras y políticas migratorias. El análisis pregunta, además, quién define y desde dónde: en el CESFAM y en la escuela manda una relación de ⟦4⟧ en la que la palabra de la funcionaria pesa más que la de la madre. Finalmente, la advertencia de Benjamin alcanza a la propia ficha que registra «madre sobreprotectora»: esos ⟦5⟧ de la institución —expedientes, formularios, informes— pueden ejercer violencia simbólica incluso desde las buenas prácticas.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "producción social"
          },
          {
            "n": 2,
            "respuesta": "interseccional"
          },
          {
            "n": 3,
            "respuesta": "cuerpo-territorio"
          },
          {
            "n": 4,
            "respuesta": "poder"
          },
          {
            "n": 5,
            "respuesta": "documentos de civilización"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Modelo ecológico",
        "texto": "El caso se ordena por capas de entorno. El ⟦1⟧ recorre la trayectoria completa: la salida de Venezuela en 2019, la llegada a Coyhaique y las transiciones que madre e hija han vivido desde entonces. En el ⟦2⟧ está la vida cotidiana: Valentina, la escuela, las vecinas del pasaje que se turnan el cuidado y organizan la olla común. El ⟦3⟧ aparece donde Mariela nunca está: la COMPIN que resolverá la credencial y el Registro Social de Hogares que ya la clasificó en el tramo del 85% son decisiones adoptadas sin su presencia. En el ⟦4⟧ operan la política migratoria, la informalidad del trabajo por días y los prejuicios que hacen que le paguen menos que a las trabajadoras chilenas por la misma jornada. Y la falla del ⟦5⟧ es concreta: la escuela y el CESFAM no se comunican entre sí, de modo que Mariela lleva y trae los papeles que los microsistemas no intercambian.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "cronosistema"
          },
          {
            "n": 2,
            "respuesta": "microsistema"
          },
          {
            "n": 3,
            "respuesta": "exosistema"
          },
          {
            "n": 4,
            "respuesta": "macrosistema"
          },
          {
            "n": 5,
            "respuesta": "mesosistema"
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "slug": "tomas-villa-ohiggins",
    "titulo": "Caso 8 · Tomás (Villa O'Higgins) — adolescencia, escuela rural y transición a la vida adulta",
    "territorio": "Villa O'Higgins",
    "resumen": "Tomás, adolescente con discapacidad intelectual leve, estudia con apoyos en la escuela rural multigrado de Villa O'Higgins. Al terminar octavo básico, continuar la enseñanza media exigiría dejar su comuna y a su familia de pobladores, justo cuando su proyecto de vida echa raíces en el turismo de la Patagonia austral.",
    "timeline": {
      "imagen": "assets/linea_tiempo_caso8.png",
      "anclajes": [
        {
          "era": "Encierro fabril",
          "hecho": "Su abuelo recuerda al niño enviado a internado especial en Coyhaique"
        },
        {
          "era": "Modelo social",
          "hecho": "El PIE lo integra a la escuela rural común de su localidad"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "La CDPD 2006 exige educación inclusiva como derecho, no favor"
        }
      ]
    },
    "relato": [
      "Tomás Ñancupil tiene 16 años y vive en Villa O'Higgins, la localidad más austral de la Carretera Austral, con su madre Marcela (44), que administra un hospedaje familiar, su padre Jorge (49), guía de navegación lacustre, y su hermana menor Antonia (12). A los 7 años fue diagnosticado con discapacidad intelectual leve en Coyhaique, a más de 550 kilómetros, tras meses de espera por una evaluación especializada que no existe en la comuna. Cursa octavo básico en la escuela rural multigrado de la localidad —la única del valle—, incorporado al Programa de Integración Escolar (PIE), con una educadora diferencial que lo apoya cuatro horas semanales.",
      "La escuela llega solo hasta octavo básico: para seguir estudiando, Tomás tendría que trasladarse a un internado en Cochrane, a 220 kilómetros, y volver a su casa solo en vacaciones. La dirección regional de educación evaluó abrir enseñanza media en la comuna, pero resolvió que «no hay matrícula suficiente», decisión adoptada en Coyhaique sin consultar a las familias. Tomás, en cambio, ya tiene un proyecto de vida: quiere ser guía de turismo. Conoce los senderos hacia el Glaciar O'Higgins mejor que muchos adultos, acompaña a su padre en las navegaciones con visitantes y su plan individualizado del PIE incorpora lectura funcional de carteleras, orientación de turistas y primeros auxilios. Su abuelo recuerda que, décadas atrás, un niño del valle «con retraso» fue enviado a un internado especial en Coyhaique y nunca más volvió.",
      "La familia participa de la junta de vecinos que pide al municipio gestionar la continuidad escolar en la comuna; la municipalidad, a su vez, prepara un programa de turismo accesible donde Tomás podría hacer su práctica, pero escuela, municipio y servicios de salud no coordinan entre sí un plan de transición. Marcela teme que el internado corte el vínculo de Tomás con el territorio y con su proyecto; Jorge sostiene que su hijo «ya sabe trabajar, lo que no sabe la ciudad es recibirlo». La trabajadora social del CESFAM cita la Convención sobre los Derechos de las Personas con Discapacidad de 2006, que Chile ratificó, para argumentar que la educación inclusiva es un derecho exigible y no una concesión que dependa de la matrícula."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Tomás Ñancupil"
        },
        {
          "label": "Territorio",
          "valor": "Villa O'Higgins, Provincia Capitán Prat, Región de Aysén"
        },
        {
          "label": "Edad",
          "id": "c8-f1"
        },
        {
          "label": "Programa de apoyo de su escuela",
          "id": "c8-f2"
        },
        {
          "label": "Años transcurridos desde su diagnóstico",
          "id": "c8-f3"
        },
        {
          "label": "Comuna a la que tendría que trasladarse para cursar enseñanza media",
          "id": "c8-f4"
        },
        {
          "label": "Proyecto de vida declarado",
          "id": "c8-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Integrantes del hogar y datos de verificación",
      "columnas": [
        "Nombre",
        "Vínculo",
        "Edad",
        "Situación ocupacional / de salud"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Tomás Ñancupil"
            },
            {
              "valor": "Protagonista; hijo"
            },
            {
              "valor": "16"
            },
            {
              "id": "c8-t1"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Marcela"
            },
            {
              "valor": "Madre"
            },
            {
              "id": "c8-t2"
            },
            {
              "valor": "Administra un hospedaje familiar"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Jorge"
            },
            {
              "valor": "Padre"
            },
            {
              "valor": "49"
            },
            {
              "id": "c8-t3"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Antonia"
            },
            {
              "valor": "Hermana"
            },
            {
              "valor": "12"
            },
            {
              "id": "c8-t4"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Modelo social",
        "texto": "Esta lectura distingue con precisión dos planos: Tomás vive con una ⟦1⟧ intelectual leve, pero su discapacidad la produce el entorno; la frase programática del modelo lo resume: la ⟦2⟧. Nacido de la autoorganización de las propias personas afectadas —la ⟦3⟧ de 1976 y la experiencia de Berkeley—, el modelo sostiene que los servicios fueron diseñados para un sujeto estándar que no existe. En el caso, la barrera decisiva no está en su manera de aprender sino en una geografía de servicios: la enseñanza media existe solo a 220 kilómetros, lo que configura una barrera ⟦4⟧ que lo expulsa de su territorio. La salida, por tanto, no es rehabilitar al adolescente, sino la ⟦5⟧ del entorno: abrir la enseñanza media en la comuna y adaptar el currículo a su proyecto de vida.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "deficiencia"
          },
          {
            "n": 2,
            "respuesta": "sociedad incapacita"
          },
          {
            "n": 3,
            "respuesta": "UPIAS"
          },
          {
            "n": 4,
            "respuesta": "institucional y territorial"
          },
          {
            "n": 5,
            "respuesta": "transformación"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Modelo de derechos humanos",
        "texto": "Desde este modelo, Tomás no es un beneficiario de la buena voluntad estatal sino un ⟦1⟧, titular de una dignidad inherente que no depende de su rendimiento escolar ni de la matrícula de su comuna. El ordenamiento chileno consagra el derecho a una educación ⟦2⟧ dentro del sistema general —y no en escuelas segregadas—, de modo que la obligación del Estado no es «ofrecerle un cupo lejano», sino garantizar el acceso en su propia comunidad con los ⟦3⟧ que requiera. Ese marco no nace de la benevolencia: lo fija la ⟦4⟧ de 2006, ratificada por Chile, que convierte estas exigencias en obligación jurídica. Su proyecto de vida —guiar navegaciones y senderos— no es un pasatiempo juvenil: es la expresión de su ⟦5⟧, que la escuela y la familia deben apoyar conforme a su edad y maduración, en lugar de decidir por él. El Estado aparece aquí como garante, no como benefactor.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "sujeto de derechos"
          },
          {
            "n": 4,
            "respuesta": "CDPD"
          },
          {
            "n": 2,
            "respuesta": "inclusiva"
          },
          {
            "n": 3,
            "respuesta": "ajustes razonables"
          },
          {
            "n": 5,
            "respuesta": "autonomía progresiva"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Modelo ecológico",
        "texto": "La trayectoria de Tomás se lee primero en el ⟦1⟧: la transición de la educación básica a la vida adulta es un momento crítico que condensará años de apoyos o de ausencias. En su ⟦2⟧ —la familia de pobladores, el hospedaje, las navegaciones con su padre, la escuela multigrado— tiene roles valorados y un proyecto de vida concreto. El ⟦3⟧ opera en la cultura del mérito y en políticas educativas diseñadas en Santiago que no consideran la ruralidad extrema de Aysén. La falla del ⟦4⟧ es evidente: escuela, municipalidad y CESFAM coexisten en la comuna sin articular un plan de transición. Y la decisión de no abrir enseñanza media —adoptada por la dirección regional en Coyhaique sin consultar a las familias— pertenece al ⟦5⟧: decisiones que afectan a Tomás en espacios donde él no está presente.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "cronosistema"
          },
          {
            "n": 2,
            "respuesta": "microsistema"
          },
          {
            "n": 3,
            "respuesta": "macrosistema"
          },
          {
            "n": 4,
            "respuesta": "mesosistema"
          },
          {
            "n": 5,
            "respuesta": "exosistema"
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "slug": "patricia-balmaceda",
    "titulo": "Caso 9 · Patricia (Balmaceda) — discapacidad psicosocial y mundo del trabajo",
    "territorio": "Balmaceda",
    "resumen": "Patricia, trabajadora administrativa de la salud en Balmaceda, vive con trastorno bipolar desde los 28 años. Tras una licencia prolongada, su empleador le cambió las funciones y el rumor del estigma corre entre sus compañeros; al ser una empresa pequeña, ninguna cuota legal la protege y todo apoyo depende de acreditar su condición.",
    "timeline": {
      "imagen": "assets/linea_tiempo_caso9.png",
      "anclajes": [
        {
          "era": "Encierro fabril",
          "hecho": "Su bisabuela pasó treinta años internada en un hospital psiquiátrico"
        },
        {
          "era": "Bienestar",
          "hecho": "La licencia médica la trata como trabajadora enferma, no como carga"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "Fuera de la cuota, el apoyo exige acreditar y clasificar"
        }
      ]
    },
    "relato": [
      "Patricia Sandoval tiene 34 años y vive en Balmaceda con su pareja Rodrigo (36), mecánico, y su hija Emilia (9), estudiante de la escuela local. Desde hace ocho años trabaja como administrativa en un centro de salud privado de la comuna, una empresa pequeña de 18 trabajadores. A los 28, tras una crisis que derivó en una hospitalización breve en Coyhaique, fue diagnosticada con trastorno bipolar; desde entonces mantiene tratamiento estable con litio y controles en el CESFAM de Balmaceda, más una consulta psiquiátrica trimestral en Coyhaique, a 55 kilómetros de su casa. En la familia pesa un recuerdo: su bisabuela pasó treinta años internada en un hospital psiquiátrico, y esa historia se transmitió como advertencia y como vergüenza.",
      "En los últimos dos años Patricia ha necesitado tres licencias médicas, la más reciente de cuatro meses. Al reincorporarse, encontró sus funciones cambiadas: de la atención de público y la caja fue trasladada a archivar documentos en una bodega sin ventanas, sin explicación formal. Entre sus compañeros corre el rumor de que es «peligrosa» e «inconfiable», y su jefe le pidió «un certificado de que no es un riesgo» para volver a atender público. Ella sostiene que está bien y puede trabajar, pero su palabra pesa menos que la sospecha. No ha denunciado ante la Inspección del Trabajo por temor al despido: es la segunda fuente de ingresos del hogar.",
      "Como la empresa tiene menos de 100 trabajadores, no está obligada por la cuota de empleo del 1% de la Ley 21.015, y Patricia queda fuera de esa protección. El único camino que le ofrecen los servicios es postular: para acceder a un programa de apoyo al empleo le piden tramitar ante la COMPIN el certificado de discapacidad, acreditar porcentaje y clasificar en un registro. Su psiquiatra duda: «clínicamente está compensada; etiquetarla puede cerrarle puertas». La trabajadora social municipal le ofrece un taller de habilidades para el empleo, mientras nadie revisa las condiciones de la bodega ni la reversibilidad del cambio de funciones."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Patricia Sandoval"
        },
        {
          "label": "Territorio",
          "valor": "Balmaceda, Provincia de Coyhaique, Región de Aysén"
        },
        {
          "label": "Diagnóstico y edad en que lo recibió",
          "id": "c9-f1"
        },
        {
          "label": "Tratamiento farmacológico vigente",
          "id": "c9-f2"
        },
        {
          "label": "Trabajadores que le faltan a su empleador para estar cubierto por la cuota de la Ley 21.015",
          "id": "c9-f3"
        },
        {
          "label": "Cambio de funciones que sufrió al reincorporarse",
          "id": "c9-f4"
        },
        {
          "label": "Palabras del estigma entre sus compañeros",
          "id": "c9-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Integrantes del hogar y datos de verificación",
      "columnas": [
        "Nombre",
        "Vínculo",
        "Edad",
        "Situación ocupacional / de salud"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Patricia Sandoval"
            },
            {
              "valor": "Protagonista"
            },
            {
              "id": "c9-t1"
            },
            {
              "valor": "Administrativa de salud; trastorno bipolar en tratamiento"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Rodrigo"
            },
            {
              "id": "c9-t2"
            },
            {
              "valor": "36"
            },
            {
              "id": "c9-t3"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Emilia"
            },
            {
              "valor": "Hija"
            },
            {
              "valor": "9"
            },
            {
              "id": "c9-t4"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Modelo médico",
        "texto": "Desde esta mirada, el problema reside en la persona: el trastorno bipolar de Patricia se comprende como una ⟦1⟧ individual que debe ser tratada. Toda la respuesta institucional se organiza en torno al ⟦2⟧ psiquiátrico recibido a los 28 años y al tratamiento farmacológico con litio, con la esperanza de una ⟦3⟧ al puesto de trabajo. La licencia médica es su dispositivo característico: suspende el conflicto y convierte la relación laboral en un asunto clínico. El horizonte declarado es la ⟦4⟧: que Patricia vuelva a rendir como antes, más que transformar las condiciones del trabajo. Y cuando el jefe exige «un certificado de que no es un riesgo», queda en evidencia que en este modelo la ⟦5⟧ médica funciona como puerta de acceso —y también como instrumento de control—, mientras la producción social del malestar queda fuera de cuadro.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "patología"
          },
          {
            "n": 2,
            "respuesta": "diagnóstico"
          },
          {
            "n": 3,
            "respuesta": "reintegración funcional"
          },
          {
            "n": 4,
            "respuesta": "normalización"
          },
          {
            "n": 5,
            "respuesta": "certificación"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Modelo crítico-interseccional",
        "texto": "Esta lectura pregunta qué relaciones de ⟦1⟧ atraviesan el caso: quién nombra, quién certifica, quién decide las funciones y quién puede dudar de la palabra de la otra. La situación de Patricia no se explica por un solo eje: ser mujer, trabajadora de una empresa pequeña sin cuota legal y vivir con una condición de salud mental en una localidad rural configura una experiencia ⟦2⟧, donde las desventajas se multiplican y no se suman. El traslado a la bodega y los murmullos de «peligrosa» muestran la ⟦3⟧ de la discapacidad: es el ambiente laboral el que convierte un trastorno tratado en una inhabilitación. Su palabra —«estoy bien, puedo trabajar»— pesa menos que la sospecha del empleador, lo que plantea un problema de ⟦4⟧. Y el modelo recuerda, con Benjamin, que las fichas y los diagnósticos del propio trabajo social son documentos de civilización que pueden arrastrar la ⟦5⟧ si clasifican sin escuchar.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "poder"
          },
          {
            "n": 2,
            "respuesta": "interseccional"
          },
          {
            "n": 3,
            "respuesta": "producción social"
          },
          {
            "n": 4,
            "respuesta": "justicia epistémica"
          },
          {
            "n": 5,
            "respuesta": "barbarie"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Campana–Simmel: focalización condicional",
        "texto": "Leído con Simmel, Patricia es «discapacitada» ante el Estado solo en la medida en que entra en una ⟦1⟧: quien recibe —o debería recibir— apoyo según las normas sociales. Como su empleador queda fuera de la cuota legal, el único camino disponible es postular: el apoyo llega como ⟦2⟧, es decir, solo si acredita su condición ante la COMPIN, clasifica en un registro y se convierte en destinataria. El marco llama ⟦3⟧ al proceso por el cual cada época nombra distinto a esta población —loca, enferma mental, persona con discapacidad psicosocial— y cada nombre habilita un tipo de intervención. La pregunta de fondo es la simmeliana: ¿quién es «discapacitada» para el Estado? En la práctica esa definición la produce el ⟦4⟧: mientras se responde, registros, comisiones y requisitos configuran un Estado que no elimina las barreras sino que las ⟦5⟧.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "relación de asistencia"
          },
          {
            "n": 2,
            "respuesta": "focalización condicional"
          },
          {
            "n": 3,
            "respuesta": "problematización"
          },
          {
            "n": 4,
            "respuesta": "gobierno de la discapacidad"
          },
          {
            "n": 5,
            "respuesta": "administra"
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "slug": "sebastian-coyhaique",
    "titulo": "Caso 10 · Sebastián (Coyhaique) — asociatividad, participación y agencia epistémica",
    "territorio": "Coyhaique",
    "resumen": "Sebastián, deportista de básquetbol en silla de ruedas, dirige la agrupación comunal de personas en situación de discapacidad de Coyhaique. Aunque la agrupación ganó un fondo municipal y mapeó las barreras de la ciudad, las autoridades prefieren consultar a consultoras y técnicos: su palabra experta no cuenta como saber.",
    "timeline": {
      "imagen": "assets/linea_tiempo_caso10.png",
      "anclajes": [
        {
          "era": "Modelo social",
          "hecho": "Berkeley 1970 inspira su vida independiente en departamento propio"
        },
        {
          "era": "Neoliberalismo",
          "hecho": "La CDPD 2006 obliga a consultar a su agrupación"
        }
      ]
    },
    "relato": [
      "Sebastián Mora tiene 27 años y vive solo en un departamento adaptado de Coyhaique, que arrienda con su sueldo de administrativo a tiempo parcial. A los 19 sufrió un accidente de moto en la ruta hacia El Blanco que le produjo una lesión medular y paraplejia; desde entonces usa silla de ruedas. Es base titular del club de básquetbol en silla de ruedas Leones del Sur, actual subcampeón zonal, y desde hace tres años dirige la Agrupación Comunal de Personas en Situación de Discapacidad de Coyhaique, que reúne a 42 socios. En su velador tiene un libro sobre el movimiento de vida independiente de Berkeley y la UPIAS de 1976, que descubrió en la universidad.",
      "Este año la agrupación postuló a un fondo concursable municipal de $2.500.000 para un estudio de accesibilidad de las veredas del centro, y ganó. Sin embargo, la municipalidad decidió ejecutar el estudio con una consultora externa y con los técnicos de la Dirección de Obras Municipales, ignorando el catastro que la agrupación ya había levantado con sus socios: 120 puntos críticos mapeados en doce cuadras. En la reunión del concejo, un funcionario zanjó la discusión: «aquí necesitamos la opinión de los profesionales, no de los afectados». Sebastián recorre la ciudad todos los días y conoce cada rebaje de vereda, cada escalón y cada rampa mal diseñada, pero ese conocimiento no fue considerado un dato válido.",
      "El gimnasio municipal donde entrena el club tiene acceso por una escalera: Sebastián sube ayudado por sus compañeros antes de cada práctica, y este año el club perdió una subvención deportiva porque el recinto «no cumple los requisitos de infraestructura», sin que nadie consultara a los deportistas. Citando el lema del movimiento —«nada sobre nosotros sin nosotros»— y la Convención sobre los Derechos de las Personas con Discapacidad de 2006, la agrupación prepara una presentación ante el concejo exigiendo ser consultada de manera directa en todas las decisiones que la afectan, desde el diagnóstico de las barreras hasta la evaluación de las obras."
    ],
    "ficha": {
      "titulo": "Ficha de caracterización",
      "intro": "Complete la ficha usando la información del relato. Algunos datos están directamente en el texto; otros debe inferirlos o calcularlos.",
      "filas": [
        {
          "label": "Nombre ficticio",
          "valor": "Sebastián Mora"
        },
        {
          "label": "Territorio",
          "valor": "Coyhaique, Provincia de Coyhaique, Región de Aysén"
        },
        {
          "label": "Edad actual",
          "id": "c10-f1"
        },
        {
          "label": "Causa de la paraplejia y edad en que ocurrió",
          "id": "c10-f2"
        },
        {
          "label": "Años que lleva usando silla de ruedas",
          "id": "c10-f3"
        },
        {
          "label": "Organización que dirige",
          "id": "c10-f4"
        },
        {
          "label": "Lema del movimiento que cita",
          "id": "c10-f5"
        }
      ]
    },
    "tabla": {
      "titulo": "Instancias de decisión y consulta a la agrupación",
      "columnas": [
        "Instancia / decisión",
        "¿Se consultó a la agrupación o a los afectados?",
        "A quién se escuchó / qué ocurrió"
      ],
      "filas": [
        {
          "celdas": [
            {
              "valor": "Catastro de accesibilidad de veredas del centro"
            },
            {
              "id": "c10-t1"
            },
            {
              "valor": "Se ignoró el catastro de 120 puntos críticos levantado por la agrupación"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Ejecución del estudio financiado con el fondo concursable"
            },
            {
              "valor": "No"
            },
            {
              "id": "c10-t2"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Discusión del proyecto en el concejo"
            },
            {
              "id": "c10-t3"
            },
            {
              "valor": "Funcionarios y profesionales contratados"
            }
          ]
        },
        {
          "celdas": [
            {
              "valor": "Subvención deportiva del club Leones del Sur"
            },
            {
              "valor": "No; nadie consultó a los deportistas"
            },
            {
              "id": "c10-t4"
            }
          ]
        }
      ]
    },
    "lecturas": [
      {
        "numero": 1,
        "modelo": "Modelo social",
        "texto": "Para este modelo, la lesión medular de Sebastián es una ⟦1⟧; su discapacidad nace de las ⟦2⟧ que el entorno levanta: el gimnasio con escalera, las veredas sin rebaje, la institución que decide sin él. Berkeley demostró en 1970 que la ⟦3⟧ no es hacer sin asistencia, sino controlar la propia vida con asistencia: Sebastián vive solo, compite y dirige una agrupación, y aun así la ciudad lo incapacita. El modelo distingue las barreras físicas de las barreras ⟦4⟧ e institucionales, como la de un concejo que da por sentado que los afectados no saben. La exigencia práctica es una sola: transformar el entorno mediante ⟦5⟧, en lugar de pedirle a su cuerpo que se adapte a la escalera.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "deficiencia"
          },
          {
            "n": 2,
            "respuesta": "barreras"
          },
          {
            "n": 3,
            "respuesta": "vida independiente"
          },
          {
            "n": 4,
            "respuesta": "actitudinales"
          },
          {
            "n": 5,
            "respuesta": "ajustes"
          }
        ]
      },
      {
        "numero": 2,
        "modelo": "Forclusión",
        "texto": "El caso de Sebastián muestra una paradoja: tiene su dignidad reconocida y hasta un fondo concursable ganado, pero su palabra es desacreditada. Cuando el funcionario declara que se necesita «la opinión de los profesionales, no de los afectados», aplica un déficit de credibilidad por prejuicio identitario: eso es, con Fricker, una ⟦1⟧. El catastro ignorado ilustra además el ⟦2⟧ del saber experto sobre la trazabilidad de las instituciones: diagnósticos, diseños y evaluaciones pasan siempre por otros. La salida que propone Sánchez Alcón es el ⟦3⟧: inclusión epistémica en toda la trazabilidad, desde el diagnóstico del problema hasta la evaluación de las obras. Lo que hoy se niega es su estatuto de ⟦4⟧: quien mapeó 120 puntos críticos conoce la ciudad mejor que cualquier consultora, pero su saber no cuenta como saber. Y la agrupación no pide elegir entre opciones prefijadas —pide producirlas—, porque elegir entre opciones dadas sin decidir qué es decidible es apenas ⟦5⟧.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "injusticia testimonial"
          },
          {
            "n": 4,
            "respuesta": "agente epistémico"
          },
          {
            "n": 2,
            "respuesta": "monopolio de la trazabilidad"
          },
          {
            "n": 5,
            "respuesta": "elección sin deliberación"
          },
          {
            "n": 3,
            "respuesta": "re-plazamiento"
          }
        ]
      },
      {
        "numero": 3,
        "modelo": "Modelo de derechos humanos",
        "texto": "Desde este modelo, la agrupación no solicita un beneficio: exige el cumplimiento de ⟦1⟧. La ⟦2⟧ de 2006, ratificada por Chile, obliga a los Estados a consultar directamente a las personas con discapacidad y a sus organizaciones en las decisiones que las afectan; contratar una consultora sin escuchar a la agrupación no es solo una mala práctica, sino una infracción al derecho a la ⟦3⟧. El lema «nada sobre nosotros sin nosotros» condensa ese principio. La accesibilidad de veredas y gimnasio tampoco es una concesión, sino una obligación de ⟦4⟧ que el municipio debe garantizar para todos. Y el Estado —aquí, el municipio— comparece no como benefactor que regala un fondo, sino como ⟦5⟧ de derechos.",
        "espacios": [
          {
            "n": 1,
            "respuesta": "derechos"
          },
          {
            "n": 2,
            "respuesta": "CDPD"
          },
          {
            "n": 3,
            "respuesta": "consulta"
          },
          {
            "n": 4,
            "respuesta": "accesibilidad universal"
          },
          {
            "n": 5,
            "respuesta": "garante"
          }
        ]
      }
    ]
  }
];

var DISTRACTORES = ["resiliencia","empoderamiento","capital social","calidad de vida","buen trato","desinstitucionalización","inserción laboral","redes de apoyo","terapia ocupacional","tutela","vulnerabilidad","participación ciudadana"];
