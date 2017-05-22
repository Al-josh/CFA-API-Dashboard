import React from 'react';
import axios from 'axios';

const Quote = (props) => {
  return (
    <div>
      <p>{props.quoteData === [] ? 'Loading...' : props.quoteData}</p>
    </div>
  )
};

export default Quote
