import { renderWithRouter } from '@/utils/renderWithRouter';
import { screen } from '@testing-library/react';
import * as store from '@/redux/store';
import Goods from '@/components/screens/goods/Goods';

const mockedDispatch = jest.spyOn(store, 'useAppDispatch');

describe('Goods', () => {
  it('Goods renders correctly', () => {
    mockedDispatch.mockReturnValue(jest.fn());
    renderWithRouter(<Goods />);
    expect(screen.getByRole('main')).toMatchSnapshot();
  });
});
