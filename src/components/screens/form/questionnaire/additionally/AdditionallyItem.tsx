import { ICheckBoxItem } from 'types';
import SelectInput from '../../../../ui/selectInput/SelectInput';

function AdditionallyItem(item: ICheckBoxItem) {
  return (
    <li className="additionally__item">
      <SelectInput {...item} />
    </li>
  );
}

export default AdditionallyItem;