# Evaluación por casos — Trabajo Social y Discapacidad (TSE013-1)

Plataforma de evaluación sumativa por casos para la asignatura **Trabajo Social y Discapacidad** (Departamento de Ciencias Sociales y Humanidades, Universidad de Aysén).

Este repositorio contiene **solo la aplicación web de rendición** (la parte pública que usan los estudiantes). El backend, las claves de respuestas y la pauta docente viven en un repositorio privado separado.

## Estructura del repositorio

- **`app/`** — Aplicación web de la evaluación (HTML/JS puro, sin dependencias externas).
  - `index.html` — Portada con logo UAysén, explicación de la evaluación, selección de 2 casos entre 10, bloqueo anti-navegación, cronómetro y envío.
  - `casos-data.js` — Banco de 10 casos territoriales de la Región de Aysén (**versión pública**, sin pautas ni respuestas de ficha/tabla; generado, no editar a mano).
  - `assets/` — Logo del Departamento y líneas de tiempo por caso.

## Uso rápido

1. Implementar el backend (Google Apps Script) según la guía del repositorio docente privado.
2. Pegar la URL del web app de Apps Script en `CONFIG.APPS_SCRIPT_URL` dentro de `app/index.html`.
3. Publicar `app/` (por ejemplo con GitHub Pages) y compartir el enlace con el estudiantado.

## Características

- 10 casos con anclaje territorial (Cochrane, Puerto Aysén, Tortel, Chile Chico, Puerto Cisnes, La Junta, Coyhaique, Villa O'Higgins, Balmaceda) y periodización histórica transversal de las miradas hacia la discapacidad.
- El estudiante elige **2 de 10 casos**; 30 puntos por caso, 60 total, escala chilena (nota 4,0 con 60%).
- Banco de términos mezclado con distractores, justificación obligatoria (anti-guessing).
- Accesibilidad: tipografía Verdana 13pt apta para dislexia, contraste alto, exportación a PDF.
- Bloqueo de navegación durante la evaluación (pantalla completa, conteo de salidas, sin pegar ni atajos).
- Panel docente con auto-corrección, revisión manual de justificaciones, reporte general y rúbricas automáticas por correo (en el repositorio privado).

Docente: Esteban Cofré — Universidad de Aysén, 2026.
