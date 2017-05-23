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
        <Card>
          <AppBar title="Latest News" iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <CardActions>
          </CardActions>
          <CardText expandable={false}>
            <div className="row">
            {this.state.allData.map((data, i) =>
              <div className="col s6 m3">
                <div>
                  <img src={data.urlToImage} width="100%"/>
                  <p className="newsTitle"><strong>{data.title}</strong></p>
                  <p className="newsDescription">{data.description}</p>
                  <a href={data.url}><p className="newsLink">Read Full Article</p></a>
              </div>
            </div>
          )}
        </div>
          </CardText>
        </Card>
      </MuiThemeProvider>
    )
  }
};

export default News;
