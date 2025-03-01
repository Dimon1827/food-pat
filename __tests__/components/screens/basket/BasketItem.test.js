import BasketItem from '@/components/screens/basket/BasketItem';
import * as actions from '@/redux/slice/productsSlice';
import * as store from '@/redux/store';
import { renderWithRouter } from '@/utils/renderWithRouter';
import { fireEvent, screen } from '@testing-library/react';

const BasketInformation = {
  id: '123',
  name: 'Салат с фруктами',
  oldPrice: 500,
  price: 400,
  image: './assets/images/day-item-1',
  isChecked: false,
  quantity: 1,
};

const mockedDispatch = jest.spyOn(store, 'useAppDispatch');
const dispatch = jest.fn();

describe('BasketItem', () => {
  beforeEach(() => {
    mockedDispatch.mockReturnValue(dispatch);
    renderWithRouter(<BasketItem {...BasketInformation} />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('BasketItem should render correctly', () => {
    expect(screen.getByRole('listitem')).toMatchSnapshot();
  });
  it('Delete button should work correctly', () => {
    const mockDeleteProduct = jest.spyOn(actions, 'deleteProduct');
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockDeleteProduct).toHaveBeenCalledWith('123');
  });
  it('Checkbox should be checked and unchecked', () => {
    const mockToggleProduct = jest.spyOn(actions, 'toggleProduct');
    const toggleButton = screen.getByTestId('toggle-button');
    expect(toggleButton).not.toHaveClass('basket__checked');
    fireEvent.click(toggleButton);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockToggleProduct).toHaveBeenCalledWith('123');
  });
  it('Button should increment', () => {
    const mockIncrementQuantity = jest.spyOn(actions, 'incrementQuantity');
    const incrementButton = screen.getByTestId('button-increment');
    fireEvent.click(incrementButton);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockIncrementQuantity).toHaveBeenCalledWith('123');
  });
  it('Button should decrement', () => {
    const mockDecrementQuantity = jest.spyOn(actions, 'decrementQuantity');
    const toggleButton = screen.getByTestId('button-decrement');
    fireEvent.click(toggleButton);
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(mockDecrementQuantity).toHaveBeenCalledWith('123');
  });
  it('image should be png if item has old price', () => {
    const image = screen.getByRole('img');
    expect(image.src).toContain('.png')
    expect(image.src).not.toContain('.jpg')
  })
});
