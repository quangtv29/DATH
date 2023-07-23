import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { CartProvider } from '../CartContext';
const Layout = () => {
  return (
    <>
      <CartProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartProvider>
    </>
  );
};

export default Layout;
