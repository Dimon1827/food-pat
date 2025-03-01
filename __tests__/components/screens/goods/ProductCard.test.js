import ProductCard from '@/components/screens/goods/catalog/product-cart/ProductCard';
import { renderWithRouter } from '@/utils/renderWithRouter';
import * as store from '@/redux/store';
import { screen } from '@testing-library/react';

const ProductCardInformation = {
  id: '123',
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
};

const mockedDispatch = jest.spyOn(store, 'useAppDispatch');

describe('ProductCard', () => {
  it('ProductCard renders correctly', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    renderWithRouter(
      <ProductCard {...ProductCardInformation} />
    );
    expect(screen.getByTestId('product-card')).toMatchSnapshot();
  });
  it('ProductCard shouldnt have render taimer component without old price and should have another classes', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    renderWithRouter(
      <ProductCard {...ProductCardInformation} oldPrice={null} />
    );
    expect(screen.getByTestId('product-card')).not.toHaveClass(
      'additional-products__card'
    );
    expect(screen.getByRole('img')).not.toHaveClass(
      'additional-products__image'
    );
    expect(screen.queryByTestId('taimer')).not.toBeInTheDocument();
  });
});
