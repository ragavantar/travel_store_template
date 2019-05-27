import React from "react";

import { Link } from "react-scroll";

import "../css/Hero.css";
import "../css/Animation.css";

import Slide from "./Slide";
// import Carousel from "./Carousel";
// import WaveCarousel from "./WaveCarousel";
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
  let style = {
    // marginLeft: scrollLeft
  };
  return (
    <div className="Hero-section" id="hero">
      <div className="Main-section">
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
          {/* <WaveCarousel
            id={data.id}
            image={data.thumbnailSmall}
            actions={actions}
          /> */}
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
          <p className="Sub-Title">{data.title}</p>
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
