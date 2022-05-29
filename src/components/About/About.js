import React from "react";
import about from "../../images/about.png";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-body">
      <div className="container">
        <p className="bout">— About Us</p>

        <h2>Our Story</h2>

        <div className="about-cont">
          <div className="image">
            <img src={about} alt="about"></img>
          </div>

          <div className="bout-content">
            <h3>The FriesLounge</h3>
            <p>
              The FriesLounge journey started in 21st of December, 2015. Incorporated
              As the FriesLounge, our first outlet opened to dinners on April 22nd.
              Our Restaurant offers a wide variety of meals that delivers an
              original taste of homemade fries while prioritizing health
              hygiene. The company also plans to operate four (4) Lounges to
              complement the operations of the restaurant in those locations.
              FriesLounge is also renowned for its exquisiteness as a luxury brand
              at The flagship outlet in our location and we are perfecting
              processes to replicate the experience in other outlets.
            </p>

            <Link to="/products">
              <button className="btn-light">Go to Menu</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About