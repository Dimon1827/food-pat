import './ProductCard.scss';
import ProductCardInformation from './ProductCardInformation';
import TaimerList from './taimer/TaimerList';

function ProductCard({ name, ingredients, image, price, oldPrice, time }) {
  return (
    <div
      className={`product-card ${
        !!oldPrice ? 'additional-products__card' : 'catalog__item'
      }`}
    >
      <a href="404.html" className="product-card__link">
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
      </a>
      {!!oldPrice && <TaimerList time={time} />}
      <ProductCardInformation
        name={name}
        ingredients={ingredients}
        price={price}
        oldPrice={oldPrice}
      />
    </div>
  );
}

export default ProductCard;

// additional-products__list надо с ним что то делать
