import { IProducts } from 'redux/slice/productsSlice.types';

export interface IBasketItem extends IProducts {
  isChecked: boolean;
  quantity: number;
}
