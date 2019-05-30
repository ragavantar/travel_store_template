import React, { Component } from "react";

class PixiCarousel extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state.images = this.props.carouselImages;
    this.state.animating = false;
    this.state.next = -1;
    this.state.prev = 0;
    this.state.idle = false;
  }

  componentDidMount() {
    var image = new Image();
    image.src = this.state.images[0];
    image.onload = () => {
      // console.log(image.width, image.height);

      let initCanvasSlideshow = new window.CanvasSlideshow({
        sprites: this.state.images,
        displacementImage:
          // "/travel_store_template/LiquidDistortion-master/img/clouds.jpg",
          "/LiquidDistortion-master/img/clouds.jpg",
        autoPlay: true,
        autoPlaySpeed: [10, 3],
        displaceScale: [200, 70],
        fullscreen: false,
        containerId: this.props.containerId,
        stageWidth: image.width,
        stageHeight: image.height
      });

      // initCanvasSlideshow.stopTicker();

      this.setState({ canvas: initCanvasSlideshow });
    };

    // this.checkIdle();

    // document
    //   .getElementsByClassName("Slides")[0]
    //   .addEventListener("mouseleave", () => {
    //     this.setState({ idle: true });
    //     setTimeout(() => this.state.canvas.stopTicker(), 5000);
    //   });

    // document
    //   .getElementsByClassName("Slides")[0]
    //   .addEventListener("mouseenter", () => {
    //     this.setState({ idle: false });
    //     this.state.canvas.startTicker();
    //   });
  }

  //old logic
  changeBg = (ind, img) => {
    //    console.log(ind, this.state.images[ind]);

    // var image = new Image();
    // image.src = img;
    // image.onload = () => {
    //   let canvas = document.getElementsByTagName("canvas")[0];
    //   canvas.width = image.width;
    //   canvas.height = image.height;
    // };
    if (this.state.animating === false) {
      // console.log("now starting", ind);
      // this.setState({ animating: true });
      // this.setState((state, props) => {
      //   state.animating = true;
      //   return null;
      // });
      this.setState({ prev: ind });
      this.state.animating = true;
      this.state.canvas.moveSlider(ind);

      setTimeout(() => {
        this.state.animating = false;
        //this.setState({ animating: false });
        if (this.state.next > -1) {
          let n = this.state.next;
          this.state.next = -1;
          // console.log("end", n);
          this.state.canvas.moveSlider(n);
          this.changeBg(n);
        }
      }, 2500);
      // setTimeout(
      //   () =>
      //     this.setState((state, props) => ({
      //       animating: false
      //     })),
      //   2500
      // );
    } else {
      // console.log("running", this.state.animating);
      this.state.next = ind;
      // console.log(this.state.next);
    }
  };

  changeBgInd = ind => {
    // if (this.state.idle) {
    // this.state.canvas.startTicker();
    //   this.setState({ idle: false });
    // }
    this.setState({ nextInd: ind, changeTimer: 2500 });
  };
  render() {
    let { id, image, actions, index } = this.props;

    // if (this.state.animating === false && this.state.next > -1)
    //   this.changeBg(index, image);
    // console.log("render", this.state.next);
    // console.log(this.state.nextInd, this.state.changeTimer);
    let left = 1; // sec wait
    //this.state.changeTimer;
    // console.log("in", index, this.props.containerId);
    let timer = setInterval(() => {
      left -= 1;
      if (left === 0) {
        clearInterval(timer);
        // console.log(index, this.state.nextInd, "end");
        if (index === this.state.nextInd) {
          // this.changeBg(index);
          this.state.canvas.moveSlider(index);
        }
      }
    }, 1000);

    // setTimeout(
    //   () =>
    //     index === this.state.nextInd ? this.state.canvas.stopTicker() : "",
    //   10000
    // );
    // let iTime = 5;
    // let iTimer = setInterval(() => {
    //   iTime -= 1;
    //   if (iTime === 0) {
    //     clearInterval(iTimer);
    //     if (index === this.state.nextInd) this.state.canvas.stopTicker();
    //     // console.log("make i", this.state.canvas);
    //   }
    // }, 1000);

    return (
      <div className="Carousel-section">
        <div id={this.props.containerId} />

        {!(id === "initial") && (
          <img
            src={image}
            key={index}
            style={{ display: "none" }}
            // style={{ opacity: "0.1" }}
            onLoad={() => this.changeBgInd(index)}
            alt=""
          />
        )}
      </div>
    );
  }
}

export default PixiCarousel;
