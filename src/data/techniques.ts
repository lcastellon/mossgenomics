import { useLocalized } from "@/lib/i18n";

export type Technique = {
  id: string;
  name: string;
  group: string;
  note: string;
  /** false hasta que el laboratorio confirme la disponibilidad */
  confirmed: boolean;
};

export const techniqueGroups = [
  "Material vegetal",
  "Ácidos nucleicos",
  "Expresión génica",
  "Ingeniería genética",
  "Análisis e imagen",
] as const;

export const techniqueGroupsEn = [
  "Plant material",
  "Nucleic acids",
  "Gene expression",
  "Genetic engineering",
  "Analysis and imaging",
] as const;

export const techniqueGroupsData: { es: readonly string[]; en: readonly string[] } = { es: techniqueGroups, en: techniqueGroupsEn };
export const useTechniqueGroups = () => useLocalized(techniqueGroupsData);

export const techniques: Technique[] = [
  { id: "cultivo-musgos", name: "Cultivo de musgos", group: "Material vegetal", note: "Mantenimiento de líneas del modelo de estudio.", confirmed: false },
  { id: "cultivo-in-vitro", name: "Cultivo in vitro", group: "Material vegetal", note: "Condiciones controladas y medios definidos.", confirmed: false },
  { id: "aislamiento", name: "Aislamiento de material vegetal", group: "Material vegetal", note: "Obtención y limpieza de tejidos.", confirmed: false },
  { id: "adn", name: "Extracción de ADN", group: "Ácidos nucleicos", note: "Material genómico para análisis molecular.", confirmed: false },
  { id: "arn", name: "Extracción de ARN", group: "Ácidos nucleicos", note: "Insumo para estudios de expresión.", confirmed: false },
  { id: "pcr", name: "PCR", group: "Ácidos nucleicos", note: "Amplificación de secuencias de interés.", confirmed: false },
  { id: "rt-pcr", name: "RT-PCR", group: "Expresión génica", note: "Detección de transcritos.", confirmed: false },
  { id: "qpcr", name: "qPCR", group: "Expresión génica", note: "Cuantificación relativa de la expresión.", confirmed: false },
  { id: "expresion", name: "Análisis de expresión génica", group: "Expresión génica", note: "Comparación entre condiciones experimentales.", confirmed: false },
  { id: "transformacion", name: "Transformación genética", group: "Ingeniería genética", note: "Introducción de construcciones de estudio.", confirmed: false },
  { id: "crispr", name: "Edición genómica CRISPR-Cas", group: "Ingeniería genética", note: "Estudio funcional de genes candidatos.", confirmed: false },
  { id: "secuencias", name: "Análisis de secuencias", group: "Análisis e imagen", note: "Comparación y anotación de secuencias.", confirmed: false },
  { id: "bioinformatica", name: "Bioinformática", group: "Análisis e imagen", note: "Procesamiento y análisis de datos.", confirmed: false },
  { id: "fenotipo", name: "Análisis fenotípico", group: "Análisis e imagen", note: "Caracterización de efectos observables.", confirmed: false },
  { id: "microscopia", name: "Microscopía", group: "Análisis e imagen", note: "Observación de estructuras y tejidos.", confirmed: false },
];

export const techniquesEn: Technique[] = [
  { id: "cultivo-musgos", name: "Moss culture", group: "Plant material", note: "Maintenance of study model lines.", confirmed: false },
  { id: "cultivo-in-vitro", name: "In vitro culture", group: "Plant material", note: "Controlled conditions and defined media.", confirmed: false },
  { id: "aislamiento", name: "Plant material isolation", group: "Plant material", note: "Tissue collection and cleaning.", confirmed: false },
  { id: "adn", name: "DNA extraction", group: "Nucleic acids", note: "Genomic material for molecular analysis.", confirmed: false },
  { id: "arn", name: "RNA extraction", group: "Nucleic acids", note: "Input for expression studies.", confirmed: false },
  { id: "pcr", name: "PCR", group: "Nucleic acids", note: "Amplification of sequences of interest.", confirmed: false },
  { id: "rt-pcr", name: "RT-PCR", group: "Gene expression", note: "Transcript detection.", confirmed: false },
  { id: "qpcr", name: "qPCR", group: "Gene expression", note: "Relative expression quantification.", confirmed: false },
  { id: "expresion", name: "Gene expression analysis", group: "Gene expression", note: "Comparison across experimental conditions.", confirmed: false },
  { id: "transformacion", name: "Genetic transformation", group: "Genetic engineering", note: "Introduction of study constructs.", confirmed: false },
  { id: "crispr", name: "CRISPR-Cas genome editing", group: "Genetic engineering", note: "Functional study of candidate genes.", confirmed: false },
  { id: "secuencias", name: "Sequence analysis", group: "Analysis and imaging", note: "Comparison and annotation of sequences.", confirmed: false },
  { id: "bioinformatica", name: "Bioinformatics", group: "Analysis and imaging", note: "Data processing and analysis.", confirmed: false },
  { id: "fenotipo", name: "Phenotypic analysis", group: "Analysis and imaging", note: "Characterization of observable effects.", confirmed: false },
  { id: "microscopia", name: "Microscopy", group: "Analysis and imaging", note: "Observation of structures and tissues.", confirmed: false },
];

export const techniquesData = { es: techniques, en: techniquesEn } as const;
export const useTechniques = () => useLocalized(techniquesData);
