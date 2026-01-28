import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Order, OrderStatus } from '@/types/order';

// Orders state type
interface OrdersState {
  orders: Order[];
  loading: boolean;
}

// Orders action types
type OrdersAction =
  | { type: 'LOAD_ORDERS'; payload: Order[] }
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { id: string; status: OrderStatus } }
  | { type: 'SET_LOADING'; payload: boolean };

// Initial state
const initialState: OrdersState = {
  orders: [],
  loading: false,
};

// Orders reducer
function ordersReducer(state: OrdersState, action: OrdersAction): OrdersState {
  switch (action.type) {
    case 'LOAD_ORDERS':
      return {
        ...state,
        orders: action.payload,
        loading: false,
      };
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [action.payload, ...state.orders],
      };
    case 'UPDATE_ORDER_STATUS': {
      return {
        ...state,
        orders: state.orders.map((order) =>
          order.id === action.payload.id
            ? { ...order, status: action.payload.status, updatedAt: new Date().toISOString() }
            : order
        ),
      };
    }
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

// Context type
interface OrdersContextType {
  state: OrdersState;
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  getOrderById: (id: string) => Order | undefined;
  getOrdersByStatus: (status: OrderStatus) => Order[];
  getTodayOrders: () => Order[];
  getStats: () => {
    totalOrders: number;
    newOrdersToday: number;
    totalCustomers: number;
    totalSales: number;
  };
}

// Create context
const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

// Storage key
const ORDERS_STORAGE_KEY = 'aromakw-orders';

// Generate mock data for demonstration
function generateMockOrders(): Order[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  const threeDaysAgo = new Date(today);
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

  return [
    {
      id: 'ORD-001',
      customerName: 'أحمد محمد',
      phone: '+96550123456',
      email: 'ahmed@example.com',
      area: 'capital',
      areaName: 'العاصمة',
      address: 'شارع الخليج، بنية 12، شقة 5',
      deliveryMethod: 'delivery',
      deliveryMethodName: 'توصيل للمنزل',
      items: [
        {
          productId: '1',
          slug: 'jayden-50ml',
          name: 'جايدن 50 مل',
          name_ar: 'جايدن 50 مل',
          name_en: 'Jayden 50ml',
          price_kwd: 15.5,
          qty: 2,
          subtotal: 31.0,
        },
      ],
      subtotal: 31.0,
      total: 31.0,
      status: 'new',
      notes: 'يرجى التوصيل صباحاً',
      createdAt: new Date(today.getTime() + 3600000).toISOString(),
      updatedAt: new Date(today.getTime() + 3600000).toISOString(),
    },
    {
      id: 'ORD-002',
      customerName: 'فاطمة علي',
      phone: '+96550234567',
      area: 'hawalli',
      areaName: 'حولي',
      address: 'شارع السالمية، قطعة 4',
      deliveryMethod: 'delivery',
      deliveryMethodName: 'توصيل للمنزل',
      items: [
        {
          productId: '2',
          slug: 'jayden-100ml',
          name: 'جايدن 100 مل',
          name_ar: 'جايدن 100 مل',
          name_en: 'Jayden 100ml',
          price_kwd: 28.5,
          qty: 1,
          subtotal: 28.5,
        },
      ],
      subtotal: 28.5,
      total: 28.5,
      status: 'processing',
      createdAt: new Date(today.getTime() + 7200000).toISOString(),
      updatedAt: new Date(today.getTime() + 7200000).toISOString(),
    },
    {
      id: 'ORD-003',
      customerName: 'محمد خالد',
      phone: '+96550345678',
      email: 'mohammed@example.com',
      area: 'farwaniya',
      areaName: 'الفروانية',
      address: 'الفردوس، قطعة 7',
      deliveryMethod: 'pickup',
      deliveryMethodName: 'استلام من المتجر',
      items: [
        {
          productId: '1',
          slug: 'jayden-50ml',
          name: 'جايدن 50 مل',
          name_ar: 'جايدن 50 مل',
          name_en: 'Jayden 50ml',
          price_kwd: 15.5,
          qty: 3,
          subtotal: 46.5,
        },
        {
          productId: '2',
          slug: 'jayden-100ml',
          name: 'جايدن 100 مل',
          name_ar: 'جايدن 100 مل',
          name_en: 'Jayden 100ml',
          price_kwd: 28.5,
          qty: 1,
          subtotal: 28.5,
        },
      ],
      subtotal: 75.0,
      total: 75.0,
      status: 'delivered',
      notes: 'عميل مميز',
      createdAt: yesterday.toISOString(),
      updatedAt: yesterday.toISOString(),
    },
    {
      id: 'ORD-004',
      customerName: 'نورة سعد',
      phone: '+96550456789',
      area: 'ahmadi',
      areaName: 'الأحمدي',
      address: 'المنقف، منطقة 5',
      deliveryMethod: 'delivery',
      deliveryMethodName: 'توصيل للمنزل',
      items: [
        {
          productId: '2',
          slug: 'jayden-100ml',
          name: 'جايدن 100 مل',
          name_ar: 'جايدن 100 مل',
          name_en: 'Jayden 100ml',
          price_kwd: 28.5,
          qty: 2,
          subtotal: 57.0,
        },
      ],
      subtotal: 57.0,
      total: 57.0,
      status: 'delivered',
      createdAt: twoDaysAgo.toISOString(),
      updatedAt: twoDaysAgo.toISOString(),
    },
    {
      id: 'ORD-005',
      customerName: 'عبدالله يوسف',
      phone: '+96550567890',
      email: 'abdullah@example.com',
      area: 'capital',
      areaName: 'العاصمة',
      address: 'الشويخ، شارع الصناعية',
      deliveryMethod: 'delivery',
      deliveryMethodName: 'توصيل للمنزل',
      items: [
        {
          productId: '1',
          slug: 'jayden-50ml',
          name: 'جايدن 50 مل',
          name_ar: 'جايدن 50 مل',
          name_en: 'Jayden 50ml',
          price_kwd: 15.5,
          qty: 1,
          subtotal: 15.5,
        },
      ],
      subtotal: 15.5,
      total: 15.5,
      status: 'cancelled',
      notes: 'طلب إلغاء من العميل',
      createdAt: threeDaysAgo.toISOString(),
      updatedAt: threeDaysAgo.toISOString(),
    },
  ];
}

// Provider component
export function OrdersProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(ordersReducer, initialState);

  // Load orders from localStorage on mount
  useEffect(() => {
    try {
      const savedOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
      if (savedOrders) {
        const parsed = JSON.parse(savedOrders);
        if (Array.isArray(parsed)) {
          dispatch({ type: 'LOAD_ORDERS', payload: parsed });
        }
      } else {
        // If no saved orders, generate mock data
        const mockOrders = generateMockOrders();
        dispatch({ type: 'LOAD_ORDERS', payload: mockOrders });
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(mockOrders));
      }
    } catch (error) {
      console.error('Error loading orders from localStorage:', error);
      // On error, use mock data
      const mockOrders = generateMockOrders();
      dispatch({ type: 'LOAD_ORDERS', payload: mockOrders });
    }
  }, []);

  // Save orders to localStorage on changes
  useEffect(() => {
    if (state.orders.length > 0) {
      try {
        localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(state.orders));
      } catch (error) {
        console.error('Error saving orders to localStorage:', error);
      }
    }
  }, [state.orders]);

  const addOrder = (order: Order) => {
    dispatch({ type: 'ADD_ORDER', payload: order });
  };

  const updateOrderStatus = (id: string, status: OrderStatus) => {
    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { id, status } });
  };

  const getOrderById = (id: string) => {
    return state.orders.find((order) => order.id === id);
  };

  const getOrdersByStatus = (status: OrderStatus) => {
    return state.orders.filter((order) => order.status === status);
  };

  const getTodayOrders = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return state.orders.filter((order) => {
      const orderDate = new Date(order.createdAt);
      orderDate.setHours(0, 0, 0, 0);
      return orderDate.getTime() === today.getTime();
    });
  };

  const getStats = () => {
    const todayOrders = getTodayOrders();
    const uniquePhones = new Set(state.orders.map((o) => o.phone));
    
    const totalSales = state.orders.reduce((sum, order) => {
      if (order.status !== 'cancelled' && order.total !== null) {
        return sum + order.total;
      }
      return sum;
    }, 0);

    return {
      totalOrders: state.orders.length,
      newOrdersToday: todayOrders.length,
      totalCustomers: uniquePhones.size,
      totalSales,
    };
  };

  return (
    <OrdersContext.Provider
      value={{
        state,
        addOrder,
        updateOrderStatus,
        getOrderById,
        getOrdersByStatus,
        getTodayOrders,
        getStats,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}

// Hook to use orders context
export function useOrders() {
  const context = useContext(OrdersContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrdersProvider');
  }
  return context;
}
