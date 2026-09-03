import { PLACEHOLDER } from "./lab";

export const species = {
  name: "Pseudocrossidium replicatum",
  eyebrow: "Modelo de estudio",
  subtitle:
    "Un musgo mexicano para estudiar los mecanismos moleculares de adaptación vegetal",
  whatIsIt:
    "Pseudocrossidium replicatum es una especie de musgo utilizada por el Laboratorio 11 como organismo de estudio para investigar mecanismos moleculares y fisiológicos relacionados con la respuesta vegetal al ambiente.",
  whyMoss:
    "Los musgos representan linajes tempranos de plantas terrestres y constituyen sistemas particularmente interesantes para investigar mecanismos fundamentales de adaptación, regulación genética y respuesta a condiciones ambientales.",
  topics: [
    "Genómica funcional",
    "Expresión génica",
    "Estrés abiótico",
    "Fisiología vegetal",
    "Biología molecular",
    "Edición genómica",
    "Adaptación vegetal",
  ],
};

export type SpeciesSection = {
  id: string;
  title: string;
  body: string;
  pending: boolean;
};

export const speciesSections: SpeciesSection[] = [
  { id: "taxonomia", title: "Taxonomía", body: `[Pendiente] ${PLACEHOLDER}`, pending: true },
  { id: "distribucion", title: "Distribución", body: `[Pendiente] ${PLACEHOLDER}`, pending: true },
  {
    id: "caracteristicas",
    title: "Características biológicas",
    body: `[Pendiente] ${PLACEHOLDER}`,
    pending: true,
  },
  { id: "habitat", title: "Hábitat", body: `[Pendiente] ${PLACEHOLDER}`, pending: true },
  { id: "ciclo-de-vida", title: "Ciclo de vida", body: `[Pendiente] ${PLACEHOLDER}`, pending: true },
  {
    id: "importancia",
    title: "Importancia científica",
    body: `[Pendiente] ${PLACEHOLDER}`,
    pending: true,
  },
  {
    id: "cultivo",
    title: "Cultivo en laboratorio",
    body: `[Pendiente] ${PLACEHOLDER}`,
    pending: true,
  },
  { id: "protocolos", title: "Protocolos", body: `[Pendiente] ${PLACEHOLDER}`, pending: true },
  {
    id: "genomica",
    title: "Características genómicas",
    body: `[Pendiente] ${PLACEHOLDER}`,
    pending: true,
  },
  {
    id: "investigaciones",
    title: "Investigaciones del laboratorio",
    body: `[Pendiente] ${PLACEHOLDER}`,
    pending: true,
  },
  {
    id: "publicaciones-especie",
    title: "Publicaciones relacionadas",
    body: `[Pendiente] ${PLACEHOLDER}`,
    pending: true,
  },
  {
    id: "estudiantes-especie",
    title: "Estudiantes que trabajan con la especie",
    body: `[Pendiente] ${PLACEHOLDER}`,
    pending: true,
  },
];
