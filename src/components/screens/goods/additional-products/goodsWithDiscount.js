import { v4 as uuidv4 } from 'uuid';

const goodsWithDiscount = [
  {
    id: uuidv4(),
    name: 'Салат с фруктами',
    ingredients: 'Апельсин, зелень, огурцы, банан',
    oldPrice: 500,
    price: 400,
    time: {
      days: 3,
      hours: 11,
      minutes: 18,
    },
    image: './day-item/day-item-1',
  },
  {
    id: uuidv4(),
    name: 'Сок из апельсина',
    ingredients: 'Апельсин, грейфрукт',
    oldPrice: 200,
    price: 120,
    time: {
      days: 5,
      hours: 12,
      minutes: 30,
    },
    image: './day-item/day-item-2',
  },
  {
    id: uuidv4(),
    name: 'Салат с лимонным коктелем',
    ingredients: 'Горох, лимон, апельсин',
    oldPrice: 450,
    price: 350,
    time: {
      days: 6,
      hours: 18,
      minutes: 14,
    },
    image: './day-item/day-item-3',
  },
  {
    id: uuidv4(),
    name: 'Сок из грейфрукта',
    ingredients: 'Грейфрукт, апельсин, банан, яблоко',
    oldPrice: 220,
    price: 140,
    time: {
      days: 7,
      hours: 14,
      minutes: 17,
    },
    image: './day-item/day-item-4',
  },
];

export default goodsWithDiscount;
