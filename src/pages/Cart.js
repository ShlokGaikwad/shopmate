import React, { useContext } from "react";
// import useTitle from "../hooks/useTitle";
import CartCard from "./../components/CartCard";
import { useCart } from "../context/CartContext";

const Cart = () => {
  // useTitle("Cart");
  const { total } = useCart();
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assests/001.jpeg",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "assests/002.avif",
    },
  ];
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {products.length} /Total: {total}$
        </h1>
        {products.map((product) => {
          return <CartCard key={product.id} product={product} />;
        })}
      </section>
    </main>
  );
};

export default Cart;
