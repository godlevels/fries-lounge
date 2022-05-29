import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const showSide = () => {
    const sideBar = document.getElementById("saide");

    sideBar.style.width = "140px";
    sideBar.style.padding = "1rem";
  };

  const closeSide = () => {
    const sideBar = document.getElementById("saide");

    sideBar.style.width = "0px";
    sideBar.style.padding = "0rem";
  };

  return (
    <div className="navbar-div">
      <div className="container navbar">
        <div className="logo">
            <p>FriesLounge</p>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/products"> Products </Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
        </ul>
        <div className="bars-div">
          <h1 onClick={showSide}>=</h1>
        </div>
        <div className="btn-div">
          <button className="btn-light">Login</button>
          <button className="btn-dark">Sign Up</button>
        </div>
      </div>

      {/* ------------------------------------------------------------------------sidebar */}
      <div id="saide" className="side-bar">
        <h1 onClick={closeSide}>x</h1>

        <ul className="side-links">
          <li onClick={closeSide}>
            <Link to="/"> Home </Link>
          </li>
          <li onClick={closeSide}>
            <Link to="/products"> Products </Link>
          </li>
          <li onClick={closeSide}>
            <Link to="/contact"> Contact</Link>
          </li>
          <li onClick={closeSide}>
            <Link to="/about"> About </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar