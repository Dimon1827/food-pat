import Logo from '../header/logo/Logo';
import Copyright from './copyright/Copyright';
import './Footer.scss';
import Social from './social/Social';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Logo className="footer__link" />
          <Social />
          <Copyright />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
