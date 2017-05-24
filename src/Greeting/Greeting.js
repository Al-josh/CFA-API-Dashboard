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
    this.getNews();
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


  getNews() {
    console.log('componentDidMount()');
    const URL = "https://script.googleusercontent.com/macros/echo?user_content_key=IzdyRWHG_f_Pm0SRoIAimsBi6igTtQ5rCWp4IoGJt6Y-sU1dhNV9i0wK6rgstihd9UC2C88hsKATYDN0N4L8Nd6XrE-FYkE3m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJ9GRkcRevgjTvo8Dc32iw_BLJPcPfRdVKhJT5HNzQuXEeN3QFwl2n0M6ZmO-h7C6bwVq0tbM60-hWoa2zNWdermN87Htdh8QiuK637xZnZw&lib=MwxUjRcLr2qLlnVOLh12wSNkqcO1Ikdrk";
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
      { i: 'a', x: 0, y: 0, w: 11, h: 12},
      { i: 'b', x: 0, y: 12, w: 11, h: 5, minW: 2, maxW: 4 },
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
