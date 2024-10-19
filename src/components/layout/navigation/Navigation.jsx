import { useState } from 'react';
import data from './navigation-data';
import NavigationItem from './navigation-item/NavigationItem';
import './Navigation.scss';

function Navigation({ isHome }) {
  const [isClose, setIsClose] = useState(true);

  const handleToggleClick = () => {
    setIsClose(!isClose);
  };
  return (
    <nav
      className={`navigation ${
        isClose ? 'navigation--closed' : 'navigation--opened'
      }`}
    >
      <button
        className="navigation__toggle"
        type="button"
        onClick={handleToggleClick}
      >
        <span className="visually-hidden">Открыть меню</span>
      </button>
      <ul className="navigation__list">
        {data.map((item, index) => {
          return (
            <NavigationItem key={index} isHome={isHome} {...item}>
              {item.name}
            </NavigationItem>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
