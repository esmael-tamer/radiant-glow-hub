import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/store/cart";
import { useLocale } from "@/contexts/LocaleContext";

export function CartPage() {
  const { locale, t, isRTL, getLocalizedPath } = useLocale();
  const {
    state,
    removeItem,
    incrementQty,
    decrementQty,
    clearCart,
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

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  if (state.items.length === 0) {
    return (
      <div className="container px-4 py-16 text-center">
        <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground mb-6" />
        <h1 className="text-2xl font-bold mb-4">{t.cart.empty}</h1>
        <Button asChild>
          <Link to={getLocalizedPath("/products")}>
            {t.cart.continueShopping}
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-6 gap-2">
        <Link to={getLocalizedPath("/products")}>
          <BackArrow className="h-4 w-4" />
          {t.cart.continueShopping}
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-8">{t.cart.title}</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <Card key={item.productId}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={getItemName(item)}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <ShoppingBag className="h-8 w-8 text-muted-foreground" />
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{getItemName(item)}</h3>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.productId)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-primary font-bold mt-1">
                      {formatPrice(item.price_kwd)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => decrementQty(item.productId)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">
                        {item.qty}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => incrementQty(item.productId)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Clear Cart */}
          <Button
            variant="outline"
            className="text-destructive hover:text-destructive"
            onClick={clearCart}
          >
            <Trash2 className="h-4 w-4 me-2" />
            {t.cart.clearCart}
          </Button>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-24">
            <CardHeader>
              <CardTitle>{t.checkout.orderSummary}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">{t.cart.subtotal}</span>
                <span className="font-medium">
                  {hasContactItems
                    ? t.products.contactForPrice
                    : `${subtotal.toFixed(3)} ${t.common.kwd}`}
                </span>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>{t.cart.total}</span>
                <span className="text-primary">
                  {hasContactItems
                    ? t.products.contactForPrice
                    : `${subtotal.toFixed(3)} ${t.common.kwd}`}
                </span>
              </div>

              <Button asChild className="w-full" size="lg">
                <Link to={getLocalizedPath("/checkout")}>
                  {t.cart.proceedToCheckout}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
