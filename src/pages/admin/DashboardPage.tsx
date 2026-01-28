import { useOrders } from "@/contexts/OrdersContext";
import { useLocale } from "@/contexts/LocaleContext";
import { StatsCard } from "@/components/admin/StatsCard";
import { OrdersTable } from "@/components/admin/OrdersTable";
import { ShoppingBag, TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export function DashboardPage() {
  const { t } = useLocale();
  const { state, getStats, updateOrderStatus } = useOrders();
  const stats = getStats();

  // Get recent orders (last 10)
  const recentOrders = state.orders.slice(0, 10);

  const handleStatusChange = (orderId: string, status: string) => {
    updateOrderStatus(orderId, status as any);
    toast.success(t.admin.orderStatus.statusUpdated);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {t.admin.dashboard}
        </h1>
        <p className="text-muted-foreground">
          نظرة عامة على طلباتك ومبيعاتك
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title={t.admin.stats.totalOrders}
          value={stats.totalOrders}
          icon={ShoppingBag}
        />
        <StatsCard
          title={t.admin.stats.newOrdersToday}
          value={stats.newOrdersToday}
          icon={TrendingUp}
        />
        <StatsCard
          title={t.admin.stats.totalCustomers}
          value={stats.totalCustomers}
          icon={Users}
        />
        <StatsCard
          title={t.admin.stats.totalSales}
          value={`${stats.totalSales.toFixed(3)} ${t.common.kwd}`}
          icon={DollarSign}
        />
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>{t.admin.ordersPage.recentOrders}</CardTitle>
        </CardHeader>
        <CardContent>
          <OrdersTable 
            orders={recentOrders} 
            onStatusChange={handleStatusChange}
          />
        </CardContent>
      </Card>
    </div>
  );
}
