import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import video1 from '@/assets/WhatsApp Video 2026-01-21 at 9.08.47 PM.mp4';
import video2 from '@/assets/WhatsApp Video 2026-01-21 at 9.11.06 PM.mp4';
import video3 from '@/assets/WhatsApp Video 2026-01-21 at 9.11.18 PM.mp4';
import video4 from '@/assets/WhatsApp Video 2026-01-21 at 9.11.20 PM.mp4';

const videoTestimonials = [
  {
    id: 1,
    name: "امل العوضي",
    videoUrl: video1,
    review: "مجموعة جايدن رهيبة! بشرتي صارت ناعمة ومشرقة 🌟"
  },
  {
    id: 2,
    name: "فوز الفهد",
    videoUrl: video2,
    review: "العطر خيالي والزبدة ترطيب مكثف يدوم طول اليوم 💕"
  },
  {
    id: 3,
    name: "الجازي",
    videoUrl: video3,
    review: "السكراب والصابونية نظفوا بشرتي بعمق - أنصح فيهم! ✨"
  },
  {
    id: 4,
    name: "حليمه بولند",
    videoUrl: video4,
    review: "المجموعة الكاملة غيرت روتين العناية ببشرتي 💫"
  }
];

const VideoTestimonials = () => {
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
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-10 sm:py-12 lg:py-16 bg-cream-light" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brown-dark mb-2 sm:mb-4">
            شاهدي تجارب عملائنا
          </h2>
          <p className="text-brown text-base sm:text-lg">
            آراء حقيقية من عملاء حقيقيين
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            direction: "rtl",
          }}
          className="w-full"
        >
          <CarouselContent className="-mr-2 sm:-mr-4">
            {videoTestimonials.map((video) => (
              <CarouselItem key={video.id} className="pr-2 sm:pr-4 basis-[85%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 sm:transform sm:hover:-translate-y-2">
                  {/* Video */}
                  <div className="relative aspect-[9/16] sm:aspect-[4/3] overflow-hidden">
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>

                  {/* Info */}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-brown-dark text-base sm:text-lg mb-1">{video.name}</h3>
                    <p className="text-brown text-xs sm:text-sm line-clamp-2">{video.review}</p>
                  </div>

                  {/* Gold accent */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className="bg-gold text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium">
                      تجربة حقيقية
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Progress Bar */}
        <div className="flex justify-center gap-1 mt-4 sm:mt-6 max-w-xs mx-auto">
          {videoTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="flex-1 h-1 rounded-full bg-gold/20 overflow-hidden focus:outline-none"
              aria-label={`انتقل للمقطع ${index + 1}`}
            >
              <div
                className={`h-full rounded-full transition-all duration-300 ${current === index ? "bg-gold w-full" : "bg-transparent w-0"
                  }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
