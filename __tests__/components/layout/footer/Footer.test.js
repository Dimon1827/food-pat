import { screen } from '@testing-library/react';
import Footer from '@/components/layout/footer/Footer';
import { renderWithRouter } from '@/utils/renderWithRouter';

describe('Footer', () => {
  it('Footer renders correctly', () => {
    renderWithRouter(<Footer />);
    expect(screen.getByRole('contentinfo')).toMatchSnapshot();
  });
});
