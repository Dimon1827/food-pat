import { NavLink } from 'react-router-dom';

function NavigationItem({ to, children, isHome }) {
  return (
    <li className="navigation__item">
      <NavLink
        className={`navigation__link ${
          !!isHome ? 'navigation__link--color' : 'navigation__link--new-color'
        }`}
        to={to}
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
