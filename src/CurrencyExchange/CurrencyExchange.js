import React, { Component } from 'react';
import axios from 'axios';

class CurrencyExchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: [],
    };
  };

  componentDidMount() {
    this.getNews();
  };

  getNews() {
    console.log('componentDidMount()');
    const URL = 'http://api.fixer.io/latest?base=AUD';
    axios.get(URL)
    .then((response) => {
      const base = response.data.rates;
      this.setState({
        currency: base,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="currencyBox">
        <p>1 AUD = {this.state.currency.EUR} EUR</p>
        <p>1 AUD = {this.state.currency.USD} USD</p>
        <p>1 AUD = {this.state.currency.HKD} HKD</p>
      </div>
    );
  };
};

export default CurrencyExchange;
