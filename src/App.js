import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';
import Layout from './components/layout/layout/Layout';
import Home from './components/screens/home/Home';
import Forms from './components/screens/form/Form';
import Catalog from './components/screens/goods/Goods';


function App() {
  return (
    <div className="page__container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="form" element={<Forms />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
