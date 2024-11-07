import advantages from './data';
import StageItem from './StageItem';
import './Stages.scss';

function Stages() {
  return (
    <section className="stages">
      <div className="container">
        <h2 className="stages__title title">Преимущества</h2>
        <ul className="stages__list">
          {!!advantages.length &&
            advantages.map(({ title, text }, index) => (
              <StageItem key={index} title={title} text={text} />
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Stages;
