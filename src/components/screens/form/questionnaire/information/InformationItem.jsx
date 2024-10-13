import { BsTelephoneForward } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Input from '../../../../ui/input/Input';

function InformationItem(props) {
  const { input } = props;
  const { label } = props;

  return (
    <div className="information__inner">
      <label htmlFor={label.htmlFor} className="information__label label">
        {label.name}
      </label>
      <Input
        id={input.id}
        name={input.name}
        type={input.type}
        className={input.className}
        placeholder={input.placeholder}
        min={input.min}
        max={input.max}
        required={input.required}
      />
      {input.type === 'email' && (
        <AiOutlineMail className="information__icon" />
      )}
      {input.type === 'tel' && (
        <BsTelephoneForward className="information__icon" />
      )}
    </div>
  );
}

export default InformationItem;
