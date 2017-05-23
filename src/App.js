import React, { Component } from 'react';
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
      { i: 'a', x: 0, y: 0, w: 12, h: 4},
      { i: 'b', x: 0, y: 2, w: 3, h: 10, minW: 2, maxW: 4 },
      { i: 'c', x: 0, y: 4, w: 12, h: 20 },
      { i: 'd', x: 0, y: 4, w: 12, h: 20 },
      { i: 'e', x: 0, y: 4, w: 5, h: 8 },
    ];

    return (
      <Row>
        <Col s={11} className='grid-example'>
          <Greeting />
          <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1400}>
            <div key={'a'}><Quote quoteData={this.state.allData.quoteText}/></div>
             <div key={'b'}><Forecast /></div>
             {/* <div key={'c'}><BigCalendar events={this.state.events} /></div> */}
             {/* <div key={'d'}><News /></div> */}
             {/* <div key={'e'}><CurrencyExchange /></div> */}
          </ReactGridLayout>
        </Col>
        <Col s={1} className='grid-example sidebar'>
          <div className="sideBarItem sideBarItemFirst sideBarImage"><img src="https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//home1600.png" height="70px"/></div>
          <div className="sideBarItem sideBarImage"><img src="http://res.cloudinary.com/dzctpgu9d/image/upload/v1495531618/0106-currencies-512_ezvz0j.png" height="70px"/></div>
          <div className="sideBarItem sideBarImage"><img src="http://res.cloudinary.com/dzctpgu9d/image/upload/v1495531800/calendar-512_d4wava.png" height="70px"/></div>
          <div className="sideBarItem sideBarImage"><img src="https://cdn3.iconfinder.com/data/icons/basic-mobile-part-2/512/newspaper-512.png" height="70px"/></div>
        </Col>
      </Row>
    );
  };
};

export default App;
