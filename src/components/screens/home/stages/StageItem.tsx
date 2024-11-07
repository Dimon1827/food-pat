import { IStages } from "./stages.types";

function StageItem({ title, text }: IStages) {
  return (
    <li className="stages__item">
      <h3 className="stages__subtitle">{title}</h3>
      <p className="stages__text">{text}</p>
    </li>
  );
}

export default StageItem;
