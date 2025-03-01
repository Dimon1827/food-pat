import Slider from '@/components/screens/home/example/slider/Slider';
import { screen, render, fireEvent } from '@testing-library/react';
import React from 'react';



describe('Slider', () => {
  it('Slider renders correctly', () => {
    render(<Slider />);
    expect(screen.getByTestId('slider')).toMatchSnapshot();
  });
  it('Slider button should have position is 42%', () => {
    render(<Slider />);
    const sliderButton = screen.getByRole('button', {
      name: /Кнопка для изменения пропорций/,
    });

    expect(sliderButton).toHaveStyle({ left: 'calc(42% - 12px)' });
  });
  it('Slider should update button if button is down and move', () => {
    render(<Slider />);
    const sliderImages = screen.getByTestId('slider-images');
    const sliderButton = screen.getByRole('button', {
      name: /Кнопка для изменения пропорций/,
    });
    fireEvent.mouseDown(sliderImages);
    fireEvent.mouseMove(sliderImages, { client: 100 });
    fireEvent.mouseUp(sliderImages);
    expect(sliderButton).not.toHaveStyle({ left: 'calc(42% - 12px)' });
  });
  it('Slider doesnt should change a location of button, if button doesnt down', () => {
    render(<Slider />);
    const sliderImages = screen.getByTestId('slider-images');

    const setIsDragging = jest.fn();
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [false, setIsDragging]);
    fireEvent.mouseMove(sliderImages, { client: 100 });
    expect(setIsDragging).not.toHaveBeenCalled();
  });
});
