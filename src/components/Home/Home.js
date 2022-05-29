import React from "react";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";
import "./home.css";

const Home = () => {
  return (
    <div className="home-body">
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;