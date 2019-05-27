import React from "react";

import { Link } from "react-scroll";

import "../css/Hero.css";
import "../css/Animation.css";

import Slide from "./Slide";

const PixiCarousel = React.lazy(() => import("./PixiCarousel"));

const Loading = <div style={{ color: "white" }}>Loading ...</div>;

const Hero = ({ data, slides, actions, carouselImages, bgImages, index }) => {
  return (
    <div className="Hero-section row" id="hero">
      <div className="Main-section col-sm-8">
        {/* <img
          src={data.background}
          key={data.background}
          className="Fade-in Fade-in-long"
          alt={data.title}
        /> */}
        <React.Suspense fallback={Loading}>
          <PixiCarousel
            id={data.id}
            image={data.background}
            carouselImages={bgImages}
            // carouselImages={carouselImages}
            actions={actions}
            index={index}
            containerId="bgCanvas"
          />
        </React.Suspense>
        <div className="Main-content">
          <h1 className="Title">the travel store</h1>
          <p className="Sub-Title Fade-in" key={data.title}>
            {data.title}
          </p>
          <p className="Fade-in" key={data.description}>
            {data.description}
          </p>

          <Link to="details" smooth={true} duration={500} offset={1}>
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
          </Link>
        </div>
      </div>
      <div className="Divider" />
      <div className="col-sm-4 pl-0">
        <React.Suspense fallback={Loading}>
          <PixiCarousel
            id={data.id}
            image={data.thumbnailLarge}
            carouselImages={carouselImages}
            index={index}
            containerId="canvasHolder"
          />
        </React.Suspense>
      </div>
    </div>
  );
};

export default Hero;
