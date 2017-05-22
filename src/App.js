import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Quote from './Quote/Quote';
import Weather from './Weather/Weather';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      allData: []
    }
  };

  // different stages in our component that we can hook into
  // "once everything is on the page, THEN ..... eg grab data"
  componentDidMount() {
  // this. has to be used because it has to reference the component we are in
    this.getQuote()
  };

  // first point of contact we are getting our data.
  // api call with axios
  // then set the data into our state
  getQuote() {

    const URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
    axios.get(URL)
      .then((response) => {
        // console.log("first", this.state.allData)
        // console.log(response.data);
        this.setState({ allData: response.data });
        // (console.log("second", this.state.allData))
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  getWeather() {
    console.log('componentDidMount()');
    const URL = 'http://dataservice.accuweather.com/currentconditions/v1/22889?apikey=WV4TR4tcV6Hb9FTRbbaOINsInJ5fbaV5';
    axios.get(URL)
      .then((response) => {
        // console.log(response.data);
        this.setState({ allWeather: response.data });
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
