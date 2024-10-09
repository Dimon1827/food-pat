import { Outlet } from 'react-router-dom';
import '../../../assets/styles/container.scss';
import Header from '../header/Header';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
