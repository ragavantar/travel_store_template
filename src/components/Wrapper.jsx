import React, { Component, Suspense } from "react";

import MediaQuery from "react-responsive";

import "../css/Fonts.css";

import Data from "./data";

import Hero from "./Hero";
import HeroMobile from "./HeroMobile";
import Details from "./Details";

class Wrapper extends Component {
  state = {};
  constructor() {
    super();

    this.state = {
      data: Data,
      selectedIndex: 0,
      animating: "",

      selected: {
        details: {
          id: "initial",
          title: "where you are traveling",
          thumbnailLarge: "images/suitcase-1.jpg",
          thumbnailSmall: "images/thumbnail_suitcase.jpg",
          background: "images/left_image_3.jpg"
        }
      },
      initial: true,
      sliderScrollLeft: 0
    };
    //for details component
    let slides = [];
    this.state.data.forEach(data => {
      let slide = {
        id: data.details.id,
        thumbnail: data.details.thumbnailSmall
      };
      slides.push(slide);
    });
    this.state.slides = slides;

    //for pixicarousel component
    let carouselImages = [];
    this.state.data.forEach(data => {
      carouselImages.push(data.details.thumbnailLarge);
    });
    this.state.carouselImages = carouselImages;

    let bgImages = [];
    this.state.data.forEach(data => {
      bgImages.push(data.details.background);
    });
    this.state.bgImages = bgImages;
  }

  selectSlide = index => {
    let selected = this.state.data[index];

    this.setState({
      selected,
      selectedIndex: index,
      initial: false
    });
  };

  handleAnimation = name => {
    if (name === "slide-down") this.setState({ animating: "" });
  };

  animateSlideDown = () => {
    this.setState({ animating: "Animating" });
  };

  actions = {
    selectSlide: this.selectSlide
  };

  render() {
    return (
      <div
        className={this.state.animating}
        onAnimationEnd={e => this.handleAnimation(e.animationName)}
      >
        <div id="waterHolder" />
        <div className={this.state.animating === "" ? "" : "Slide-down"}>
          <MediaQuery query="(max-width:767px)">
            <HeroMobile
              data={this.state.selected.details}
              slides={this.state.slides}
              actions={this.actions}
              carouselImages={this.state.carouselImages}
              bgImages={this.state.bgImages}
              index={this.state.selectedIndex}
            />
          </MediaQuery>
          <MediaQuery query="(min-width: 768px)">
            <Hero
              data={this.state.selected.details}
              slides={this.state.slides}
              actions={this.actions}
              carouselImages={this.state.carouselImages}
              bgImages={this.state.bgImages}
              index={this.state.selectedIndex}
            />
          </MediaQuery>
        </div>
        {!this.state.initial && (
          <Suspense fallback={<div>Loading...</div>}>
            <Details
              title={this.state.selected.details.title}
              images={this.state.selected.images}
              animateSlideDown={this.animateSlideDown}
            />
          </Suspense>
        )}
      </div>
    );
  }
}

export default Wrapper;
