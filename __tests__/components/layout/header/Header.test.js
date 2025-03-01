import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/utils/renderWithRouter';
import Header from '@/components/layout/header/Header';
import * as reduxHooks from 'react-redux';
import { useLocation } from 'react-router-dom';

jest.mock('react-redux');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));


describe('Header', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Header renders correctly', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(4);
    useLocation.mockReturnValue({ pathname: '/some-other-route' });
    renderWithRouter(<Header />);
    expect(screen.getByTestId('header-container')).toMatchSnapshot();
  });
  it('Header doesnt have class header--container if route in home', () => {
    jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(4);
    useLocation.mockReturnValue({ pathname: '/' });
    renderWithRouter(<Header />);
    const headerContainer = screen.getByTestId('header-container');
    expect(headerContainer.classList.contains('header--container')).toBe(true);

  });
});
