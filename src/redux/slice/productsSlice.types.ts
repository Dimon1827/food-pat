import { IProduct } from '@/types';

export interface IProducts
  extends Omit<IProduct, 'ingredients' | 'description'> {
  isChecked: boolean;
  quantity: number;
}

export interface IReduxProduct {
  products: IProducts[];
  totalPrice: number;
  totalQuantity: number;
}
