import React from "react";
import './style.css';


const Navbar = () => {
    return (
      <div className="navbar">
        <nav className="nav">
          <ul className="ul">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">Login</a>
            </li>
            <li>
              <a href="/product">Products</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  export default Navbar;