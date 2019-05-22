import React, { Component } from "react";
import { Link } from "react-scroll";

class WaveCarousel extends Component {
  state = {};
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let width,
      height = 0;
    if (window.innerWidth <= 767) {
      width = Math.round(window.innerWidth * 0.8);
      height = Math.round(window.innerHeight * 0.3);

      var image = new Image();
      image.src = this.props.image;
      image.onload = () => {
        height = (image.height / image.width) * width;
        height = Math.round(height);
        waterCanvas.setSize(width, height);
      };
    } else {
      width = 300; //window.innerWidth * 0.3;
      height = 700; //window.innerHeight;
    }

    let waterModel = new window.WaterModel(width, height, {
      resolution: 2.0,
      interpolate: false,
      damping: 0.985,
      clipping: 5,
      evolveThreshold: 0.05,
      maxFps: 30,
      showStats: true
    });

    let waterCanvas = new window.WaterCanvas(
      width,
      height,
      "waterHolderC",
      waterModel,
      {
        backgroundImageUrl: this.props.image,
        lightRefraction: 9.0,
        lightReflection: 0.1,
        maxFps: 20,
        showStats: false
      }
    );

    var finger = [[0.5, 1.0, 0.5], [1.0, 1.0, 1.0], [0.5, 1.0, 0.5]];
    waterModel.touchWater(0, 0, 1.5, finger);

    if (window.innerWidth <= 767) {
      setInterval(() => {
        waterModel.touchWater(width - 10, height - 10, 1, finger);
        // waterModel.touchWater(width - 5, height / 2, 15, finger);
        waterModel.touchWater(width / 2, height, 1, finger);
        // waterModel.touchWater(width - 2, height / 2, 15, finger);
      }, 3000);
    } else {
      setInterval(() => {
        waterModel.touchWater(width - 10, height - 10, 15, finger);
        // waterModel.touchWater(width - 5, height / 2, 15, finger);
        // waterModel.touchWater(width / 2, height - 10, 15, finger);
        // waterModel.touchWater(width - 2, height / 2, 15, finger);
      }, 3000);
    }

    this.setState({
      canvas: waterCanvas,
      model: waterModel,
      width,
      height,
      finger
    });
    // var raindrop = window.create2DArray(window.createRadialCanvas(4, 4));
    // var rainMaker = new window.RainMaker(width, height, waterModel, raindrop);
    // rainMaker.setRaindropsPerSecond(1);
    //   enableMouseInteraction(waterModel, "waterHolderC");
  }

  changeBg = img => {
    let { canvas, model, width, height, finger } = this.state;
    model.touchWater(width / 2, height * 0.2, 2, finger);
    model.touchWater(width / 2, height * 0.4, 2, finger);
    model.touchWater(width / 2, height * 0.6, 2, finger);
    model.touchWater(width / 2, height * 0.5, 2, finger);

    model.touchWater(0, height * 0.2, 2, finger);
    model.touchWater(0, height * 0.4, 2, finger);
    model.touchWater(0, height * 0.6, 2, finger);
    model.touchWater(0, height * 0.5, 2, finger);

    model.touchWater(width - 10, height * 0.2, 2, finger);
    model.touchWater(width - 10, height * 0.4, 2, finger);
    model.touchWater(width - 10, height * 0.6, 2, finger);
    model.touchWater(width - 10, height * 0.5, 2, finger);

    setTimeout(() => {
      document.getElementById("waterHolderC").classList.add("Fade-in");
      canvas.setBackground(img);
    }, 1500);
  };

  animateMove = e => {
    let model = this.state.model;
    let finger = [[0.5, 1.0, 0.5], [1.0, 1.0, 1.0], [0.5, 1.0, 0.5]];
    let posY = e.clientY;
    let posX = e.clientX - window.innerWidth * 0.7;
    model.touchWater(posX, posY, 1.5, finger);
  };

  componentWillReceiveProps() {
    // this.changeBg(this.props.image);
    // console.log(this.props);
  }

  animEnd = () => {
    document.getElementById("waterHolderC").classList.remove("Fade-in");
  };

  componentWillUpdate() {
    // console.log('up', this.props);
  }
  render() {
    let { id, image, actions } = this.props;
    return (
      <div className="Carousel-section">
        <div
          id="waterHolderC"
          className="Fade-in"
          onAnimationEnd={this.animEnd}
          // onMouseMove={e => this.animateMove(e)}
        />

        {!(id === "initial") && (
          <img
            src={image}
            key={image}
            style={{ display: "none" }}
            onLoad={this.changeBg(image)}
            alt=""
          />
        )}
        {/* <span
          className="Left-indicator Triangle-left Pointer"
          onClick={() => actions.moveSlide(-1)}
        />
        <span
          className="Right-indicator Triangle-right Pointer"
          onClick={() => actions.moveSlide(1)}
        /> */}

        {!(id === "initial") && (
          <Link to="details" smooth={true} duration={500} offset={1}>
            <p className="Pointer">EXPLORE</p>
          </Link>
        )}
      </div>
    );
  }
}

export default WaveCarousel;
