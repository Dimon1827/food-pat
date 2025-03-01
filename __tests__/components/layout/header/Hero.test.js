import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/utils/renderWithRouter';
import Hero from '@/components/layout/header/hero/Hero';

describe('Hero', () => {
  it('Hero renders correctly', () => {
    renderWithRouter(<Hero />);
    expect(screen.getByTestId('Hero')).toMatchSnapshot();
  });
});
