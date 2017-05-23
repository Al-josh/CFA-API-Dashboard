import React, { Component } from 'react';
import axios from 'axios';

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
        <img src={`images/${this.state.weatherData.icon}.png`} height="200px" />
        <p>{this.state.position.timezone}</p>
        <p>{this.state.weatherData.summary}</p>
        <p>{this.state.weatherData.temperature} °C</p>
      </div>
    )
  }
};

export default Forecast;
