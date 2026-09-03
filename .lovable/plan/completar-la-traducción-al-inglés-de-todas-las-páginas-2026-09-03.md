# Completar la traducción al inglés de todas las páginas

## Qué pasa hoy

El botón EN/ES ya funciona: cambia el idioma en el encabezado, el pie de página y las pantallas de error. Pero el contenido de cada página no cambia porque las 13 rutas siguen importando los datos en español directos (`lab`, `projects`, `news`, `species`, etc.) y tienen todos sus textos de interfaz escritos en español dentro del código.

Las versiones en inglés de los datos ya existen y están listas para usarse (investigación, especie, proyectos, equipo, publicaciones, técnicas, noticias, textos comunes). Solo falta conectarlas en las páginas.

## Qué haré

Actualizar cada página para que lea el idioma activo:

1. `/` (portada) — encabezados, secciones, llamadas a la acción, tarjetas de noticias e investigación.
2. `/research` — áreas de investigación y esquema gen a fenotipo.
3. `/pseudocrossidium-replicatum` — ficha de la especie y todas sus secciones.
4. `/projects` y `/projects/:slug` — listado, etiquetas de estado y detalle.
5. `/team` y `/team/:slug` — categorías, roles y perfiles.
6. `/publications` — filtros, etiquetas y listado.
7. `/technologies` — grupos y técnicas.
8. `/news` y `/news/:slug` — listado y notas.
9. `/join` y `/contact` — textos de la interfaz y del formulario (etiquetas, mensajes de éxito/error). La lógica de envío y los nombres de los campos se mantienen intactos, para que los mensajes se sigan guardando igual en la base de datos.

Además:

- Los marcadores de contenido pendiente seguirán marcados como tales, también en inglés.
- No se inventará ningún dato científico, publicación, persona ni resultado: solo se traduce lo que ya existe.
- Las direcciones de las páginas (URLs) no cambian.

## Nota técnica

Cada ruta pasa de importar los datos estáticos en español a usar los hooks bilingües (`useLab`, `useNav`, `useResearchAreas`, `useSpecies`, `useProjects`, `useTeam`, `usePublications`, `useTechniques`, `useNews`, `useUi`) y los textos fijos de la interfaz se mueven a objetos `{ es, en }` resueltos con `useLocalized`. Las funciones `head()` de SEO quedan en español porque se generan en el servidor antes de conocer la preferencia del visitante. Al terminar: typecheck, build y prueba del botón EN en escritorio y móvil.
