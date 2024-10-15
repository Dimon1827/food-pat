import './Input.scss';

function Input({
  className,
  register,
  regex,
  required,
  name,
  min,
  max,
  message,
  numberMessage,
  ...props
}) {
  return (
    <input
      className={`text-input ${className ? className : ''}`}
      {...register(name, {
        required,
        pattern: {
          value: regex,
          message: `${!!message ? message : `Ваш ${name} введен неправильно`} `,
        },
        min: {
          value: min,
          message: `${!!numberMessage ? numberMessage : ''}`,
        },
        max: {
          value: max,
          message: `${!!numberMessage ? numberMessage : ''}`,
        },
      })}
      {...props}
    />
  );
}

export default Input;
