import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalQuantity } from '../../../../redux/slice/productsSlice';

function NavigationItem({ to, children, isHome, last }) {
  const totalQuantity = useSelector(selectTotalQuantity);
  return (
    <li
      className={`navigation__item ${!!last ? 'navigation__item--basket' : ''}`}
    >
      <NavLink
        className={`navigation__link ${
          !!isHome ? 'navigation__link--color' : 'navigation__link--new-color'
        }`}
        to={to}
      >
        {children}
      </NavLink>
      {!!last && (
        <div className="navigation__link navigation__link--basket">
          <span
            className={`navigation__quantity ${
              !!isHome ? '' : 'navigation__quantity--secondary'
            }`}
          >
            {totalQuantity}
          </span>
        </div>
      )}
    </li>
  );
}

export default NavigationItem;
