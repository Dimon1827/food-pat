import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/icons/logo.svg';

function Logo() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/')} className="header__logo logo">
      <picture>
        <source
          type="image/svg+xml"
          media="(min-width:1280px)"
          srcset={logo}
          width="160"
          height="70"
        />
        <source
          type="image/svg+xml"
          media="(min-width:768px)"
          srcset={logo}
          width="100"
          height="60"
        />
        <img src={logo} width="100" height="60" alt="Логогит компании" />
      </picture>
    </div>
  );
}

export default Logo;
