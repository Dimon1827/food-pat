import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout/Layout';
import Home from './components/screens/home/Home';
import Forms from './components/screens/form/Form';
import Catalog from './components/screens/goods/Goods';
import SinglePage from './components/layout/single-page/SinglePage';
import Basket from './components/screens/basket/Basket';

function App() {
  return (
    <div className="page__container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form" element={<Forms />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="basket" element={<Basket />} />
            <Route path="catalog/:stringName" element={<SinglePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
