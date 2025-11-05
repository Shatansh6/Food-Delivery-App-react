import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

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

      {/* Search */}
      <div className="search">
        <input type="text" placeholder="search" />
        <img className="search-img" src={assets.search_icon} alt="" />
      </div>

      {/* Menu Items */}
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

      {/* Right Section */}
      <div className="navbar-right">
        <div className="cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
