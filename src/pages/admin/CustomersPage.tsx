import { useState, useMemo } from "react";
import { useOrders } from "@/contexts/OrdersContext";
import { useLocale } from "@/contexts/LocaleContext";
import { Customer } from "@/types/customer";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

export function CustomersPage() {
  const { t, locale } = useLocale();
  const { state } = useOrders();
  const [searchQuery, setSearchQuery] = useState("");

  // Aggregate customer data from orders
  const customers = useMemo(() => {
    const customerMap = new Map<string, Customer>();

    state.orders.forEach((order) => {
      const existing = customerMap.get(order.phone);
      const orderTotal = order.status !== 'cancelled' && order.total !== null ? order.total : 0;

      if (existing) {
        existing.ordersCount += 1;
        existing.totalSpent += orderTotal;
        const existingDate = new Date(existing.lastOrderDate);
        const currentDate = new Date(order.createdAt);
        if (currentDate > existingDate) {
          existing.lastOrderDate = order.createdAt;
        }
      } else {
        customerMap.set(order.phone, {
          phone: order.phone,
          name: order.customerName,
          email: order.email,
          area: order.area,
          areaName: order.areaName,
          ordersCount: 1,
          totalSpent: orderTotal,
          lastOrderDate: order.createdAt,
        });
      }
    });

    return Array.from(customerMap.values());
  }, [state.orders]);

  // Filter customers
  const filteredCustomers = useMemo(() => {
    if (!searchQuery.trim()) {
      return customers;
    }

    const query = searchQuery.toLowerCase();
    return customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(query) ||
        customer.phone.toLowerCase().includes(query)
    );
  }, [customers, searchQuery]);

  const formatPrice = (price: number) => {
    return `${price.toFixed(3)} ${t.common.kwd}`;
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, locale === "ar" ? "yyyy/MM/dd" : "MM/dd/yyyy");
    } catch {
      return dateString;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          {t.admin.customersPage.title}
        </h1>
        <p className="text-muted-foreground">
          قائمة بجميع العملاء وإحصائياتهم
        </p>
      </div>

      {/* Search */}
      <div className="flex gap-4">
        <Input
          placeholder={t.admin.customersPage.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {filteredCustomers.length} {t.admin.customersPage.title}
      </div>

      {/* Customers Table */}
      {filteredCustomers.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          {t.admin.customersPage.noCustomers}
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t.admin.customersPage.name}</TableHead>
                <TableHead>{t.admin.customersPage.phone}</TableHead>
                <TableHead>{t.admin.customersPage.email}</TableHead>
                <TableHead>{t.admin.customersPage.area}</TableHead>
                <TableHead>{t.admin.customersPage.ordersCount}</TableHead>
                <TableHead>{t.admin.customersPage.totalSpent}</TableHead>
                <TableHead>{t.admin.customersPage.lastOrder}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.phone}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell dir="ltr" className="text-start">
                    {customer.phone}
                  </TableCell>
                  <TableCell>{customer.email || "-"}</TableCell>
                  <TableCell>{customer.areaName}</TableCell>
                  <TableCell>{customer.ordersCount}</TableCell>
                  <TableCell>{formatPrice(customer.totalSpent)}</TableCell>
                  <TableCell>{formatDate(customer.lastOrderDate)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
