import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { useLocale } from "@/contexts/LocaleContext";

export function ShopHeader() {
  const { locale, t, isRTL, switchLocale, getLocalizedPath } = useLocale();
  const { openCart, getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to={getLocalizedPath("/products")} className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">{t.brandName}</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.home}
          </Link>
          <Link
            to={getLocalizedPath("/products")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.nav.products}
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Switcher */}
          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              onClick={() => switchLocale("ar")}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                locale === "ar"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              AR
            </button>
            <button
              onClick={() => switchLocale("en")}
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${
                locale === "en"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              }`}
            >
              EN
            </button>
          </div>

          {/* Cart Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={openCart}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
            <span className="sr-only">{t.nav.cart}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
