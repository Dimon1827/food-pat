import SelectInput from '../../../../ui/selectInput/SelectInput';

function RadioItem({ control, id, name, type }) {
  return (
    <li className="task__item">
      <SelectInput control={control} id={id} type={type} name={name} />
    </li>
  );
}

export default RadioItem;
