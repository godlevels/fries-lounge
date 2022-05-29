import React from "react";
import "./contact.css";
import dish from "../../images/dish.png";

const Contact = () => {
  return (
    <div className="contact-body">
      <img src={dish} alt="dish"></img>
      <img src={dish} alt="dish"></img>
      <div className="container contact-us">
        <p className="tact">— Contact</p>
        <h2>You want to talk to us?</h2>
        <p>please let us know in the section</p>
        <div className="tact-form">
          <form id="usrForm" typeof="submit">
            <div className="form">
              <div className="names">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email" />
              <textarea
                name="comment"
                form="usrForm"
                placeholder="Enter Text Here"
              ></textarea>
              {/* <input typeof='message' placeholder='Type a message'/> */}
            </div>
            <button className="btn-dark shadow-orange">Done</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;