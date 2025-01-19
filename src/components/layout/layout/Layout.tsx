import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import '@/assets/styles/fonts.scss';
import Map from '@/components/screens/home/map/Map';


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Map/>
      <Footer/>
    </>
  );
}

export default Layout;
