import React, { Component } from 'react';
import axios from 'axios';
import './Forecast.css';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [],
      weatherData: []
    }
  }

  componentDidMount() {
    this.getForecast();
  };

  getForecast() {
    const weatherAPI = process.env.REACT_APP_WEATHER_API
    const URL = weatherAPI
    axios.get(URL)
    .then((response) => {
      // console.log(response.data);
      const location = response.data;
      const weatherStats = response.data.currently;
      this.setState({
        position: location,
        weatherData: weatherStats,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div>
        <p className="timeZone">{this.state.position.timezone}</p>
        <img alt="" src={`images/${this.state.weatherData.icon}.png`} height="100px" />
        <p className="weatherText">{this.state.weatherData.summary} <br/> {this.state.weatherData.temperature} °C</p>
      </div>
    )
  }
};

export default Forecast;
