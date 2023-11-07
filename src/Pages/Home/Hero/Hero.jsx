import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Parallax
        bgImage="https://i.ibb.co/rft028M/patrick-robert-doyle-AH8z-KXq-FITA-unsplash.jpg"
        bgImageAlt="background"
        strength={500} // You can adjust the strength to control the parallax effect
      >
        <section className="hero relative text-white py-56">
          <div className="container mx-auto pl-8">
            <h1 className="text-5xl font-bold mb-4 font-serif">
              Where Comfort Meets <br /> Convenience
            </h1>
            <p className="text-lg mb-8">
              Elevate your travel experience with our vast selection of
              handpicked <br />
              rooms. Your next journey begins with a simple click
            </p>
            <Link to="/blog"
              href="#"
              className="btn bg-rose-600 hover-bg-rose-700 text-white"
            >
              Learn More
            </Link>
          </div>
        </section>
      </Parallax>
    </div>
  );
};

export default Hero;
