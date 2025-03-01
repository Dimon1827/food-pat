import Home from '@/components/screens/home/Home';
import { renderWithRouter } from '@/utils/renderWithRouter';

describe('Home', () => {
  it('Home renders correctly', () => {
    const { getByTestId } = renderWithRouter(<Home />);
    expect(getByTestId('home')).toMatchSnapshot();
  });
});
