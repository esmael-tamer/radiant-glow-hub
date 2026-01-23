import { useState } from "react";
import jaydenCollection from "@/assets/jayden-collection.jpg";
import jaydenPerfume from "@/assets/jayden-perfume.jpg";
import jaydenButter from "@/assets/jayden-butter.jpg";
import jaydenSoap from "@/assets/jayden-soap.jpg";
import jaydenScrub from "@/assets/jayden-scrub.jpg";
import { ShoppingCart, Sparkles, Check, Gift, Percent, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Jayden Butter",
    nameAr: "زبدة جايدن",
    image: jaydenButter,
    originalPrice: 150,
    salePrice: 75,
  },
  {
    id: 2,
    name: "Jayden Scrub",
    nameAr: "سكراب جايدن",
    image: jaydenScrub,
    originalPrice: 120,
    salePrice: 60,
  },
  {
    id: 3,
    name: "Jayden Soap",
    nameAr: "صابون جايدن",
    image: jaydenSoap,
    originalPrice: 80,
    salePrice: 40,
  },
  {
    id: 4,
    name: "Jayden Perfume",
    nameAr: "عطر جايدن",
    image: jaydenPerfume,
    originalPrice: 200,
    salePrice: 100,
  },
];

interface CartItem {
  id: number;
  nameAr: string;
  salePrice: number;
  quantity: number;
}

const JaydenCollection = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const addToCart = (product: typeof products[0]) => {
    const existingItem = cart.find((item) => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { id: product.id, nameAr: product.nameAr, salePrice: product.salePrice, quantity: 1 }]);
    }

    // Show discount modal when adding more products
    if (cart.length >= 1 && !appliedDiscount) {
      setShowDiscountModal(true);
    }
  };

  const applyDiscount = () => {
    setAppliedDiscount(15); // 15% extra discount
    setShowDiscountModal(false);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.salePrice * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const discountAmount = (cartTotal * appliedDiscount) / 100;
  const finalTotal = cartTotal - discountAmount;

  return (
    <section className="bg-gradient-to-b from-cream to-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>الأكثر مبيعاً</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            مجموعة جايدن الفاخرة
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            احصلي على المجموعة الكاملة بخصم
            <span className="text-gold font-bold text-2xl mx-2">50%</span>
          </p>
          
          {/* Discount Banner */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-6 py-3 rounded-full text-sm font-medium animate-pulse">
            <Gift className="w-5 h-5" />
            <span>أضيفي منتج آخر واحصلي على خصم إضافي 15%!</span>
          </div>
        </div>

        {/* Collection Image */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl transform rotate-1"></div>
          <img
            src={jaydenCollection}
            alt="مجموعة جايدن الكاملة"
            className="relative w-full max-w-2xl mx-auto rounded-3xl shadow-card"
          />
          <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg animate-pulse">
            خصم 50%
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-card rounded-2xl p-4 shadow-card hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={product.image}
                  alt={product.nameAr}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-bold text-foreground text-center mb-2">
                {product.nameAr}
              </h3>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-muted-foreground line-through text-sm">
                  {product.originalPrice} ر.س
                </span>
                <span className="text-gold font-bold text-lg">
                  {product.salePrice} ر.س
                </span>
              </div>
              <Button
                onClick={() => addToCart(product)}
                variant="outline"
                size="sm"
                className="w-full border-gold text-gold hover:bg-gold hover:text-white transition-colors"
              >
                <ShoppingCart className="w-4 h-4 ml-2" />
                أضف للسلة
              </Button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        {cartCount > 0 && (
          <div className="bg-card border-2 border-gold/30 rounded-2xl p-6 mb-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-foreground text-lg flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-gold" />
                سلة التسوق ({cartCount} منتج)
              </h3>
              {appliedDiscount > 0 && (
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Percent className="w-4 h-4" />
                  خصم {appliedDiscount}% مطبق
                </span>
              )}
            </div>
            <div className="space-y-2 mb-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-foreground">{item.nameAr} × {item.quantity}</span>
                  <span className="text-gold font-medium">{item.salePrice * item.quantity} ر.س</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4">
              {appliedDiscount > 0 && (
                <div className="flex justify-between text-sm text-green-600 mb-2">
                  <span>خصم {appliedDiscount}%</span>
                  <span>-{discountAmount.toFixed(0)} ر.س</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-lg">
                <span>المجموع</span>
                <span className="text-gold">{finalTotal.toFixed(0)} ر.س</span>
              </div>
            </div>
          </div>
        )}

        {/* Bundle Offer */}
        <div className="bg-primary rounded-3xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            اشتري المجموعة الكاملة
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {["4 منتجات فاخرة", "توصيل مجاني", "ضمان 30 يوم"].map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-primary-foreground/90">
                <Check className="w-5 h-5 text-gold" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-primary-foreground/70 line-through text-2xl">
              550 ر.س
            </span>
            <span className="text-gold font-bold text-4xl">
              275 ر.س
            </span>
          </div>

          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-primary font-bold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <ShoppingCart className="w-5 h-5 ml-2" />
            اطلب المجموعة الآن
          </Button>
        </div>

        {/* Discount Modal */}
        {showDiscountModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowDiscountModal(false)}>
            <div 
              className="bg-white rounded-3xl p-8 max-w-md w-full text-center animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDiscountModal(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                🎉 مبروك! حصلتي على خصم إضافي
              </h3>
              <p className="text-muted-foreground mb-6">
                بما أنك أضفتي أكثر من منتج، تستحقين خصم إضافي <span className="text-gold font-bold text-xl">15%</span> على طلبك!
              </p>
              
              <Button
                onClick={applyDiscount}
                size="lg"
                className="w-full bg-gold hover:bg-gold/90 text-white font-bold text-lg py-6 rounded-xl"
              >
                <Percent className="w-5 h-5 ml-2" />
                تطبيق الخصم الآن
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JaydenCollection;
