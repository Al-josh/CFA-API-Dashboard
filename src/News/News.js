import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './News.css';


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
    };
  };

  componentDidMount() {
    this.getNews();
  };

  getNews() {
    const newsAPI = process.env.REACT_APP_NEWS_API;
    console.log('componentDidMount()');
    const URL = newsAPI;
    axios.get(URL)
    .then((response) => {
      // console.log(response.data);
      const articles = response.data.articles;
      this.setState({
        allData: articles,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <MuiThemeProvider>
          <div className="newsCard">
            <div className="row">
            {this.state.allData.map((data, i) =>
              <div className="col s6 m4">
                <div>
                  <img alt="" src={data.urlToImage} width="100%" height="150px"/>
                  <p className="newsTitle"><strong>{data.title}</strong></p>
                  <p className="newsDescription">{data.description}</p>
                  <a href={data.url}><p className="newsLink">Read Full Article</p></a>
                </div>
              </div>
            )}
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
};

export default News;
