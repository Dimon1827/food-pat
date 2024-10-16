import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter(({ id }) => action.payload !== id);
    },
    clearAll: () => {
      return [];
    },
  },
});

export const { addProduct, deleteProduct, clearAll } = productsSlice.actions;

export const selectProducts = (state) => state.products;

export default productsSlice.reducer;
