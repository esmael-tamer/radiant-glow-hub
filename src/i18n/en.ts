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
  
  // Admin Dashboard
  admin: {
    title: "Admin Dashboard",
    dashboard: "Dashboard",
    orders: "Orders",
    customers: "Customers",
    settings: "Settings",
    
    // Stats
    stats: {
      totalOrders: "Total Orders",
      newOrdersToday: "New Orders (Today)",
      totalCustomers: "Total Customers",
      totalSales: "Total Sales",
    },
    
    // Orders
    ordersPage: {
      title: "All Orders",
      recentOrders: "Recent Orders",
      orderNumber: "Order Number",
      customerName: "Customer Name",
      phone: "Phone Number",
      area: "Area",
      amount: "Amount",
      status: "Status",
      date: "Date",
      actions: "Actions",
      viewDetails: "View Details",
      noOrders: "No orders found",
      filterByStatus: "Filter by Status",
      allStatuses: "All Statuses",
      searchPlaceholder: "Search by name or phone...",
      filterByArea: "Filter by Area",
      allAreas: "All Areas",
      items: "Items",
      address: "Address",
      deliveryMethod: "Delivery Method",
      notes: "Notes",
      createdAt: "Created At",
      updatedAt: "Updated At",
    },
    
    // Order Status
    orderStatus: {
      new: "New",
      processing: "Processing",
      delivered: "Delivered",
      cancelled: "Cancelled",
      updateStatus: "Update Status",
      statusUpdated: "Order status updated",
    },
    
    // Customers
    customersPage: {
      title: "Customers",
      name: "Name",
      phone: "Phone Number",
      email: "Email",
      area: "Area",
      ordersCount: "Orders Count",
      totalSpent: "Total Spent",
      lastOrder: "Last Order",
      noCustomers: "No customers found",
      searchPlaceholder: "Search by name or phone...",
    },
  },
};
