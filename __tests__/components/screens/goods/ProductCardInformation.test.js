import ProductCardInformation from '@/components/screens/goods/catalog/product-cart/ProductCardInformation';
import * as actions from '@/redux/slice/productsSlice';
import * as store from '@/redux/store';
import { renderWithRouter } from '@/utils/renderWithRouter';
import { fireEvent, screen } from '@testing-library/react';

const mockedDispatch = jest.spyOn(store, 'useAppDispatch');

const basketProductInformation = {
  id: '123',
  name: 'Сок из апельсина',
  price: '120',
  oldPrice: '200',
  image: './assets/images/day-item-2',
  isChecked: false,
  quantity: 1,
};

const productInformation = {
  name: 'Сок из апельсина',
  ingredients: 'Апельсин, грейфрукт',
  price: '120',
  oldPrice: '200',
  image: './assets/images/day-item-2',
};

const productWithoutOldPriceInformation = {
  name: 'Сок из апельсина',
  ingredients: 'Апельсин, грейфрукт',
  price: '120',
  image: './assets/images/day-item-2',
};

describe('ProductCardInformation', () => {
  it('ProductCardInformation renders correctly', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    renderWithRouter(<ProductCardInformation {...productInformation} />);
    expect(screen.getByTestId('product-card-information')).toMatchSnapshot();
  });
  it('should dispatch actions', () => {
    const dispatch = jest.fn();
    mockedDispatch.mockReturnValue(dispatch);
    const mockedAddProduct = jest.spyOn(actions, 'addProduct');
    const mockedCalculateAll = jest.spyOn(actions, 'calculateAll');

    renderWithRouter(
      <ProductCardInformation id="123" {...productInformation} />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAddProduct).toHaveBeenCalledWith(basketProductInformation);
    expect(mockedCalculateAll).toHaveBeenCalledTimes(1);
  });
  it('ProductCardInformation doesnt have information about old price', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    renderWithRouter(
      <ProductCardInformation {...productWithoutOldPriceInformation} />
    );
    expect(screen.queryByText('200 ₽')).not.toBeInTheDocument();
  });
});
