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
        {this.state.allData.map((data, i) => <p key={i}>Title: {data.title} <br/> Description: {data.description} <br/> <a href={data.url}>Full Article</a><img src={data.urlToImage}/></p>)}
      </div>
    );
  };
};

export default News;
