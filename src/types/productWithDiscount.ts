import { IProduct } from "./product"


type Time = {
  days: number,
  hours: number,
  minutes: number,
}

export interface IProductWithDiscounts extends IProduct  {
  time?: Time
}
