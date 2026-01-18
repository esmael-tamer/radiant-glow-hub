import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-cream rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <div className="flex-1 text-right">
          <h3 className="text-foreground font-bold text-lg">{title}</h3>
          {description && (
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
