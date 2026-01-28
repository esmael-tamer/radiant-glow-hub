// Customer types for Admin Dashboard

export interface Customer {
  phone: string;
  name: string;
  email?: string;
  area: string;
  areaName: string;
  ordersCount: number;
  totalSpent: number;
  lastOrderDate: string;
}
