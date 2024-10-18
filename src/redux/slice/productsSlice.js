import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return {
        ...state,
        products: state.products.filter(({ id }) => action.payload !== id),
      };
    },
    toggleProduct: (state, action) => {
      return {
        ...state,
        products: state.products.map((product) => {
          return product.id === action.payload
            ? { ...product, isChecked: !product.isChecked }
            : product;
        }),
      };
    },
    deleteSelectedProducts: (state) => {
      return {
        ...state,
        products: state.products.filter((product) => !product.isChecked),
      };
    },
    clearAll: () => {
      return {
        products: [],
        totalPrice: 0,
        totalQuantity: 0,
      };
    },
    incrementQuantity: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload);
      product.quantity++;
    },
    decrementQuantity: (state, action) => {
      const product = state.products.find((item) => item.id === action.payload);
      if (product.quantity > 1) {
        product.quantity--;
      }
    },
    calculateAll: (state) => {
      const { total, quantity } = state.products.reduce(
        (productsTotal, product) => {
          const { price, quantity } = product;
          const productTotal = price * quantity;

          productsTotal.total += productTotal;
          productsTotal.quantity += quantity;

          return productsTotal;
        },
        { total: 0, quantity: 0 }
      );
      state.totalPrice = total;
      state.totalQuantity = quantity;
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  clearAll,
  toggleProduct,
  deleteSelectedProducts,
  incrementQuantity,
  decrementQuantity,
  calculateAll,
} = productsSlice.actions;

export const selectProducts = (state) => state.products.products;
export const selectTotalPrice = (state) => state.products.totalPrice;
export const selectTotalQuantity = (state) => state.products.totalQuantity;

export default productsSlice.reducer;
