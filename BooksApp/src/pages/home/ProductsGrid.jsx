import axios from "axios";
import ProductCard from "./ProductCard";
import "../../App.css";
import { useState, useEffect } from "react";
import BookEditForm from "./BookEditSidebar";
import BookDetailsSidebar from "./BookDetailsSidebar";

const API_URL = import.meta.env.VITE_API_URL;

function ProductGrid() {
  const [products, setProducts] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const getProductsData = async () => {
      const response = await axios.get(`${API_URL}/books`);
      setProducts(response.data);
    };
    getProductsData();
  }, []);

  if (!products) {
    return (
      <div className="products-grid">
        Klaida atnaujinant knygų sąrašą. json-server portas turi būt 3002
      </div>
    );
  }

  return (
    <>
      {isEditOpen && (
        <BookEditForm
          setIsEditOpen={setIsEditOpen}
          productToEdit={productToEdit}
        />
      )}
      {isDetailsOpen && (
        <BookDetailsSidebar
          setIsDetailsOpen={setIsDetailsOpen}
          productDetails={productDetails}
        />
      )}

      <div className="products-grid">
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              setIsEditOpen={setIsEditOpen}
              setProductToEdit={setProductToEdit}
              setProductDetails={setProductDetails}
              setIsDetailsOpen={setIsDetailsOpen}
            />
          );
        })}
      </div>
    </>
  );
}

export default ProductGrid;
