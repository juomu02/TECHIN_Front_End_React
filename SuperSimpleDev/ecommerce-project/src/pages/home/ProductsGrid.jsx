import Product from "./Product";

function ProductsGrid({ products, loadCart }) {
  return (
    <div className="home-page">
      <div className="products-grid">
        {products.map((product) => {
          return (
            <Product key={product.id} product={product} loadCart={loadCart} />
          );
        })}
      </div>
    </div>
  );
}

export default ProductsGrid;
