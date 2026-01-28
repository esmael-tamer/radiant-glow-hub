import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-11 h-11 sm:w-14 sm:h-14 bg-cream rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 border border-border">
          <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
        </div>
        <div className="flex-1 min-w-0 text-right">
          <h3 className="text-foreground font-bold text-base sm:text-lg leading-snug">{title}</h3>
          {description && (
            <p className="text-muted-foreground text-xs sm:text-sm mt-1">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
