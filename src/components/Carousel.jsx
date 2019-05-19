import React from "react";
import { Link } from "react-scroll";

const Carousel = ({ id, image, actions }) => {
  return (
    <div className="Carousel-section">
      <img src={image} key={image} className="Fade-in" alt="" />

      <span
        className="Left-indicator Triangle-left Pointer"
        onClick={() => actions.moveSlide(-1)}
      />

      <span
        className="Right-indicator Triangle-right Pointer"
        onClick={() => actions.moveSlide(1)}
      />

      {!(id === "initial") && (
        <Link to="details" smooth={true} duration={500} offset={1}>
          <p className="Pointer">EXPLORE</p>
        </Link>
      )}
    </div>
  );
};

export default Carousel;
