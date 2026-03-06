import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function ProductCard({
  product,
  setIsEditOpen,
  setProductToEdit,
  setProductDetails,
  setIsDetailsOpen,
}) {
  const { id, title, author, cover, reserved } = product;
  const [isReserved, setIsReseved] = useState(reserved);

  useEffect(() => {
    const getReservedStatus = async () => {
      const response = await axios.get(`${API_URL}/books/${id}`);
      setIsReseved(response.data.reserved);
    };
    getReservedStatus();
  }, []);

  const toggleReserved = () => {
    const updatedValue = !isReserved;
    setIsReseved(updatedValue);

    const updateReserved = async () => {
      await axios.patch(`${API_URL}/books/${id}`, {
        reserved: updatedValue,
      });
    };
    updateReserved();
  };

  const editBook = () => {
    setProductToEdit(product);
    setIsEditOpen(true);
  };

  const moreInfo = () => {
    setProductDetails(product);
    setIsDetailsOpen(true);
  };

  return (
    <>
      <div className="card bg-base-100 w-96 h-96 overflow-hidden shadow-sm">
        <figure>
          <img
            src={cover}
            alt="Shoes"
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title items-center">{title}</h2>
          <p>{author}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={toggleReserved}>
              {isReserved ? "Grąžinti" : "Išduoti"}
            </button>
            <button className="btn btn-warning" onClick={editBook}>
              Keisti
            </button>
            <button className="btn btn-info" onClick={moreInfo}>
              Daugiau info
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
