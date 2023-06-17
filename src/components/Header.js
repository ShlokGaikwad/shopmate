import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cartList } = useCart();

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
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};

export default Header;
