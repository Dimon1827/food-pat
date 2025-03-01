import { render, screen } from '@testing-library/react';
import TaimerList from '@/components/screens/goods/catalog/product-cart/taimer/TaimerList';

const time = {
  days: 3,
  hours: 11,
  minutes: 18,
};

describe('TaimerList', () => {
  it('TaimerList renders correctly', () => {
    render(<TaimerList time={time} />);

    expect(screen.getByRole('list')).toMatchSnapshot();
  });
  it('TaimerList should render null if time is null or undefined', () => {
    render(<TaimerList/>);

    const timeElement = screen.queryByText(/./, {
      selector: '.additional-products__number',
    }); 
    expect(timeElement).toBeNull();
  });
});
