import { useNavigate } from 'react-router-dom';
import MainLogo from '@/assets/icons/logo.svg';
import { ILogo } from './logo.types';
import './Logo.scss';

function Logo({ className }: ILogo) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/')}
      className={`logo ${className ? className : ''}`}
    >
      <MainLogo className="main-logo" color={'orange'} />
    </div>
  );
}

export default Logo;
