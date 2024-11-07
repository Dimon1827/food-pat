import { IProducts } from "redux/slice/productsSlice.types";

interface IproductWithQuantity extends Omit<IProducts, 'isChecked' | 'quantity'> {};

const productWithQuantity = (food: IproductWithQuantity) => {
  return {
    ...food,
    isChecked: false,
    quantity: 1,
  };
};

export default productWithQuantity;
