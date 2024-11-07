import { IExample } from "./example.types";

function ExampleItem({ title, number }: IExample) {
  return (
    <div className="example__item">
      <dt className="example__description">
        <span className="example__description-text">{title}</span>
      </dt>
      <dd className="example__number">{number}</dd>
    </div>
  );
}

export default ExampleItem;
