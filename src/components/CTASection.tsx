import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Truck, Shield, MapPin, Phone, User } from "lucide-react";

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

// Facebook Pixel tracking
declare global {
  interface Window {
    fbq: (action: string, event: string, params?: Record<string, unknown>) => void;
  }
}

interface CustomerInfo {
  name: string;
  phone: string;
  area: string;
  address: string;
}

const CTASection = () => {
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
        content_category: 'CTA Order Form',
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

    setCustomerInfo({ name: "", phone: "", area: "", address: "" });
  };

  return (
    <section className="bg-primary py-10 sm:py-12 lg:py-16 px-4">
      <div className="container mx-auto max-w-xl text-center">
        {/* Price */}
        <div className="mb-6 sm:mb-8">
          <p className="text-cream/70 text-base sm:text-lg mb-1 sm:mb-2">السعر الأصلي</p>
          <p className="text-cream/50 text-xl sm:text-2xl line-through mb-1 sm:mb-2">47 د.ك</p>
          <p className="text-gold text-4xl sm:text-5xl md:text-6xl font-black">
            21.15 د.ك
          </p>
          <p className="text-cream mt-2 text-base sm:text-lg">وفري 55% - عرض محدود!</p>
        </div>

        {/* Order Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-6 mb-6">
          <h3 className="text-cream text-lg sm:text-xl font-bold mb-4">أدخلي بياناتك للطلب</h3>

          <div className="space-y-3">
            {/* Name */}
            <div>
              <div className="relative">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  placeholder="الاسم الكامل"
                  className="w-full px-4 py-3 pr-10 border border-white/20 bg-white/90 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <div className="relative">
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  placeholder="رقم الهاتف"
                  className="w-full px-4 py-3 pr-10 border border-white/20 bg-white/90 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-gold"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Area */}
            <div>
              <div className="relative">
                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  name="area"
                  title="اختاري المنطقة"
                  value={customerInfo.area}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pr-10 border border-white/20 bg-white/90 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-gold appearance-none"
                >
                  <option value="">اختاري المنطقة</option>
                  {kuwaitAreas.map((area) => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="relative">
                <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                <textarea
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  placeholder="العنوان التفصيلي (القطعة، الشارع، المنزل)"
                  rows={2}
                  className="w-full px-4 py-3 pr-10 border border-white/20 bg-white/90 rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            size="lg"
            onClick={submitOrder}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg sm:text-xl px-8 py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            اطلبي الآن عبر واتساب
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="flex flex-col items-center text-cream/80">
            <Truck className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm">توصيل سريع</span>
          </div>
          <div className="flex flex-col items-center text-cream/80">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2" />
            <span className="text-xs sm:text-sm">منتجات طبيعية 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
