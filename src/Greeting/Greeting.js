import React, { Component } from 'react';
import axios from 'axios';
import './Greeting.css';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: [],
    };
  };

  componentDidMount() {
    this.getNews();
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

    return (
      <div>
        <h1>{greeting}, the time is {this.state.time.hours}:{this.state.time.minutes}</h1>
      </div>
    );
  };
};


export default Greeting;
