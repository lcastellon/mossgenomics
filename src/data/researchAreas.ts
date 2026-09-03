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

export const geneToPhenotype = [
  { step: "Ambiente", note: "Condición ambiental o tratamiento controlado" },
  { step: "Respuesta de la planta", note: "Observación fisiológica y morfológica" },
  { step: "Expresión génica", note: "Análisis de transcritos" },
  { step: "Genes candidatos", note: "Selección y anotación" },
  { step: "Validación funcional", note: "Aproximaciones de edición genómica" },
  { step: "Fenotipo", note: "Caracterización del efecto" },
];
