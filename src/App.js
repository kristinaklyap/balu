import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/About-us";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Footer from "./components/Layout/Footer";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route index path="/products" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
