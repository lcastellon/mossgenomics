import { useLocalized } from "@/lib/i18n";

type FooterCopy = {
  navigation: string;
  institutional: string;
  studyModel: string;
  photoPlaceholder: string;
};

type FooterLink = {
  label: string;
  to: string;
};

export const footerCopy: { es: FooterCopy; en: FooterCopy } = {
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
};

export const footerLinksData: { es: FooterLink[]; en: FooterLink[] } = {
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
};

export const useFooterCopy = () => useLocalized(footerCopy);
export const useFooterLinks = () => useLocalized(footerLinksData);
