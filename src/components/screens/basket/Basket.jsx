import BasketList from './BasketList';
import './Basket.scss'

function Basket() {
  return (
    <main className="main-container">
      <section className="basket">
        <div className="container">
          <h1 className="basket__title title">Корзина</h1>
          <BasketList />
        </div>
      </section>
    </main>
  );
}

export default Basket;
