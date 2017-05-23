import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

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
      <div className="row">
        {this.state.allData.map((data, i) =>
          <div className="col s6 m3">
          <div className="card">
            <div>
              <div className="card-image">
                <img src={data.urlToImage}/>
                <span className="card-title">{data.title}</span>
              </div>
              <div className="card-content">
                <p>{data.description}</p>
              </div>
              <div className="card-action">
                <a href={data.url}>Read Full Article</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    );
  };
};

export default News;
