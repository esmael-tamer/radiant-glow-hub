import { Button } from "@/components/ui/button";
import { MessageCircle, Truck, Shield } from "lucide-react";

const WHATSAPP_NUMBER = "96598882565";

const CTASection = () => {
  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `ابي اطلب عرض جايدن 🌟`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section className="bg-primary py-10 sm:py-12 lg:py-16 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Price */}
        <div className="mb-6 sm:mb-8">
          <p className="text-cream/70 text-base sm:text-lg mb-1 sm:mb-2">السعر الأصلي</p>
          <p className="text-cream/50 text-xl sm:text-2xl line-through mb-1 sm:mb-2">47 د.ك</p>
          <p className="text-gold text-4xl sm:text-5xl md:text-6xl font-black">
            21.15 د.ك
          </p>
          <p className="text-cream mt-2 text-base sm:text-lg">وفري 55% - عرض محدود!</p>
        </div>

        {/* CTA Button - WhatsApp */}
        <Button
          size="lg"
          onClick={handleWhatsAppOrder}
          className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-6 sm:py-8 rounded-xl sm:rounded-2xl shadow-glow animate-pulse-soft transition-all duration-300 hover:scale-105 min-h-[56px] focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 flex-shrink-0" />
          <span>اطلبي الآن عبر واتساب</span>
        </Button>

        {/* Trust Badges */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col items-center text-cream/80">
            <Truck className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm">توصيل سريع</span>
          </div>
          <div className="flex flex-col items-center text-cream/80">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm">منتجات طبيعية 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
