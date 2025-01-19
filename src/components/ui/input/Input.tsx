import { useFormContext } from 'react-hook-form';
import './Input.scss';
import { InputProps } from '@/types';

function Input({
  className,
  id,
  regex,
  required,
  placeholder,
  name,
  min,
  max,
  message,
  numberMessage,
}: InputProps) {
  const { register } = useFormContext();
  return (
    <input
      className={`text-input ${className ? className : ''}`}
      {...register(name, {
        required,
        pattern: {
          value: regex as RegExp,
          message: `${!!message ? message : `Ваш ${name} введен неправильно`} `,
        },
        min: {
          value: min as number,
          message: `${!!numberMessage ? numberMessage : ''}`,
        },
        max: {
          value: max as number,
          message: `${!!numberMessage ? numberMessage : ''}`,
        },
      })}
      placeholder={placeholder}
      id={id}
    />
  );
}

export default Input;
