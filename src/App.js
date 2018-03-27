import React, { Component } from 'react';
import {Title} from './components/Title';
import {SearchForm} from "./components/SearchForm";

import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  
  state = {
    results: []
  };
  
  _handleResults = (results) => {
    console.log(results);
    this.setState({ results });
  };
  
  _renderResults() {
    const {results} = this.state;
    //console.log(results);
    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>;
    });
  };
  
  render() {
    return (
      <section className="section has-text-centered">
        <div className="container">
          <Title>Search Movies</Title>
          <div className="SearchForm-wrapper">
            <SearchForm onResults={this._handleResults}/>
          </div>
          {this.state.results.length === 0
          ? <p className="">Sin resultados</p>
          : this._renderResults()}
        </div>
      </section>
    );
  }
}

export default App;
