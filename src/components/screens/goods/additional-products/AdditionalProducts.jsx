import ProductCard from '../catalog/product-cart/ProductCard';
import './AdditionalProducts.scss';
import goodsWithDiscount from './goodsWithDiscount';

function AdditionalProducts() {
  return (
    <section className="additional-products">
      <div className="container">
        <h2 className="additional-products__title title">Сделки дня</h2>
        <div className="additional-products__wrapper">
          {goodsWithDiscount.map((good,index) => (
            <ProductCard key={index} {...good} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdditionalProducts;
