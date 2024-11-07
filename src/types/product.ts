export interface IProduct {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  oldPrice?: number;
  description: string;
  image: string;
}
