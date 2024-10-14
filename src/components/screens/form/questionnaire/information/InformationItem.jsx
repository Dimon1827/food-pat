import { BsTelephoneForward } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Input from '../../../../ui/input/Input';

function InformationItem(props) {
  const { input, label, register, errors } = props;
  return (
    <>
      <div className="information__inner">
        <label htmlFor={label.htmlFor} className="information__label label">
          {label.name}
        </label>
        <Input
          id={input.id}
          name={input.name}
          className={input.className}
          register={register}
          placeholder={input.placeholder}
          min={input.min}
          max={input.max}
          regex={input.regex}
          required={input.required}
        />
        {input.type === 'email' && (
          <AiOutlineMail className="information__icon" />
        )}
        {input.type === 'tel' && (
          <BsTelephoneForward className="information__icon" />
        )}
      </div>
      {errors[input.name] && (
        <div className="information__error">{errors[input.name].message}</div>
      )}
    </>
  );
}

export default InformationItem;
