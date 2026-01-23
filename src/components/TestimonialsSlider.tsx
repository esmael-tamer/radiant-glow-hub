import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "سارة أحمد",
    location: "الرياض",
    rating: 5,
    text: "بعد استخدام زيت الخروع لمدة شهرين فقط، لاحظت فرقًا كبيرًا في كثافة شعري وقوته. أنصح به كل من يعاني من تساقط الشعر!",
    avatar: "س",
  },
  {
    name: "نورة محمد",
    location: "جدة",
    rating: 5,
    text: "منتج رائع! شعري أصبح أكثر لمعاناً وصحة. التوصيل كان سريعاً والتغليف ممتاز.",
    avatar: "ن",
  },
  {
    name: "فاطمة علي",
    location: "دبي",
    rating: 5,
    text: "كنت أعاني من تقصف الأطراف، وبعد استخدام الزيت لمدة 6 أسابيع، اختفت المشكلة تماماً!",
    avatar: "ف",
  },
  {
    name: "ريم عبدالله",
    location: "الدمام",
    rating: 5,
    text: "أفضل زيت خروع جربته! نقي 100% والنتائج مذهلة. سأستمر في الشراء بالتأكيد.",
    avatar: "ر",
  },
  {
    name: "هند خالد",
    location: "الكويت",
    rating: 5,
    text: "استخدمته لرموشي وحواجبي، والنتيجة فاقت توقعاتي! أصبحت أكثف وأطول بشكل ملحوظ.",
    avatar: "هـ",
  },
  {
    name: "منى سعيد",
    location: "مسقط",
    rating: 5,
    text: "جربت منتجات كثيرة لكن هذا الزيت مختلف. شعري توقف عن التساقط وبدأ ينمو من جديد!",
    avatar: "م",
  },
];

const TestimonialsSlider = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-secondary py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
            <Quote className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            ماذا تقول عميلاتنا؟
          </h2>
          <p className="text-muted-foreground text-lg">
            آراء حقيقية من عميلات سعيدات
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card rounded-2xl p-6 shadow-card h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-foreground text-base leading-relaxed flex-grow mb-4">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-primary text-primary-foreground hover:bg-primary/90" />
          <CarouselNext className="hidden md:flex -right-4 bg-primary text-primary-foreground hover:bg-primary/90" />
        </Carousel>

        {/* Mobile indicator */}
        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          ← اسحب لرؤية المزيد →
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
