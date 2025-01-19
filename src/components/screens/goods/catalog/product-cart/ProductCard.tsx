import { Link } from 'react-router-dom';
import { IProductWithDiscounts } from '@/types';
import ProductCardInformation from './ProductCardInformation';
import TaimerList from './taimer/TaimerList';
import './ProductCard.scss';

function ProductCard({
  name,
  ingredients,
  image,
  price,
  oldPrice,
  time,
  id,
}: IProductWithDiscounts) {
  return (
    <div
      className={`product-card ${
        !!oldPrice ? 'additional-products__card' : 'catalog__item'
      }`}
    >
      <Link to={name}>
        <picture>
          <source
            type="image/webp"
            srcSet={`${image}.webp`}
            width="280"
            height="240"
          />
          <img
            className={`product-card__image ${
              !!oldPrice ? 'additional-products__image' : ''
            }`}
            src={`${image}.${!!oldPrice ? 'png' : 'jpg'}`}
            alt={name}
            width="280"
            height="240"
          />
        </picture>
      </Link>
      {!!oldPrice && <TaimerList time={time} />}
      <ProductCardInformation
        name={name}
        ingredients={ingredients}
        price={price}
        oldPrice={oldPrice}
        id={id}
        image={image}
      />
    </div>
  );
}

export default ProductCard;