import React, { Component } from 'react';
import {Title} from './components/Title';
import {SearchForm} from "./components/SearchForm";
import {Movie} from "./components/Movie";
import {MoviesList} from "./components/MoviesList";

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  
  state = {
    results: [],
    usedSearch: false
  };
  
  _handleResults = (results) => {
    console.log(results);
    this.setState({ results, usedSearch: true });
  };
  
  _renderResults() {
    return this.state.results.length === 0
      ? <p>Sorry! 😔 Results not found</p>
      : <MoviesList movies={this.state.results}/>
  }
  
  render() {
    return (
      <section className="section has-text-centered">
        <div className="container">
          <Title>Search Movies</Title>
          <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResults}/>
          </div>
          { this.state.usedSearch
            ? this._renderResults()
            : <small>Use the form to search a movie</small>
          }
        </div>
      </section>
    );
  }
}

export default App;
