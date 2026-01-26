import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/shop/ProductCard";
import { useCart } from "@/store/cart";
import { useLocale } from "@/contexts/LocaleContext";
import { toast } from "@/components/ui/sonner";
import { getProductBySlug, getProductsByCategory, type Product } from "@/data/catalog";

export function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { locale, t, isRTL, getLocalizedPath } = useLocale();
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">{t.common.error}</h1>
        <Button asChild>
          <Link to={getLocalizedPath("/products")}>{t.products.allProducts}</Link>
        </Button>
      </div>
    );
  }

  const productName = locale === "ar" ? product.name_ar : product.name_en;
  const productDescription =
    locale === "ar" ? product.description_ar : product.description_en;

  const formatPrice = () => {
    if (product.price_kwd === null) {
      return t.products.contactForPrice;
    }
    return `${product.price_kwd.toFixed(3)} ${t.common.kwd}`;
  };

  const relatedProducts = getProductsByCategory(product.category_id)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      name_ar: product.name_ar,
      name_en: product.name_en,
      price_kwd: product.price_kwd,
      image: product.images[0] || undefined,
      qty: quantity,
    });

    toast.success(t.cart.itemAdded, {
      description: `${productName} (${quantity})`,
      action: {
        label: t.cart.viewCart,
        onClick: openCart,
      },
    });
  };

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="container px-4 py-8">
      {/* Back Button */}
      <Button
        variant="ghost"
        asChild
        className="mb-6 gap-2"
      >
        <Link to={getLocalizedPath("/products")}>
          <BackArrow className="h-4 w-4" />
          {t.common.back}
        </Link>
      </Button>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="aspect-square bg-muted rounded-lg overflow-hidden">
          {product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt={productName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-card">
              <span className="text-6xl font-bold text-muted-foreground/30">
                {productName.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          {/* Featured Badge */}
          {product.featured && (
            <span className="inline-block w-fit bg-gold text-white text-xs font-bold px-3 py-1 rounded mb-4">
              {t.products.featured}
            </span>
          )}

          <h1 className="text-2xl md:text-3xl font-bold mb-4">{productName}</h1>

          <p className="text-2xl font-bold text-primary mb-6">{formatPrice()}</p>

          {productDescription && (
            <p className="text-muted-foreground mb-6">{productDescription}</p>
          )}

          <Separator className="my-6" />

          {/* Quantity Selector */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              {t.cart.quantity}
            </label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium text-lg">
                {quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            size="lg"
            className="w-full md:w-auto gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-5 w-5" />
            {t.products.addToCart}
          </Button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">{t.products.relatedProducts}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
