import React from "react";
import "./footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="container">
        <div className="footer">
          <div className="footer-logo">
              <p>FriesLounge</p>
          </div>
          <div className="links">
            <ul>
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
          </div>
          <div className="details">
            <ul>
              <li>
                <a href="/#">Tel : +234-904-755-4003</a>
              </li>
              <li>
                <a href="/#">Email : support@FriesLounge.com</a>
              </li>
              <li>
                <a href="/#">Instagram : @FriesLounge</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <p>
          All Rights Reserved ©️ godLevels 2022
        </p>
      </div>
    </div>
  );
};

export default Footer