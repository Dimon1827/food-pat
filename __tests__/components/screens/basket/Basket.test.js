import { render, screen } from '@testing-library/react';
import Basket from '@/components/screens/basket/Basket';
import { selectProducts, selectTotalPrice } from '@/redux/products-selectors';
import * as reduxHooks from 'react-redux';
import * as store from '@/redux/store';

jest.mock('react-redux');
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

describe('Basket', () => {
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
  it('Basket renders correctly', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    render(<Basket />);
    expect(screen.getByRole('main')).toMatchSnapshot();
  });
});
