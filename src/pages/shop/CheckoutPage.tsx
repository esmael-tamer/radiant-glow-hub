import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, ShoppingBag, MessageCircle, Copy, Check } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCart } from "@/store/cart";
import { useLocale } from "@/contexts/LocaleContext";
import { toast } from "@/components/ui/sonner";
import { siteConfig, whatsappTemplates, getWhatsAppUrl } from "@/config/site";

// Form validation schema
const checkoutSchema = z.object({
  fullName: z.string().min(2).max(100),
  phone: z.string().min(8).max(20),
  email: z.string().email().optional().or(z.literal("")),
  governorate: z.string().min(1),
  address: z.string().min(5).max(500),
  notes: z.string().max(500).optional(),
  deliveryMethod: z.string().min(1),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export function CheckoutPage() {
  const { locale, t, isRTL, getLocalizedPath } = useLocale();
  const { state, getSubtotal, hasContactForPriceItems, clearCart } = useCart();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const subtotal = getSubtotal();
  const hasContactItems = hasContactForPriceItems();

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      governorate: "",
      address: "",
      notes: "",
      deliveryMethod: siteConfig.deliveryMethods[0]?.id || "",
    },
  });

  const getItemName = (item: { name_ar: string; name_en: string }) => {
    return locale === "ar" ? item.name_ar : item.name_en;
  };

  const formatPrice = (price: number | null) => {
    if (price === null) {
      return t.products.contactForPrice;
    }
    return `${price.toFixed(3)} ${t.common.kwd}`;
  };

  const getGovernorateName = (id: string) => {
    const gov = siteConfig.governorates.find((g) => g.id === id);
    return gov ? (locale === "ar" ? gov.name_ar : gov.name_en) : id;
  };

  const getDeliveryMethodName = (id: string) => {
    const method = siteConfig.deliveryMethods.find((m) => m.id === id);
    return method ? (locale === "ar" ? method.name_ar : method.name_en) : id;
  };

  const buildOrderData = (data: CheckoutFormData) => {
    return {
      locale,
      timestamp: new Date().toISOString(),
      customer: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email || null,
        governorate: data.governorate,
        governorateName: getGovernorateName(data.governorate),
        address: data.address,
        notes: data.notes || null,
        deliveryMethod: data.deliveryMethod,
        deliveryMethodName: getDeliveryMethodName(data.deliveryMethod),
      },
      items: state.items.map((item) => ({
        productId: item.productId,
        slug: item.slug,
        name: getItemName(item),
        name_ar: item.name_ar,
        name_en: item.name_en,
        price_kwd: item.price_kwd,
        qty: item.qty,
        subtotal: item.price_kwd !== null ? item.price_kwd * item.qty : null,
      })),
      subtotal: hasContactItems ? null : subtotal,
      total: hasContactItems ? null : subtotal,
      currency: "KWD",
    };
  };

  const buildWhatsAppMessage = (data: CheckoutFormData) => {
    const itemsList = state.items
      .map(
        (item) =>
          `• ${getItemName(item)} × ${item.qty} - ${formatPrice(item.price_kwd)}`
      )
      .join("\n");

    const subtotalText = hasContactItems
      ? t.products.contactForPrice
      : `${subtotal.toFixed(3)} ${t.common.kwd}`;

    const address = `${getGovernorateName(data.governorate)}, ${data.address}`;

    const template = whatsappTemplates[locale];
    return template({
      items: itemsList,
      subtotal: subtotalText,
      total: subtotalText,
      customerName: data.fullName,
      phone: data.phone,
      address,
      notes: data.notes,
    });
  };

  const handleWhatsAppOrder = (data: CheckoutFormData) => {
    const message = buildWhatsAppMessage(data);
    const url = getWhatsAppUrl(message);
    window.open(url, "_blank");
    setOrderSuccess(true);
  };

  const handleCopyOrder = async (data: CheckoutFormData) => {
    const orderData = buildOrderData(data);
    try {
      await navigator.clipboard.writeText(JSON.stringify(orderData, null, 2));
      setCopied(true);
      toast.success(t.checkout.copied);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(t.common.error);
    }
  };

  const onSubmit = (data: CheckoutFormData) => {
    handleWhatsAppOrder(data);
  };

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  if (state.items.length === 0 && !orderSuccess) {
    return (
      <div className="container px-4 py-16 text-center">
        <ShoppingBag className="h-20 w-20 mx-auto text-muted-foreground mb-6" />
        <h1 className="text-2xl font-bold mb-4">{t.cart.empty}</h1>
        <Button asChild>
          <Link to={getLocalizedPath("/products")}>
            {t.cart.continueShopping}
          </Link>
        </Button>
      </div>
    );
  }

  if (orderSuccess) {
    return (
      <div className="container px-4 py-16 text-center">
        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <Check className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-4">{t.checkout.orderSuccess}</h1>
        <p className="text-muted-foreground mb-8">
          {t.checkout.orderSuccessMessage}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => clearCart()} asChild>
            <Link to={getLocalizedPath("/products")}>
              {t.cart.continueShopping}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      {/* Back Button */}
      <Button variant="ghost" asChild className="mb-6 gap-2">
        <Link to={getLocalizedPath("/cart")}>
          <BackArrow className="h-4 w-4" />
          {t.common.back}
        </Link>
      </Button>

      <h1 className="text-3xl font-bold mb-8">{t.checkout.title}</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Customer Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t.checkout.customerInfo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Full Name */}
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.checkout.fullName} *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.checkout.phone} *</FormLabel>
                        <FormControl>
                          <Input {...field} type="tel" dir="ltr" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.checkout.email}</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" dir="ltr" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Governorate */}
                  <FormField
                    control={form.control}
                    name="governorate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.checkout.governorate} *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {siteConfig.governorates.map((gov) => (
                              <SelectItem key={gov.id} value={gov.id}>
                                {locale === "ar" ? gov.name_ar : gov.name_en}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Address */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.checkout.address} *</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={3} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Delivery Method */}
                  <FormField
                    control={form.control}
                    name="deliveryMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.checkout.deliveryMethod} *</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {siteConfig.deliveryMethods.map((method) => (
                              <SelectItem key={method.id} value={method.id}>
                                {locale === "ar" ? method.name_ar : method.name_en}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Notes */}
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.checkout.notes}</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={2} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>{t.checkout.orderSummary}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Items List */}
                  <div className="space-y-3">
                    {state.items.map((item) => (
                      <div
                        key={item.productId}
                        className="flex justify-between text-sm"
                      >
                        <span className="flex-1">
                          {getItemName(item)}{" "}
                          <span className="text-muted-foreground">× {item.qty}</span>
                        </span>
                        <span className="font-medium">
                          {formatPrice(
                            item.price_kwd !== null
                              ? item.price_kwd * item.qty
                              : null
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Subtotal */}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.cart.subtotal}</span>
                    <span className="font-medium">
                      {hasContactItems
                        ? t.products.contactForPrice
                        : `${subtotal.toFixed(3)} ${t.common.kwd}`}
                    </span>
                  </div>

                  <Separator />

                  {/* Total */}
                  <div className="flex justify-between text-lg font-bold">
                    <span>{t.cart.total}</span>
                    <span className="text-primary">
                      {hasContactItems
                        ? t.products.contactForPrice
                        : `${subtotal.toFixed(3)} ${t.common.kwd}`}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    <Button type="submit" className="w-full gap-2" size="lg">
                      <MessageCircle className="h-5 w-5" />
                      {t.checkout.placeOrderWhatsApp}
                    </Button>

                    <Button
                      type="button"
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => {
                        const data = form.getValues();
                        if (form.formState.isValid) {
                          handleCopyOrder(data);
                        } else {
                          form.trigger();
                        }
                      }}
                    >
                      {copied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      {t.checkout.copyOrderJSON}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
