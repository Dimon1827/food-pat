import BasketList from '@/components/screens/basket/BasketList';
import * as actions from '@/redux/slice/productsSlice';
import * as store from '@/redux/store';
import { fireEvent, render, screen } from '@testing-library/react';
import * as reduxHooks from 'react-redux';
import { selectProducts, selectTotalPrice } from '@/redux/products-selectors';

jest.mock('react-redux');
const dispatch = jest.fn();
const mockedDispatch = jest.spyOn(store, 'useAppDispatch');
const mockedSelector = jest.spyOn(reduxHooks, 'useSelector');
const ArrayProducts = [
  {
    id: '80e90d1a-31d4-43dd-9eee-60a3bc2f56ca',
    name: 'Диетическая курица',
    price: 600,
    image: '/assets/images/product-image-3',
    isChecked: false,
    quantity: 1,
  },
  {
    id: '80e90d1a-31d4-43dd-9eee-60a3bc2f56hf',
    name: 'Диетическая курица',
    price: 600,
    image: '/assets/images/product-image-2',
    isChecked: false,
    quantity: 1,
  },
];

describe('BasketList', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(() => {
    mockedSelector.mockImplementation((selector) => {
      if (selector === selectProducts) {
        return ArrayProducts;
      }
      if (selector === selectTotalPrice) {
        return 600;
      }
      return null;
    });
  });

  it('BasketList should render correctly', () => {
    mockedDispatch.mockReturnValue(dispatch);
    render(<BasketList />);
    expect(screen.getByTestId('basket-list')).toMatchSnapshot();
  });
  it('Button should clear all elements', () => {
    mockedDispatch.mockReturnValue(dispatch);
    render(<BasketList />);
    const mockClearAll = jest.spyOn(actions, 'clearAll');
    const ClearAllButton = screen.getByTestId('clear-all');
    fireEvent.click(ClearAllButton);
    expect(dispatch).toHaveBeenCalled();
    expect(mockClearAll).toHaveBeenCalledTimes(1);
  });
  it('Button should delete selected products', () => {
    mockedDispatch.mockReturnValue(dispatch);
    render(<BasketList />);
    const mockDeleteSelectedProducts = jest.spyOn(
      actions,
      'deleteSelectedProducts'
    );
    const deleteSelectedButton = screen.getByText('Удалить выбранные товары');
    fireEvent.click(deleteSelectedButton);
    expect(dispatch).toHaveBeenCalled();
    expect(mockDeleteSelectedProducts).toHaveBeenCalledTimes(1);
  });
  it('Should be appear text basket is empty if products is zero', () => {
    mockedDispatch.mockReturnValue(dispatch);
    mockedSelector.mockImplementation((selector) => {
      if (selector === selectProducts) {
        return [];
      }
      if (selector === selectTotalPrice) {
        return 0;
      }
      return null;
    });

    render(<BasketList />);
    const text = screen.getByText('Корзина пуста');
    expect(text).toBeInTheDocument();
  });
});
