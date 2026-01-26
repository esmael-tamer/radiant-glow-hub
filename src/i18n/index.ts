import { ar, type Translations } from "./ar";
import { en } from "./en";

export type Locale = "ar" | "en";

export const translations: Record<Locale, Translations> = {
  ar,
  en,
};

export const getTranslations = (locale: Locale): Translations => {
  return translations[locale] || translations.ar;
};

export const getLocaleFromPath = (pathname: string): Locale => {
  if (pathname.startsWith("/en")) return "en";
  if (pathname.startsWith("/ar")) return "ar";
  return "ar"; // Default to Arabic
};

export const switchLocalePath = (pathname: string, newLocale: Locale): string => {
  // Remove current locale prefix
  const pathWithoutLocale = pathname.replace(/^\/(ar|en)/, "");
  return `/${newLocale}${pathWithoutLocale || ""}`;
};

export { ar, en };
export type { Translations };
