import { Droplets, Sparkles, Shield, Leaf, Users, Star } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Users,
    title: "مثالي لكل أنواع الشعر ومناسب لكل الفئات",
  },
  {
    icon: Droplets,
    title: "تركيبة طبيعية 100% بدون مواد كيميائية",
  },
  {
    icon: Sparkles,
    title: "نتائج مضمونة خلال أسابيع قليلة",
  },
  {
    icon: Shield,
    title: "حماية الشعر من التلف والتقصف",
  },
  {
    icon: Leaf,
    title: "مستخلص من أجود أنواع زيت الخروع",
  },
  {
    icon: Star,
    title: "آلاف العملاء الراضين عن المنتج",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-cream py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-foreground text-3xl md:text-4xl font-bold text-center mb-10">
          لماذا تختار زيت الخروع الفعال؟
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
