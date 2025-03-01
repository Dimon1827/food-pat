import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Questionnaire from '@/components/screens/form/questionnaire/Questionnaire';
import React from 'react';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn((callback) => callback),
    formState: { errors: {} },
  }),
}));

describe('Questionnaire', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Questionnaire should render correctly', () => {
    render(<Questionnaire />);
    const informationItems = screen.getAllByTestId('information-item');
    const telephoneIcon = screen.getByTestId('telephone');
    const emailIcon = screen.getByTestId('email');
    const questionnaire = screen.getByTestId('questionnaire');
    expect(questionnaire).toMatchSnapshot();
    expect(informationItems.length).toBe(5);
    expect(telephoneIcon).toBeInTheDocument();
    expect(emailIcon).toBeInTheDocument();
  });
  it('The form should be submitted if all the information has been entered', async () => {
    const { getByTestId } = render(<Questionnaire />);
    const form = getByTestId('form');
    const name = screen.getByPlaceholderText('Елена');
    const weight = screen.getByPlaceholderText('70');
    const age = screen.getByPlaceholderText('35');
    const radioButton = screen.getByDisplayValue('slimming');
    const email = screen.getByPlaceholderText('a.drogalov2015@yandex.ru');
    const telephone = screen.getByPlaceholderText('8 (909) 512-34-21');
    fireEvent.change(name, { target: { value: 'Антон' } });
    fireEvent.blur(name);
    fireEvent.change(weight, { target: { value: '50' } });
    fireEvent.blur(weight);
    fireEvent.click(radioButton, { target: { checked: true } });
    fireEvent.change(age, { target: { value: '35' } });
    fireEvent.blur(age);
    fireEvent.change(email, { target: { value: 'a.drogalov2015@yandex.ru' } });
    fireEvent.blur(email);
    fireEvent.change(telephone, {
      target: { value: '89516361542' },
    });
    fireEvent.blur(telephone);
    fireEvent.submit(form);

    await waitFor(() => {
      const snackbar = screen.getByRole('alert');
      expect(snackbar).toBeInTheDocument();
      expect(snackbar).toHaveTextContent('Твои данные успешно отправлены');
    });
  });
  it('should call setIsOpen(false) when Snackbar is closed', async () => {
    const setIsOpen = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValue([true, setIsOpen]);
    render(<Questionnaire />);

    const form = screen.getByTestId('form');
    fireEvent.submit(form);

    await waitFor(() => {
      const snackbar = screen.getByRole('alert');
      expect(snackbar).toBeInTheDocument();
    });

    const snackbar = screen.getByRole('alert');
    fireEvent.keyDown(snackbar, { key: 'Escape', code: 'Escape' });

    await waitFor(() => {
      expect(setIsOpen).toHaveBeenCalledWith(false);
    });
  });
});
