import { useLanguage } from "./language-context";

export function useLocalized<T>(data: { es: T; en: T }): T {
  const { language } = useLanguage();
  return data[language];
}
