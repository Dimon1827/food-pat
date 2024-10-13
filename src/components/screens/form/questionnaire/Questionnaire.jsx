import Information from './information/Information';
import Task from './task/Task';
import fieldCatInformation from './information/fieldCatInformation';
import contactsData from './information/contactsData';
import Commentary from './commentary/Commentary';
import Additionally from './additionally/Additionally';
import './Questionnaire.scss';

function Questionnaire() {
  return (
    <section className="questionnaire">
      <form
        className="form"
        action="https://echo.htmlacademy.ru/"
        method="post"
      >
        <div className="container">
          <div className="questionnaire__wrapper">
            <h1 className="questionnaire__title title">Подбор программы</h1>
            <p className="questionnaire__description">
              Заполните анкету, и мы подберем программу питания для вас
            </p>
          </div>
          <div className="questionnaire__form-wrapper">
            <fieldset className="questionnaire__field information line">
              <legend className="visually-hidden">
                Заполнение информации о коте
              </legend>
              <Information fieldCatInformation={fieldCatInformation} />
            </fieldset>
            <Task />
          </div>
        </div>
        <div className="container">
          <div className="questionnaire__field information">
            <h2 className="information__title form-title">Контактные данные</h2>
            <div className="questionnaire__form-wrapper">
              <Information contactsData={contactsData} />
            </div>
          </div>
        </div>
        <Commentary />
        <Additionally />
      </form>
    </section>
  );
}

export default Questionnaire;
