import React from "react";
import ProductCard from "./../components/ProductCard";
import useTitle from "../hooks/useTitle";

const Home = () => {
  useTitle("Home");
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
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
      image: "assests/003.jpg",
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      image: "assests/004.avif",
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: "assests/006.jpeg",
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: "assests/007.webp",
    },
  ];

  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
