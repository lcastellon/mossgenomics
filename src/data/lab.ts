export const lab = {
  number: "Laboratorio 11",
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

export const PLACEHOLDER =
  "Contenido de demostración. Sustituir por información confirmada del laboratorio.";
