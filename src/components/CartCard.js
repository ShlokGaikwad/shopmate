import React from "react";
import "./CartCard.css";
import { useCart } from "../context/CartContext";

const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();
  const { name, price, image } = product;
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productClass">{price}$</p>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
};

export default CartCard;
