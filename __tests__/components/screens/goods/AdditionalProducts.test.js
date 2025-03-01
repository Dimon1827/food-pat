import AdditionalProducts from '@/components/screens/goods/additional-products/AdditionalProducts';
import { renderWithRouter } from '@/utils/renderWithRouter';
import * as store from '@/redux/store';

const mockedDispatch = jest.spyOn(store, 'useAppDispatch');

describe('Additional products', () => {
  it('ProductCard renders correctly', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    const { getByTestId } = renderWithRouter(<AdditionalProducts />);
    expect(getByTestId('additional-products')).toMatchSnapshot();
  });
});
