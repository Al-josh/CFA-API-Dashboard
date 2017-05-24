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
    this.getNews();
  };

  getNews() {
    console.log('componentDidMount()');
    // const URL = "https://api.darksky.net/forecast/007308c46a24e046de02d126ef40d0b9/-33.86,151.21";
    const URL = "https://api.darksky.net/forecast/007308c46a24e046de02d126ef40d0b9/-33.86,151.21?units=auto"
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
