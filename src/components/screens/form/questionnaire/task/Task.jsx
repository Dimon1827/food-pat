import './Task.scss';

function Task() {
  return (
    <fieldset className="questionnaire__field task">
      <legend className="visually-hidden">Основная задача</legend>
      <ul className="task__list line">
        <li className="task__item">
          <input
            id="slimming"
            type="radio"
            name="task"
            value="slimming"
            className="task__input visually-hidden control-input"
            defaultChecked="checked"
          />
          <label htmlFor="slimming" className="task__label label">
            похудение
          </label>
        </li>
        <li className="task__item">
          <input
            id="gain"
            type="radio"
            name="task"
            value="gain"
            className="task__input visually-hidden control-input"
          />
          <label htmlFor="gain" className="task__label label">
            Набор массы
          </label>
        </li>
        <li className="task__item">
          <input
            id="fit"
            type="radio"
            name="task"
            value="fit"
            className="task__input visually-hidden control-input"
          />
          <label htmlFor="fit" className="task__label label">
            Поддержка формы
          </label>
        </li>
      </ul>
    </fieldset>
  );
}

export default Task;
