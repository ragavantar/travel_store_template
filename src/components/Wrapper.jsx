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
  }

  selectSlide = index => {
    let selected = this.state.data[index];
    //    let scrollDist = this.scrollLeft(index);

    this.setState({
      selected,
      selectedIndex: index,
      initial: false
      //    sliderScrollLeft: scrollDist
    });
  };

  moveSlide = val => {
    if (this.state.initial) val = 0;
    //let next = (this.state.selectedIndex + val) % 13;
    let current = this.state.selectedIndex;
    let len = this.state.data.length - 1;
    let next = current + val;
    if (current === len && val === 1) next = 0;
    else if (current === 0 && val === -1) next = len;

    let nextSlide = this.state.data[next];

    let scrollDist = this.scrollLeft(next);

    this.setState({
      selected: nextSlide,
      selectedIndex: next,
      initial: false,
      sliderScrollLeft: scrollDist
    });

    // console.log(this.state);
  };

  handleAnimation = name => {
    if (name === "slide-down") this.setState({ animating: "" });
  };

  animateSlideDown = () => {
    this.setState({ animating: "Animating" });
  };

  actions = {
    selectSlide: this.selectSlide,
    moveSlide: this.moveSlide
  };

  scrollLeft = slide => {
    let dist = slide * 100;
    let max = -1400 + window.innerWidth;
    let left = dist < max ? max : dist;
    document.getElementsByClassName("Slides")[0].scrollLeft = left;

    return dist < max ? max : dist;
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
            />
          </MediaQuery>
          <MediaQuery query="(min-width: 768px)">
            <Hero
              data={this.state.selected.details}
              slides={this.state.slides}
              actions={this.actions}
              carouselImages={this.state.carouselImages}
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
