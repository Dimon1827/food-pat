import { screen } from '@testing-library/react';
import { renderWithReactHookForm } from '@/utils/renderWithReactHookForm';
import RadioItem from '@/components/screens/form/questionnaire/task/RadioItem';

const inputElement = {
    id: 'slimming',
    type: 'radio',
    name: 'Похудение',
}

describe('RadioItem', () => {
  it('RadioItem renders correctly as radio', () => {
    renderWithReactHookForm(<RadioItem {...inputElement} />);
    const input = screen.getByRole('radio');
    const listItem = screen.getByRole('listitem');
    const label = screen.getByText('Похудение');
    expect(listItem).toMatchSnapshot();
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveClass('task__input');
    expect(label).toHaveClass('task__label');
  });
});
