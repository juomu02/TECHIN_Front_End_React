import { useState } from "react";
import { useSearchParams, NavLink, useNavigate } from "react-router";
import "./Header.css";

function Header({ cart }) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    navigate(`/?search=${search}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    } else if (event.key === "Escape") {
      setSearch(searchParams.get("search") || "");
    }
  };

  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src="src/assets/images/logo-white.png" />
            <img
              className="mobile-logo"
              src="src/assets/images/mobile-logo-white.png"
            />
          </NavLink>
        </div>
        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            onChange={handleSearchInput}
            onKeyDown={handleKeyDown}
            value={search}
          />

          <button className="search-button" onClick={handleSearch}>
            <img
              className="search-icon"
              src="src/assets/images/icons/search-icon.png"
            />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img
              className="cart-icon"
              src="src/assets/images/icons/cart-icon.png"
            />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
