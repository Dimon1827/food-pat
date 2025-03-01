import { screen, render } from '@testing-library/react';
import Stages from '@/components/screens/home/stages/Stages';

describe('Stages', () => {
  it('Stages renders correctly', () => {
    render(<Stages />);
    const title = screen.getByText('Качество');
    const text = screen.getByText(
      'Вкусно, полезно, доступно - здоровое питание для всех'
    );
    expect(screen.getByTestId('stages')).toMatchSnapshot();
    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
