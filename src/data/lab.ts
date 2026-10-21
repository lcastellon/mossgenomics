import { useLocalized } from "@/lib/i18n";

export type LabInfo = {
  number: string;
  name: string;
  shortInstitution: string;
  center: string;
  institution: string;
  location: string;
  lead: {
    name: string;
    role: string;
    slug: string;
    photo: string | null;
    bio: string;
    education: string[];
    researchLines: string[];
    links: {
      orcid: string | null;
      scholar: string | null;
      researchgate: string | null;
      email: string | null;
    };
  };
  model: string;
  contact: {
    address: string;
    email: string;
    phone: string;
    mapQuery: string;
  };
  institutionalLinks: { label: string; href: string }[];
};

export const lab: LabInfo = {
  number: "Laboratorio 11  CIBA-IPN",
  name: "Biología Molecular y Genómica Funcional de Plantas",
  shortInstitution: "CIBA · IPN",
  center: "Centro de Investigación en Biotecnología Aplicada",
  institution: "Instituto Politécnico Nacional",
  location: "Tlaxcala, México",
  lead: {
    name: "Dr. Miguel Angel Villalobos López",
    role: "Laboratorio 11 — Genómica Funcional de Plantas",
    slug: "miguel-angel-villalobos-lopez",
    photo: null as string | null,
    bio: "Investigador del CIBA-IPN y responsable del Laboratorio de Genómica Funcional y Biotecnología de Plantas. Su trabajo estudia las respuestas moleculares de plantas y bacterias al estrés abiótico, con especial interés en la tolerancia a la desecación del musgo Pseudocrossidium replicatum, la regulación de la expresión génica y las aplicaciones biotecnológicas de estos mecanismos.",
    education: ["Formación académica: grados e instituciones pendientes de verificación documental."],
    researchLines: [
      "Genómica funcional de plantas",
      "Biología molecular vegetal",
      "Respuestas a estrés abiótico",
      "Edición genómica",
    ],
    links: {
      orcid: "https://orcid.org/0000-0002-8640-342X",
      scholar: null as string | null,
      researchgate: "https://www.researchgate.net/profile/Miguel-Angel-Villalobos",
      email: "mvillalobosl@ipn.mx",
    },
  },
  model: "Pseudocrossidium replicatum",
  contact: {
    address: "Ex-Hacienda San Juan Molino, Carretera Estatal Tecuexcomac–Tepetitla km 1.5, C.P. 90700, Tlaxcala, México.",
    email: "mvillalobosl@ipn.mx",
    phone: "[Pendiente] Teléfono por confirmar.",
    mapQuery: "Centro de Investigación en Biotecnología Aplicada IPN Tlaxcala",
  },
  institutionalLinks: [
    { label: "CIBA Tlaxcala", href: "https://www.cibatlaxcala.ipn.mx/" },
    { label: "Instituto Politécnico Nacional", href: "https://www.ipn.mx/" },
  ],
};

const labEn: LabInfo = {
  number: "Laboratory 11  CIBA-IPN",
  name: "Molecular Biology and Functional Plant Genomics",
  shortInstitution: "CIBA · IPN",
  center: "Center for Research in Applied Biotechnology",
  institution: "Instituto Politécnico Nacional",
  location: "Tlaxcala, Mexico",
  lead: {
    name: "Dr. Miguel Angel Villalobos López",
    role: "Laboratory 11 — Functional Plant Genomics",
    slug: "miguel-angel-villalobos-lopez",
    photo: null as string | null,
    bio: "Researcher at CIBA-IPN and head of the Functional Genomics and Plant Biotechnology Laboratory. His work examines molecular responses of plants and associated bacteria to abiotic stress, particularly desiccation tolerance in the moss Pseudocrossidium replicatum, gene-expression regulation, and potential biotechnological applications.",
    education: ["Academic degrees and institutions: awaiting documentary verification."],
    researchLines: [
      "Functional plant genomics",
      "Plant molecular biology",
      "Abiotic stress responses",
      "Genome editing",
    ],
    links: {
      orcid: "https://orcid.org/0000-0002-8640-342X",
      scholar: null as string | null,
      researchgate: "https://www.researchgate.net/profile/Miguel-Angel-Villalobos",
      email: "mvillalobosl@ipn.mx",
    },
  },
  model: "Pseudocrossidium replicatum",
  contact: {
    address: "Ex-Hacienda San Juan Molino, Tecuexcomac–Tepetitla State Road, km 1.5, ZIP 90700, Tlaxcala, Mexico.",
    email: "mvillalobosl@ipn.mx",
    phone: "[Pending] Phone number to be confirmed.",
    mapQuery: "Centro de Investigación en Biotecnología Aplicada IPN Tlaxcala",
  },
  institutionalLinks: [
    { label: "CIBA Tlaxcala", href: "https://www.cibatlaxcala.ipn.mx/" },
    { label: "Instituto Politécnico Nacional", href: "https://www.ipn.mx/" },
  ],
} as const;

export const labData: { es: LabInfo; en: LabInfo } = { es: lab, en: labEn };
export const useLab = () => useLocalized(labData);

export const nav = [
  { label: "Inicio", to: "/" },
  { label: "Investigación", to: "/research" },
  { label: "Pseudocrossidium replicatum\n", to: "/pseudocrossidium-replicatum" },
  { label: "Proyectos", to: "/projects" },
  { label: "Equipo", to: "/team" },
  { label: "Publicaciones", to: "/publications" },
  { label: "Tecnologías", to: "/technologies" },
  { label: "Estudiantes", to: "/join" },
  { label: "Noticias", to: "/news" },
  { label: "Contacto", to: "/contact" },
] as const;

const navEn = [
  { label: "Home", to: "/" },
  { label: "Research", to: "/research" },
  { label: "Pseudocrossidium replicatum\n", to: "/pseudocrossidium-replicatum" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  { label: "Publications", to: "/publications" },
  { label: "Technologies", to: "/technologies" },
  { label: "Students", to: "/join" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
] as const;

export const navData: { es: readonly { label: string; to: string }[]; en: readonly { label: string; to: string }[] } = { es: nav, en: navEn };
export const useNav = () => useLocalized(navData);

export const PLACEHOLDER =
  "Contenido de demostración. Sustituir por información confirmada del laboratorio.";

const PLACEHOLDER_EN =
  "Demonstration content. Replace with confirmed information from the laboratory.";

export const placeholderData = { es: PLACEHOLDER, en: PLACEHOLDER_EN } as const;
export const usePlaceholder = () => useLocalized(placeholderData);
