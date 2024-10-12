function Contacts() {
  return (
    <div className="map__contacts map-contacts">
      <p className="map-contacts__text">
        Наш центр можете отыскать по этому адресу
      </p>
      <div className="map-contacts__info">
        <address className="map-contacts__address">
          улица Багратионосовкая, д. 5
        </address>
        <address className="map-contacts__address">Москва</address>
      </div>
    </div>
  );
}

export default Contacts;
