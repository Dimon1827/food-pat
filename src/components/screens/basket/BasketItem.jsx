import { useDispatch } from 'react-redux';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { deleteProduct } from '../../../redux/slice/productsSlice';
import Button from '../../ui/button/Button';

function BasketItem({ image, name, price, id }) {
  const dispatch = useDispatch();

  const handleDeleteProductClick = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <li className="basket__item">
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
