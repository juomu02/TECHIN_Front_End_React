import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function BookDetailsSidebar({ setIsDetailsOpen, productDetails }) {
  const { title, author, category, price, cover, reserved } = productDetails;
  const [categories, setCategories] = useState(null);

  const handleToggle = (e) => {
    const result = e.target.value;
    setIsDetailsOpen(result);
  };

  useEffect(() => {
    const categoryList = async () => {
      const response = await axios.get(`${API_URL}/categories`);
      setCategories(response.data);
    };
    categoryList();
  }, []);

  const categoryDetails = categories?.find(
    (catList) => catList.id === category,
  );
  const categoryName = categoryDetails?.name || category;

  return (
    <div className="drawer drawer-start z-1">
      <input
        id="my-drawer-1"
        type="checkbox"
        defaultChecked
        className="drawer-toggle"
      />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
          onClick={handleToggle}
        />
        <div className="menu bg-base-200 min-h-full w-80 p-4 my-20">
          <div className="card bg-base-100 min-w-full overflow-hidden shadow-sm details">
            <figure>
              <img
                src={cover}
                alt="Shoes"
                className="w-full h-full object-contain"
              />
            </figure>
            <p>Pavadinimas: {title}</p>
            <p>Autorius: {author}</p>
            <p>Kategorija: {categoryName}</p>
            <p>Kaina: {price} €</p>
            <p>Knyga rezervuota: {reserved ? "Taip" : "Ne"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BookDetailsSidebar;
