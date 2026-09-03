# Toggle de idioma EN/ES y traducción al inglés

## Resumen
Agregar un botón "EN / ES" en el header para cambiar el idioma del sitio entre español e inglés, traduciendo todo el contenido visible del usuario.

## Estimación de tokens

- **Cambios de código (toggle, estado, infraestructura i18n, refactor de componentes):** aproximadamente **4,000–6,000 tokens** de generación.
- **Traducción del contenido (~3,500–5,000 palabras en español a inglés académico):** aproximadamente **10,000–15,000 tokens** si se genera mediante IA.
- **Total estimado:** **15,000–22,000 tokens**.

El costo real depende del enfoque: duplicar archivos de datos es más sencillo pero genera más líneas; usar `react-i18next` requiere más infraestructura inicial pero escala mejor.

## Alcance incluido

1. Botón de idioma en `SiteHeader` (desktop y móvil) que alterna entre ES y EN.
2. Persistencia de la selección en `localStorage`.
3. Traducción de:
   - Navegación (`nav` en `src/data/lab.ts`).
   - Textos del laboratorio, contacto, footer, homepage (`index.tsx`).
   - Secciones de investigación (`research.tsx`, `researchAreas.ts`).
   - Página del modelo de estudio (`pseudocrossidium.ts`, `pseudocrossidium-replicatum.tsx`).
   - Proyectos (`projects.ts`, `projects.index.tsx`, `projects.$slug.tsx`).
   - Equipo (`team.ts`, `team.index.tsx`, `team.$slug.tsx`).
   - Publicaciones (`publications.ts`, `publications.tsx`).
   - Tecnologías (`techniques.ts`, `technologies.tsx`).
   - Noticias (`news.ts`, `news.index.tsx`, `news.$slug.tsx`).
   - Únete (`join.tsx`).
   - Contacto (`contact.tsx`, incluyendo estados del formulario).
4. Metadata SEO/Open Graph en ambos idiomas según la ruta activa.
5. Placeholders `[Pendiente]` se mantienen como placeholders en inglés cuando correspondan.

## Enfoque técnico

- **Opción recomendada:** duplicar los archivos de datos en versiones `*.en.ts` y manejar el idioma mediante un contexto simple de React (`LanguageContext`) con persistencia en `localStorage`. Esto evita agregar dependencias pesadas y mantiene el control total sobre el contenido científico.
- Los componentes leerán el idioma actual desde el contexto y elegirán el conjunto de datos correspondiente.
- Los textos embebidos directamente en JSX se moverán a los archivos de datos o a objetos de traducción por ruta.

## Pasos

1. Crear `LanguageContext` y un hook `useLanguage`.
2. Montar el provider en `src/routes/__root.tsx`.
3. Agregar el botón "EN / ES" en `SiteHeader` (desktop y menú móvil).
4. Crear versiones en inglés de todos los archivos en `src/data/`.
5. Refactorizar rutas para consumir datos según el idioma activo.
6. Actualizar metadata `head()` en rutas para reflejar idioma y contenido traducido.
7. Verificar tipado, build y rutas principales con Playwright.

## Fuera de alcance

- Traducción automática continua de noticias futuras (se agregarían manualmente).
- Cambio de idioma basado en preferencia del navegador (se puede agregar posteriormente).
- URLs localizadas (ej. `/en/research`); las rutas permanecen en español.
