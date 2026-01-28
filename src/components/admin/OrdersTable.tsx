import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StatusBadge } from "./StatusBadge";
import { Order, OrderStatus } from "@/types/order";
import { useLocale } from "@/contexts/LocaleContext";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

interface OrdersTableProps {
  orders: Order[];
  onStatusChange?: (orderId: string, status: OrderStatus) => void;
}

export function OrdersTable({ orders, onStatusChange }: OrdersTableProps) {
  const { t, locale } = useLocale();

  const formatPrice = (price: number | null) => {
    if (price === null) {
      return t.products.contactForPrice;
    }
    return `${price.toFixed(3)} ${t.common.kwd}`;
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return format(date, locale === "ar" ? "yyyy/MM/dd HH:mm" : "MM/dd/yyyy HH:mm");
    } catch {
      return dateString;
    }
  };

  const getItemName = (item: { name_ar: string; name_en: string }) => {
    return locale === "ar" ? item.name_ar : item.name_en;
  };

  if (orders.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        {t.admin.ordersPage.noOrders}
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t.admin.ordersPage.orderNumber}</TableHead>
            <TableHead>{t.admin.ordersPage.customerName}</TableHead>
            <TableHead>{t.admin.ordersPage.phone}</TableHead>
            <TableHead>{t.admin.ordersPage.area}</TableHead>
            <TableHead>{t.admin.ordersPage.amount}</TableHead>
            <TableHead>{t.admin.ordersPage.status}</TableHead>
            <TableHead>{t.admin.ordersPage.date}</TableHead>
            <TableHead>{t.admin.ordersPage.actions}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell dir="ltr" className="text-start">{order.phone}</TableCell>
              <TableCell>{order.areaName}</TableCell>
              <TableCell>{formatPrice(order.total)}</TableCell>
              <TableCell>
                {onStatusChange ? (
                  <Select
                    value={order.status}
                    onValueChange={(value) =>
                      onStatusChange(order.id, value as OrderStatus)
                    }
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">
                        <span className="flex items-center gap-2">
                          {t.admin.orderStatus.new}
                        </span>
                      </SelectItem>
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
                ) : (
                  <StatusBadge status={order.status} />
                )}
              </TableCell>
              <TableCell>{formatDate(order.createdAt)}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {t.admin.ordersPage.viewDetails} - {order.id}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      {/* Customer Info */}
                      <div>
                        <h3 className="font-semibold mb-2">
                          {t.checkout.customerInfo}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">
                              {t.admin.ordersPage.customerName}:
                            </span>{" "}
                            {order.customerName}
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              {t.admin.ordersPage.phone}:
                            </span>{" "}
                            <span dir="ltr">{order.phone}</span>
                          </div>
                          {order.email && (
                            <div>
                              <span className="text-muted-foreground">
                                {t.checkout.email}:
                              </span>{" "}
                              {order.email}
                            </div>
                          )}
                          <div>
                            <span className="text-muted-foreground">
                              {t.admin.ordersPage.area}:
                            </span>{" "}
                            {order.areaName}
                          </div>
                          <div className="col-span-2">
                            <span className="text-muted-foreground">
                              {t.admin.ordersPage.address}:
                            </span>{" "}
                            {order.address}
                          </div>
                          <div>
                            <span className="text-muted-foreground">
                              {t.admin.ordersPage.deliveryMethod}:
                            </span>{" "}
                            {order.deliveryMethodName}
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Items */}
                      <div>
                        <h3 className="font-semibold mb-2">
                          {t.admin.ordersPage.items}
                        </h3>
                        <div className="space-y-2">
                          {order.items.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex justify-between text-sm border-b pb-2"
                            >
                              <span>
                                {getItemName(item)} × {item.qty}
                              </span>
                              <span className="font-medium">
                                {formatPrice(item.subtotal)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Total */}
                      <div className="flex justify-between font-bold">
                        <span>{t.cart.total}:</span>
                        <span className="text-primary">
                          {formatPrice(order.total)}
                        </span>
                      </div>

                      {/* Notes */}
                      {order.notes && (
                        <>
                          <Separator />
                          <div>
                            <h3 className="font-semibold mb-2">
                              {t.admin.ordersPage.notes}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {order.notes}
                            </p>
                          </div>
                        </>
                      )}

                      {/* Status and Dates */}
                      <Separator />
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">
                            {t.admin.ordersPage.status}:
                          </span>{" "}
                          <StatusBadge status={order.status} />
                        </div>
                        <div>
                          <span className="text-muted-foreground">
                            {t.admin.ordersPage.createdAt}:
                          </span>{" "}
                          {formatDate(order.createdAt)}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
