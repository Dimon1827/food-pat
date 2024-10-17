import { useDispatch, useSelector } from 'react-redux';
import {
  clearAll,
  selectProducts,
  deleteSelectedProducts,
} from '../../../redux/slice/productsSlice';
import BasketItem from './BasketItem';
import Button from '../../ui/button/Button';

function BasketList() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleClearAllClick = () => {
    dispatch(clearAll());
  };

  const handleClearSelectedClick = () => {
    dispatch(deleteSelectedProducts());
  };

  return (
    <div>
      {products.length > 0 ? (
        <>
          <ul className="basket__list">
            {products.map((product, index) => (
              <BasketItem key={index} {...product} />
            ))}
          </ul>
          <div className="basket__wrapper-button">
            <Button className="basket__button" onClick={handleClearAllClick}>
              Очистить всё
            </Button>
            <Button
              className="basket__button"
              onClick={handleClearSelectedClick}
            >
              Удалить выбранные товары
            </Button>
          </div>
        </>
      ) : (
        <span className="basket__empty">Корзина пуста</span>
      )}
    </div>
  );
}

export default BasketList;
