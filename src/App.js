import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Quote from './Quote/Quote';

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

  render() {
    return (
      <div>
        <h1>Personal Dashboard</h1>
          <Quote quoteData={this.state.allData.quoteText}/>
      </div>
    );
  };
};

export default App;
