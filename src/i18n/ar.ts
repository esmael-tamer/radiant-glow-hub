// Arabic translations
export const ar = {
  // General
  locale: "ar",
  dir: "rtl",
  brandName: "جايدن",
  
  // Navigation
  nav: {
    home: "الرئيسية",
    products: "المنتجات",
    cart: "السلة",
    checkout: "الدفع",
  },
  
  // Products
  products: {
    title: "منتجاتنا",
    allProducts: "جميع المنتجات",
    featured: "منتجات مميزة",
    searchPlaceholder: "ابحث عن منتج...",
    filterByCategory: "تصفية حسب الفئة",
    allCategories: "جميع الفئات",
    sortBy: "ترتيب حسب",
    sortFeatured: "المميزة أولاً",
    sortNameAZ: "الاسم (أ-ي)",
    sortNameZA: "الاسم (ي-أ)",
    noProducts: "لا توجد منتجات",
    contactForPrice: "تواصل للسعر",
    addToCart: "أضف للسلة",
    viewDetails: "عرض التفاصيل",
    relatedProducts: "منتجات ذات صلة",
    outOfStock: "نفذت الكمية",
  },
  
  // Cart
  cart: {
    title: "سلة التسوق",
    empty: "سلتك فارغة",
    continueShopping: "متابعة التسوق",
    subtotal: "المجموع الفرعي",
    discount: "الخصم",
    total: "المجموع الكلي",
    remove: "إزالة",
    quantity: "الكمية",
    proceedToCheckout: "إتمام الطلب",
    viewCart: "عرض السلة",
    itemAdded: "تمت الإضافة للسلة",
    itemRemoved: "تمت الإزالة من السلة",
    cartUpdated: "تم تحديث السلة",
    clearCart: "إفراغ السلة",
  },
  
  // Checkout
  checkout: {
    title: "إتمام الطلب",
    customerInfo: "معلومات العميل",
    fullName: "الاسم الكامل",
    phone: "رقم الهاتف",
    email: "البريد الإلكتروني (اختياري)",
    governorate: "المحافظة / المنطقة",
    address: "العنوان التفصيلي",
    notes: "ملاحظات إضافية (اختياري)",
    deliveryMethod: "طريقة التوصيل",
    orderSummary: "ملخص الطلب",
    placeOrderWhatsApp: "إرسال الطلب عبر واتساب",
    copyOrderJSON: "نسخ بيانات الطلب",
    orderSuccess: "تم إنشاء الطلب بنجاح!",
    orderSuccessMessage: "سيتم التواصل معك قريباً لتأكيد الطلب",
    requiredField: "هذا الحقل مطلوب",
    invalidPhone: "رقم الهاتف غير صالح",
    invalidEmail: "البريد الإلكتروني غير صالح",
    copied: "تم النسخ!",
  },
  
  // WhatsApp
  whatsapp: {
    greeting: "مرحباً، أريد تقديم طلب:",
    items: "المنتجات:",
    subtotal: "المجموع الفرعي:",
    total: "المجموع:",
    customer: "معلومات العميل:",
    name: "الاسم:",
    phone: "الهاتف:",
    address: "العنوان:",
    notes: "ملاحظات:",
  },
  
  // Common
  common: {
    kwd: "د.ك",
    loading: "جاري التحميل...",
    error: "حدث خطأ",
    close: "إغلاق",
    back: "رجوع",
    next: "التالي",
    submit: "إرسال",
    cancel: "إلغاء",
    save: "حفظ",
    edit: "تعديل",
    delete: "حذف",
    confirm: "تأكيد",
    items: "منتجات",
    item: "منتج",
  },
};

export type Translations = typeof ar;
