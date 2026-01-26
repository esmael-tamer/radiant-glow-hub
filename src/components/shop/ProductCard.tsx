import { Link } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { useLocale } from "@/contexts/LocaleContext";
import { toast } from "@/components/ui/sonner";
import type { Product } from "@/data/catalog";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { locale, t, getLocalizedPath } = useLocale();
  const { addItem, openCart } = useCart();

  const productName = locale === "ar" ? product.name_ar : product.name_en;

  const formatPrice = () => {
    if (product.price_kwd === null) {
      return t.products.contactForPrice;
    }
    return `${product.price_kwd.toFixed(3)} ${t.common.kwd}`;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      productId: product.id,
      slug: product.slug,
      name_ar: product.name_ar,
      name_en: product.name_en,
      price_kwd: product.price_kwd,
      image: product.images[0] || undefined,
    });
    
    toast.success(t.cart.itemAdded, {
      description: productName,
      action: {
        label: t.cart.viewCart,
        onClick: openCart,
      },
    });
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card border-border/50">
      <Link to={getLocalizedPath(`/products/${product.slug}`)}>
        {/* Product Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          {product.images.length > 0 ? (
            <img
              src={product.images[0]}
              alt={productName}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-card">
              <span className="text-4xl font-bold text-muted-foreground/30">
                {productName.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-2 start-2 bg-gold text-white text-xs font-bold px-2 py-1 rounded">
              {t.products.featured}
            </div>
          )}

          {/* Quick Actions Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full shadow-lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full shadow-lg"
              asChild
            >
              <Link to={getLocalizedPath(`/products/${product.slug}`)}>
                <Eye className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <CardContent className="p-4">
          <h3 className="font-medium text-sm line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
            {productName}
          </h3>
          <p className="text-primary font-bold mt-2">{formatPrice()}</p>
        </CardContent>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <Button
          onClick={handleAddToCart}
          className="w-full gap-2"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4" />
          {t.products.addToCart}
        </Button>
      </div>
    </Card>
  );
}
