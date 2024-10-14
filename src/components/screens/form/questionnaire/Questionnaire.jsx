import { useForm } from 'react-hook-form';
import Information from './information/Information';
import Task from './task/Tasks';
import fieldCatInformation from './information/fieldCatInformation';
import contactsData from './information/contactsData';
import Commentary from './commentary/Commentary';
import Additionally from './additionally/Additionally';
import './Questionnaire.scss';
import { useEffect } from 'react';

function Questionnaire() {
  const {
    register, //Функция, которая передается во внутрь инпута
    handleSubmit, //функция, принимающая функцию submit
    reset, // Очистка полей, для одного поля исп. resetField
    getValues, //Получение содержимого инпута,
    getFieldState, // Состояние инпута, в нем содержится инфа об валидности,касаниях и прочем
    watch, // Функция для динам. отслеживания input
    control,
    setValue, // Добавление в инпут содержимого
    formState: { errors }, //Для отслеживания формы, в данном случае вытащили объект errors
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`Your data ${data.name}`);
  };

  useEffect(() => {
    const { unsubscribe } = watch((value, { name, type }) => {
      // console.log(value, name, type);
    });
    return () => unsubscribe();
  }, [watch]);

  // console.log(getValues('email'));
  // console.log(getFieldState('email'));

  return (
    <section className="questionnaire">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
              <Information
                errors={errors}
                register={register}
                fieldCatInformation={fieldCatInformation}
              />
            </fieldset>
            <Task control={control} />
          </div>
        </div>
        <div className="container">
          <div className="questionnaire__field information">
            <h2 className="information__title form-title">Контактные данные</h2>
            <div className="questionnaire__form-wrapper">
              <Information
                errors={errors}
                register={register}
                contactsData={contactsData}
              />
            </div>
          </div>
        </div>
        <Commentary />
        <Additionally control={control} />
      </form>
    </section>
  );
}

export default Questionnaire;
