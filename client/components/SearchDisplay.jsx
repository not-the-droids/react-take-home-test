/**
 * ************************************
 *
 * @module  SearchDisplay
 * @author
 * @date
 * @description presentation component that takes user input for movie searches and displays results list
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
    searchResult: store.movies.searchResults,
});
  
const mapDispatchToProps = dispatch => ({
    searchMovies: (event) => {
        dispatch(actions.searchMovies(event.target.value))
    },
    searchResults: () => {
        dispatch(actions.searchResults())
    },
    selection: (event) => {
        dispatch(actions.selection(event))
    }
});


class SearchDisplay extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {

        const searchedMovies = this.props.searchResult.map(movie => {
            return (
                <div key={movie.id} className="movieUnit" onClick={event => this.props.selection(event.target.id)}>
                  <img id={movie.id} src={movie.poster_path} style={{ height: 100 }}></img>
                  <p id={movie.id} className="unitTitle">{movie.title}</p>
                  <p id={movie.id}>Released: {movie.release_date.slice(0, 10)}</p>
                </div>
              )
        })

      return(
        <div>
            <h3>Search Movies Here</h3>
            <h3 style={{display:'inline-block'}}>Location</h3>
            <input type='text' id='user-input' onInput={event => this.props.searchMovies(event)} placeholder='search' ></input>
            <button onClick={event => {event.preventDefault(); this.props.searchResults()}} >Search</button>
            <hr></hr>
            {searchedMovies}
        </div>
      )
    }
  
  }




export default connect(mapStateToProps, mapDispatchToProps)(SearchDisplay);