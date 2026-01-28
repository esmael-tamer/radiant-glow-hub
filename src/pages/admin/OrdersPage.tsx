import { useState, useMemo } from "react";
import { useOrders } from "@/contexts/OrdersContext";
import { useLocale } from "@/contexts/LocaleContext";
import { OrdersTable } from "@/components/admin/OrdersTable";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OrderStatus } from "@/types/order";
import { toast } from "sonner";
import { siteConfig } from "@/config/site";

export function OrdersPage() {
  const { t, locale } = useLocale();
  const { state, updateOrderStatus } = useOrders();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [areaFilter, setAreaFilter] = useState<string>("all");

  const handleStatusChange = (orderId: string, status: string) => {
    updateOrderStatus(orderId, status as OrderStatus);
    toast.success(t.admin.orderStatus.statusUpdated);
  };

  // Filter and search orders
  const filteredOrders = useMemo(() => {
    let filtered = [...state.orders];

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((order) => order.status === statusFilter);
    }

    // Apply area filter
    if (areaFilter !== "all") {
      filtered = filtered.filter((order) => order.area === areaFilter);
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.customerName.toLowerCase().includes(query) ||
          order.phone.toLowerCase().includes(query) ||
          order.id.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [state.orders, statusFilter, areaFilter, searchQuery]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {t.admin.ordersPage.title}
        </h1>
        <p className="text-muted-foreground">
          إدارة جميع طلبات العملاء
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <Input
            placeholder={t.admin.ordersPage.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>

        {/* Status Filter */}
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder={t.admin.ordersPage.filterByStatus} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t.admin.ordersPage.allStatuses}</SelectItem>
            <SelectItem value="new">{t.admin.orderStatus.new}</SelectItem>
            <SelectItem value="processing">
              {t.admin.orderStatus.processing}
            </SelectItem>
            <SelectItem value="delivered">
              {t.admin.orderStatus.delivered}
            </SelectItem>
            <SelectItem value="cancelled">
              {t.admin.orderStatus.cancelled}
            </SelectItem>
          </SelectContent>
        </Select>

        {/* Area Filter */}
        <Select value={areaFilter} onValueChange={setAreaFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder={t.admin.ordersPage.filterByArea} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">{t.admin.ordersPage.allAreas}</SelectItem>
            {siteConfig.governorates.map((gov) => (
              <SelectItem key={gov.id} value={gov.id}>
                {locale === "ar" ? gov.name_ar : gov.name_en}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {filteredOrders.length} {t.common.items}
      </div>

      {/* Orders Table */}
      <OrdersTable orders={filteredOrders} onStatusChange={handleStatusChange} />
    </div>
  );
}
