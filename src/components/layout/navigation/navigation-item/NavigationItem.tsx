import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { INavigationItem } from '../navigation.types';
import { selectTotalQuantity } from '@/redux/products-selectors';
import { Badge, IconButton } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

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
        <div className="navigation__badge">
          <Badge
            badgeContent={totalQuantity}
            sx={{
              '& .MuiBadge-badge': {
                color: 'white',
                backgroundColor: 'orange',
              },
              '& .MuiSvgIcon-root': {
                color: 'grey',
              },
            }}
          >
            <ShoppingBasketIcon />
          </Badge>
        </div>
      )}
    </li>
  );
}


export default NavigationItem;
