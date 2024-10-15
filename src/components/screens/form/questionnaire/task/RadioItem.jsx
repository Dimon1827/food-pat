import SelectInput from '../../../../ui/selectInput/SelectInput';

function RadioItem({ id, name, type }) {
  return (
    <li className="task__item">
      <SelectInput id={id} type={type} name={name} />
    </li>
  );
}

export default RadioItem;
