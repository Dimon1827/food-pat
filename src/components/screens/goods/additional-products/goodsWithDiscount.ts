import { IProductWithDiscounts } from "@/types";
import generateUUID from "@/utils/generateUUID";

const goodsWithDiscount: IProductWithDiscounts[] = [
  {
    id: generateUUID(),
    name: 'Салат с фруктами',
    ingredients: 'Апельсин, зелень, огурцы, банан',
    description:
      'Свежий и витаминный десерт, который зарядит вас энергией! Сочетание разноцветных фруктов - клубника, киви, банан, яблоко, груша - заправленный нежным йогуртом или медом. Идеально для легкого перекуса или десерта',
    oldPrice: 500,
    price: 400,
    time: {
      days: 3,
      hours: 11,
      minutes: 18,
    },
    image: './assets/images/day-item-1',
  },
  {
    id: generateUUID(),
    name: 'Сок из апельсина',
    ingredients: 'Апельсин, грейфрукт',
    description:
      'Насыщенный витамином С, освежающий и бодрящий напиток! Свежевыжатый сок из спелых апельсинов, который поднимет настроение и зарядит энергией. Идеально для завтрака или перекуса.',
    oldPrice: 200,
    price: 120,
    time: {
      days: 5,
      hours: 12,
      minutes: 30,
    },
    image: './assets/images/day-item-2',
  },
  {
    id: generateUUID(),
    name: 'Салат с лимонным коктелем',
    ingredients: 'Горох, лимон, апельсин',
    description:
      'Острый и освежающий салат, который добавит пикантности вашему столу! Овощной салат с лимонным соком, отличающийся пикантным вкусом и яркой кислинкой. Идеально подходит к мясным блюдам.',
    oldPrice: 450,
    price: 350,
    time: {
      days: 6,
      hours: 18,
      minutes: 14,
    },
    image: './assets/images/day-item-3',
  },
  {
    id: generateUUID(),
    name: 'Сок из грейфрукта',
    ingredients: 'Грейфрукт, апельсин, банан, яблоко',
    description:
      'Горьковато-сладкий напиток с уникальным ароматом, богатый витаминами! Свежевыжатый сок из спелого грейпфрута, который отличается сбалансированным вкусом и освежающим эффектом. Идеально для завтрака или обеда.',
    oldPrice: 220,
    price: 140,
    time: {
      days: 7,
      hours: 14,
      minutes: 17,
    },
    image: './assets/images/day-item-4',
  },
];

export default goodsWithDiscount;
