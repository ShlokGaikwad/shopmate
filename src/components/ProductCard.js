import React from "react";
import {useCart} from '../context/CartContext';
import './ProductCard.css'

const ProductCard = ({product}) => {
  const {addToCart,cartList}=useCart();
  const{name,price,image}=product;



  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>{price}$</p>
        <button onClick={()=>addToCart(product)}>Add To Cart</button>
        <button className="remove">Remove</button>
      </div>
    </div>
  );
};

export default ProductCard;
