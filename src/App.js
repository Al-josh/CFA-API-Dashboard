

import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

// import module and CSS for resizable, draggable grids
// https://github.com/STRML/react-grid-layout
import ReactGridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import Quote from './Quote/Quote';

// Import calendar component and styles
// https://intljusticemission.github.io/react-big-calendar/examples/index.html
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      events: [],
      developbranch: []
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
    var layout = [
      {i: 'a', x: 0, y: 0, w: 10, h: 2, static: true},
      {i: 'b', x: 0, y: 2, w: 3, h: 2, minW: 2, maxW: 4},
      {i: 'c', x: 0, y: 4, w: 12, h: 20}
    ];

    return (
      <div>
        <h1>Personal Dashboard</h1>
          <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div key={'a'}><Quote quoteData={this.state.allData.quoteText}/></div>
            <div key={'b'}>b</div>
            <div key={'c'}><BigCalendar events={this.state.events} /></div>
          </ReactGridLayout>
      </div>
    );
  };
};

export default App;
