import { Items } from "./navigation.types";

const items: Items[] = [
  {
    name: 'Главная',
    to: '/',
  },
  {
    name: 'Каталог продукции',
    to: '/catalog',
  },
  {
    name: 'Подбор программы',
    to: '/form',
  },
  {
    name: 'Корзина',
    to: '/basket',
    last: true,
  },
];

export default items;
