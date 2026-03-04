import axios from "axios";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";

function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const getProductsData = async () => {
      const searchApiLink = search
        ? `/api/products?search=${search}`
        : "/api/products";

      const response = await axios.get(searchApiLink);
      setProducts(response.data);
    };
    getProductsData();
  }, [search]);

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
