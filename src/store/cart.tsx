import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

// Cart item type
export interface CartItem {
  productId: string;
  slug: string;
  name_ar: string;
  name_en: string;
  price_kwd: number | null;
  qty: number;
  image?: string;
}

// Cart state type
interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

// Cart action types
type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "INCREMENT_QTY"; payload: string }
  | { type: "DECREMENT_QTY"; payload: string }
  | { type: "SET_QTY"; payload: { productId: string; qty: number } }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

// Initial state
const initialState: CartState = {
  items: [],
  isOpen: false,
};

// Cart reducer
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.payload.productId
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    case "INCREMENT_QTY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    case "DECREMENT_QTY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };
    case "SET_QTY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.productId === action.payload.productId
            ? { ...item, qty: Math.max(1, action.payload.qty) }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      };
    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      };
    case "LOAD_CART":
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}

// Context type
interface CartContextType {
  state: CartState;
  addItem: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  removeItem: (productId: string) => void;
  incrementQty: (productId: string) => void;
  decrementQty: (productId: string) => void;
  setQty: (productId: string, qty: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  hasContactForPriceItems: () => boolean;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Storage key
const CART_STORAGE_KEY = "jayden-cart";

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        if (Array.isArray(parsed)) {
          dispatch({ type: "LOAD_CART", payload: parsed });
        }
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [state.items]);

  const addItem = (item: Omit<CartItem, "qty"> & { qty?: number }) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { ...item, qty: item.qty || 1 },
    });
  };

  const removeItem = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const incrementQty = (productId: string) => {
    dispatch({ type: "INCREMENT_QTY", payload: productId });
  };

  const decrementQty = (productId: string) => {
    dispatch({ type: "DECREMENT_QTY", payload: productId });
  };

  const setQty = (productId: string, qty: number) => {
    dispatch({ type: "SET_QTY", payload: { productId, qty } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const openCart = () => {
    dispatch({ type: "OPEN_CART" });
  };

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };

  const getItemCount = () => {
    return state.items.reduce((total, item) => total + item.qty, 0);
  };

  const getSubtotal = () => {
    return state.items.reduce((total, item) => {
      if (item.price_kwd !== null) {
        return total + item.price_kwd * item.qty;
      }
      return total;
    }, 0);
  };

  const hasContactForPriceItems = () => {
    return state.items.some((item) => item.price_kwd === null);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        incrementQty,
        decrementQty,
        setQty,
        clearCart,
        toggleCart,
        openCart,
        closeCart,
        getItemCount,
        getSubtotal,
        hasContactForPriceItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
