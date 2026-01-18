import jaydenCollection from "@/assets/jayden-collection.jpg";
import jaydenPerfume from "@/assets/jayden-perfume.jpg";
import jaydenButter from "@/assets/jayden-butter.jpg";
import jaydenSoap from "@/assets/jayden-soap.jpg";
import jaydenScrub from "@/assets/jayden-scrub.jpg";
import { ShoppingCart, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Jayden Butter",
    nameAr: "زبدة جايدن",
    image: jaydenButter,
    originalPrice: 150,
    salePrice: 75,
  },
  {
    name: "Jayden Scrub",
    nameAr: "سكراب جايدن",
    image: jaydenScrub,
    originalPrice: 120,
    salePrice: 60,
  },
  {
    name: "Jayden Soap",
    nameAr: "صابون جايدن",
    image: jaydenSoap,
    originalPrice: 80,
    salePrice: 40,
  },
  {
    name: "Jayden Perfume",
    nameAr: "عطر جايدن",
    image: jaydenPerfume,
    originalPrice: 200,
    salePrice: 100,
  },
];

const JaydenCollection = () => {
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
          {products.map((product, index) => (
            <div
              key={index}
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
              <div className="flex items-center justify-center gap-2">
                <span className="text-muted-foreground line-through text-sm">
                  {product.originalPrice} ر.س
                </span>
                <span className="text-gold font-bold text-lg">
                  {product.salePrice} ر.س
                </span>
              </div>
            </div>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default JaydenCollection;
