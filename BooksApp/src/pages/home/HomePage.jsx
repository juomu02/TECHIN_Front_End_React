import NavBar from "../components/NavBar";
import ProductGrid from "./ProductsGrid";
import Footer from "../components/Footer";
import Search from "./Search";

function HomePage() {
  return (
    <>
      <NavBar />
      <Search />
      <ProductGrid />
      <Footer />
    </>
  );
}

export default HomePage;
