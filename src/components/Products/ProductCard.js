import React from "react";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { name, imgURL, price } = product;

  return (
    <div className="menus">
      <div className="pic">
        <img src={imgURL} alt={name}></img>
      </div>
      <div className="menu-cont">
        <h4>{name}</h4>
        <div className="price">
          <div className="counter">
            <p>-</p>
            <p>0</p>
            <p className="red">+</p>
          </div>
          <div className="num-cart">
            <p>${price}</p>
            <span role="img" aria-hidden="true">
              🛒
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard