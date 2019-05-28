import React from "react";

import { Link } from "react-scroll";

import "../css/Hero.css";
import "../css/Animation.css";

import Slide from "./Slide";

const PixiCarousel = React.lazy(() => import("./PixiCarousel"));

const Loading = <div style={{ color: "white" }}>Loading ...</div>;

const HeroMobile = ({
  data,
  slides,
  actions,
  carouselImages,
  bgImages,
  index
}) => {
  return (
    <div className="Hero-section" id="hero">
      <div className="Main-section">
        <React.Suspense fallback={Loading}>
          <PixiCarousel
            id={data.id}
            image={data.background}
            carouselImages={bgImages}
            actions={actions}
            index={index}
            containerId="bgCanvas"
          />
        </React.Suspense>
        <div className="Main-content">
          <h1 className="Title">the travel store</h1>

          <React.Suspense fallback={Loading}>
            <PixiCarousel
              id={data.id}
              image={data.thumbnailLarge}
              carouselImages={carouselImages}
              actions={actions}
              index={index}
              containerId="canvasHolder"
            />
          </React.Suspense>
          <p className="Sub-Title Fade-in-long" key={data.title}>
            {data.title}
          </p>
          <p>
            {!(data.id === "initial") && (
              <Link to="details" smooth={true} duration={500}>
                <span className="Pointer Border-bottom Explore">Explore</span>
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
    </div>
  );
};

export default HeroMobile;
