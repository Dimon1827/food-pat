import {  screen } from '@testing-library/react';
import SelectInput from '@/components/ui/selectInput/SelectInput';
import { renderWithReactHookForm } from '@/utils/renderWithReactHookForm';

const inputElement = {
  id: 'milk',
  type: 'checkbox',
  name: 'Молоко',
};

describe('SelectInput', () => {
  it('SelectInput renders correctly as checkbox', () => {
    renderWithReactHookForm(<SelectInput {...inputElement} />);
    const input = screen.getByRole('checkbox');
    const label = screen.getByText('Молоко');
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveClass('additionally__input');
    expect(label).toHaveClass('additionally__label');
  });
  it('SelectInput renders correctly as radio button', () => {
    const {container} =renderWithReactHookForm(<SelectInput {...inputElement} type='radio' />);
    expect(screen.getByRole('radio')).toBeInTheDocument();
    expect(screen.getByText('Молоко')).toBeInTheDocument();
    const input = container.querySelector('input[name="task"]');
    expect(input).toBeInTheDocument();
  });
});
