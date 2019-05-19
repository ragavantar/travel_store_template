import React from "react";

import { Link } from "react-scroll";

import "../css/Hero.css";
import "../css/Animation.css";

import Slide from "./Slide";
import Carousel from "./Carousel";
import WaveCarousel from "./WaveCarousel";

const Hero = ({ data, slides, actions }) => {
  return (
    <div className="Hero-section row" id="hero">
      <div className="Main-section col-sm-8">
        <img
          src={data.background}
          key={data.background}
          className="Fade-in Fade-in-long"
          alt={data.title}
        />
        <div className="Main-content">
          <h1 className="Title">the travel store</h1>
          <p className="Sub-Title">{data.title}</p>
          <p>{data.description}</p>
          <p>
            {!(data.id === "initial") && (
              <Link to="details" smooth={true} duration={500} offset={1}>
                <span className="Pointer Border-bottom">Explore</span>
              </Link>
            )}
          </p>
          <div className="Slides">
            {slides.map((slide, index) => (
              <Slide
                key={index}
                index={index}
                id={slide.id}
                image={slide.thumbnail}
                actions={actions}
                selected={slide.id === data.id ? "Selected" : ""}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="col-sm-4 pl-0">
        <WaveCarousel
          id={data.id}
          image={data.thumbnailLarge}
          actions={actions}
        />
      </div>
    </div>
  );
};

export default Hero;
