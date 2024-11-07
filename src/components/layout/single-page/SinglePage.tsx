import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IProduct, IProductWithDiscounts } from 'types';
import { addProduct } from '../../../redux/slice/productsSlice';
import productsData from '../../screens/goods/catalog/productsData';
import goodsWithDiscount from '../../screens/goods/additional-products/goodsWithDiscount';
import productWithQuantity from '../../../utils/productWithQuantity';
import './SinglePage.scss';

function SinglePage() {
  const { stringName } = useParams();
  const dispatch = useDispatch();
  const product = productsData.find(
    (prod) => stringName === prod.name
  ) as IProduct;
  const productWithDiscount = goodsWithDiscount.find(
    (prod) => stringName === prod.name
  ) as IProductWithDiscounts;

  const { id, name, ingredients, price, oldPrice, image, description } =
    product || productWithDiscount;

  const handleAddProductClick = () => {
    const product = { id, name, price, image };
    dispatch(addProduct(productWithQuantity(product)));
  };

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
              <button
                className="single-page__button button"
                onClick={handleAddProductClick}
              >
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
