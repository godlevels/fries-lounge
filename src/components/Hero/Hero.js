import React from "react";
import dish from "../../images/dish.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container hero">
      <div className="content">
        <p className="rest">— Restaurants</p>
        <h1 className="hero-">Enjoy delicious French Fries at affordable prices</h1>
        <p className="cont">
          get a variety of French Fries full of tempting flavours and cheap prices for
          various groups
        </p>
        <Link to="/products">
          <button className="btn-dark shadow-orange">Explore Now</button>
        </Link>
      </div>
      <div className="image">
        <img src={dish} alt="dish"></img>
      </div>
    </div>
  );
};

export default Hero;