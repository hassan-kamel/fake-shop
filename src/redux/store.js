import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cart-slice';
import productsSlice from './features/products-slice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
