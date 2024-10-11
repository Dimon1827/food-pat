import './Slider.scss'

function Slider() {
  return (
    <div className="slider">
      <div className="example__slider-images slider__images">
        <div
          className="slider__image-wrapper slider__image-wrapper--before"
          style={{ width: '50%' }}
        >
          <picture>
            <source
              type="image/webp"
              media="(min-width:1280px)"
              srcSet="./woman-before-tablet.webp"
              width="584"
              height="737"
            />
            <source
              type="image/webp"
              media="(min-width:768px)"
              srcSet="./woman-before-tablet.webp"
              width="584"
              height="737"
            />
            <source
              type="image/webp"
              srcSet="./woman-before-mobile.webp"
              width="312"
              height="480"
            />
            <source
              type="image/png"
              media="(min-width:1280px)"
              srcSet="./woman-before-tablet.png"
              width="584"
              height="737"
            />
            <source
              type="image/png"
              media="(min-width:768px)"
              srcSet="./woman-before-tablet.png"
              width="584"
              height="737"
            />
            <img
              src="images/woman-before-mobile.png"
              alt="Женщина до"
              className="example__image"
              width="312"
              height="480"
            />
          </picture>
        </div>
        <button type="button" className="example__button">
          <span className="example__button-toogle"></span>
          <span className="visually-hidden">Кнопка для изменения пропорций</span>
        </button>
        <div className="slider__image-wrapper slider__image-wrapper--after">
          <picture>
            <source
              type="image/webp"
              media="(min-width:1280px)"
              srcSet="./woman-after-tablet.webp"
              width="584"
              height="737"
            />
            <source
              type="image/webp"
              media="(min-width:768px)"
              srcSet="./woman-after-tablet.webp"
              width="584"
              height="737"
            />
            <source
              type="image/webp"
              srcSet="./woman-after-mobile.webp"
              width="312"
              height="480"
            />
            <source
              type="image/png"
              media="(min-width:1280px)"
              srcSet="./woman-after-tablet.png"
              width="584"
              height="737"
            />
            <source
              type="image/png"
              media="(min-width:768px)"
              srcSet="./woman-after-tablet.png"
              width="584"
              height="737"
            />
            <img
              src="./woman-after-mobile.png"
              alt="Женщина до"
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
