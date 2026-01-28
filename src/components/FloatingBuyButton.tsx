import { useState } from "react";
import { ShoppingBag, X, MapPin, Phone, User, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

// Facebook Pixel tracking
declare global {
    interface Window {
        fbq: (action: string, event: string, params?: Record<string, unknown>) => void;
    }
}

const WHATSAPP_NUMBER = "96598882565";

const kuwaitAreas = [
    "العاصمة",
    "حولي",
    "السالمية",
    "الجهراء",
    "الفروانية",
    "الأحمدي",
    "مبارك الكبير",
    "الفحيحيل",
    "صباح السالم",
    "العقيلة",
    "الرقعي",
    "الصليبية",
    "الرميثية",
    "بيان",
    "مشرف",
    "القادسية",
    "الشامية",
    "الدسمة",
    "كيفان",
    "أخرى",
];

interface CustomerInfo {
    name: string;
    phone: string;
    area: string;
    address: string;
}

const FloatingBuyButton = () => {
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
        name: "",
        phone: "",
        area: "",
        address: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCustomerInfo(prev => ({ ...prev, [name]: value }));
    };

    const submitOrder = () => {
        const { name, phone, area, address } = customerInfo;

        if (!name || !phone || !area || !address) {
            alert("الرجاء ملء جميع البيانات");
            return;
        }

        const message = `🌟 *طلب جديد من موقع جايدن* 🌟

━━━━━━━━━━━━━━━━━━━━

📋 *تفاصيل الطلب:*
📦 مجموعة جايدن الكاملة (4 منتجات)
   - زبدة جايدن
   - سكراب جايدن
   - صابونية جايدن
   - عطر جايدن

💰 *المجموع: 21.15 د.ك*

━━━━━━━━━━━━━━━━━━━━

👤 *بيانات العميل:*
📝 الاسم: ${name}
📱 الهاتف: ${phone}
📍 المنطقة: ${area}
🏠 العنوان: ${address}

━━━━━━━━━━━━━━━━━━━━

✨ شكراً لاختياركم جايدن!`;

        // Track Lead event
        if (window.fbq) {
            window.fbq('track', 'Lead', {
                content_name: 'مجموعة جايدن',
                content_category: 'Order Form',
                value: 21.15,
                currency: 'KWD'
            });
        }

        // Track Purchase event
        if (window.fbq) {
            window.fbq('track', 'Purchase', {
                content_name: 'مجموعة جايدن',
                content_ids: ['jayden-collection'],
                content_type: 'product',
                value: 21.15,
                currency: 'KWD',
                num_items: 4
            });
        }

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");

        setShowCheckoutModal(false);
        setCustomerInfo({ name: "", phone: "", area: "", address: "" });
    };

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none">
                <div className="container mx-auto max-w-md pointer-events-auto px-2">
                    <Button
                        onClick={() => {
                            setShowCheckoutModal(true);
                            // Track InitiateCheckout event
                            if (window.fbq) {
                                window.fbq('track', 'InitiateCheckout', {
                                    content_name: 'مجموعة جايدن',
                                    content_ids: ['jayden-collection'],
                                    value: 21.15,
                                    currency: 'KWD'
                                });
                            }
                        }}
                        size="lg"
                        className="w-full bg-gold hover:bg-gold/90 text-primary font-bold text-base sm:text-lg md:text-xl min-h-[52px] sm:min-h-[56px] py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl animate-pulse-soft transition-all hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                        aria-label="اطلب الآن بسعر 21.15 دينار كويتي"
                    >
                        <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 flex-shrink-0" />
                        <span className="truncate">اطلب الان - 21.15 د.ك</span>
                    </Button>
                    <p className="text-center text-white/90 text-xs sm:text-sm mt-1.5 sm:mt-2">
                        بدلاً من <span className="line-through">47 د.ك</span> • خصم 55%
                    </p>
                </div>
            </div>

            {/* Checkout Modal */}
            {showCheckoutModal && (
                <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowCheckoutModal(false)}>
                    <div
                        className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-md w-full animate-in zoom-in-95 max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowCheckoutModal(false)}
                            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-gray-100 min-w-[44px] min-h-[44px]"
                            aria-label="إغلاق"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="text-center mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center mx-auto mb-4">
                                <Truck className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                                بيانات التوصيل
                            </h3>
                            <p className="text-muted-foreground text-sm">
                                أدخلي بياناتك لإتمام الطلب عبر واتساب
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5 text-right">
                                    <User className="w-4 h-4 inline ml-1" />
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={customerInfo.name}
                                    onChange={handleInputChange}
                                    placeholder="أدخلي اسمك"
                                    className="w-full px-4 py-3 border border-border rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-gold"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5 text-right">
                                    <Phone className="w-4 h-4 inline ml-1" />
                                    رقم الهاتف
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={customerInfo.phone}
                                    onChange={handleInputChange}
                                    placeholder="مثال: 98765432"
                                    className="w-full px-4 py-3 border border-border rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-gold"
                                    dir="ltr"
                                />
                            </div>

                            {/* Area */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5 text-right">
                                    <MapPin className="w-4 h-4 inline ml-1" />
                                    المنطقة
                                </label>
                                <select
                                    name="area"
                                    title="اختاري المنطقة"
                                    aria-label="المنطقة"
                                    value={customerInfo.area}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-border rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-gold bg-white"
                                >
                                    <option value="">اختاري المنطقة</option>
                                    {kuwaitAreas.map((area) => (
                                        <option key={area} value={area}>{area}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-1.5 text-right">
                                    <MapPin className="w-4 h-4 inline ml-1" />
                                    العنوان التفصيلي
                                </label>
                                <textarea
                                    name="address"
                                    value={customerInfo.address}
                                    onChange={handleInputChange}
                                    placeholder="القطعة، الشارع، المنزل/البناية"
                                    rows={2}
                                    className="w-full px-4 py-3 border border-border rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                                />
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="bg-cream rounded-xl p-4 mt-6 mb-4">
                            <h4 className="font-bold text-foreground mb-2 text-right">ملخص الطلب</h4>
                            <div className="flex justify-between items-center text-sm">
                                <span className="font-bold text-gold text-lg">21.15 د.ك</span>
                                <span className="text-muted-foreground">مجموعة جايدن (4 منتجات)</span>
                            </div>
                        </div>

                        <Button
                            onClick={submitOrder}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl text-lg"
                        >
                            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            اطلب الان
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FloatingBuyButton;
