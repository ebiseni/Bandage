import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, Product } from "../../types/product";

interface CartState {
  items: CartItem[];
}

// Load initial state from localStorage to maintain data persistence
const loadInitialCart = (): CartItem[] => {
  try {
    const savedCart = localStorage.getItem("bandage_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    return [];
  }
};

const initialState: CartState = {
  items: loadInitialCart(),
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("bandage_cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("bandage_cart", JSON.stringify(state.items));
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        localStorage.setItem("bandage_cart", JSON.stringify(state.items));
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("bandage_cart", JSON.stringify(state.items));
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
