import { useState } from "react";
import axios from "axios";
import formatMoney from "../../utils/money";

function CartItemDetails({ cartItem, loadCart }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
    loadCart();
  };

  const handleUpdating = async () => {
    if (isUpdating) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      await loadCart();
      setIsUpdating(false);
    } else setIsUpdating(true);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleUpdating();
    } else if (event.key === "Escape") {
      setIsUpdating(false);
      setQuantity(cartItem.quantity);
    }
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatMoney(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            {isUpdating ? (
              <input
                type="text"
                className="quantity-input"
                value={quantity}
                onChange={handleQuantityChange}
                onKeyDown={handleKeyDown}
              />
            ) : (
              <span className="quantity-label">{cartItem.quantity}</span>
            )}
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={handleUpdating}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}

export default CartItemDetails;
