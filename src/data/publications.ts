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

export const publicationFiltersData: { es: readonly string[]; en: readonly string[] } = { es: publicationFilters, en: publicationFiltersEn };
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
  { id: "plants-2025", year: "2025", authors: "Nava-Nolazco, R. M., Ríos-Melendez, S., Galván-Gordillo, S. V., Martínez-Navarro, A. C., Sánchez-Pérez, M., Chavez-Santoscoy, R. A., Bibbins-Martínez, M., Maldonado-Mendoza, I. E., Arroyo-Becerra, A., & Villalobos-López, M. A.", title: "Selection and Validation of Reference Genes for RT-qPCR in Protonemal Tissue of the Desiccation-Tolerant Moss Pseudocrossidium replicatum Under Multiple Abiotic Stress Conditions", journal: "Plants, 14(12), 1752", doi: "10.3390/plants14121752", url: "https://doi.org/10.3390/plants14121752", project: "Expresión génica y estrés abiótico en musgos", organism: "Pseudocrossidium replicatum", tags: ["Pseudocrossidium replicatum", "Estrés abiótico", "Biología molecular"], featured: true, placeholder: false, source: "manual" },
  { id: "plantmolbio-2021", year: "2021", authors: "Ríos-Meléndez, S., Valadez-Hernández, E., Delgadillo, C., Luna-Guevara, M. L., Martínez-Núñez, M. A., Sánchez-Pérez, M., Martínez-y-Pérez, J. L., Arroyo-Becerra, A., Cárdenas, L., Bibbins-Martínez, M., Maldonado-Mendoza, I. E., & Villalobos-López, M. A.", title: "Pseudocrossidium replicatum (Taylor) R.H. Zander is a fully desiccation-tolerant moss that expresses an inducible molecular mechanism in response to severe abiotic stress", journal: "Plant Molecular Biology, 107, 387–404", doi: "10.1007/s11103-021-01167-3", url: "https://doi.org/10.1007/s11103-021-01167-3", project: "Tolerancia a la desecación", organism: "Pseudocrossidium replicatum", tags: ["Pseudocrossidium replicatum", "Genómica funcional", "Estrés abiótico"], featured: true, placeholder: false, source: "manual" },
];

export const publicationsEn: PublicationEn[] = [
  { id: "plants-2025", year: "2025", authors: "Nava-Nolazco, R. M., Ríos-Melendez, S., Galván-Gordillo, S. V., Martínez-Navarro, A. C., Sánchez-Pérez, M., Chavez-Santoscoy, R. A., Bibbins-Martínez, M., Maldonado-Mendoza, I. E., Arroyo-Becerra, A., & Villalobos-López, M. A.", title: "Selection and Validation of Reference Genes for RT-qPCR in Protonemal Tissue of the Desiccation-Tolerant Moss Pseudocrossidium replicatum Under Multiple Abiotic Stress Conditions", journal: "Plants, 14(12), 1752", doi: "10.3390/plants14121752", url: "https://doi.org/10.3390/plants14121752", project: "Gene expression and abiotic stress in mosses", organism: "Pseudocrossidium replicatum", tags: ["Pseudocrossidium replicatum", "Abiotic stress", "Molecular biology"], featured: true, placeholder: false, source: "manual" },
  { id: "plantmolbio-2021", year: "2021", authors: "Ríos-Meléndez, S., Valadez-Hernández, E., Delgadillo, C., Luna-Guevara, M. L., Martínez-Núñez, M. A., Sánchez-Pérez, M., Martínez-y-Pérez, J. L., Arroyo-Becerra, A., Cárdenas, L., Bibbins-Martínez, M., Maldonado-Mendoza, I. E., & Villalobos-López, M. A.", title: "Pseudocrossidium replicatum (Taylor) R.H. Zander is a fully desiccation-tolerant moss that expresses an inducible molecular mechanism in response to severe abiotic stress", journal: "Plant Molecular Biology, 107, 387–404", doi: "10.1007/s11103-021-01167-3", url: "https://doi.org/10.1007/s11103-021-01167-3", project: "Desiccation tolerance", organism: "Pseudocrossidium replicatum", tags: ["Pseudocrossidium replicatum", "Functional genomics", "Abiotic stress"], featured: true, placeholder: false, source: "manual" },
];

export const publicationsData: { es: (Omit<Publication, "tags"> & { tags: string[] })[]; en: (Omit<Publication, "tags"> & { tags: string[] })[] } = { es: publications, en: publicationsEn };
export const usePublications = () => useLocalized(publicationsData);

/**
 * Punto de integración futura. Cuando se habilite ORCID o Crossref,
 * esta función deberá resolver los registros remotos y mezclarlos
 * con `publications` respetando el mismo tipo `Publication`.
 */
export const externalSources = {
  orcid: { enabled: false, id: "0000-0002-8640-342X" },
  crossref: { enabled: false, prefix: null as string | null },
};
