import { screen } from '@testing-library/react';
import { renderWithReactHookForm } from '@/utils/renderWithReactHookForm';
import Tasks from '@/components/screens/form/questionnaire/task/Tasks';

describe('Tasks', () => {
  it('Tasks renders correctly as radio list', () => {
    renderWithReactHookForm(<Tasks />);
    const list = screen.getByRole('group');
    const listItem = screen.getAllByRole('listitem');
    const input = screen.getAllByRole('radio');
    expect(list).toMatchSnapshot();
    expect(listItem).toHaveLength(3);
    expect(input).toHaveLength(3);
  });
});
