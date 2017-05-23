import React from 'react';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const Quote = (props) => {
  return (
    <MuiThemeProvider>
      <Card>
        <AppBar title="Quote of the Day" iconClassNameRight="muidocs-icon-navigation-expand-more" />
        <CardActions>
        </CardActions>
        <CardText expandable={false}>
          <strong>{props.quoteData === [] ? 'Loading...' : props.quoteData}</strong>
        </CardText>
      </Card>
    </MuiThemeProvider>
  )
};

export default Quote
