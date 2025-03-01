import { ReactNode } from 'react';
import './Button.scss';

interface IButton {
  children: ReactNode;
  className: string;
  onClick: () => void;
}

function Button({ children, className = '', onClick, ...props }: IButton) {
  return (
    <button onClick={onClick} className={`button ${className}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
