import { useState } from "react";
import jaydenCollection from "@/assets/jayden-collection.jpg";
import jaydenPerfume from "@/assets/jayden-perfume.jpg";
import jaydenButter from "@/assets/jayden-butter.jpg";
import jaydenSoap from "@/assets/jayden-soap.jpg";
import jaydenScrub from "@/assets/jayden-scrub.jpg";
import { Sparkles, Check, Gift, X, MapPin, Phone, User, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  { nameAr: "زبدة جايدن", image: jaydenButter },
  { nameAr: "سكراب جايدن", image: jaydenScrub },
  { nameAr: "صابونية جايدن", image: jaydenSoap },
  { nameAr: "عطر جايدن", image: jaydenPerfume },
];

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

const JaydenCollection = () => {
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [orderMethod, setOrderMethod] = useState<"whatsapp" | "website">("whatsapp");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
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

  const openCheckout = (method: "whatsapp" | "website") => {
    setOrderMethod(method);
    setShowCheckoutModal(true);
  };

  const submitOrder = () => {
    const { name, phone, area, address } = customerInfo;

    if (!name || !phone || !area || !address) {
      alert("الرجاء ملء جميع البيانات");
      return;
    }

    if (orderMethod === "whatsapp") {
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

      const whatsappUrl = `https://wa.me/96598882565?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank");
    } else {
      // Website order - show success message
      setShowSuccessModal(true);
    }

    setShowCheckoutModal(false);
    setCustomerInfo({ name: "", phone: "", area: "", address: "" });
  };

  return (
    <section className="bg-gradient-to-b from-cream to-background py-10 sm:py-12 lg:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>الأكثر مبيعاً</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            مجموعة جايدن الفاخرة
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-3 sm:mb-4 px-2">
            احصلي على المجموعة الكاملة بخصم
            <span className="text-gold font-bold text-xl sm:text-2xl mx-1 sm:mx-2">55%</span>
          </p>
        </div>

        {/* Collection Image */}
        <div className="relative mb-8 sm:mb-10 lg:mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-2xl sm:rounded-3xl transform rotate-1"></div>
          <img
            src={jaydenCollection}
            alt="مجموعة جايدن الكاملة"
            className="relative w-full max-w-sm sm:max-w-lg md:max-w-2xl mx-auto rounded-2xl sm:rounded-3xl shadow-card aspect-square sm:aspect-[4/3] object-cover"
            width={640}
            height={480}
          />
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-500 text-white px-2.5 py-1 sm:px-4 sm:py-2 rounded-full font-bold text-sm sm:text-lg animate-pulse">
            خصم 55%
          </div>
        </div>

        {/* Products Preview - Display Only */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-card group"
            >
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-2 sm:mb-3">
                <img
                  src={product.image}
                  alt={product.nameAr}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  width={200}
                  height={200}
                  loading="lazy"
                />
                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-gold text-white px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold">
                  ضمن المجموعة
                </div>
              </div>
              <h3 className="font-bold text-foreground text-center text-sm sm:text-base">
                {product.nameAr}
              </h3>
            </div>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="bg-primary rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 text-center relative overflow-hidden">
          {/* Extra Discount Badge */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm animate-pulse shadow-lg">
            🎁 عرض خاص!
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-3 sm:mb-4">
            اشتري المجموعة الكاملة
          </h3>

          {/* Extra Discount Message */}
          <div className="bg-green-500/20 border border-green-400/30 rounded-xl px-4 py-3 mb-4 sm:mb-6 max-w-md mx-auto">
            <p className="text-gold font-bold text-sm sm:text-base flex items-center justify-center gap-2">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              وفري أكثر مع المجموعة الكاملة!
            </p>
            <p className="text-primary-foreground/90 text-xs sm:text-sm mt-1">
              خصم 55% + توصيل مجاني
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            {["4 منتجات فاخرة", "توصيل مجاني", "خصم حصري"].map((feature, i) => (
              <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-primary-foreground/90 text-sm sm:text-base">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-gold flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-2">
            <span className="text-primary-foreground/70 line-through text-lg sm:text-xl md:text-2xl">
              47 د.ك
            </span>
            <span className="text-gold font-bold text-2xl sm:text-3xl md:text-4xl">
              21.15 د.ك
            </span>
          </div>

          <p className="text-green-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            توفير 26 د.ك عند شراء المجموعة الكاملة! 💰
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              onClick={() => openCheckout("whatsapp")}
              size="lg"
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-primary font-bold text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all min-h-[52px]"
            >
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              اطلب عبر واتساب
            </Button>
            <a
              href="https://aromaamorperfumes.com/mode"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border-2 border-gold text-gold hover:bg-gold/10 font-bold text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-xl shadow-lg transition-all min-h-[52px] flex items-center justify-center"
            >
              <Truck className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              اطلب من الموقع
            </a>
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
                  أدخلي بياناتك لإتمام الطلب
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
                    placeholder="مثال: 98882565"
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
                    🏠 العنوان التفصيلي
                  </label>
                  <textarea
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    placeholder="القطعة، الشارع، المنزل، الدور..."
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-xl text-right focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                  />
                </div>

                {/* Order Summary */}
                <div className="bg-cream rounded-xl p-4 mt-4">
                  <h4 className="font-bold text-foreground mb-2 text-right">ملخص الطلب:</h4>
                  <div className="text-sm text-muted-foreground text-right">
                    <p>📦 مجموعة جايدن الكاملة (4 منتجات)</p>
                    <p className="text-xs mt-1 text-muted-foreground/70">زبدة + سكراب + صابونية + عطر</p>
                    <p className="text-gold font-bold mt-2 text-base">المجموع: 21.15 د.ك</p>
                    {orderMethod === "website" && (
                      <p className="text-green-600 text-xs mt-1">💵 الدفع عند الاستلام</p>
                    )}
                  </div>
                </div>

                <Button
                  onClick={submitOrder}
                  size="lg"
                  className={`w-full font-bold text-base sm:text-lg py-5 sm:py-6 rounded-xl mt-4 ${orderMethod === "whatsapp"
                    ? "bg-green-500 hover:bg-green-600 text-white"
                    : "bg-gold hover:bg-gold/90 text-primary"
                    }`}
                >
                  {orderMethod === "whatsapp" ? (
                    <>
                      <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      إرسال عبر واتساب
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5 ml-2" />
                      تأكيد الطلب
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={() => setShowSuccessModal(false)}>
            <div
              className="relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 max-w-md w-full text-center animate-in zoom-in-95"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                🎉 تم استلام طلبك بنجاح!
              </h3>

              <p className="text-muted-foreground mb-4">
                شكراً لك! سيتم التواصل معك خلال ساعات قليلة لتأكيد الطلب والتوصيل.
              </p>

              <div className="bg-cream rounded-xl p-4 mb-6 text-right">
                <p className="text-sm text-muted-foreground">📦 مجموعة جايدن الكاملة</p>
                <p className="text-gold font-bold mt-1">المجموع: 21.15 د.ك</p>
                <p className="text-green-600 text-xs mt-1">💵 الدفع عند الاستلام</p>
              </div>

              <Button
                onClick={() => setShowSuccessModal(false)}
                size="lg"
                className="w-full bg-gold hover:bg-gold/90 text-primary font-bold py-4 rounded-xl"
              >
                حسناً
              </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default JaydenCollection;
