import { useLocalized } from "@/lib/i18n";

export const publicationFilters = [
  "Todas",
  "Pseudocrossidium replicatum",
  "Genómica funcional",
  "Estrés abiótico",
  "Edición genómica",
  "Biología molecular",
] as const;

export const publicationFiltersEn = [
  "All",
  "Pseudocrossidium replicatum",
  "Functional genomics",
  "Abiotic stress",
  "Genome editing",
  "Molecular biology",
] as const;

export const publicationFiltersData = { es: publicationFilters, en: publicationFiltersEn } as const;
export const usePublicationFilters = () => useLocalized(publicationFiltersData);

export type PublicationFilter = (typeof publicationFilters)[number];
export type PublicationFilterEn = (typeof publicationFiltersEn)[number];

export type Publication = {
  id: string;
  year: string;
  authors: string;
  title: string;
  journal: string;
  doi: string | null;
  url: string | null;
  project: string | null;
  organism: string | null;
  tags: Exclude<PublicationFilter, "Todas">[];
  featured: boolean;
  placeholder: boolean;
  /** Origen del registro: manual hoy; ORCID / Crossref en el futuro. */
  source: "manual" | "orcid" | "crossref";
};

export type PublicationEn = Omit<Publication, "tags"> & {
  tags: Exclude<PublicationFilterEn, "All">[];
};

export const publications: Publication[] = [
  {
    id: "demo-1",
    year: "[Año]",
    authors: "[Autores por confirmar]",
    title: "[Publicación de demostración — sustituir por un registro real]",
    journal: "[Revista]",
    doi: null,
    url: null,
    project: null,
    organism: "Pseudocrossidium replicatum",
    tags: ["Pseudocrossidium replicatum", "Genómica funcional"],
    featured: true,
    placeholder: true,
    source: "manual",
  },
  {
    id: "demo-2",
    year: "[Año]",
    authors: "[Autores por confirmar]",
    title: "[Publicación de demostración — sustituir por un registro real]",
    journal: "[Revista]",
    doi: null,
    url: null,
    project: null,
    organism: null,
    tags: ["Estrés abiótico", "Biología molecular"],
    featured: false,
    placeholder: true,
    source: "manual",
  },
  {
    id: "demo-3",
    year: "[Año]",
    authors: "[Autores por confirmar]",
    title: "[Publicación de demostración — sustituir por un registro real]",
    journal: "[Revista]",
    doi: null,
    url: null,
    project: null,
    organism: null,
    tags: ["Edición genómica"],
    featured: false,
    placeholder: true,
    source: "manual",
  },
];

export const publicationsEn: PublicationEn[] = [
  {
    id: "demo-1",
    year: "[Year]",
    authors: "[Authors to be confirmed]",
    title: "[Demonstration publication — replace with a real record]",
    journal: "[Journal]",
    doi: null,
    url: null,
    project: null,
    organism: "Pseudocrossidium replicatum",
    tags: ["Pseudocrossidium replicatum", "Functional genomics"],
    featured: true,
    placeholder: true,
    source: "manual",
  },
  {
    id: "demo-2",
    year: "[Year]",
    authors: "[Authors to be confirmed]",
    title: "[Demonstration publication — replace with a real record]",
    journal: "[Journal]",
    doi: null,
    url: null,
    project: null,
    organism: null,
    tags: ["Abiotic stress", "Molecular biology"],
    featured: false,
    placeholder: true,
    source: "manual",
  },
  {
    id: "demo-3",
    year: "[Year]",
    authors: "[Authors to be confirmed]",
    title: "[Demonstration publication — replace with a real record]",
    journal: "[Journal]",
    doi: null,
    url: null,
    project: null,
    organism: null,
    tags: ["Genome editing"],
    featured: false,
    placeholder: true,
    source: "manual",
  },
];

export const publicationsData = { es: publications, en: publicationsEn } as const;
export const usePublications = () => useLocalized(publicationsData);

/**
 * Punto de integración futura. Cuando se habilite ORCID o Crossref,
 * esta función deberá resolver los registros remotos y mezclarlos
 * con `publications` respetando el mismo tipo `Publication`.
 */
export const externalSources = {
  orcid: { enabled: false, id: null as string | null },
  crossref: { enabled: false, prefix: null as string | null },
};
