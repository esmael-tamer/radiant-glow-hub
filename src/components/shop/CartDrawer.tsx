import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/store/cart";
import { useLocale } from "@/contexts/LocaleContext";

export function CartDrawer() {
  const { locale, t, isRTL, getLocalizedPath } = useLocale();
  const {
    state,
    closeCart,
    removeItem,
    incrementQty,
    decrementQty,
    getSubtotal,
    hasContactForPriceItems,
  } = useCart();

  const subtotal = getSubtotal();
  const hasContactItems = hasContactForPriceItems();

  const getItemName = (item: { name_ar: string; name_en: string }) => {
    return locale === "ar" ? item.name_ar : item.name_en;
  };

  const formatPrice = (price: number | null) => {
    if (price === null) {
      return t.products.contactForPrice;
    }
    return `${price.toFixed(3)} ${t.common.kwd}`;
  };

  return (
    <Sheet open={state.isOpen} onOpenChange={closeCart}>
      <SheetContent
        side={isRTL ? "left" : "right"}
        className="flex flex-col w-full sm:max-w-lg"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            {t.cart.title}
          </SheetTitle>
        </SheetHeader>

        {state.items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <p className="text-muted-foreground">{t.cart.empty}</p>
            <Button variant="outline" onClick={closeCart} asChild>
              <Link to={getLocalizedPath("/products")}>
                {t.cart.continueShopping}
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-4 py-4">
                {state.items.map((item) => (
                  <div
                    key={item.productId}
                    className="flex gap-4 p-3 rounded-lg bg-muted/50"
                  >
                    {/* Product Image Placeholder */}
                    <div className="w-16 h-16 rounded-md bg-muted flex items-center justify-center shrink-0">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={getItemName(item)}
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <ShoppingBag className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2">
                        {getItemName(item)}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {formatPrice(item.price_kwd)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => decrementQty(item.productId)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.qty}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => incrementQty(item.productId)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive hover:text-destructive ms-auto"
                          onClick={() => removeItem(item.productId)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="font-medium">{t.cart.subtotal}</span>
                <span className="font-bold">
                  {hasContactItems
                    ? t.products.contactForPrice
                    : `${subtotal.toFixed(3)} ${t.common.kwd}`}
                </span>
              </div>

              <Separator />

              {/* Action Buttons */}
              <div className="grid gap-2">
                <Button asChild onClick={closeCart}>
                  <Link to={getLocalizedPath("/checkout")}>
                    {t.cart.proceedToCheckout}
                  </Link>
                </Button>
                <Button variant="outline" asChild onClick={closeCart}>
                  <Link to={getLocalizedPath("/cart")}>{t.cart.viewCart}</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
