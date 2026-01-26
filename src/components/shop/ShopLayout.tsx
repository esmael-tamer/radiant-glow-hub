import { ReactNode, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { ShopHeader } from "./ShopHeader";
import { CartDrawer } from "./CartDrawer";
import { CartProvider } from "@/store/cart";
import type { Locale } from "@/i18n";

interface ShopLayoutProps {
  children: ReactNode;
}

function ShopLayoutInner({ children }: ShopLayoutProps) {
  const params = useParams<{ lang?: string }>();
  const locale = (params.lang === "en" ? "en" : "ar") as Locale;
  const isRTL = locale === "ar";

  // Update HTML direction based on locale
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    
    return () => {
      // Reset to default on unmount
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    };
  }, [locale, isRTL]);

  return (
    <LocaleProvider locale={locale}>
      <div className={`min-h-screen flex flex-col ${isRTL ? "font-arabic" : ""}`}>
        <ShopHeader />
        <main className="flex-1">{children}</main>
        <CartDrawer />
      </div>
    </LocaleProvider>
  );
}

export function ShopLayout({ children }: ShopLayoutProps) {
  return (
    <CartProvider>
      <ShopLayoutInner>{children}</ShopLayoutInner>
    </CartProvider>
  );
}
