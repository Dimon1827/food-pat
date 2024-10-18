import { useDispatch, useSelector } from 'react-redux';
import {
  clearAll,
  selectProducts,
  selectTotalPrice,
  deleteSelectedProducts,
  calculateAll,
} from '../../../redux/slice/productsSlice';
import BasketItem from './BasketItem';
import Button from '../../ui/button/Button';
import { useEffect } from 'react';

function BasketList() {
  const products = useSelector(selectProducts);
  const total = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  const handleClearAllClick = () => {
    dispatch(clearAll());
  };

  const handleClearSelectedClick = () => {
    dispatch(deleteSelectedProducts());
  };

  useEffect(() => {
    dispatch(calculateAll());
  }, [dispatch, products]);

  return (
    <div className="basket__main-wrapper">
      {products.length > 0 ? (
        <>
          <ul className="basket__list">
            {products.map((product, index) => (
              <BasketItem key={index} {...product} />
            ))}
          </ul>
          <span className="basket__total">Общая сумма: {total} ₽ </span>
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
