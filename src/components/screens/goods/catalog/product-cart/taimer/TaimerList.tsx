import Taimer from './Taimer';
import { ITaimer } from './taimer.types';

function TaimerList({ time }: ITaimer) {
  return (
    <ul className="additional-products__list">
      <Taimer time={time} />
    </ul>
  );
}

export default TaimerList;
