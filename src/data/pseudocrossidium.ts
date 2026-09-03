import { useLocalized } from "@/lib/i18n";
import { PLACEHOLDER, placeholderData } from "./lab";

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

export const speciesEn = {
  name: "Pseudocrossidium replicatum",
  eyebrow: "Study model",
  subtitle:
    "A Mexican moss used to study the molecular mechanisms of plant adaptation",
  whatIsIt:
    "Pseudocrossidium replicatum is a moss species used by Laboratory 11 as a study organism to investigate molecular and physiological mechanisms related to plant responses to the environment.",
  whyMoss:
    "Mosses represent early lineages of land plants and constitute particularly interesting systems for investigating fundamental mechanisms of adaptation, genetic regulation, and response to environmental conditions.",
  topics: [
    "Functional genomics",
    "Gene expression",
    "Abiotic stress",
    "Plant physiology",
    "Molecular biology",
    "Genome editing",
    "Plant adaptation",
  ],
};

export const speciesData = { es: species, en: speciesEn } as const;
export const useSpecies = () => useLocalized(speciesData);

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

const PLACEHOLDER_EN = placeholderData.en;

export const speciesSectionsEn: SpeciesSection[] = [
  { id: "taxonomia", title: "Taxonomy", body: `[Pending] ${PLACEHOLDER_EN}`, pending: true },
  { id: "distribucion", title: "Distribution", body: `[Pending] ${PLACEHOLDER_EN}`, pending: true },
  {
    id: "caracteristicas",
    title: "Biological characteristics",
    body: `[Pending] ${PLACEHOLDER_EN}`,
    pending: true,
  },
  { id: "habitat", title: "Habitat", body: `[Pending] ${PLACEHOLDER_EN}`, pending: true },
  { id: "ciclo-de-vida", title: "Life cycle", body: `[Pending] ${PLACEHOLDER_EN}`, pending: true },
  {
    id: "importancia",
    title: "Scientific importance",
    body: `[Pending] ${PLACEHOLDER_EN}`,
    pending: true,
  },
  {
    id: "cultivo",
    title: "Laboratory cultivation",
    body: `[Pending] ${PLACEHOLDER_EN}`,
    pending: true,
  },
  { id: "protocolos", title: "Protocols", body: `[Pending] ${PLACEHOLDER_EN}`, pending: true },
  {
    id: "genomica",
    title: "Genomic characteristics",
    body: `[Pending] ${PLACEHOLDER_EN}`,
    pending: true,
  },
  {
    id: "investigaciones",
    title: "Laboratory research",
    body: `[Pending] ${PLACEHOLDER_EN}`,
    pending: true,
  },
  {
    id: "publicaciones-especie",
    title: "Related publications",
    body: `[Pending] ${PLACEHOLDER_EN}`,
    pending: true,
  },
  {
    id: "estudiantes-especie",
    title: "Students working with the species",
    body: `[Pending] ${PLACEHOLDER_EN}`,
    pending: true,
  },
];

export const speciesSectionsData = { es: speciesSections, en: speciesSectionsEn } as const;
export const useSpeciesSections = () => useLocalized(speciesSectionsData);
