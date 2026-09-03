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
  {
    slug: "proyecto-demostracion-1",
    title: "[Proyecto de demostración 1]",
    question: "[Pendiente] Pregunta de investigación por definir.",
    description: P,
    organism: "Pseudocrossidium replicatum",
    genes: P,
    methodology: [P],
    researchers: ["Dr. Miguel Angel Villalobos López"],
    students: [P],
    funding: P,
    period: P,
    publications: [],
    status: "En curso",
    placeholder: true,
  },
  {
    slug: "proyecto-demostracion-2",
    title: "[Proyecto de demostración 2]",
    question: "[Pendiente] Pregunta de investigación por definir.",
    description: P,
    organism: "Pseudocrossidium replicatum",
    genes: P,
    methodology: [P],
    researchers: ["Dr. Miguel Angel Villalobos López"],
    students: [P],
    funding: P,
    period: P,
    publications: [],
    status: "En preparación",
    placeholder: true,
  },
  {
    slug: "proyecto-demostracion-3",
    title: "[Proyecto de demostración 3]",
    question: "[Pendiente] Pregunta de investigación por definir.",
    description: P,
    organism: P,
    genes: P,
    methodology: [P],
    researchers: ["Dr. Miguel Angel Villalobos López"],
    students: [P],
    funding: P,
    period: P,
    publications: [],
    status: "En preparación",
    placeholder: true,
  },
];

export const projectsEn: ProjectEn[] = [
  {
    slug: "proyecto-demostracion-1",
    title: "[Demonstration project 1]",
    question: "[Pending] Research question to be defined.",
    description: P_EN,
    organism: "Pseudocrossidium replicatum",
    genes: P_EN,
    methodology: [P_EN],
    researchers: ["Dr. Miguel Angel Villalobos López"],
    students: [P_EN],
    funding: P_EN,
    period: P_EN,
    publications: [],
    status: "Ongoing",
    placeholder: true,
  },
  {
    slug: "proyecto-demostracion-2",
    title: "[Demonstration project 2]",
    question: "[Pending] Research question to be defined.",
    description: P_EN,
    organism: "Pseudocrossidium replicatum",
    genes: P_EN,
    methodology: [P_EN],
    researchers: ["Dr. Miguel Angel Villalobos López"],
    students: [P_EN],
    funding: P_EN,
    period: P_EN,
    publications: [],
    status: "In preparation",
    placeholder: true,
  },
  {
    slug: "proyecto-demostracion-3",
    title: "[Demonstration project 3]",
    question: "[Pending] Research question to be defined.",
    description: P_EN,
    organism: P_EN,
    genes: P_EN,
    methodology: [P_EN],
    researchers: ["Dr. Miguel Angel Villalobos López"],
    students: [P_EN],
    funding: P_EN,
    period: P_EN,
    publications: [],
    status: "In preparation",
    placeholder: true,
  },
];

export const projectsData = { es: projects, en: projectsEn } as const;
export const useProjects = () => useLocalized(projectsData);
