import SelectInput from '../../../../ui/selectInput/SelectInput';

function AdditionallyItem({ id, name, type }) {
  return (
    <li className="additionally__item">
      <SelectInput id={id} type={type} name={name} />
    </li>
  );
}

export default AdditionallyItem;
