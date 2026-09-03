import { useLocalized } from "@/lib/i18n";

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

export type NewsItemEn = Omit<NewsItem, "category"> & {
  category:
    | "Publication"
    | "Conference"
    | "Thesis defense"
    | "Award"
    | "Students"
    | "Project"
    | "Research stay"
    | "Collaboration";
};

const P =
  "[Pendiente] Nota de demostración. Sustituir por información real del laboratorio antes de publicar el sitio.";

const P_EN =
  "[Pending] Demonstration note. Replace with real laboratory information before publishing the site.";

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

export const newsEn: NewsItemEn[] = [
  {
    slug: "nota-demostracion-publicacion",
    date: "[Date]",
    category: "Publication",
    title: "[Demonstration note — new publication]",
    excerpt: P_EN,
    body: P_EN,
    placeholder: true,
  },
  {
    slug: "nota-demostracion-congreso",
    date: "[Date]",
    category: "Conference",
    title: "[Demonstration note — conference participation]",
    excerpt: P_EN,
    body: P_EN,
    placeholder: true,
  },
  {
    slug: "nota-demostracion-tesis",
    date: "[Date]",
    category: "Thesis defense",
    title: "[Demonstration note — thesis defense]",
    excerpt: P_EN,
    body: P_EN,
    placeholder: true,
  },
  {
    slug: "nota-demostracion-proyecto",
    date: "[Date]",
    category: "Project",
    title: "[Demonstration note — new project]",
    excerpt: P_EN,
    body: P_EN,
    placeholder: true,
  },
];

export const newsData: { es: (Omit<NewsItem, "category"> & { category: string })[]; en: (Omit<NewsItem, "category"> & { category: string })[] } = { es: news, en: newsEn };
export const useNews = () => useLocalized(newsData);
