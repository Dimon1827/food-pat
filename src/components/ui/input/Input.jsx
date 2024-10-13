import './Input.scss';

function Input({ className, min, max, ...props }) {
  return (
    <input
      className={`text-input ${className ? className : ''}`}
      {...(min !== null ? { min } : {})}
      {...(max !== null ? { max } : {})}
      {...props}
    />
  );
}

export default Input;
