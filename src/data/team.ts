import { useLocalized } from "@/lib/i18n";
import { lab, labData } from "./lab";

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

export type MemberEn = Omit<Member, "category"> & { category: TeamCategoryEn };

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

export const teamCategoriesEn = [
  "Principal investigator",
  "Collaborating researchers",
  "Postdoctoral researchers",
  "Doctorate",
  "Master's",
  "Bachelor's",
  "Social service",
  "Technicians",
  "Alumni",
] as const;

export const teamCategoriesData: { es: readonly string[]; en: readonly string[] } = { es: teamCategories, en: teamCategoriesEn };
export const useTeamCategories = () => useLocalized(teamCategoriesData);

export type TeamCategory = (typeof teamCategories)[number];
export type TeamCategoryEn = (typeof teamCategoriesEn)[number];

const P = "[Pendiente]";
const P_EN = "[Pending]";

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

const placeholderMemberEn = (
  slug: string,
  name: string,
  category: TeamCategoryEn,
  worksWithSpecies = true,
): MemberEn => ({
  slug,
  name,
  category,
  program: P_EN,
  degree: P_EN,
  project: P_EN,
  topic: P_EN,
  organism: worksWithSpecies ? "Pseudocrossidium replicatum" : P_EN,
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
    email: "mvillalobosl@ipn.mx",
    orcid: "https://orcid.org/0000-0002-8640-342X",
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

export const teamEn: MemberEn[] = [
  {
    slug: labData.en.lead.slug,
    name: labData.en.lead.name,
    category: "Principal investigator",
    program: "Centro de Investigación en Biotecnología Aplicada — IPN",
    degree: "PhD",
    project: "Functional plant genomics",
    topic: "Molecular mechanisms of plant adaptation",
    organism: "Pseudocrossidium replicatum",
    email: "mvillalobosl@ipn.mx",
    orcid: "https://orcid.org/0000-0002-8640-342X",
    scholar: null,
    photo: null,
    worksWithSpecies: true,
    placeholder: false,
  },
  placeholderMemberEn("perfil-doctorado-1", "[Doctoral student]", "Doctorate"),
  placeholderMemberEn("perfil-maestria-1", "[Master's student]", "Master's"),
  placeholderMemberEn("perfil-licenciatura-1", "[Bachelor's student]", "Bachelor's"),
  placeholderMemberEn("perfil-servicio-social-1", "[Social service]", "Social service", false),
  placeholderMemberEn("perfil-tecnico-1", "[Technical staff]", "Technicians", false),
];

export const teamData: { es: (Omit<Member, "category"> & { category: string })[]; en: (Omit<Member, "category"> & { category: string })[] } = { es: team, en: teamEn };
export const useTeam = () => useLocalized(teamData);
