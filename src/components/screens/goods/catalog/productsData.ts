import {IProduct} from 'types'
import uuid from 'utils/generateUUID'

const productsData: IProduct[] = [
  {
    id: uuid(),
    name: 'Овощной салат',
    ingredients: 'Помидоры, зелень, перец, баклажаны',
    price: 700,
    description:
      'Солнечный и яркий салат, который зарядит вас энергией! Идеальное сочетание вкусов и текстур, которое станет украшением любого стола!',
    image: '/food/product-image-1',
  },
  {
    id: uuid(),
    name: 'Картошка с мясом',
    ingredients: 'Картошка, мясо, зелень, горох, морковь',
    description:
      'Сытное и вкусное блюдо для любителей традиционной кухни! Нежная, рассыпчатая картошка, запеченная с сочным, ароматным мясом. Идеальное сочетание для любого случая',
    price: 900,
    image: '/food/product-image-2',
  },
  {
    id: uuid(),
    name: 'Диетическая курица',
    ingredients: 'мясо курицы, помидоры, лимон',
    description:
      'Легкое и полезное блюдо для тех, кто следит за фигурой! Куриное филе, приготовленное на пару или запеченное без масла, сохраняет все свои полезные свойства. Идеально сочетается с овощными гарнирами.',
    price: 600,
    image: '/food/product-image-3',
  },
  {
    id: uuid(),
    name: 'Фруктовый салат',
    ingredients: 'Апельсин, банан, киви, черешня',
    description:
      'Свежий и витаминный десерт для любителей фруктов! Сочетание разноцветных фруктов - клубника, киви, банан, яблоко - заправленный нежным йогуртом или медом. Идеально для легкого перекуса или десерта.',
    price: 500,
    image: '/food/product-image-4',
  },
  {
    id: uuid(),
    name: 'Гречка с горбушой',
    description:
      'Полноценный и полезный обед!Рассыпчатая гречка, приготовленная с нежной горбушей. Идеальное сочетание белков и углеводов, богатое витаминами и микроэлементами.',
    ingredients: 'Гречка, горбуша, помидор, зелень, морковь',
    price: 750,
    image: '/food/product-image-5',
  },
  {
    id: uuid(),
    name: 'Салат с баклажанами',
    description:
      'Острый и вкусный салат с изысканным вкусом! Овощной салат из жареных баклажанов с сочной зеленью, помидорами и острым перечным соусом. Идеально подходит к мясным блюдам.',
    ingredients: 'Помидоры, зелень, картошка, баклажаны',
    price: 800,
    image: '/food/product-image-6',
  },
  {
    id: uuid(),
    name: 'Салат с блинами',
    description:
      'Необычное и вкусное сочетание! Тонкие блины с нежным творожным кремом, свежей ягодкой и немного меда. Идеально для завтрака или легкого перекуса.',
    ingredients: 'Зелень, помидор, блины с мясом',
    price: 650,
    image: '/food/product-image-7',
  },
];

export default productsData;