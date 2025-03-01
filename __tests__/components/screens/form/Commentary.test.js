import { screen } from '@testing-library/react';
import { renderWithReactHookForm } from '@/utils/renderWithReactHookForm';
import Commentary from '@/components/screens/form/questionnaire/commentary/Commentary';
import userEvent from '@testing-library/user-event';
import React from 'react';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    register: jest.fn(),
    formState: {
      errors: {
        comment: {
          message: 'Сообщение превысило кол-во допустимых букв',
        },
      },
    },
  }),
}));

describe('Commentary', () => {
  it('Commentary renders correctly', () => {
    renderWithReactHookForm(<Commentary />);
    expect(screen.getByTestId('commentary')).toMatchSnapshot();
  });
  it('The number of letters must be counted correctly', async () => {
    renderWithReactHookForm(<Commentary />);
    const placeholder = 'Расскажите о вас. Что предпочитаете и т.д';
    const text = 'Привет';
    const textarea = screen.getByPlaceholderText(placeholder);
    await userEvent.type(textarea, text);
    expect(textarea).toHaveValue(text);
    const counter = screen.getByText('Осталось букв: 194');
    expect(counter).toBeInTheDocument();
  });
  it('should display an error message when the maximum length is exceeded', async () => {
    const setRemainLetters = jest.fn();
    const placeholder = 'Расскажите о вас. Что предпочитаете и т.д';
    const text = 'b'.repeat(300);
    jest
      .spyOn(React, 'useState')
      .mockImplementation(() => [text, setRemainLetters]);

    
    const errorMessage = 'Сообщение превысило кол-во допустимых букв';
    
    renderWithReactHookForm(<Commentary />);
    const textarea = screen.getByPlaceholderText(placeholder);
    await userEvent.type(textarea, text);
    const errorElement = await screen.findByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });
});
