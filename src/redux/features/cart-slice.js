import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  initialState: [],
  name: 'cart',
  reducers: {
    addToCart: (state, action) => {
      const found = state.find((item) => item.id === action.payload.id);
      console.log('found: ', found);
      if (found) {
        found.qty += 1;
      } else {
        const item = { ...action.payload, qty: 1 };
        return [...state, item];
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
