import { useNavigate } from 'react-router-dom';
import logo from 'assets/icons/logo.svg';
import { ILogo } from './logo.types';

function Logo({ className }: ILogo) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate('/')}
      className={`logo ${className ? className : ''}`}
    >
      <picture>
        <source
          type="image/svg+xml"
          media="(min-width:1280px)"
          srcSet={logo}
          width={160}
          height={70}
        />
        <source
          type="image/svg+xml"
          media="(min-width:768px)"
          srcSet={logo}
          width={100}
          height={60}
        />
        <img src={logo} width={100} height={60} alt="Логогит компании" />
      </picture>
    </div>
  );
}

export default Logo;
