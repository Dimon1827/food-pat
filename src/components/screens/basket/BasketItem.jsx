import { useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  deleteProduct,
  toggleProduct,
} from '../../../redux/slice/productsSlice';

function BasketItem({ image, name, price, id, isChecked }) {
  const dispatch = useDispatch();

  const handleDeleteProductClick = () => {
    dispatch(deleteProduct(id));
  };
  const handleCheckedClick = () => {
    dispatch(toggleProduct(id));
  };

  return (
    <li className="basket__item">
      <div
        className={`basket__toggle ${isChecked ? 'basket__checked' : ''}`}
        onClick={handleCheckedClick}
      ></div>
      <img className="basket__image" src={`${image}.jpg`} alt={name} />
      <div className="basket__wrapper">
        <h2 className="basket__subtitle">{name}</h2>
        <span className="basket__price">{price} ₽</span>
        <RiDeleteBin6Line
          className="basket__dustbin"
          onClick={handleDeleteProductClick}
        />
      </div>
    </li>
  );
}

export default BasketItem;
