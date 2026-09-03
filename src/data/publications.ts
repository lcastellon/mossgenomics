export const publicationFilters = [
  "Todas",
  "Pseudocrossidium replicatum",
  "Genómica funcional",
  "Estrés abiótico",
  "Edición genómica",
  "Biología molecular",
] as const;

export type PublicationFilter = (typeof publicationFilters)[number];

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

/**
 * Punto de integración futura. Cuando se habilite ORCID o Crossref,
 * esta función deberá resolver los registros remotos y mezclarlos
 * con `publications` respetando el mismo tipo `Publication`.
 */
export const externalSources = {
  orcid: { enabled: false, id: null as string | null },
  crossref: { enabled: false, prefix: null as string | null },
};
