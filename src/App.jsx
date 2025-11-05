import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Cart from "./pages/cart/Cart";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin = {setShowLogin}/>:<></>}
    <div className="app">
      <Navbar setShowLogin ={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route
          path="*"
          element={<h2 className="text-center py-10">Page Not Found</h2>}
        />
      </Routes>
      <DownloadApp />
    </div>
          <Footer />
</>
  );
};

export default App;
