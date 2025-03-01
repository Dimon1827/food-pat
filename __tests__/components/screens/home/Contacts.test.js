import { render } from '@testing-library/react';
import Contacts from '@/components/screens/home/map/contacts/Contacts';

describe('Contacts', () => {
  it('Contacts renders correctly', () => {
    const { getByTestId } = render(<Contacts />);
    expect(getByTestId('contacts')).toMatchSnapshot();
  });
});