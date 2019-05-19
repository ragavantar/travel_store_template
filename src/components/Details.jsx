import React from "react";
import { Link, Events } from "react-scroll";

import "../css/Details.css";

const Details = ({ title, images, animateSlideDown }) => {
  Events.scrollEvent.register("end", function(to) {
    to === "Details-container" && animateSlideDown();
  });
  return (
    <div className="Details-container" id="details">
      <Link to="Details-container" smooth={true} duration={300} offset={2}>
        <div className="Choose Pointer">
          <p className="Triangle-up" />
          <p>Choose another destination</p>
        </div>
      </Link>
      <h1>{title}</h1>
      <div className="Image-container">
        <div className="Banner">
          <img src={images[0].src} alt="" />
          <span className="Desc">
            <p>{images[0].desc}</p>
            <p>
              <span className="Border-bottom">Explore</span>
            </p>
          </span>
        </div>

        <div className="row pt-5">
          <div className="col-sm-6">
            <img src={images[1].src} alt="" />
          </div>
          <div className="col-sm-6 pt-5">
            <img src={images[2].src} alt="" />
          </div>
        </div>

        <div className="row pt-5">
          <div className="col-sm-5 Vertical-box">
            <img src={images[3].src} alt="" />
          </div>
          <div className="col-sm-7 Square-box">
            <img src={images[4].src} alt="" />
            <img src={images[5].src} alt="" />
            <img src={images[6].src} alt="" />
            <img src={images[7].src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
