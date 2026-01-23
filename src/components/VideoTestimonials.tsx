import { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const videoTestimonials = [
  {
    id: 1,
    name: "سارة أحمد",
    thumbnail: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "شعري تغير تماماً بعد استخدام زيت الخروع!"
  },
  {
    id: 2,
    name: "نورة محمد",
    thumbnail: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "أفضل منتج استخدمته لتطويل الشعر"
  },
  {
    id: 3,
    name: "هند العتيبي",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "نتائج مذهلة خلال شهر واحد فقط!"
  },
  {
    id: 4,
    name: "ريم الشمري",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "لاحظت فرق كبير في كثافة شعري"
  },
  {
    id: 5,
    name: "منى الحربي",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "منتجات رائعة وطبيعية 100%"
  },
  {
    id: 6,
    name: "لمى العنزي",
    thumbnail: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=300&fit=crop",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    review: "أنصح الجميع بتجربة هذه المجموعة"
  }
];

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-16 bg-cream-light" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brown-dark mb-4">
            شاهدي تجارب عملائنا
          </h2>
          <p className="text-brown text-lg">
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
          <CarouselContent className="-mr-4">
            {videoTestimonials.map((video) => (
              <CarouselItem key={video.id} className="pr-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Thumbnail */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-brown-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={() => setActiveVideo(video.videoUrl)}
                        className="w-16 h-16 bg-gold rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:bg-gold-dark"
                      >
                        <Play className="w-8 h-8 text-white fill-white mr-[-4px]" />
                      </button>
                    </div>

                    {/* Always visible play icon */}
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 text-brown-dark fill-brown-dark mr-[-2px]" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-brown-dark text-lg mb-1">{video.name}</h3>
                    <p className="text-brown text-sm">{video.review}</p>
                  </div>

                  {/* Gold accent */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-white text-xs px-3 py-1 rounded-full font-medium">
                      تجربة حقيقية
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Slider Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {videoTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="w-3 h-3 rounded-full bg-gold/30 hover:bg-gold transition-colors"
            />
          ))}
        </div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-cream transition-colors z-10"
              >
                <X className="w-5 h-5 text-brown-dark" />
              </button>
              <iframe
                src={`${activeVideo}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;
