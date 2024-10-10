import { useNavigate } from 'react-router-dom';
import './Service.scss';

const serviceItems = [
  'Лучшие органические продукты онлайн',
  'Приготовьте свой завтрак Здоровый и легкий',
];
function Service() {
  const navigate = useNavigate();

  return (
    <section className="service">
      <h2 className="visually-hidden">Услуги</h2>
      <div className="container">
        <ul className="service__list">
          {serviceItems.map((item,index) => {
            return (
              <li className="service__item" key={index}>
                <p className="service__description">{item}</p>
                <button
                  onClick={() => navigate('/catalog')}
                  className="service__link"
                >
                  Купить
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Service;
