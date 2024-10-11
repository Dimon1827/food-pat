function ProductCardInformation({ name, price, ingredients, oldPrice }) {
  return (
    <div className="product-card__wrapper">
      <div className="product-card__top-wrapper">
        <a href="404.html" className="product-card__link">
          <h2 className="product-card__subtitle subtitle">{name}</h2>
        </a>
        <button className="product-card__button button">Купить</button>
      </div>
      <p className="product-card__text">Ингредиенты:</p>
      <p className="product-card__ingredients">{ingredients}</p>
      <p className="product-card__text">Цена:</p>
      {!!oldPrice && (
        <span class="food__definition additional-products__old-price">
          {oldPrice} ₽
        </span>
      )}
      <span className="food__definition food__price">{price} ₽</span>
    </div>
  );
}

export default ProductCardInformation;
