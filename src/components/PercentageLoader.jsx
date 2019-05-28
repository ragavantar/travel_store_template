import React, { Component } from "react";
import "../css/PercentageLoader.css";

class PercentageLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      completed: false
    };
  }
  componentDidMount() {
    let perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
      EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
      time = parseInt((EstimatedTime / 1000) % 60) * 100,
      range = 100,
      stepTime = Math.abs(Math.floor(time / range)),
      status = 0,
      timer = setInterval(() => {
        status += 1;
        this.setState({ status });
        if (status === 100) {
          clearInterval(timer);
          this.setState({ completed: true });
        }
      }, stepTime);
  }
  render() {
    return (
      <React.Fragment>
        {!this.state.completed && (
          <div className="Loader">
            <p>{this.state.status}%</p>
          </div>
        )}
        {this.props.children}
      </React.Fragment>
    );
  }
}

export default PercentageLoader;
