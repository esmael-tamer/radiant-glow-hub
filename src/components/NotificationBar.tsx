import { Package } from "lucide-react";

const NotificationBar = () => {
  return (
    <div className="bg-accent py-3 px-4">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <span className="text-2xl">😍</span>
        <span className="text-accent-foreground font-medium text-lg">
          لقد تم التوصل بطلبك
        </span>
        <span className="text-2xl">😍</span>
      </div>
    </div>
  );
};

export default NotificationBar;
