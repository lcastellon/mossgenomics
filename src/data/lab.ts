import { useLocalized } from "@/lib/i18n";

export const lab = {
  number: "Laboratorio 11  CIBA-IPN",
  name: "Biología Molecular y Genómica Funcional de Plantas",
  shortInstitution: "CIBA · IPN",
  center: "Centro de Investigación en Biotecnología Aplicada",
  institution: "Instituto Politécnico Nacional",
  location: "Tlaxcala, México",
  lead: {
    name: "Dr. Miguel Angel Villalobos López",
    role: "Responsable del Laboratorio 11 — Genómica Funcional de Plantas",
    slug: "miguel-angel-villalobos-lopez",
    photo: null as string | null,
    bio: "[Pendiente] Semblanza académica del Dr. Miguel Angel Villalobos López por confirmar.",
    education: ["[Pendiente] Formación académica por confirmar."],
    researchLines: [
      "Genómica funcional de plantas",
      "Biología molecular vegetal",
      "Respuestas a estrés abiótico",
      "Edición genómica",
    ],
    links: {
      orcid: null as string | null,
      scholar: null as string | null,
      researchgate: null as string | null,
      email: null as string | null,
    },
  },
  model: "Pseudocrossidium replicatum",
  contact: {
    address: "[Pendiente] Dirección del CIBA-IPN por confirmar.",
    email: "[Pendiente] Correo institucional por confirmar.",
    phone: "[Pendiente] Teléfono por confirmar.",
    mapQuery: "Centro de Investigación en Biotecnología Aplicada IPN Tlaxcala",
  },
  institutionalLinks: [
    { label: "CIBA Tlaxcala", href: "https://www.cibatlaxcala.ipn.mx/" },
    { label: "Instituto Politécnico Nacional", href: "https://www.ipn.mx/" },
  ],
} as const;

const labEn = {
  number: "Laboratory 11  CIBA-IPN",
  name: "Molecular Biology and Functional Plant Genomics",
  shortInstitution: "CIBA · IPN",
  center: "Center for Research in Applied Biotechnology",
  institution: "Instituto Politécnico Nacional",
  location: "Tlaxcala, Mexico",
  lead: {
    name: "Dr. Miguel Angel Villalobos López",
    role: "Head of Laboratory 11 — Functional Plant Genomics",
    slug: "miguel-angel-villalobos-lopez",
    photo: null as string | null,
    bio: "[Pending] Academic profile of Dr. Miguel Angel Villalobos López to be confirmed.",
    education: ["[Pending] Academic background to be confirmed."],
    researchLines: [
      "Functional plant genomics",
      "Plant molecular biology",
      "Abiotic stress responses",
      "Genome editing",
    ],
    links: {
      orcid: null as string | null,
      scholar: null as string | null,
      researchgate: null as string | null,
      email: null as string | null,
    },
  },
  model: "Pseudocrossidium replicatum",
  contact: {
    address: "[Pending] CIBA-IPN address to be confirmed.",
    email: "[Pending] Institutional email to be confirmed.",
    phone: "[Pending] Phone number to be confirmed.",
    mapQuery: "Centro de Investigación en Biotecnología Aplicada IPN Tlaxcala",
  },
  institutionalLinks: [
    { label: "CIBA Tlaxcala", href: "https://www.cibatlaxcala.ipn.mx/" },
    { label: "Instituto Politécnico Nacional", href: "https://www.ipn.mx/" },
  ],
} as const;

export const labData = { es: lab, en: labEn } as const;
export const useLab = () => useLocalized(labData);

export const nav = [
  { label: "Inicio", to: "/" },
  { label: "Investigación", to: "/research" },
  { label: "Pseudocrossidium", to: "/pseudocrossidium-replicatum" },
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
  { label: "Pseudocrossidium", to: "/pseudocrossidium-replicatum" },
  { label: "Projects", to: "/projects" },
  { label: "Team", to: "/team" },
  { label: "Publications", to: "/publications" },
  { label: "Technologies", to: "/technologies" },
  { label: "Students", to: "/join" },
  { label: "News", to: "/news" },
  { label: "Contact", to: "/contact" },
] as const;

export const navData = { es: nav, en: navEn } as const;
export const useNav = () => useLocalized(navData);

export const PLACEHOLDER =
  "Contenido de demostración. Sustituir por información confirmada del laboratorio.";

const PLACEHOLDER_EN =
  "Demonstration content. Replace with confirmed information from the laboratory.";

export const placeholderData = { es: PLACEHOLDER, en: PLACEHOLDER_EN } as const;
export const usePlaceholder = () => useLocalized(placeholderData);
