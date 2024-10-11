import Map from '../home/map/Map';
import AdditionalProducts from './additional-products/AdditionalProducts';
import Catalog from './catalog/Catalog';

function Goods() {
  return (
    <main class="main-container">
      <Catalog/>
      <AdditionalProducts/>
      <Map />
    </main>
  );
}

export default Goods;
