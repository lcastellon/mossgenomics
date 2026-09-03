import { useLanguage, type Language } from "./language-context";

export function useLocalized<ES, EN>(data: { es: ES; en: EN }): ES | EN {
  const { language } = useLanguage();
  return data[language as Language] as ES | EN;
}
