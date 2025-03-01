import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  deleteProduct,
  toggleProduct,
  incrementQuantity,
  decrementQuantity,
} from '@/redux/slice/productsSlice';
import { IBasketItem } from './basket.types';
import { useAppDispatch } from '@/redux/store';



function BasketItem({
  image,
  name,
  price,
  id,
  isChecked,
  quantity,
  oldPrice,
}: IBasketItem) {
  const dispatch = useAppDispatch();

  const handleDeleteProductClick = () => {
    dispatch(deleteProduct(id));
  };

  const handleCheckedClick = () => {
    dispatch(toggleProduct(id));
  };

  const handleIncrementCountClick = () => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrementCountClick = () => {
    dispatch(decrementQuantity(id));
  };
  return (
    <li className="basket__item">
      <div
        className={`basket__toggle ${isChecked ? 'basket__checked' : ''}`}
        onClick={handleCheckedClick}
        data-testid="toggle-button"
      ></div>
      <img
        className="basket__image"
        src={`${image}.${!!oldPrice ? 'png' : 'jpg'}`}
        alt={name}
      />
      <div className="basket__wrapper">
        <h2 className="basket__subtitle">{name}</h2>
        <span className="basket__price">{price} ₽</span>
        <RiDeleteBin6Line
          data-testid="delete-button"
          className="basket__dustbin"
          onClick={handleDeleteProductClick}
        />
        <div className="basket__quantity-wrapper">
          <button
            className="basket__decrement"
            onClick={handleDecrementCountClick}
            data-testid="button-decrement"
          >
            <svg viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
          <div className="basket__quantity">{quantity}</div>
          <button
            className="basket__increment"
            onClick={handleIncrementCountClick}
            data-testid="button-increment"
          >
            <svg viewBox="0 0 24 24">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

export default BasketItem;
