import React, { Component } from "react";
import { Link } from "react-scroll";

class PixiCarousel extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state.images = this.props.carouselImages;
    this.state.animating = false;
    this.state.next = -1;
  }

  componentDidMount() {
    let initCanvasSlideshow = new window.CanvasSlideshow({
      sprites: this.state.images,
      displacementImage:
        "/travel_store_template/LiquidDistortion-master/img/dmaps/2048x2048/clouds.jpg",
      // "/LiquidDistortion-master/img/dmaps/2048x2048/clouds.jpg",
      autoPlay: true,
      autoPlaySpeed: [10, 3],
      displaceScale: [200, 70],
      fullscreen: false
    });

    this.setState({ canvas: initCanvasSlideshow });
  }

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
      console.log("now starting", ind);
      // this.setState({ animating: true });
      // this.setState((state, props) => {
      //   state.animating = true;
      //   return null;
      // });
      this.state.animating = true;
      this.state.canvas.moveSlider(ind);

      setTimeout(() => {
        this.state.animating = false;
        //this.setState({ animating: false });
        if (this.state.next > -1) {
          let n = this.state.next;
          this.state.next = -1;
          console.log("end", n);
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
      console.log("running", this.state.animating);
      this.state.next = ind;
      console.log(this.state.next);
    }
  };
  render() {
    let { id, image, actions, index } = this.props;
    // if (this.state.animating === false && this.state.next > -1)
    //   this.changeBg(index, image);
    console.log("render", this.state.next);
    return (
      <div className="Carousel-section">
        <div id="canvasHolder" />

        {!(id === "initial") && (
          <img
            src={image}
            key={index}
            style={{ display: "none" }}
            // style={{ opacity: "0.1" }}
            onLoad={this.changeBg(index, image)}
            alt=""
          />
        )}
      </div>
    );
  }
}

export default PixiCarousel;
