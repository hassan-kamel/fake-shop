import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();
  return data;
});

const productsSlice = createSlice({
  initialState: [],
  name: 'products',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

//  export const {} = productsSlice.actions;

export default productsSlice.reducer;
