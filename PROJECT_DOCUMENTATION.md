# Caso de Estudio del Proyecto: "Tu Viaje de Yoga"

Este documento detalla el ciclo de vida completo del desarrollo de la landing page "Tu Viaje de Yoga", desde su concepción a partir de una imagen hasta su despliegue y documentación profesional.

**URL del Sitio en Vivo:** [https://polidorl.github.io/firebase_yoga_app/](https://polidorl.github.io/firebase_yoga_app/)
**URL del Repositorio de Código:** [https://github.com/polidorl/firebase_yoga_app](https://github.com/polidorl/firebase_yoga_app)

---

## Índice

1.  [Fase 1: Concepción y Generación Inicial](#fase-1-concepción-y-generación-inicial)
2.  [Fase 2: Desarrollo Iterativo y Creación de Componentes](#fase-2-desarrollo-iterativo-y-creación-de-componentes)
3.  [Fase 3: Resolución de Problemas Técnicos](#fase-3-resolución-de-problemas-técnicos)
4.  [Fase 4: Control de Versiones y Despliegue](#fase-4-control-de-versiones-y-despliegue)
5.  [Fase 5: Profesionalización y Documentación](#fase-5-profesionalización-y-documentación)

---

## Fase 1: Concepción y Generación Inicial

El proyecto comenzó con un único recurso: una imagen de inspiración.

**El Prompt Inicial:**
El usuario proporcionó una imagen que evocaba una sensación de calma, naturaleza y bienestar, asociada al yoga. El objetivo era traducir esa visión en una estructura de página web funcional.

**Acción de la IA:**
1.  **Análisis de la Imagen:** Se interpretó la imagen para extraer elementos clave de diseño:
    *   **Paleta de Colores:** Tonos verdes terrosos, melocotón claro, y acentos naranjas.
    *   **Tipografía:** Sugerencia de una fuente sans-serif limpia y moderna.
    *   **Composición:** Un diseño con una imagen principal destacada y espacio para texto y botones de llamada a la acción.
2.  **Generación de Código Base:** A partir del análisis, se generaron los archivos iniciales del proyecto:
    *   `index.html`: Con una estructura semántica que incluía una sección de encabezado (`<header>`) con un título, un párrafo introductorio, un botón y un contenedor para la imagen principal.
    *   `style.css`: Con reglas de estilo básicas que reflejaban la paleta de colores y la disposición general inferidas de la imagen.

El resultado fue una base sólida y visualmente alineada con la solicitud inicial, lista para ser expandida.

## Fase 2: Desarrollo Iterativo y Creación de Componentes

Con la base establecida, el proyecto evolucionó a través de una serie de adiciones funcionales y estructurales.

1.  **Ampliación de Contenido:** Se añadieron nuevas secciones al `index.html` para dar cuerpo a la página:
    *   Una sección **"Acerca de Nosotros"** para construir confianza.
    *   Una galería de tarjetas para mostrar diferentes **posturas de yoga**.
    *   Una sección de **"Testimonios"** para prueba social.
    *   Un **pie de página (`<footer>`)** con información de contacto y enlaces a redes sociales.

2.  **Implementación de Web Components:** Para la galería de posturas de yoga, se optó por una solución moderna y encapsulada:
    *   Se creó un componente web personalizado llamado `<yoga-card>`.
    *   En `main.js`, se definió la clase `YogaCard` que extiende `HTMLElement`.
    *   Se utilizó el **Shadow DOM** para encapsular la estructura (HTML) y los estilos (CSS) de cada tarjeta, evitando conflictos con los estilos globales y haciendo el componente reutilizable y fácil de mantener.

3.  **Refinamiento de Estilos:** El `style.css` fue actualizado continuamente para acomodar las nuevas secciones, asegurando un diseño responsive y coherente en todo el sitio.

## Fase 3: Resolución de Problemas Técnicos

Durante el desarrollo, surgió un desafío técnico común pero importante.

**El Problema:**
Después de realizar cambios significativos en el `style.css` (específicamente, arreglar el posicionamiento del pie de página), los cambios no se reflejaban en la vista previa del navegador. Se diagnosticó que el navegador estaba sirviendo una versión antigua del archivo CSS desde su caché local.

**La Solución:**
1.  **Invalidación de Caché:** Para forzar al navegador a descargar el archivo nuevo, se renombró temporalmente `style.css` a `style.v2.css`.
2.  **Actualización de la Referencia:** Se actualizó el enlace en `index.html` para que apuntara a la nueva versión: `<link rel="stylesheet" href="style.v2.css">`.
3.  **Verificación:** El cambio forzó la recarga del archivo y los estilos correctos se aplicaron inmediatamente.
4.  **Reversión a un Estado Limpio:** Una vez confirmado el arreglo, se revirtieron los nombres a `style.css` para mantener la consistencia y limpieza del código.

Este proceso demostró una metodología de depuración efectiva para problemas de caché.

## Fase 4: Control de Versiones y Despliegue

Para asegurar la integridad del proyecto y hacerlo accesible públicamente, se siguieron las mejores prácticas de control de versiones y despliegue.

1.  **Inicialización del Repositorio:**
    *   Se utilizó `git init` para inicializar un repositorio local.
    *   Con `git add .`, se añadieron todos los archivos del proyecto al área de preparación.
    *   Se creó el primer commit con `git commit -m 'Initial commit'`, guardando una instantánea del proyecto.

2.  **Conexión a GitHub:**
    *   Se creó un nuevo repositorio vacío en GitHub.
    *   Se enlazó el repositorio local con el remoto usando `git remote add origin <URL_DEL_REPO>`.

3.  **Publicación en GitHub Pages:**
    *   Se subió el código al repositorio remoto con `git push -u origin main`.
    *   En la configuración del repositorio en GitHub, se activó **GitHub Pages**, seleccionando la rama `main` como la fuente de despliegue.
    *   GitHub automáticamente compiló y publicó el sitio, proporcionando una URL pública.

## Fase 5: Profesionalización y Documentación

El último paso fue asegurar que el proyecto se presentara de manera profesional en plataformas como GitHub y LinkedIn.

1.  **Vista Previa Social (Social Preview):**
    *   Se seleccionó una imagen representativa del proyecto.
    *   Se redimensionó a las especificaciones recomendadas por GitHub (1280x640px) para asegurar una alta calidad visual al compartir el enlace.
    *   Se subió la imagen en la sección de configuración del repositorio de GitHub.

2.  **Documentación para LinkedIn:**
    *   Se redactó una descripción detallada del proyecto, destacando las tecnologías utilizadas (HTML, CSS, JS, Web Components, IA, Firebase Studio) y las habilidades demostradas (maquetación, resolución de problemas, despliegue).

3.  **Creación de este Documento:**
    *   Finalmente, se compiló toda la información del proceso en este archivo `PROJECT_DOCUMENTATION.md` como un caso de estudio completo del proyecto.
