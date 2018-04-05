import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Title} from '../components/Title';
import {SearchForm} from "../components/SearchForm";
import {MoviesList} from "../components/MoviesList";

export class Home extends Component {
  
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
      <div className="Home">
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
      </div>
    )
  }
}