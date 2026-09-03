import { useLocalized } from "@/lib/i18n";

export type ResearchArea = {
  id: string;
  index: string;
  title: string;
  summary: string;
  keywords: string[];
};

export const researchAreas: ResearchArea[] = [
  {
    id: "genomica-funcional",
    index: "01",
    title: "Genómica funcional",
    summary:
      "Estudiamos la función de genes involucrados en procesos relevantes para el desarrollo, fisiología y adaptación vegetal.",
    keywords: ["Función génica", "Anotación", "Genotipo–fenotipo"],
  },
  {
    id: "estres-abiotico",
    index: "02",
    title: "Respuesta a estrés abiótico",
    summary:
      "Investigamos mecanismos moleculares y fisiológicos asociados con la respuesta de Pseudocrossidium replicatum a condiciones ambientales adversas.",
    keywords: ["Desecación", "Temperatura", "Fisiología"],
  },
  {
    id: "expresion-genica",
    index: "03",
    title: "Regulación de la expresión génica",
    summary:
      "Analizamos cambios en la expresión y regulación de genes relacionados con diferentes procesos biológicos.",
    keywords: ["Transcripción", "qPCR", "Perfiles de expresión"],
  },
  {
    id: "edicion-genomica",
    index: "04",
    title: "Edición genómica",
    summary:
      "Desarrollamos y evaluamos aproximaciones experimentales para estudiar funcionalmente genes de interés mediante herramientas de edición genómica.",
    keywords: ["CRISPR-Cas", "Transformación", "Validación funcional"],
  },
];

export const researchAreasEn: ResearchArea[] = [
  {
    id: "genomica-funcional",
    index: "01",
    title: "Functional genomics",
    summary:
      "We study the function of genes involved in processes relevant to plant development, physiology, and adaptation.",
    keywords: ["Gene function", "Annotation", "Genotype–phenotype"],
  },
  {
    id: "estres-abiotico",
    index: "02",
    title: "Abiotic stress response",
    summary:
      "We investigate molecular and physiological mechanisms associated with the response of Pseudocrossidium replicatum to adverse environmental conditions.",
    keywords: ["Desiccation", "Temperature", "Physiology"],
  },
  {
    id: "expresion-genica",
    index: "03",
    title: "Gene expression regulation",
    summary:
      "We analyze changes in the expression and regulation of genes related to different biological processes.",
    keywords: ["Transcription", "qPCR", "Expression profiles"],
  },
  {
    id: "edicion-genomica",
    index: "04",
    title: "Genome editing",
    summary:
      "We develop and evaluate experimental approaches to functionally study genes of interest using genome editing tools.",
    keywords: ["CRISPR-Cas", "Transformation", "Functional validation"],
  },
];

export const researchAreasData = { es: researchAreas, en: researchAreasEn } as const;
export const useResearchAreas = () => useLocalized(researchAreasData);

export const geneToPhenotype = [
  { step: "Ambiente", note: "Condición ambiental o tratamiento controlado" },
  { step: "Respuesta de la planta", note: "Observación fisiológica y morfológica" },
  { step: "Expresión génica", note: "Análisis de transcritos" },
  { step: "Genes candidatos", note: "Selección y anotación" },
  { step: "Validación funcional", note: "Aproximaciones de edición genómica" },
  { step: "Fenotipo", note: "Caracterización del efecto" },
];

export const geneToPhenotypeEn = [
  { step: "Environment", note: "Environmental condition or controlled treatment" },
  { step: "Plant response", note: "Physiological and morphological observation" },
  { step: "Gene expression", note: "Transcript analysis" },
  { step: "Candidate genes", note: "Selection and annotation" },
  { step: "Functional validation", note: "Genome editing approaches" },
  { step: "Phenotype", note: "Characterization of the effect" },
];

export const geneToPhenotypeData = { es: geneToPhenotype, en: geneToPhenotypeEn } as const;
export const useGeneToPhenotype = () => useLocalized(geneToPhenotypeData);
