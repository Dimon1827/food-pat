import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from '@/utils/renderWithRouter';
import * as reduxHooks from 'react-redux'
import data from '@/components/layout/navigation/navigation-data';
import Navigation from '@/components/layout/navigation/Navigation';
import NavigationItem from '@/components/layout/navigation/navigation-item/NavigationItem';

jest.mock('react-redux');

describe('Navigation', () => {
  it('Navigation renders correctly', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByRole('navigation')).toMatchSnapshot();
  });
  it('Navigation should open window when click hamburger and close when again click', () => {
    renderWithRouter(<Navigation />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByRole('navigation')).toHaveClass('navigation--opened');
    fireEvent.click(button);
    expect(screen.getByRole('navigation')).toHaveClass('navigation--closed');
  });
  it('Navigation should correctly renders all navigation elements', () => {
    renderWithRouter(<Navigation />);
    expect(screen.getAllByRole('listitem')).toHaveLength(data.length);
  });
  it('Navigation item badge should correctly renders the quantity of orders', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(4);
    const component = renderWithRouter(<NavigationItem last={true} />);
    expect(component).toMatchSnapshot();
    expect(screen.getByRole('listitem')).toHaveClass(
      'navigation__item--basket'
    );
  });
});
