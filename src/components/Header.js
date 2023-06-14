import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <img
          src="https://www.pngitem.com/pimgs/m/529-5294086_transparent-random-logo-png-png-download.png"
          alt="logo"
        />
        <span>ShopMate</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: 2</span>
      </Link>
    </header>
  );
};

export default Header;
