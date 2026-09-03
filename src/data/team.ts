import { lab } from "./lab";

export type Member = {
  slug: string;
  name: string;
  category: TeamCategory;
  program: string;
  degree: string;
  project: string;
  topic: string;
  organism: string;
  email: string | null;
  orcid: string | null;
  scholar: string | null;
  photo: string | null;
  worksWithSpecies: boolean;
  placeholder: boolean;
};

export const teamCategories = [
  "Investigador responsable",
  "Investigadores colaboradores",
  "Posdoctorantes",
  "Doctorado",
  "Maestría",
  "Licenciatura",
  "Servicio social",
  "Técnicos",
  "Egresados",
] as const;

export type TeamCategory = (typeof teamCategories)[number];

const P = "[Pendiente]";

const placeholderMember = (
  slug: string,
  name: string,
  category: TeamCategory,
  worksWithSpecies = true,
): Member => ({
  slug,
  name,
  category,
  program: P,
  degree: P,
  project: P,
  topic: P,
  organism: worksWithSpecies ? "Pseudocrossidium replicatum" : P,
  email: null,
  orcid: null,
  scholar: null,
  photo: null,
  worksWithSpecies,
  placeholder: true,
});

export const team: Member[] = [
  {
    slug: lab.lead.slug,
    name: lab.lead.name,
    category: "Investigador responsable",
    program: "Centro de Investigación en Biotecnología Aplicada — IPN",
    degree: "Doctor",
    project: "Genómica funcional de plantas",
    topic: "Mecanismos moleculares de adaptación vegetal",
    organism: "Pseudocrossidium replicatum",
    email: null,
    orcid: null,
    scholar: null,
    photo: null,
    worksWithSpecies: true,
    placeholder: false,
  },
  placeholderMember("perfil-doctorado-1", "[Estudiante de doctorado]", "Doctorado"),
  placeholderMember("perfil-maestria-1", "[Estudiante de maestría]", "Maestría"),
  placeholderMember("perfil-licenciatura-1", "[Estudiante de licenciatura]", "Licenciatura"),
  placeholderMember("perfil-servicio-social-1", "[Servicio social]", "Servicio social", false),
  placeholderMember("perfil-tecnico-1", "[Personal técnico]", "Técnicos", false),
];
