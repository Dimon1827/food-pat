import ProductCard from '../catalog/product-cart/ProductCard';
import './AdditionalProducts.scss';
import goodsWithDiscount from './goodsWithDiscount';

function AdditionalProducts() {
  return (
    <section class="additional-products">
      <div class="container">
        <h2 class="additional-products__title title">Сделки дня</h2>
        <div class="additional-products__wrapper">
          {goodsWithDiscount.map((good) => <ProductCard {...good}/>)}
  
          {/* <div class="additional-products__card product-card">
            <a href="404.html" class="product-card__link">
              <picture>
                <source
                  type="image/webp"
                  srcset="./day-item/day-item-1.webp"
                  width="280"
                  height="240"
                />
                <img
                  class="additional-products__image product-card__image"
                  src="images/day-item-1.png"
                  alt="Семена Органическое киноа, Коричневый и красный рис"
                  width="280"
                  height="240"
                />
              </picture>
            </a>
            <ul class="additional-products__list">
              <li class="additional-products__item">
                <span class="additional-products__number">3</span>
                <p class="additional-products__text">дня</p>
              </li>
              <li class="additional-products__item">
                <span class="additional-products__number">11</span>
                <p class="additional-products__text">часов</p>
              </li>
              <li class="additional-products__item">
                <span class="additional-products__number">18</span>
                <p class="additional-products__text">минут</p>
              </li>
            </ul>
            <div class="product-card__wrapper">
              <div class="product-card__top-wrapper">
                <a href="404.html" class="product-card__link">
                  <h2 class="product-card__subtitle subtitle">
                    Салат с фруктами
                  </h2>
                </a>
                <button class="product-card__button button">Купить</button>
              </div>
              <p class="product-card__text">Ингредиенты:</p>
              <p class="product-card__ingredients">
                Апельсин, зелень, огурцы, банан
              </p>
              <p class="product-card__text">Цена:</p>
              <span class="food__definition additional-products__old-price">
                500 ₽
              </span>
              <span class="food__definition food__price">400 ₽</span>
            </div>
          </div>
          <div class="additional-products__card product-card">
            <a href="404.html" class="product-card__link">
              <picture>
                <source
                  type="image/webp"
                  srcset="images/day-item-2.webp"
                  width="280"
                  height="240"
                />
                <img
                  class="additional-products__image product-card__image"
                  src="images/day-item-2.png"
                  alt="Сок из апельсина"
                  width="280"
                  height="240"
                />
              </picture>
            </a>
            <ul class="additional-products__list">
              <li class="additional-products__item">
                <span class="additional-products__number">5</span>
                <p class="additional-products__text">дней</p>
              </li>
              <li class="additional-products__item">
                <span class="additional-products__number">01</span>
                <p class="additional-products__text">часов</p>
              </li>
              <li class="additional-products__item">
                <span class="additional-products__number">30</span>
                <p class="additional-products__text">минут</p>
              </li>
            </ul>
            <div class="product-card__wrapper">
              <div class="product-card__top-wrapper">
                <a href="404.html" class="product-card__link">
                  <h2 class="product-card__subtitle subtitle">
                    Сок из апельсина
                  </h2>
                </a>
                <button class="product-card__button button">Купить</button>
              </div>
              <p class="product-card__text">Ингредиенты:</p>
              <p class="product-card__ingredients">Апельсин, грейфрукт</p>
              <p class="product-card__text">Цена:</p>
              <span class="food__definition additional-products__old-price">
                200 ₽
              </span>
              <span class="food__definition food__price">120 ₽</span>
            </div>
          </div>
          <div class="additional-products__card product-card">
            <a href="404.html" class="product-card__link">
              <picture>
                <source
                  type="image/webp"
                  srcset="images/day-item-3.webp"
                  width="280"
                  height="240"
                />
                <img
                  class="additional-products__image product-card__image"
                  src="images/day-item-3.png"
                  alt="Салат с лимонным коктелем"
                  width="280"
                  height="240"
                />
              </picture>
            </a>
            <ul class="additional-products__list">
              <li class="additional-products__item">
                <span class="additional-products__number">6</span>
                <p class="additional-products__text">дней</p>
              </li>
              <li class="additional-products__item">
                <span class="additional-products__number">18</span>
                <p class="additional-products__text">часов</p>
              </li>
              <li class="additional-products__item">
                <span class="additional-products__number">14</span>
                <p class="additional-products__text">минут</p>
              </li>
            </ul>
            <div class="product-card__wrapper">
              <div class="product-card__top-wrapper">
                <a href="404.html" class="product-card__link">
                  <h2 class="product-card__subtitle subtitle">
                    Салат с лимонным коктелем
                  </h2>
                </a>
                <button class="product-card__button button">Купить</button>
              </div>
              <p class="product-card__text">Ингредиенты:</p>
              <p class="product-card__ingredients">Горох, лимон, апельсин</p>
              <p class="product-card__text">Цена:</p>
              <span class="food__definition additional-products__old-price">
                450 ₽
              </span>
              <span class="food__definition food__price">350 ₽</span>
            </div>
          </div>
          <div class="additional-products__card product-card">
            <a href="404.html" class="product-card__link">
              <picture>
                <source
                  type="image/webp"
                  srcset="images/day-item-4.webp"
                  width="280"
                  height="240"
                />
                <img
                  class="additional-products__image product-card__image"
                  src="images/day-item-4.png"
                  alt="Еда для кота со вкусом курицы на 500 грамм"
                  width="280"
                  height="240"
                />
              </picture>
            </a>
            <ul class="additional-products__list">
              <li class="additional-products__item">
                <span class="additional-products__number">7</span>
                <p class="additional-products__text">дней</p>
              </li>
              <li class="additional-products__item">
                <span class="additional-products__number">04</span>
                <p class="additional-products__text">часов</p>
              </li>
              <li class="additional-products__item">
                <span class="additional-products__number">17</span>
                <p class="additional-products__text">минут</p>
              </li>
            </ul>
            <div class="product-card__wrapper">
              <div class="product-card__top-wrapper">
                <a href="404.html" class="product-card__link">
                  <h2 class="product-card__subtitle subtitle">
                    Сок из грейфрукта
                  </h2>
                </a>
                <button class="product-card__button button">Купить</button>
              </div>
              <p class="product-card__text">Ингредиенты:</p>
              <p class="product-card__ingredients">
                Грейфрукт, апельсин, банан, яблоко
              </p>
              <p class="product-card__text">Цена:</p>
              <span class="food__definition additional-products__old-price">
                220 ₽
              </span>
              <span class="food__definition food__price">140 ₽</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AdditionalProducts;
