import { useDispatch, useSelector } from 'react-redux';
import { clearAll, selectProducts } from '../../../redux/slice/productsSlice';
import BasketItem from './BasketItem';
import Button from '../../ui/button/Button';

function BasketList() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleClearAllClick = () => {
    dispatch(clearAll());
  }
  return (
    <div>
      {/* {products.length > 0 ? (
        <ul className="basket__list">
          {products.map((product, index) => (
            <BasketItem key={index} {...product} />
          ))}
        </ul>
      ) : (
        <span className="basket__empty">Корзина пуста</span>
      )} */}
      <ul className="basket__list">
        {products.map((product, index) => (
          <BasketItem key={index} {...product} />
        ))}
      </ul>
      <Button onClick={handleClearAllClick}>Удалить всё</Button>
    </div>
  );
}

export default BasketList;
