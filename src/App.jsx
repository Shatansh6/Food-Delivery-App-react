import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Cart from "./pages/cart/Cart";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";
import StoreContextProvider from "./Context/StoreContext";
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const toggleMode = () => setIsDark((prev) => !prev);
  useEffect(() => {
    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = isDark ? "#0f172a" : "#ffffff"; 
    // document.body.style.color = isDark ? "gray" : "black";
  }, [isDark]);

  return (
    <StoreContextProvider>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} isDark={isDark} toggleMode={toggleMode} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route
          path="*"
          element={<h2 className="text-center py-10">Page Not Found</h2>}
        />
      </Routes>
      <DownloadApp />
      <Footer />
    </StoreContextProvider>
  );
};

export default App;
