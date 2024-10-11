import './Example.scss';
import Slider from './slider/Slider';
import exampleDetails from './example-data';
import ExampleItem from './ExampleItem';

function Example() {
  return (
    <section className="example">
      <div className="container example__container">
        <div className="example__wrapper">
          <h2 className="example__title title">Пример</h2>
          <p className="example__text">
            “С продуктами Nest я легко составила здоровое меню! Качество и вкус
            на высшем уровне. За 4 месяца сбросила 18 кг. Чувствую себя бодрее и
            полна энергии! Рекомендую!”
          </p>
          <div className="example__stats">
            <dl className="example__list">
              {exampleDetails.map(({ title, number }) => {
                return <ExampleItem title={title} number={number} />;
              })}
            </dl>
            <span className="example__price">
              Итог:
              <span className="example__price-number">
                Довольна результатом
              </span>
            </span>
          </div>
        </div>
        <Slider />
      </div>
    </section>
  );
}

export default Example;
