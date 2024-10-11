import Taimer from './Taimer';

function TaimerList({ time }) {
  return (
    <ul class="additional-products__list">
      <Taimer time={time} />
    </ul>
  );
}

export default TaimerList;
