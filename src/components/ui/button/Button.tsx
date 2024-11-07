import { ReactNode } from 'react';
import './Button.scss';

interface IButton {
  children: ReactNode;
  className: string;
  onClick: () => void;
}

function Button({ children, className = '', onClick }: IButton) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
}

export default Button;
