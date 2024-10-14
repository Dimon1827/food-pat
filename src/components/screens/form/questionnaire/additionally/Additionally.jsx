import './Additionally.scss';
import AdditionallyItem from './AdditionallyItem';
import checkBoxItems from './checkBoxItem';

function Additionally({ control }) {

  return (
    <div className="container">
      <div className="questionnaire__field additionally">
        <h2 className="additionally__title form-title">Аллергены</h2>
        <ul className="additionally__wrapper">
          {checkBoxItems.length > 0 &&
            checkBoxItems.map((item) => (
              <AdditionallyItem
                key={item.id}
                control={control}
                type={item.type}
                {...item}
              />
            ))}
        </ul>
        <button type="submit" className="questionnaire__button button">
          отправить заявку
        </button>
        <p className="questionnaire__text">* — Обязательные поля</p>
      </div>
    </div>
  );
}

export default Additionally;
