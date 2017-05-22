import React from 'react';
import axios from 'axios';

const Quote = (props) => {
  return (
    <div>
      {console.log(props.quoteData.contents)}
      <p>{props.quoteData}</p>
    </div>
  )
};

export default Quote
