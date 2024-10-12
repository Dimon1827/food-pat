import { useParams } from 'react-router-dom';
import productsData from '../../screens/goods/catalog/productsData';
import goodsWithDiscount from '../../screens/goods/additional-products/goodsWithDiscount';

import './SinglePage.scss';
function SinglePage() {
  const { stringName } = useParams();
  const product = productsData.find((prod) => stringName === prod.name);
  const productWithDiscount = goodsWithDiscount.find(
    (prod) => stringName === prod.name
  );
  const { name, ingredients, price, oldPrice, image, description } =
    product || productWithDiscount;
  return (
    <main className="main-container">
      <section className="single-page">
        <div className="container">
          <h1 className="single-page__title">{name}</h1>
          <div className="single-page__wrapper">
            <picture>
              <source
                type="image/webp"
                srcSet={`${image}.webp`}
                width={280}
                height={240}
              />
              <img
                className="single-page__image"
                src={`${image}.${!!oldPrice ? 'png' : 'jpg'}`}
                alt={name}
                width={280}
                height={240}
              />
            </picture>

            <div className="single-page__text-wrapper">
              <h2 className="single-page__subtitle">Описание</h2>
              <p className="single-page__text">{description}</p>
              <h2 className="single-page__subtitle">Ингредиенты</h2>
              <p className="single-page__text">{ingredients}</p>
            </div>
            <div className="single-page__inner">
              <div className="single-page__price-wrapper">
                {!!oldPrice && (
                  <span className="single-page__old-price">{oldPrice} ₽</span>
                )}
                <span className="single-page__price">{price} ₽</span>
              </div>
              <button className="single-page__button button">
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SinglePage;
