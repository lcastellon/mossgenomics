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

const P = "[Pendiente] Información por confirmar con el laboratorio.";

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
