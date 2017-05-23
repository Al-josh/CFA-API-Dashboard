// import React, { Component } from 'react';
// import axios from 'axios';
//
// class Weather extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       weatherCondition: [],
//       temperature: [],
//     };
//   };
//
//   componentDidMount() {
//     this.getWeather();
//   };
//
//   getWeather() {
//     console.log('componentDidMount()');
//     const URL = "http://dataservice.accuweather.com/currentconditions/v1/22889?apikey=WV4TR4tcV6Hb9FTRbbaOINsInJ5fbaV5";
//     axios.get(URL)
//     .then((response) => {
//       // console.log(response.data);
//       const base = response.data[0];
//       this.setState({
//         weatherCondition: base.WeatherText,
//         temperature: base.Temperature.Metric.Value,
//       });
//       console.log(response.data);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   };
//
//   render() {
//     return (
//     <div>
//       <p>{this.state.weatherCondition === [] ? 'Loading...' : this.state.weatherCondition} </p>
//       <p>{this.state.temperature === [] ? 'Loading...' : this.state.temperature} </p>
//     </div>
//     );
//   };
// };
//
// export default Weather;
