import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/button/Button';
import './Hero.scss';

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <h1 className="hero__title title">Магазин здорового питания</h1>
          <p className="hero__text">Поможем подобрать оптимальную программу</p>
          <picture>
            <source
              type="image/webp"
              media="(min-width:1280px)"
              srcSet="
                    ./hero-desktop@1x.webp,
                    ./hero-desktop@2x.webp 2x
                  "
              width="552"
              height="499"
            />
            <source
              type="image/webp"
              media="(min-width:768px)"
              srcSet="
                    ./hero-tablet@1x.webp,
                    ./hero-tablet@2x.webp 2x
                  "
              width="300"
              height="300"
            />
            <source
              type="image/webp"
              srcSet="
                    ./hero-mobile@1x.webp,
                    ./hero-mobile@2x.webp 2x
                  "
              width="280"
              height="270"
            />
            <source
              type="image/png"
              media="(min-width:1280px)"
              srcSet="
                    ./hero-desktop@1x.png,
                    ./hero-desktop@2x.png 2x
                  "
              width="552"
              height="499"
            />
            <source
              type="image/png"
              media="(min-width:768px)"
              srcSet="
                    ./hero-tablet@1x.png,
                    ./hero-tablet@2x.png 2x
                  "
              width="300"
              height="300"
            />
            <img
              src="./hero-mobile@1x.png"
              srcSet="./hero-mobile@2x.png 2x"
              width="280"
              height="270"
              alt="Супергерой"
              className="hero__image"
            />
          </picture>
          <Button onClick={() => navigate('/form')} className="hero__button">
            подобрать
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
