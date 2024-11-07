import { Link } from 'react-router-dom';
import { addProduct, calculateAll } from '../../../../../redux/slice/productsSlice';
import { IProduct } from 'types';
import { useAppDispatch } from '../../../../../redux/store';
import productWithQuantity from '../../../../../utils/productWithQuantity';



interface IProductCardInformation extends Omit<IProduct, 'description'> {}

function ProductCardInformation({
  name,
  price,
  ingredients,
  oldPrice,
  id,
  image,
}: IProductCardInformation) {
  const dispatch = useAppDispatch();

  const handleAddProductClick = () => {
    const product = { id, name, price, image, oldPrice };
    dispatch(addProduct(productWithQuantity(product)));
    dispatch(calculateAll());
  };
  return (
    <div className="product-card__wrapper">
      <div className="product-card__top-wrapper">
        <Link className="product-card__link" to={name}>
          <h2 className="product-card__subtitle subtitle">{name}</h2>
        </Link>
        <button
          className="product-card__button button"
          onClick={handleAddProductClick}
        >
          Купить
        </button>
      </div>
      <p className="product-card__text">Ингредиенты:</p>
      <p className="product-card__ingredients">{ingredients}</p>
      <p className="product-card__text">Цена:</p>
      {!!oldPrice && (
        <span className="food__definition additional-products__old-price">
          {oldPrice} ₽
        </span>
      )}
      <span className="food__definition food__price">{price} ₽</span>
    </div>
  );
}

export default ProductCardInformation;
