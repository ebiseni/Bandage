import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types/product";

interface WishlistState {
  items: Product[];
}

// Load initial wishlist from localStorage for persistence
const loadInitialWishlist = (): Product[] => {
  try {
    const savedWishlist = localStorage.getItem("bandage_wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  } catch (error) {
    return [];
  }
};

const initialState: WishlistState = {
  items: loadInitialWishlist(),
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(action.payload);
      }
      localStorage.setItem("bandage_wishlist", JSON.stringify(state.items));
    },
    removeFromWishlist: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("bandage_wishlist", JSON.stringify(state.items));
    },
  },
});

export const { toggleWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
