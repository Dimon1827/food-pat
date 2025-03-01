import { BsTelephoneForward } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { useFormContext } from 'react-hook-form';
import { IcontactsData } from '@/types';
import Input from '@/components/ui/input/Input';

function InformationItem({ input, label }: IcontactsData) {
  const {
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div className="information__inner" data-testid="information-item">
        <label htmlFor={label.htmlFor} className="information__label label">
          {label.name}
        </label>
        <Input
          id={input.id}
          name={input.name}
          className={input.className}
          placeholder={input.placeholder}
          min={input.min}
          max={input.max}
          regex={input.regex}
          required={input.required}
          message={input.message}
          numberMessage={input.numberMessage}
        />
        {input.type === 'email' && (
          <AiOutlineMail
            className="information__icon"
            data-testid="email"
          />
        )}
        {input.type === 'tel' && (
          <BsTelephoneForward
            className="information__icon"
            data-testid="telephone"
          />
        )}
      </div>
      {errors[input.name]?.message && (
        <div className="information__error">
          {errors[input.name]?.message as string}
        </div>
      )}
    </>
  );
}

export default InformationItem;
