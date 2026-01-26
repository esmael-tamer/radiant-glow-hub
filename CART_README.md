# E-commerce Cart System - README

## Overview
This project includes a full bilingual (Arabic/English) e-commerce cart system with product listings, cart management, and checkout via WhatsApp.

## Routes
- `/` - Original landing page (untouched)
- `/ar/products` - Arabic product listing
- `/en/products` - English product listing
- `/ar/products/:slug` - Arabic product details
- `/en/products/:slug` - English product details
- `/ar/cart` - Arabic cart page
- `/en/cart` - English cart page
- `/ar/checkout` - Arabic checkout page
- `/en/checkout` - English checkout page

## How to Edit Products

Edit `src/data/catalog.ts` to update products and categories:

```typescript
// Add a new product
{
  id: "unique-id",
  slug: "product-url-slug",
  name_ar: "اسم المنتج بالعربية",
  name_en: "Product Name in English",
  price_kwd: 5.500, // or null for "Contact for price"
  currency: "KWD",
  images: ["/path/to/image.jpg"], // or empty array for placeholder
  featured: true, // shows featured badge
  category_id: "body-cream", // must match a category id
  description_ar: "وصف المنتج",
  description_en: "Product description",
}
```

## How to Set WhatsApp Number

Edit `src/config/site.ts`:

```typescript
export const siteConfig = {
  // Format: E.164 international format without + 
  // Example for Kuwait: 96550123456
  whatsappNumber: "96550123456",
  // ...
};
```

## How to Replace WhatsApp Submit with Payment API

1. In `src/pages/shop/CheckoutPage.tsx`, modify the `onSubmit` function:

```typescript
const onSubmit = async (data: CheckoutFormData) => {
  const orderData = buildOrderData(data);
  
  // Replace with your payment API call:
  // const response = await fetch('/api/orders', {
  //   method: 'POST',
  //   body: JSON.stringify(orderData),
  // });
  
  // For now, uses WhatsApp:
  handleWhatsAppOrder(data);
};
```

2. The `buildOrderData` function returns a complete order object with:
   - Customer info (name, phone, email, address, governorate, delivery method)
   - Cart items with prices and quantities
   - Subtotal and total
   - Locale and timestamp

## Design System

All components use the existing design tokens from:
- `src/index.css` - CSS variables (colors, shadows, gradients)
- `tailwind.config.ts` - Tailwind theme configuration

## Localization

Edit translations in:
- `src/i18n/ar.ts` - Arabic translations
- `src/i18n/en.ts` - English translations

## Cart State

Cart state is managed via React Context (`src/store/cart.tsx`) and persisted to localStorage.
