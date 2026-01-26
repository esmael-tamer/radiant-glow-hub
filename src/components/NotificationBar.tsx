import { Package, X } from "lucide-react";
import { useState } from "react";

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <Package className="w-5 h-5 text-accent-foreground" />
        <span className="text-accent-foreground font-medium text-lg">
          شحن مجاني لجميع الطلبات فوق 200 ريال
        </span>
        <button
          onClick={() => setIsVisible(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsVisible(false);
            }
          }}
          className="absolute ltr:left-4 rtl:right-4 top-1/2 -translate-y-1/2 text-accent-foreground hover:text-accent-foreground/80 transition-colors"
          aria-label="إغلاق"
          tabIndex={0}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default NotificationBar;
