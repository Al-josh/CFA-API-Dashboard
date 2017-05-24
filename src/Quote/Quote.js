import React from 'react';
import './Quote.css';

const Quote = (props) => {
  return (
    <p className="quoteFont">{props.quoteData === [] ? 'Loading...' : props.quoteData}</p>
  )
};

export default Quote
