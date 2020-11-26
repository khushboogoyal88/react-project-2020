import React, { Component } from "react";
import axios from "axios";

const API = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=Helsinki`;

class Weather extends Component {
  state = {
    weather: {
      request: {},
      location: {},
      current: {},
    },
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(API)
      .then((response) =>
        this.setState({ weather: response.data, isLoading: false })
      );
  }

  render() {
    return this.state.isLoading ? (
      <p>Weather loading...</p>
    ) : (
      <p>
        Currenty in {this.state.weather.location.name} is{" "}
        {this.state.weather.current.weather_descriptions} and temperature is{" "}
        {this.state.weather.current.temperature}℃ and it feels like{" "}
        {this.state.weather.current.feelslike}℃
      </p>
    );
  }
}

export default Weather;
