import { fireEvent, screen } from '@testing-library/react';
import { renderWithRouter } from '@/utils/renderWithRouter';
import Service from '@/components/screens/home/service/Service';
import * as router from 'react-router';


describe('Service', () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Service should renders correctly', () => {
    renderWithRouter(<Service />);
    expect(screen.getByTestId('service')).toMatchSnapshot();
  });
  it('Button should navigate user in catalog page', () => {
    renderWithRouter(<Service />);
    const buttons = screen.getAllByText('Купить');
    const button = buttons[0];
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/catalog');
  });
});
