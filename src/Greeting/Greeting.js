import React, { Component } from 'react';
import axios from 'axios';
import './Greeting.css';

// import module and CSS for resizable, draggable grids
// https://github.com/STRML/react-grid-layout
import ReactGridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Quote from '../Quote/Quote';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      time: [],
    };
  };

  componentDidMount() {
    this.getTime();
    this.getQuote();
  };

  getQuote() {
    const quoteAPI = process.env.REACT_APP_QUOTE_API;
    const URL = quoteAPI;
    axios.get(URL)
      .then((response) => {
        this.setState({ allData: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  getTime() {
    const timeAPI = process.env.REACT_APP_TIME_API
    console.log('componentDidMount()');
    const URL = timeAPI;
    axios.get(URL)
    .then((response) => {
      // console.log(response.data);
      const timeHour = response.data;
      this.setState({
        time: timeHour,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    var greeting = '';
    if (this.state.time.hours < 12) {
      greeting = 'Good morning';
    } else if (this.state.time.hours > 12 && this.state.time.hours < 17) {
      greeting = 'Good afternoon';
    } else {
      greeting = 'Good evening';
    }

    var layout = [
      { i: 'a', x: 0, y: 0, w: 12, h: 12 },
      { i: 'b', x: 0, y: 12, w: 12, h: 5 },
    ];

    return (
      <div>
        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key={'a'}><p className="greeting">{greeting} <br/> The time is {this.state.time.hours}:{this.state.time.minutes}</p></div>
          <div key={'b'}><Quote quoteData={this.state.allData.quoteText}/></div>
        </ReactGridLayout>
      </div>
    );
  };
};

export default Greeting;
