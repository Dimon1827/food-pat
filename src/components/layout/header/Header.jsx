import Navigation from '../navigation/Navigation';
import Logo from './logo/Logo';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper header__wrapper--indent">
          <Logo />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
