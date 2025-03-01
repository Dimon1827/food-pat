import { renderWithRouter } from '@/utils/renderWithRouter';
import { screen } from '@testing-library/react';
import Catalog from '@/components/screens/goods/catalog/Catalog';
import * as store from '@/redux/store';

const mockedDispatch = jest.spyOn(store, 'useAppDispatch');


describe('Catalog', () => {
  it('Catalog renders correctly', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    renderWithRouter(<Catalog />);
    expect(screen.getByTestId('catalog')).toMatchSnapshot();
  });
});
