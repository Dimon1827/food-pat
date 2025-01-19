import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { INavigationItem } from '../navigation.types';
import { selectTotalQuantity } from '@/redux/products-selectors';

function NavigationItem({ to, children, isHome, last }: INavigationItem) {
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
