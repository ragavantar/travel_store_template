import React, { Component } from "react";
import { Link } from "react-scroll";

class PixiCarousel extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state.images = this.props.carouselImages;
  }

  componentDidMount() {
    let initCanvasSlideshow = new window.CanvasSlideshow({
      sprites: this.state.images,
      displacementImage:
        "/travel_store_template/LiquidDistortion-master/img/dmaps/2048x2048/clouds.jpg",
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

    this.state.canvas.moveSlider(ind);
  };
  render() {
    let { id, image, actions, index } = this.props;
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

        {!(id === "initial") && (
          <Link to="details" smooth={true} duration={500} offset={1}>
            <p className="Pointer">EXPLORE</p>
          </Link>
        )}
      </div>
    );
  }
}

export default PixiCarousel;
