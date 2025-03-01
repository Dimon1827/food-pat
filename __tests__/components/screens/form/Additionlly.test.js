import { screen } from '@testing-library/react';
import { renderWithReactHookForm } from '@/utils/renderWithReactHookForm';
import Additionally from '@/components/screens/form/questionnaire/additionally/Additionally';



describe('Additionally', () => {
  it('Additionally renders correctly as checkbox', () => {
    renderWithReactHookForm(<Additionally />);
    const list = screen.getByTestId('additionally');
    const listItem = screen.getAllByRole('listitem');
    const input = screen.getAllByRole('checkbox');
    expect(list).toMatchSnapshot();
    expect(listItem).toHaveLength(4);
    expect(input).toHaveLength(4);
  });
});
