import hairModel from "@/assets/hair-model.png";
import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="bg-secondary py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img
                src={hairModel}
                alt="نتائج استخدام زيت الخروع"
                className="relative rounded-3xl shadow-card w-full"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2 text-center md:text-right">
            <div className="flex justify-center md:justify-start gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            
            <blockquote className="text-foreground text-xl md:text-2xl font-medium leading-relaxed mb-6">
              "بعد استخدام زيت الخروع لمدة شهرين فقط، لاحظت فرقًا كبيرًا في كثافة شعري وقوته. أنصح به كل من يعاني من تساقط الشعر!"
            </blockquote>
            
            <div className="text-muted-foreground">
              <p className="font-bold text-lg">سارة أحمد</p>
              <p>عميلة سعيدة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
