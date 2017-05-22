import React, { Component } from 'react';
import axios from 'axios';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTitles: []
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
        allTitles: articles,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <ul>
        {this.state.allTitles.map((data, i) => <li key={i}>{data.title}</li>)}

      </ul>
    );
  };
};


// {props.ingredients.map((ingredient, i) => <li key={i}>{ingredient.name} <button onClick={() => props.deleteIngredient(ingredient._id)}>Delete</button></li>)}


      // <p>{this.state.allNews.articles === [] ? 'Loading...' : this.state.allNews.articles} </p>
export default News;
