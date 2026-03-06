import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ProductGrid from "./ProductsGrid";
import Footer from "../components/Footer";
import Search from "./Search";

const API_URL = import.meta.env.VITE_API_URL;

function HomePage() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProductsData = async () => {
      const response = await axios.get(`${API_URL}/books`);
      setProducts(response.data);
    };
    getProductsData();
  }, []);

  return (
    <>
      <NavBar />
      <Search setProducts={setProducts} />
      <ProductGrid products={products} setProducts={setProducts} />
      <Footer />
    </>
  );
}

export default HomePage;
