import React from "react";
// import HeroImage from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <img src="/images/hero.png" alt="hero-image" className="hero-image" />
      <h1 className="hero-header">Online Experiences</h1>
      <h2 className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </h2>
    </section>
  );
}

export default Hero;
