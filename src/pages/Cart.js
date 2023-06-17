import React, { useContext } from "react";
// import useTitle from "../hooks/useTitle";
import CartCard from "./../components/CartCard";
import { useCart } from "../context/CartContext";

const Cart = () => {
  // useTitle("Cart");
  const { total ,cartList} = useCart();
  
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length} /Total: {total}$
        </h1>
        {cartList.map((product) => {
          return <CartCard key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
};

export default Cart;
