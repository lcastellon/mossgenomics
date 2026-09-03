export type NewsItem = {
  slug: string;
  date: string;
  category:
    | "Publicación"
    | "Congreso"
    | "Defensa de tesis"
    | "Premio"
    | "Estudiantes"
    | "Proyecto"
    | "Estancia"
    | "Colaboración";
  title: string;
  excerpt: string;
  body: string;
  placeholder: boolean;
};

const P =
  "[Pendiente] Nota de demostración. Sustituir por información real del laboratorio antes de publicar el sitio.";

export const news: NewsItem[] = [
  {
    slug: "nota-demostracion-publicacion",
    date: "[Fecha]",
    category: "Publicación",
    title: "[Nota de demostración — nueva publicación]",
    excerpt: P,
    body: P,
    placeholder: true,
  },
  {
    slug: "nota-demostracion-congreso",
    date: "[Fecha]",
    category: "Congreso",
    title: "[Nota de demostración — participación en congreso]",
    excerpt: P,
    body: P,
    placeholder: true,
  },
  {
    slug: "nota-demostracion-tesis",
    date: "[Fecha]",
    category: "Defensa de tesis",
    title: "[Nota de demostración — defensa de tesis]",
    excerpt: P,
    body: P,
    placeholder: true,
  },
  {
    slug: "nota-demostracion-proyecto",
    date: "[Fecha]",
    category: "Proyecto",
    title: "[Nota de demostración — nuevo proyecto]",
    excerpt: P,
    body: P,
    placeholder: true,
  },
];
