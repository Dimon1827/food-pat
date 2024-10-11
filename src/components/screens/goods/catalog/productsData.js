import { v4 as uuidv4 } from 'uuid';

const productsData = [
  {
    id: uuidv4(),
    name: 'Овощной салат',
    ingredients: 'Помидоры, зелень, перец, баклажаны',
    price: 700,
    image: './food/product-image-1',
  },
  {
    id: uuidv4(),
    name: 'Картошка с мясом',
    ingredients: 'Картошка, мясо, зелень, горох, морковь',
    price: 900,
    image: './food/product-image-2',
  },
  {
    id: uuidv4(),
    name: 'Диетическая курица',
    ingredients: 'мясо курицы, помидоры, лимон',
    price: 600,
    image: './food/product-image-3',
  },
  {
    id: uuidv4(),
    name: 'Фруктовый салат',
    ingredients: 'Апельсин, банан, киви, черешня',
    price: 500,
    image: './food/product-image-4',
  },
  {
    id: uuidv4(),
    name: 'Гречка с горбушой',
    ingredients: 'Гречка, горбуша, помидор, зелень, морковь',
    price: 750,
    image: './food/product-image-5',
  },
  {
    id: uuidv4(),
    name: 'Салат с баклажанами',
    ingredients: 'Помидоры, зелень, картошка, баклажаны',
    price: 800,
    image: './food/product-image-6',
  },
  {
    id: uuidv4(),
    name: 'Салат с блинами',
    ingredients: 'Зелень, помидор, блины с мясом',
    price: 650,
    image: './food/product-image-7',
  },
];

export default productsData;
