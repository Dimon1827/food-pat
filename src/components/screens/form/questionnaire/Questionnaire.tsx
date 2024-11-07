import { useForm, FormProvider } from 'react-hook-form';
import Information from './information/Information';
import Task from './task/Tasks';
import fieldPersonInformation from './information/fieldPersonInformation';
import contactsData from './information/contactsData';
import Commentary from './commentary/Commentary';
import Additionally from './additionally/Additionally';
import './Questionnaire.scss';

function Questionnaire() {
  const methods = useForm({
    mode: 'onChange' 
  });

  const onSubmit = (data:any) => {
    console.log(data);
    alert(`Твои данные успешно получены`);
  };

  return (
    <section className="questionnaire">
      <FormProvider {...methods}>
        <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
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
                  Заполнение информации о вас
                </legend>
                <Information fieldPersonInformation={fieldPersonInformation} />
              </fieldset>
              <Task />
            </div>
          </div>
          <div className="container">
            <div className="questionnaire__field information">
              <h2 className="information__title form-title">
                Контактные данные
              </h2>
              <div className="questionnaire__form-wrapper">
                <Information contactsData={contactsData} />
              </div>
            </div>
          </div>
          <Commentary />
          <Additionally />
        </form>
      </FormProvider>
    </section>
  );
}

export default Questionnaire;
