import type { Translations } from "./ar";

// English translations
export const en: Translations = {
  // General
  locale: "en",
  dir: "ltr",
  brandName: "Jayden",
  
  // Navigation
  nav: {
    home: "Home",
    products: "Products",
    cart: "Cart",
    checkout: "Checkout",
  },
  
  // Products
  products: {
    title: "Our Products",
    allProducts: "All Products",
    featured: "Featured Products",
    searchPlaceholder: "Search for a product...",
    filterByCategory: "Filter by category",
    allCategories: "All Categories",
    sortBy: "Sort by",
    sortFeatured: "Featured First",
    sortNameAZ: "Name (A-Z)",
    sortNameZA: "Name (Z-A)",
    noProducts: "No products found",
    contactForPrice: "Contact for price",
    addToCart: "Add to Cart",
    viewDetails: "View Details",
    relatedProducts: "Related Products",
    outOfStock: "Out of Stock",
  },
  
  // Cart
  cart: {
    title: "Shopping Cart",
    empty: "Your cart is empty",
    continueShopping: "Continue Shopping",
    subtotal: "Subtotal",
    discount: "Discount",
    total: "Total",
    remove: "Remove",
    quantity: "Quantity",
    proceedToCheckout: "Proceed to Checkout",
    viewCart: "View Cart",
    itemAdded: "Item added to cart",
    itemRemoved: "Item removed from cart",
    cartUpdated: "Cart updated",
    clearCart: "Clear Cart",
  },
  
  // Checkout
  checkout: {
    title: "Checkout",
    customerInfo: "Customer Information",
    fullName: "Full Name",
    phone: "Phone Number",
    email: "Email (optional)",
    governorate: "Governorate / Area",
    address: "Detailed Address",
    notes: "Additional Notes (optional)",
    deliveryMethod: "Delivery Method",
    orderSummary: "Order Summary",
    placeOrderWhatsApp: "Place Order via WhatsApp",
    copyOrderJSON: "Copy Order Data",
    orderSuccess: "Order Created Successfully!",
    orderSuccessMessage: "We will contact you soon to confirm your order",
    requiredField: "This field is required",
    invalidPhone: "Invalid phone number",
    invalidEmail: "Invalid email address",
    copied: "Copied!",
  },
  
  // WhatsApp
  whatsapp: {
    greeting: "Hello, I would like to place an order:",
    items: "Products:",
    subtotal: "Subtotal:",
    total: "Total:",
    customer: "Customer Information:",
    name: "Name:",
    phone: "Phone:",
    address: "Address:",
    notes: "Notes:",
  },
  
  // Common
  common: {
    kwd: "KWD",
    loading: "Loading...",
    error: "An error occurred",
    close: "Close",
    back: "Back",
    next: "Next",
    submit: "Submit",
    cancel: "Cancel",
    save: "Save",
    edit: "Edit",
    delete: "Delete",
    confirm: "Confirm",
    items: "items",
    item: "item",
  },
};
