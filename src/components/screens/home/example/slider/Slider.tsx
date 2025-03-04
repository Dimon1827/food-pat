import { useState, MouseEvent } from 'react';
import './Slider.scss';

function Slider() {
  // Позития слайдера 
  const [sliderPosition, setSliderPosition] = useState(42);
  // Состояние, указывающее на перетаскивание мыши
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    // Если false, сразу функция завершается
    if (!isDragging) return;

    //Для получения координат компонента (слайдера)
    const rect = e.currentTarget.getBoundingClientRect();

    //Поиск координат x, здесь мы благодаря clientX узнаем координаты по x, куда пользователь повел мышью и от нее отняли кооординату левой части слайдера
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));

    //Здесь перевели значение координаты x в проценты
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

    setSliderPosition(percent);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className="slider" onMouseUp={handleMouseUp} data-testid="slider">
      <div
        className="example__slider-images slider__images"
        onMouseMove={handleMove}
        onMouseDown={handleMouseDown}
        data-testid = "slider-images"
      >
        <div
          className="slider__image-wrapper slider__image-wrapper--before"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <picture>
            <source
              type="image/webp"
              media="(min-width:1280px)"
              srcSet="./assets/images/woman-before-tablet.webp"
              width="584"
              height="737"
            />
            <source
              type="image/webp"
              media="(min-width:768px)"
              srcSet="./assets/images/woman-before-tablet.webp"
              width="584"
              height="737"
            />
            <source
              type="image/webp"
              srcSet="./assets/images/woman-before-mobile.webp"
              width="312"
              height="480"
            />
            <source
              type="image/png"
              media="(min-width:1280px)"
              srcSet="./assets/images/woman-before-tablet.png"
              width="584"
              height="737"
            />
            <source
              type="image/png"
              media="(min-width:768px)"
              srcSet="./assets/images/woman-before-tablet.png"
              width="584"
              height="737"
            />
            <img
              src="./assets/images/woman-before-mobile.png"
              alt="Женщина до"
              className="example__image"
              width="312"
              draggable={false}
              height="480"
            />
          </picture>
        </div>
        <button
          type="button"
          className="example__button"
          style={{
            left: `calc(${sliderPosition}% - 12px)`,
          }}
        >
          <span className="example__button-toogle"></span>
          <span className="visually-hidden">
            Кнопка для изменения пропорций
          </span>
        </button>
        <div className="slider__image-wrapper slider__image-wrapper--after">
          <picture>
            <source
              type="image/webp"
              media="(min-width:1280px)"
              srcSet="./assets/images/woman-after-tablet.webp"
              width="584"
              height="737"
            />
            <source
              type="image/webp"
              media="(min-width:768px)"
              srcSet="./assets/images/woman-after-tablet.webp"
              width="584"
              height="737"
            />
            <source
              type="image/webp"
              srcSet="./assets/images/woman-after-mobile.webp"
              width="312"
              height="480"
            />
            <source
              type="image/png"
              media="(min-width:1280px)"
              srcSet="./assets/images/woman-after-tablet.png"
              width="584"
              height="737"
            />
            <source
              type="image/png"
              media="(min-width:768px)"
              srcSet="./assets/images/woman-after-tablet.png"
              width="584"
              height="737"
            />
            <img
              src="./assets/images/woman-after-mobile.png"
              alt="Женщина до"
              draggable={false}
              className="example__image"
              width="312"
              height="480"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Slider;
