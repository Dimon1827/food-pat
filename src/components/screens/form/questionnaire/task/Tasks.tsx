import './Task.scss';
import tasksData from './tasksData';
import RadioItem from './RadioItem';

function Tasks() {
  return (
    <fieldset className="questionnaire__field task">
      <legend className="visually-hidden">Основная задача</legend>
      <ul className="task__list line">
        {tasksData.length > 0 &&
          tasksData.map(({ id, type, name }) => (
            <RadioItem key={id} id={id} type={type} name={name} />
          ))}
      </ul>
    </fieldset>
  );
}

export default Tasks;
