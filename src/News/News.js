import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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
    console.log('componentDidMount()');
    const URL = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=7cba8aeaad16479c8c9cc6fc6ba0c4c1";
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
                  <img src={data.urlToImage} width="100%" height="150px"/>
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
