import Contacts from './contacts/Contacts';
import './Map.scss';

function Map() {
  return (
    <section className="map">
      <div className="container">
        <h2 className="visually-hidden">Контакты</h2>
        <Contacts />
      </div>
      <picture>
        <source
          type="image/webp"
          media="(min-width:1280px)"
          srcSet="
                images/location-desktop@1x.webp,
                images/location-desktop@2x.webp 2x
              "
          width="1440"
          height="400"
        />
        <source
          type="image/webp"
          media="(min-width:768px)"
          srcSet="
                images/location-tablet@1x.webp,
                images/location-tablet@2x.webp 2x
              "
          width="768"
          height="400"
        />
        <source
          type="image/webp"
          srcSet="
                images/location-mobile@1x.webp,
                images/location-mobile@2x.webp 2x
              "
          width="320"
          height="362"
        />
        <source
          type="image/png"
          media="(min-width:1280px)"
          srcSet="
                images/location-desktop@1x.png,
                images/location-desktop@2x.png 2x
              "
          width="1440"
          height="400"
        />
        <source
          type="image/png"
          media="(min-width:768px)"
          srcSet="
                images/location-tablet@1x.png,
                images/location-tablet@2x.png 2x
              "
          width="768"
          height="400"
        />
        <img
          src="images/location-mobile@1x.png"
          srcSet="images/location-mobile@2x.png 2x"
          alt="Местоположение офиса"
          className="map__image"
          width="320"
          height="362"
        />
      </picture>
      <iframe
        className="map__interactive-location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1888.5454630863453!2d37.50522796070521!3d55.74336458360478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495835c03ae5%3A0x6d69a3b0825233a5!2sSky%20Karting!5e0!3m2!1sru!2sru!4v1723552429572!5m2!1sru!2sru"
        height="560"
        style={{ border: 0 }}
        allowFullScreen
        title="Офис компании по адресу ул. Большая Конюшенная, д.19/8, Санкт-Петербург"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Map;
