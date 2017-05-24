import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import axios from 'axios';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

// import module and CSS for resizable, draggable grids
// https://github.com/STRML/react-grid-layout
import ReactGridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import {Col, Row} from 'react-materialize';

import Quote from './Quote/Quote';
import News from './News/News';
import Forecast from './Forecast/Forecast';
import CurrencyExchange from './CurrencyExchange/CurrencyExchange';
import Greeting from './Greeting/Greeting';

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
      events: [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2017, 5, 0),
    'end': new Date(2017, 5, 1)
  },
  {
    'title': 'Long Event',
    'start': new Date(2017, 5, 7),
    'end': new Date(2017, 5, 10)
  },

  {
    'title': 'DTS STARTS',
    'start': new Date(2017, 5, 13, 0, 0, 0),
    'end': new Date(2017, 5, 20, 0, 0, 0)
  },

  {
    'title': 'DTS ENDS',
    'start': new Date(2017, 10, 6, 0, 0, 0),
    'end': new Date(2017, 10, 13, 0, 0, 0)
  },

  {
    'title': 'Some Event',
    'start': new Date(2017, 5, 9, 0, 0, 0),
    'end': new Date(2017, 5, 9, 0, 0, 0)
  },
  {
    'title': 'Conference',
    'start': new Date(2017, 5, 11),
    'end': new Date(2017, 5, 13),
    desc: 'Big conference for important people'
  },
  {
    'title': 'Meeting',
    'start': new Date(2017, 5, 12, 10, 30, 0, 0),
    'end': new Date(2017, 5, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
  },
  {
    'title': 'Lunch',
    'start':new Date(2017, 5, 12, 12, 0, 0, 0),
    'end': new Date(2017, 5, 12, 13, 0, 0, 0),
    desc: 'Power lunch'
  },
  {
    'title': 'Meeting',
    'start':new Date(2017, 5, 12,14, 0, 0, 0),
    'end': new Date(2017, 5, 12,15, 0, 0, 0)
  },
  {
    'title': 'Happy Hour',
    'start':new Date(2017, 5, 12, 17, 0, 0, 0),
    'end': new Date(2017, 5, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day'
  },
  {
    'title': 'Dinner',
    'start':new Date(2017, 5, 12, 20, 0, 0, 0),
    'end': new Date(2017, 5, 12, 21, 0, 0, 0)
  },
  {
    'title': 'Birthday Party',
    'start':new Date(2017, 5, 13, 7, 0, 0),
    'end': new Date(2017, 5, 13, 10, 30, 0)
  }
],
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
    var layout = [
      { i: 'a', x: 0, y: 0, w: 12, h: 12},
      { i: 'b', x: 0, y: 2, w: 12, h: 5, minW: 2, maxW: 4 },
      { i: 'c', x: 0, y: 3, w: 13, h: 15, static: true },
      { i: 'd', x: 0, y: 1, w: 12, h: 20, static: true },
      { i: 'e', x: 0, y: 4, w: 5, h: 8 },
    ];

    return (
      <Router>
        <Row className="noMargin">
          <Col s={11} className='grid-example'>

              <Route exact path="/" component={Greeting}/>
              <Route path="/news" component={News}/>
              <div className="fullHeight">
              <Route path="/calendar" component={() => (<BigCalendar events={this.state.events} />)}/>
              </div>
              {/* <div key={'b'}><Quote quoteData={this.state.allData.quoteText}/></div> */}
              {/* <div key={'c'} className="calendar"><BigCalendar events={this.state.events} /></div> */}
              {/* <div key={'d'}><News /></div> */}

          </Col>
          <Col s={1} className='grid-example sidebar'>
            <div className="sideBarItem sideBarImage"><Forecast/></div>
            <div className="sideBarItem sideBarItemFirst sideBarImage centreAlign"><Link to="/"><img src="https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//home1600.png" height="70px"/></Link></div>
            <div className="sideBarItem sideBarImage centreAlign"><Link to="/calendar"><img src="http://res.cloudinary.com/dzctpgu9d/image/upload/v1495531800/calendar-512_d4wava.png" height="70px"/></Link></div>
            <div className="sideBarItem sideBarImage centreAlign"><Link to="/news"><img src="https://cdn3.iconfinder.com/data/icons/basic-mobile-part-2/512/newspaper-512.png" height="70px"/></Link></div>
            <div className="sideBarItem sideBarImage centreAlign"><img src="http://res.cloudinary.com/dzctpgu9d/image/upload/v1495531618/0106-currencies-512_ezvz0j.png" height="70px"/></div>
            <div className="sideBarItem sideBarImage centreAlign"><CurrencyExchange /></div>
          </Col>
        </Row>
      </Router>
    );
  };
};

export default App;
