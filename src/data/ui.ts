import { useLocalized } from "@/lib/i18n";

export const ui = {
  es: {
    back: "Volver",
    readMore: "Leer más",
    seeAll: "Ver todo",
    learnMore: "Conocer más",
    contact: "Contacto",
    send: "Enviar",
    sending: "Enviando...",
    requiredField: "Campo requerido",
    invalidEmail: "Correo inválido",
    placeholder: "[Pendiente]",
    placeholderCaption: "Imagen de referencia",
  },
  en: {
    back: "Back",
    readMore: "Read more",
    seeAll: "See all",
    learnMore: "Learn more",
    contact: "Contact",
    send: "Send",
    sending: "Sending...",
    requiredField: "Required field",
    invalidEmail: "Invalid email",
    placeholder: "[Pending]",
    placeholderCaption: "Reference image",
  },
};

export const useUi = () => useLocalized(ui);
