import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import aromaLogo from "@/assets/aroma logo.jpg";
import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";

const bannerImages = [
  { src: banner1, alt: "صابونية جايدن" },
  { src: banner2, alt: "عطر كاليدا" },
];

const SpecialOfferBanner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      api.scrollNext();
    }, 1500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-primary">
      {/* Full Width Image Slider */}
      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {bannerImages.map((image, index) => (
              <CarouselItem key={index} className="basis-full relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Slider Dots - Over Image */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors border-2 border-white/50 ${current === index ? "bg-gold" : "bg-white/30"
                }`}
              aria-label={`انتقل للصورة ${index + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Content Below Image */}
      <div className="py-4 sm:py-6 px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-primary-foreground text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
          عرض خاص على مجموعة جايدن! 🌟
        </h2>

        {/* Description */}
        <p className="text-primary-foreground/90 text-sm sm:text-base md:text-lg leading-relaxed mb-1">
          احصلي على مجموعة جايدن الكاملة بخصم{" "}
          <span className="text-gold font-bold text-lg sm:text-xl">55%</span>
          {" "}- زبدة، عطر، سكراب، صابونية
        </p>

        <p className="text-gold font-bold text-sm sm:text-base">العرض لفترة محدودة!</p>
      </div>
    </section>
  );
};

export default SpecialOfferBanner;
