import React from "react";
import snack from "../../images/snack.png";
import vegetarian from "../../images/vegetarian.png";
import support from "../../images/customer-service.png";

const Features = () => {
  return (
    <div className="section-2">
      <div className=" container features">
        <p className="feat">— Features</p>
        <h2>Our Awesome Service</h2>
        <div className="feat-cont">
          <div>
            <img src={snack} alt="features"></img>
            <h3>Quality Food</h3>
            <p>We prioritize food quality before delivering to you.</p>
          </div>
          <div>
            <img src={vegetarian} alt="features"></img>
            <h3>Super Taste</h3>
            <p>
              We have special recipies that make our food taste very delicious.
            </p>
          </div>
          <div>
            <img src={support} alt="features"></img>
            <h3>Amazing Support</h3>
            <p>
              We always got your back anytime you need us to fuel your stomachs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;