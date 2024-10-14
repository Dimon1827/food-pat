import SelectInput from '../../../../ui/selectInput/SelectInput';

function AdditionallyItem({ control, id, name, type }) {
  return (
    <li className="additionally__item">
      <SelectInput control={control} id={id} type={type} name={name} />
    </li>
  );
}

export default AdditionallyItem;
