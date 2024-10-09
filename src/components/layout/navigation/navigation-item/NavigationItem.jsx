import { NavLink } from 'react-router-dom';

function NavigationItem({ to, children }) {
  return (
    <li className="navigation__item">
      <NavLink className="navigation__link" to={to}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavigationItem;
