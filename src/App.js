import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Quote from './Quote/Quote';
import Weather from './Weather/Weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
    };
  };

  componentDidMount() {
    this.getQuote();
  };

  getQuote() {
    const URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en';
    axios.get(URL)
      .then((response) => {
        this.setState({ allData: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h1>Personal Dashboard</h1>
          <Quote quoteData={this.state.allData.quoteText}/>
          <Weather weatherData={this.state.allWeather} />
      </div>
    );
  };
};

export default App;
