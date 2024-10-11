function Taimer({ time }) {
  return (
    <>
      <li class="additional-products__item">
        <span class="additional-products__number">{time.days}</span>
        <p class="additional-products__text">дня</p>
      </li>
      <li class="additional-products__item">
        <span class="additional-products__number">{time.hours}</span>
        <p class="additional-products__text">часов</p>
      </li>
      <li class="additional-products__item">
        <span class="additional-products__number">{time.minutes}</span>
        <p class="additional-products__text">минут</p>
      </li>
    </>
  );
}

export default Taimer;
