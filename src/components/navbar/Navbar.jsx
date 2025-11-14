import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { StoreContext } from "../../Context/StoreContext";
import { MdOutlineNightlight, MdOutlineLightMode } from "react-icons/md";

const Navbar = ({ setShowLogin, isDark, toggleMode, setSearchText }) => {
  const [menu, setMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { count } = useContext(StoreContext);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>

      {/* SEARCH BAR */}
      <div className="search">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <img className="search-img" src={assets.search_icon} alt="" />
      </div>

      {/* MENU ITEMS */}
      <ul className="navbar-menu">
        <Link to="/">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </li>
        </Link>

        <ScrollLink
          to="explore-menu"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setMenu("menu")}
        >
          <li className={menu === "menu" ? "active" : ""}>Menu</li>
        </ScrollLink>

        <ScrollLink
          to="download-app"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setMenu("mobile-app")}
        >
          <li className={menu === "mobile-app" ? "active" : ""}>
            Mobile-App
          </li>
        </ScrollLink>

        <ScrollLink
          to="footer"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setMenu("contact-us")}
        >
          <li className={menu === "contact-us" ? "active" : ""}>
            Contact-Us
          </li>
        </ScrollLink>
      </ul>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        {/* Cart */}
        <div className="cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          {count > 0 && <div className="dot">{count}</div>}
        </div>

        {/* Login */}
        <button onClick={() => setShowLogin(true)}>Sign in</button>

        {/* DARK MODE */}
        <div onClick={toggleMode} className="darkmode">
          {isDark ? (
            <MdOutlineLightMode size={24} className="glow-tomato" />
          ) : (
            <MdOutlineNightlight size={24} className="glow-tomato" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
