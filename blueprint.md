# Blueprint: Tu Viaje de Yoga - Landing Page

## 1. Descripción General del Proyecto

**Propósito:** Crear una landing page moderna, responsive y visualmente atractiva para un estudio de yoga. El objetivo es proporcionar a los visitantes información sobre el estudio, sus clases, su filosofía y generar un llamado a la acción claro. El proyecto fue desarrollado en Firebase Studio, utilizando un flujo de trabajo asistido por IA para la maquetación inicial y la implementación de componentes web modernos.

**Capacidades:**
- Presenta una propuesta de valor clara a través de un diseño limpio y profesional.
- Muestra diferentes posturas de yoga y clases a través de componentes reutilizables.
- Es completamente responsive, adaptándose a dispositivos móviles y de escritorio.
- El código fuente está versionado con Git y alojado en GitHub.
- El sitio está desplegado y accesible públicamente a través de GitHub Pages.

---

## 2. Esquema Detallado del Proyecto

Esta sección documenta todos los estilos, diseños y características implementadas en la aplicación desde su versión inicial hasta la actual.

### Estilo y Diseño

- **Paleta de Colores:**
  - **Fondo Principal:** Verde terroso suave (`#f0f2e6`).
  - **Fondo Secundario:** Melocotón claro (`#fff`).
  - **Texto Principal:** Gris oscuro (`#333`).
  - **Acento (Botones):** Naranja vibrante (`#ff7f50`).
- **Tipografía:** Se utiliza una fuente sans-serif limpia y moderna (ej. 'Helvetica Neue', 'Arial') para garantizar la legibilidad en todos los dispositivos.
- **Iconografía:** Se utilizan iconos de redes sociales en el pie de página para facilitar la conexión.
- **Imágenes:** Imágenes de alta calidad relacionadas con el yoga y la naturaleza, seleccionadas para transmitir una sensación de calma y bienestar.
- **Layout:**
  - **Diseño de una sola página (Single-Page):** Facilita una navegación fluida y directa.
  - **Diseño Responsive:** Uso de Flexbox y Media Queries para asegurar una correcta visualización en pantallas de cualquier tamaño.
  - **Web Components con Shadow DOM:** Para las tarjetas de posturas de yoga, encapsulando estilos y estructura para evitar conflictos y promover la reutilización.

### Características Implementadas

- **Header (Encabezado):** Sección principal con un título llamativo, un párrafo introductorio, un botón de "Comienza tu viaje" y una imagen principal inspiradora.
- **Sección "Sobre Nosotros":** Espacio para describir la filosofía y la historia del estudio.
- **Galería de Posturas (`<yoga-card>`):** Una sección dinámica que muestra diferentes posturas de yoga. Implementada como un **Web Component** (`<yoga-card>`) para máxima eficiencia y mantenibilidad. Cada tarjeta contiene una imagen, un título y una descripción.
- **Sección de Testimonios:** Para mostrar comentarios de clientes y construir prueba social.
- **Footer (Pie de Página):** Incluye información de contacto, créditos y enlaces a redes sociales. Se corrigió su posicionamiento para que permaneciera siempre en la parte inferior.
- **Control de Versiones (Git):** El proyecto completo está bajo control de versiones, con un historial de commits claro que documenta cada cambio.
- **Despliegue Continuo (GitHub Pages):** El sitio se despliega automáticamente desde la rama `main` del repositorio de GitHub.
- **Documentación Profesional:**
  - **`PROJECT_DOCUMENTATION.md`:** Un caso de estudio detallado que narra todo el proceso de desarrollo.
  - **`blueprint.md` (este archivo):** Documento vivo que refleja el estado y la planificación del proyecto.

---

## 3. Plan de la Última Solicitud

**Solicitud del Usuario:** "*Todo estos procesos que hemos realizado desde el momento que adjunte la imagen y a traves del propmt quisiera colocarlo en un documento con todo detalle que hemos encontrado y realizado.*"

**Plan de Acción Ejecutado:**

1.  **Recopilar la Historia del Proyecto:** Se revisó toda la interacción y los pasos ejecutados desde el inicio:
    *   Generación del código a partir de una imagen.
    *   Ampliación de secciones y creación del Web Component `<yoga-card>`.
    *   Diagnóstico y solución del problema de caché del CSS.
    *   Inicialización del repositorio Git y subida del código a GitHub.
    *   Publicación del sitio con GitHub Pages.
    *   Configuración de la imagen de vista previa social en GitHub.

2.  **Crear el Documento de Caso de Estudio:**
    *   Se creó un nuevo archivo llamado `PROJECT_DOCUMENTATION.md`.
    *   Se redactó en formato Markdown un documento detallado que narra todo el proceso en fases (Concepción, Desarrollo, Resolución de Problemas, Despliegue, Profesionalización).

3.  **Añadir Documentación al Repositorio:**
    *   Se añadió `PROJECT_DOCUMENTATION.md` al control de versiones (`git add`).
    *   Se creó un commit con un mensaje descriptivo (`git commit -m "feat: Add detailed project documentation"`).
    *   Se subieron los cambios a GitHub (`git push`).

4.  **Actualizar el Blueprint:**
    *   Se actualizó este archivo (`blueprint.md`) para reflejar el estado final del proyecto, incluyendo la creación del documento de caso de estudio como la última acción completada.
