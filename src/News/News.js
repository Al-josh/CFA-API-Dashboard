import React, { Component } from 'react';
import axios from 'axios';

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
      <div>
        <h3>Current News</h3>
        <div className="row">
        {this.state.allData.map((data, i) =>
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{data.title}</span>
                <p>{data.description}</p>
              </div>
              <div className="card-action">
                <a href={data.url}>Full Article</a>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    );
  };
};

export default News;
