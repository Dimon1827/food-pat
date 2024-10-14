import './Input.scss';

function Input({
  className,
  register,
  regex,
  required,
  name,
  min,
  max,
  ...props
}) {
  return (
    <input
      className={`text-input ${className ? className : ''}`}
      {...register(name, {
        required,
        pattern: {
          value: regex,
          message: `Пожалуйста введите правильно ${name}`,
        },
      })}
      {...(min !== null ? { min } : {})}
      {...(max !== null ? { max } : {})}
      {...props}
    />
  );
}

export default Input;
