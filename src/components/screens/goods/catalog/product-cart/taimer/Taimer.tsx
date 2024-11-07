import { ITaimer } from "./taimer.types";

function Taimer({ time }: ITaimer) {
  return (
    <>
      <li className="additional-products__item">
        <span className="additional-products__number">{time?.days}</span>
        <p className="additional-products__text">дня</p>
      </li>
      <li className="additional-products__item">
        <span className="additional-products__number">{time?.hours}</span>
        <p className="additional-products__text">часов</p>
      </li>
      <li className="additional-products__item">
        <span className="additional-products__number">{time?.minutes}</span>
        <p className="additional-products__text">минут</p>
      </li>
    </>
  );
}

export default Taimer;
