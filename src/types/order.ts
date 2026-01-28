// Order types for Admin Dashboard

export type OrderStatus = 'new' | 'processing' | 'delivered' | 'cancelled';

export interface OrderItem {
  productId: string;
  slug: string;
  name: string;
  name_ar: string;
  name_en: string;
  price_kwd: number | null;
  qty: number;
  subtotal: number | null;
}

export interface Order {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  area: string;
  areaName: string;
  address: string;
  deliveryMethod: string;
  deliveryMethodName: string;
  items: OrderItem[];
  subtotal: number | null;
  total: number | null;
  status: OrderStatus;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderFormData {
  fullName: string;
  phone: string;
  email?: string;
  governorate: string;
  address: string;
  notes?: string;
  deliveryMethod: string;
}
