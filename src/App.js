import React, {useState} from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import {Route, Routes} from "react-router-dom";
import AboutUs from "./pages/About-us";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Footer from "./components/Layout/Footer";
import ProductDetails from "./pages/ProductDetails";


import './App.scss';
import './styles/scss/main.scss';
import Inspirations from "./pages/Inspirations";

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <>
            {cartIsShown && <Cart onClose={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Routes>
                    <Route index path="/" element={<Homepage/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="inspirations" element={<Inspirations/>}/>
                    <Route path={`/products/:productId`} element={<ProductDetails/>} />

                </Routes>
            </main>
            <Footer/>
        </>
    );
}

export default App;
