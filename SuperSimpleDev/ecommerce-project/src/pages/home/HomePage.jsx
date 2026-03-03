import Header from "../../components/Header";
import ProductsGrid from "./ProductsGrid";
import "./HomePage.css";

function HomePage({ cart }) {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="./public/home-favicon.png" />
      <title>Ecommerse Project</title>

      <Header cart={cart} />

      <ProductsGrid />
    </>
  );
}

export default HomePage;
