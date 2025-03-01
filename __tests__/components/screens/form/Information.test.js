import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithReactHookForm } from '@/utils/renderWithReactHookForm';
import contactsData from '@/components/screens/form/questionnaire/information/contactsData';
import Information from '@/components/screens/form/questionnaire/information/Information';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    register: jest.fn(),
    formState: {
      errors: {
        email: {
          message: 'Ваш email введен неправильно',
        },
        telephone: {
          message: 'Ваш телефон введен неверно',
        },
      },
    },
  }),
}));

describe('input', () => {
  it('Information should render correctly', () => {
    renderWithReactHookForm(<Information contactsData={contactsData} />);
    const informationItems = screen.getAllByTestId('information-item');
    expect(informationItems.length).toBe(contactsData.length);
    const telephoneIcon = screen.getByTestId('telephone');
    expect(telephoneIcon).toBeInTheDocument();
    const emailIcon = screen.getByTestId('email');
    expect(emailIcon).toBeInTheDocument();
  });
  it('Error with email should render correctly', async () => {
    renderWithReactHookForm(<Information contactsData={contactsData} />);
    const input = screen.getByPlaceholderText('a.drogalov2015@yandex.ru');
    const text = 'a.drogalov2000';
    fireEvent.change(input, { target: { value: text } });
    fireEvent.blur(input);

    await waitFor(() => {
      const errorElement = screen.getByText('Ваш email введен неправильно');
      expect(errorElement).toBeInTheDocument();
    });
  });
  it('Error with telephone should render correctly', async () => {
    renderWithReactHookForm(<Information contactsData={contactsData} />);
    const input = screen.getByPlaceholderText('8 (909) 512-34-21');
    const text = '8';
    fireEvent.change(input, { target: { value: text } });
    fireEvent.blur(input);

    await waitFor(() => {
      const errorElement = screen.getByText('Ваш телефон введен неверно');
      expect(errorElement).toBeInTheDocument();
    });
  });
});
