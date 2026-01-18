import { Gift } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const SpecialOfferBanner = () => {
  return (
    <section className="bg-primary py-12 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Gift Icon */}
        <div className="mx-auto mb-6 w-20 h-20 bg-cream rounded-2xl flex items-center justify-center shadow-card animate-bounce-slow">
          <Gift className="w-10 h-10 text-primary" />
        </div>
        
        {/* Main Heading */}
        <h2 className="text-primary-foreground text-3xl md:text-4xl font-bold mb-4">
          انتظر !! قبل الانتهاء من طلبك!!
        </h2>
        
        {/* Description */}
        <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-2">
          نود أن نقدم لك عرضًا خاصًا ؛ استفد من خصم{" "}
          <span className="text-gold font-bold text-2xl">45%</span>{" "}
          على هذا المنتج الفريد والجديد.
        </p>

        <p className="text-gold font-bold text-lg mb-2">العرض ينتهي خلال:</p>
        
        {/* Countdown Timer */}
        <CountdownTimer />
      </div>
    </section>
  );
};

export default SpecialOfferBanner;
