import { Badge } from "@/components/ui/badge";
import { OrderStatus } from "@/types/order";
import { cn } from "@/lib/utils";
import { useLocale } from "@/contexts/LocaleContext";

interface StatusBadgeProps {
  status: OrderStatus;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const { t } = useLocale();
  
  const statusConfig = {
    new: {
      label: t.admin.orderStatus.new,
      className: "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300",
    },
    processing: {
      label: t.admin.orderStatus.processing,
      className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300",
    },
    delivered: {
      label: t.admin.orderStatus.delivered,
      className: "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300",
    },
    cancelled: {
      label: t.admin.orderStatus.cancelled,
      className: "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300",
    },
  };

  const config = statusConfig[status];

  return (
    <Badge className={cn(config.className, className)}>
      {config.label}
    </Badge>
  );
}
