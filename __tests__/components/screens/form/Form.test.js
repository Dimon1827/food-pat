import { render, screen } from '@testing-library/react';
import Form from '@/components/screens/form/Form';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn((callback) => callback),
    formState: { errors: {} },
  }),
}));

describe('Form', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Form should render correctly', () => {
    render(<Form />);
    const form = screen.getByTestId('form-container');
    expect(form).toMatchSnapshot();
  });
});
