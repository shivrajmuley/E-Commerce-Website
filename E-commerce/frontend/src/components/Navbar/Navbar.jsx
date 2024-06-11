import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="header">
      <div className="logo">
        <img src="images/logo.jpg" alt="logo" />
        <h1>WEAR WEB</h1>
      </div>
      <div className="navbars">
        <Link to="/" className="homeBar ">
          <i class="fa-solid fa-house"></i>
          <h2>Home</h2>
        </Link>
        <Link to="/men" className="homeBar">
          <i class="fa-solid fa-shapes"></i>
          <h2>Men's</h2>
        </Link>

        <Link to="/women" className="homeBar">
          <i class="fa-solid fa-bag-shopping"></i>
          <h2>Women's</h2>
        </Link>
        <Link to="/kid" className="homeBar">
          <i class="fa-solid fa-child"></i>
          <h2>Kids</h2>
        </Link>
      </div>
      <div className="navBtn">
        <Link to="/cart" className="basketNav">
          <img src="images/basket.jpg" alt="basketIcon" />
          <span>{getTotalCartItems()}</span>
        </Link>
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            <i class="fa-solid fa-arrow-right-from-bracket"></i>Logout
          </button>
        ) : (
          <Link to="/login">
            <button>
              <i class="fa-regular fa-user"></i> Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
