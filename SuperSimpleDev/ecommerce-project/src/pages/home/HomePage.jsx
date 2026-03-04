import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./public/home-favicon.png" />
      <title>Ecommerse Project</title>

      <Header cart={cart} />

      <ProductsGrid products={products} loadCart={loadCart} />
    </>
  );
}

export default HomePage;
