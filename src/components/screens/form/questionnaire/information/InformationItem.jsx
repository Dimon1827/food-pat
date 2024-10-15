import { BsTelephoneForward } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import Input from '../../../../ui/input/Input';
import { useFormContext } from 'react-hook-form';

function InformationItem({ input, label }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
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
          message={input.message}
          numberMessage = {input.numberMessage}
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
