import { screen } from '@testing-library/react';
import { renderWithReactHookForm } from '@/utils/renderWithReactHookForm';
import AdditionallyItem from '@/components/screens/form/questionnaire/additionally/AdditionallyItem';

const inputElement = {
  id: 'milk',
  type: 'checkbox',
  name: 'Молоко',
};

describe('AdditionallyItem', () => {
  it('AdditionallyItem renders correctly as checkbox', () => {
    renderWithReactHookForm(<AdditionallyItem {...inputElement} />);
    const input = screen.getByRole('checkbox');
    const listItem = screen.getByRole('listitem');
    const label = screen.getByText('Молоко');
    expect(listItem).toMatchSnapshot();
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveClass('additionally__input');
    expect(label).toHaveClass('additionally__label');
  });
});
