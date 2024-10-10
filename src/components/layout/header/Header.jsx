import { useLocation } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Logo from './logo/Logo';
import Hero from './hero/Hero';
import './Header.scss';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <header className ={`header ${isHome && 'header--container'}`}>
      <div className="container">
        <div className="header__wrapper header__wrapper--indent">
          <Logo />
          <Navigation />
        </div>
      </div>
      <Hero />
    </header>
  );
}

export default Header;
