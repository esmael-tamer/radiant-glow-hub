// Site Configuration
// Edit this file to update site settings

export const siteConfig = {
  // Brand Information
  brandName: {
    ar: "جايدن",
    en: "Jayden",
  },
  
  // WhatsApp Configuration
  // Format: E.164 international format without + (e.g., 96550123456)
  whatsappNumber: "96550123456", // Replace with your actual WhatsApp number
  
  // Default locale
  defaultLocale: "ar" as const,
  
  // Supported locales
  locales: ["ar", "en"] as const,
  
  // Currency
  currency: {
    code: "KWD",
    symbol_ar: "د.ك",
    symbol_en: "KWD",
  },
  
  // Delivery methods
  deliveryMethods: [
    {
      id: "delivery",
      name_ar: "توصيل للمنزل",
      name_en: "Home Delivery",
    },
    {
      id: "pickup",
      name_ar: "استلام من المتجر",
      name_en: "Store Pickup",
    },
  ],
  
  // Governorates/Areas for Kuwait
  governorates: [
    { id: "capital", name_ar: "العاصمة", name_en: "Capital" },
    { id: "hawalli", name_ar: "حولي", name_en: "Hawalli" },
    { id: "farwaniya", name_ar: "الفروانية", name_en: "Farwaniya" },
    { id: "ahmadi", name_ar: "الأحمدي", name_en: "Ahmadi" },
    { id: "jahra", name_ar: "الجهراء", name_en: "Jahra" },
    { id: "mubarak", name_ar: "مبارك الكبير", name_en: "Mubarak Al-Kabeer" },
  ],
};

// WhatsApp message templates
export const whatsappTemplates = {
  ar: (orderData: {
    items: string;
    subtotal: string;
    total: string;
    customerName: string;
    phone: string;
    address: string;
    notes?: string;
  }) => {
    let message = `مرحباً، أريد تقديم طلب:

📦 *المنتجات:*
${orderData.items}

💰 *المجموع الفرعي:* ${orderData.subtotal}
💵 *المجموع الكلي:* ${orderData.total}

👤 *معلومات العميل:*
الاسم: ${orderData.customerName}
الهاتف: ${orderData.phone}
العنوان: ${orderData.address}`;

    if (orderData.notes) {
      message += `\n📝 *ملاحظات:* ${orderData.notes}`;
    }

    return message;
  },
  
  en: (orderData: {
    items: string;
    subtotal: string;
    total: string;
    customerName: string;
    phone: string;
    address: string;
    notes?: string;
  }) => {
    let message = `Hello, I would like to place an order:

📦 *Products:*
${orderData.items}

💰 *Subtotal:* ${orderData.subtotal}
💵 *Total:* ${orderData.total}

👤 *Customer Information:*
Name: ${orderData.customerName}
Phone: ${orderData.phone}
Address: ${orderData.address}`;

    if (orderData.notes) {
      message += `\n📝 *Notes:* ${orderData.notes}`;
    }

    return message;
  },
};

// Generate WhatsApp URL
export const getWhatsAppUrl = (message: string): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
};
