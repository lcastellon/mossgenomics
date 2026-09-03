import { useLocalized } from "@/lib/i18n";

export const footerCopy = {
  es: {
    navigation: "Navegación",
    institutional: "Institucional",
    studyModel: "Modelo de estudio",
    photoPlaceholder: "Espacio para fotografía",
  },
  en: {
    navigation: "Navigation",
    institutional: "Institutional",
    studyModel: "Study model",
    photoPlaceholder: "Photo placeholder",
  },
} as const;

export const footerLinksData = {
  es: [
    { label: "Investigación", to: "/research" },
    { label: "Pseudocrossidium replicatum", to: "/pseudocrossidium-replicatum" },
    { label: "Equipo", to: "/team" },
    { label: "Publicaciones", to: "/publications" },
    { label: "Estudiantes", to: "/join" },
    { label: "Contacto", to: "/contact" },
  ],
  en: [
    { label: "Research", to: "/research" },
    { label: "Pseudocrossidium replicatum", to: "/pseudocrossidium-replicatum" },
    { label: "Team", to: "/team" },
    { label: "Publications", to: "/publications" },
    { label: "Students", to: "/join" },
    { label: "Contact", to: "/contact" },
  ],
} as const;

export const useFooterCopy = () => useLocalized(footerCopy);
export const useFooterLinks = () => useLocalized(footerLinksData);
