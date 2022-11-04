import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import MyNavbar from './components/MyNavbar';
import Products from './components/Products';

function App() {
  return (
    <>
      <MyNavbar />
      <div style={{ marginTop: '100px' }}></div>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
