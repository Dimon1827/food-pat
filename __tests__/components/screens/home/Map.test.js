import { render } from '@testing-library/react';
import Map from '@/components/screens/home/map/Map';

describe('Map', () => {
  it('Map renders correctly', () => {
    const { getByTestId } = render(<Map />);
    expect(getByTestId('map')).toMatchSnapshot();
  });
});
