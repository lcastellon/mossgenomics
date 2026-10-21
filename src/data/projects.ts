import { useLocalized } from "@/lib/i18n";

export type Project = {
  slug: string;
  title: string;
  question: string;
  description: string;
  organism: string;
  genes: string;
  methodology: string[];
  researchers: string[];
  students: string[];
  funding: string;
  period: string;
  publications: string[];
  status: "En curso" | "En preparación" | "Concluido";
  placeholder: boolean;
};

export type ProjectEn = Omit<Project, "status"> & {
  status: "Ongoing" | "In preparation" | "Completed";
};

const P = "[Pendiente] Información por confirmar con el laboratorio.";
const P_EN = "[Pending] Information to be confirmed with the laboratory.";

export const projects: Project[] = [
  { slug: "genomica-funcional-pseudocrossidium", title: "Genómica funcional del musgo Pseudocrossidium replicatum", question: "¿Qué mecanismos moleculares permiten la tolerancia a la desecación y qué genes tienen potencial biotecnológico?", description: "Proyecto de ciencia básica A1-S-35357 (convocatoria 2017–2018), sobre Pseudocrossidium replicatum como modelo para identificar genes con potencial para mejorar la respuesta de cultivos a condiciones ambientales adversas.", organism: "Pseudocrossidium replicatum", genes: "Genes de respuesta al estrés abiótico; dianas específicas según los resultados publicados", methodology: ["Genómica funcional", "Análisis transcriptómico y expresión génica"], researchers: ["Dr. Miguel Angel Villalobos López"], students: [], funding: "Proyecto de Ciencia Básica A1-S-35357", period: "Convocatoria 2017–2018; registro público con vigencia reportada hasta 2022", publications: ["10.1007/s11103-021-01167-3"], status: "Concluido", placeholder: false },
  { slug: "genes-referencia-rtqpcr-2025", title: "Validación de genes de referencia para RT-qPCR en Pseudocrossidium replicatum", question: "¿Qué genes de referencia son estables bajo distintas condiciones de estrés abiótico?", description: "Investigación publicada en Plants (2025) que evalúa genes de referencia para normalizar medidas de expresión génica en el tejido protonemal de este musgo tolerante a la desecación.", organism: "Pseudocrossidium replicatum", genes: "Genes de referencia para RT-qPCR", methodology: ["RT-qPCR", "Evaluación de estabilidad de expresión génica"], researchers: ["Dr. Miguel Angel Villalobos López y coautores del artículo"], students: [], funding: "Financiamiento específico por confirmar", period: "Publicación: 2025", publications: ["10.3390/plants14121752"], status: "Concluido", placeholder: false },
];

export const projectsEn: ProjectEn[] = [
  { slug: "genomica-funcional-pseudocrossidium", title: "Functional genomics of the moss Pseudocrossidium replicatum", question: "Which molecular mechanisms enable desiccation tolerance and which genes show biotechnological potential?", description: "Basic research project A1-S-35357 (2017–2018 call), studying Pseudocrossidium replicatum as a model for identifying genes potentially useful in crop stress responses.", organism: "Pseudocrossidium replicatum", genes: "Abiotic-stress response genes; specific targets as reported in published results", methodology: ["Functional genomics", "Transcriptomics and gene expression analysis"], researchers: ["Dr. Miguel Angel Villalobos López"], students: [], funding: "Basic Research Project A1-S-35357", period: "2017–2018 call; public record lists a term through 2022", publications: ["10.1007/s11103-021-01167-3"], status: "Completed", placeholder: false },
  { slug: "genes-referencia-rtqpcr-2025", title: "Validation of RT-qPCR reference genes in Pseudocrossidium replicatum", question: "Which reference genes remain stable across abiotic stress conditions?", description: "Research published in Plants (2025) evaluating reference genes for the normalization of gene-expression measurements in protonemal tissue of this desiccation-tolerant moss.", organism: "Pseudocrossidium replicatum", genes: "RT-qPCR reference genes", methodology: ["RT-qPCR", "Gene-expression stability assessment"], researchers: ["Dr. Miguel Angel Villalobos López and article coauthors"], students: [], funding: "Specific funding not yet verified", period: "Publication: 2025", publications: ["10.3390/plants14121752"], status: "Completed", placeholder: false },
];

export const projectsData: { es: (Omit<Project, "status"> & { status: string })[]; en: (Omit<Project, "status"> & { status: string })[] } = { es: projects, en: projectsEn };
export const useProjects = () => useLocalized(projectsData);
