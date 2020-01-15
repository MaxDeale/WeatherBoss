import React, { Component } from "react";


class Display extends Component {

  render() {
    // destructuting the values from state to use within the display component
    const {
      weatherInfo,
      weatherInfoDegrees,
      weatherInfoHumidity,
      weatherInfoWindSpeed,
      currentCity
    } = this.props;
    return (
      // display component uses value from the values in state from the api call
      <div>
        <div id="displayContainer" className="container">
          <h3>Current weather in selected city:</h3>
          <p className="weatherDisplay">
            Conditions: <span className="weatherValue">{weatherInfo}</span>
          </p>
          <p className="weatherDisplay">
            Degrees: <span className="weatherValue">{weatherInfoDegrees}</span>
          </p>
          <p className="weatherDisplay">
            Humidity:
            <span className="weatherValue">{weatherInfoHumidity}</span>
          </p>
          <p className="weatherDisplay">
            Wind Speed:
            <span className="weatherValue">{weatherInfoWindSpeed}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Display;
