import React from 'react';
import axios from 'axios';
import './Quote.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Quote = (props) => {
  return (
    <p className="quoteFont">{props.quoteData === [] ? 'Loading...' : props.quoteData}</p>
  )
};

export default Quote
