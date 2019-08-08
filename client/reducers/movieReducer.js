/**
 * ************************************
 *
 * @module  movieReducer
 * @author
 * @date
 * @description reducer for movie data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  currentSelection: [],
  crew: [],
  allMovies: [],
  searchResults: [],
  searchParameter: '',
};

const movieReducer = (state=initialState, action) => {

  switch(action.type) {

    case types.GET_MOVIES:
        let allMovies = [];
        action.payload.payload.forEach(movie => {
            allMovies.push(movie);
        })

        return {
            ...state,
            allMovies
        };

    case types.FAILED_GET_MOVIES:
        if (action.payload) {
            let noMovies = 'Error in movie retrieval! Try again later.'
            return {
                ...state,
                allMovies: noMovies,
            };
        } else {
            return {
                ...state
            }
        }

    case types.SEARCH_MOVIES:

    return{
      ...state,
      searchParameter: action.payload
    }


    case types.SEARCH_RESULTS:
        let movies = state.allMovies.slice();
        let searchResults = [];
        movies.forEach(movie => {
            if (movie.title.toLowerCase().includes(state.searchParameter)) {
                searchResults.push(movie);
            }
        })

    return{
      ...state,
      searchResults
    }


    case types.SELECTION:
        let moviesList = state.allMovies.slice()
        let selection = action.payload.payload;
        let currentSelection = [];
        moviesList.forEach(movie => {
            if (movie.id == action.payload.movieid) {
                currentSelection.push(movie);
            }
        })

        let crew = [];
        if (selection) {
            selection.forEach(person => {
                crew.push(person);
            })
        }

    return{
      ...state,
      currentSelection,
      crew
    }

    case types.FAILED_SELECTION:
        if (action.payload) {
            let noSelection = 'Error in selection retrieval! Try again later.'
            return {
                ...state,
                currentSelection: noSelection,
            };
        } else {
            return {
                ...state
            }
        }

    default:
      return state;
  }
};

export default movieReducer;