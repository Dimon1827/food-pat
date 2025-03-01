import Copyright from '@/components/layout/footer/copyright/Copyright';
import { screen, render } from '@testing-library/react';

describe('Copyright', () => {
  it('copyright renders correctly', () => {
    render(<Copyright />);
    expect(screen.getByTestId('copyright')).toMatchSnapshot();
  });
});
