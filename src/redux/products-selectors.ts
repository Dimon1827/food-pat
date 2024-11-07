import { RootState } from "./store";

export const selectProducts = (state: RootState) => state.products.products;
export const selectTotalPrice = (state: RootState) => state.products.totalPrice;
export const selectTotalQuantity = (state: RootState) => state.products.totalQuantity;
