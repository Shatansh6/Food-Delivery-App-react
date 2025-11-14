import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Cart from "./pages/cart/Cart";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import Checkout from "./pages/Checkout/Checkout";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleMode = () => {
    setIsDark(!isDark);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      <Navbar
        setShowLogin={setShowLogin}
        isDark={isDark}
        toggleMode={toggleMode}
        setSearchText={setSearchText}
      />

      {/* ⭐ THIS WAS MISSING — your popup! */}
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home searchText={searchText} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<Home />} />
      </Routes>

      <DownloadApp />
      <Footer />
    </>
  );
};

export default App;
