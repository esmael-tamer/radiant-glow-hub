import React, { createContext, useContext, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Locale, getTranslations, switchLocalePath, type Translations } from "@/i18n";

interface LocaleContextType {
  locale: Locale;
  t: Translations;
  isRTL: boolean;
  switchLocale: (newLocale: Locale) => void;
  getLocalizedPath: (path: string) => string;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const location = useLocation();
  const navigate = useNavigate();
  
  const t = getTranslations(locale);
  const isRTL = locale === "ar";

  const switchLocale = (newLocale: Locale) => {
    const newPath = switchLocalePath(location.pathname, newLocale);
    navigate(newPath + location.search);
  };

  const getLocalizedPath = (path: string) => {
    // If path already has locale prefix, return as is
    if (path.startsWith("/ar") || path.startsWith("/en")) {
      return path;
    }
    // Add current locale prefix
    return `/${locale}${path.startsWith("/") ? path : `/${path}`}`;
  };

  return (
    <LocaleContext.Provider
      value={{
        locale,
        t,
        isRTL,
        switchLocale,
        getLocalizedPath,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
