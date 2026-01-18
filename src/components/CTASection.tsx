import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, CreditCard, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Price */}
        <div className="mb-8">
          <p className="text-cream/70 text-lg mb-2">السعر الأصلي</p>
          <p className="text-cream/50 text-2xl line-through mb-2">399 درهم</p>
          <p className="text-gold text-5xl md:text-6xl font-black text-shadow-glow">
            219 درهم
          </p>
          <p className="text-cream mt-2 text-lg">وفر 45% - عرض محدود!</p>
        </div>
        
        {/* CTA Button */}
        <Button 
          size="lg" 
          className="bg-gold hover:bg-gold-light text-accent font-bold text-xl px-12 py-8 rounded-2xl shadow-glow animate-pulse-soft transition-all duration-300 hover:scale-105"
        >
          <ShoppingCart className="w-6 h-6 ml-3" />
          اطلب الآن
        </Button>
        
        {/* Trust Badges */}
        <div className="mt-10 grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-cream/80">
            <Truck className="w-8 h-8 mb-2" />
            <span className="text-sm">توصيل سريع</span>
          </div>
          <div className="flex flex-col items-center text-cream/80">
            <CreditCard className="w-8 h-8 mb-2" />
            <span className="text-sm">دفع عند الاستلام</span>
          </div>
          <div className="flex flex-col items-center text-cream/80">
            <Clock className="w-8 h-8 mb-2" />
            <span className="text-sm">ضمان 30 يوم</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
