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
  { slug: "publicacion-plants-2025", date: "2025-06-07", category: "Publicación", title: "Artículo sobre genes de referencia para RT-qPCR en Pseudocrossidium replicatum", excerpt: "La revista Plants publicó una investigación sobre la selección y validación de genes de referencia bajo múltiples condiciones de estrés abiótico.", body: "El artículo, con participación de Miguel Angel Villalobos-López y colaboradores, aparece en Plants 14(12), 1752. DOI: 10.3390/plants14121752. Fuente: https://doi.org/10.3390/plants14121752", placeholder: false },
  { slug: "articulo-desecacion-2021", date: "2021-06-29", category: "Publicación", title: "Estudio confirma tolerancia completa a la desecación en Pseudocrossidium replicatum", excerpt: "Un trabajo publicado en Plant Molecular Biology caracteriza respuestas moleculares inducibles ante estrés abiótico.", body: "El estudio describe la tolerancia a la desecación del musgo Pseudocrossidium replicatum y analiza el papel del ácido abscísico y de la respuesta transcriptómica. DOI: 10.1007/s11103-021-01167-3. Fuente: https://doi.org/10.1007/s11103-021-01167-3", placeholder: false },
];

export const newsEn: NewsItemEn[] = [
  { slug: "publicacion-plants-2025", date: "2025-06-07", category: "Publication", title: "Paper on RT-qPCR reference genes in Pseudocrossidium replicatum", excerpt: "Plants published research on reference-gene selection and validation under multiple abiotic stress conditions.", body: "The article, coauthored by Miguel Angel Villalobos-López and colleagues, was published in Plants 14(12), 1752. DOI: 10.3390/plants14121752. Source: https://doi.org/10.3390/plants14121752", placeholder: false },
  { slug: "articulo-desecacion-2021", date: "2021-06-29", category: "Publication", title: "Study documents full desiccation tolerance in Pseudocrossidium replicatum", excerpt: "A Plant Molecular Biology study characterizes inducible molecular responses to abiotic stress.", body: "The study documents desiccation tolerance in Pseudocrossidium replicatum and explores abscisic acid and transcriptomic responses. DOI: 10.1007/s11103-021-01167-3. Source: https://doi.org/10.1007/s11103-021-01167-3", placeholder: false },
];

export const newsData: { es: (Omit<NewsItem, "category"> & { category: string })[]; en: (Omit<NewsItem, "category"> & { category: string })[] } = { es: news, en: newsEn };
export const useNews = () => useLocalized(newsData);
