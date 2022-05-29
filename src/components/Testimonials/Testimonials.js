import React from "react";
import woman from "../../images/woman-eating.jpg";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-body">
      <div className="container">
        <div className="testi-cont">
          <div className="testi-left-cont">
            <p className="testi">— Testimonials</p>
            <h2 className="testi-h2">That's what our client says</h2>
            <p className="testi-content">
              "FriesLounge is an awesome place. Fries is everything we are. It's an
              extension of nationalist feeling, ethnic feeling, your personal
              history, your province"
            </p>
            <h4 className="testi-client">— Nelson Awojide</h4>
            <p className="cont right">Artist</p>
            <button className="btn-dark-o shadow-orange"> ← </button>{" "}
            <button className="btn-dark-o shadow-orange"> →</button>
          </div>
          <div className="t-image shadow-orange">
            <img src={woman} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;