import { Droplets, Sparkles, Shield, Leaf, Heart, Star } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Sparkles,
    title: "بشرة ناعمة ومشرقة من أول استخدام",
  },
  {
    icon: Droplets,
    title: "تركيبة طبيعية 100% بدون مواد كيميائية",
  },
  {
    icon: Heart,
    title: "ترطيب عميق وتغذية فائقة للبشرة",
  },
  {
    icon: Shield,
    title: "حماية البشرة من الجفاف والتشقق",
  },
  {
    icon: Leaf,
    title: "مستخلص من أجود الزيوت والمكونات الطبيعية",
  },
  {
    icon: Star,
    title: "عطر فاخر يدوم طوال اليوم",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-cream py-10 sm:py-12 lg:py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 lg:mb-10 px-2">
          لماذا تختاري مجموعة جايدن؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
