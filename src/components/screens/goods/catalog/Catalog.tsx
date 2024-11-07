import ProductCard from './product-cart/ProductCard';
import productsData from './productsData';
import './Catalog.scss';

function Catalog() {
  return (
    <section className="catalog">
      <div className="container">
        <h1 className="catalog__title title line">Каталог продукции</h1>
        <div className="catalog__container">
          {!!productsData.length &&
            productsData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
