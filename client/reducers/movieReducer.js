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

    // case will retrieve all movies from API and store in state
    case types.GET_MOVIES:
        let allMovies = [];
        action.payload.payload.forEach(movie => {
            allMovies.push(movie);
        })

        return {
            ...state,
            allMovies
        };

    // case for if retrieval from API failed, still need to add proper error handling
    case types.FAILED_GET_MOVIES:
        if (action.payload) {
            // let noMovies = 'Error in movie retrieval! Try again later.'
            return {
                ...state,
                allMovies: noMovies,
            };
        } // else {
        //     return {
        //         ...state
        //     }
        // }

    // will update current search parameter to be used as keyword in movie list search
    // should still add function to clean query for security purposes
    case types.SEARCH_MOVIES:

    return{
      ...state,
      searchParameter: action.payload
    }

    // identifies search results based on search parameter
    case types.SEARCH_RESULTS:
        let movies = state.allMovies.slice();
        let parameter = state.searchParameter.toLowerCase();
        let searchResults = [];
        movies.forEach(movie => {
            if (movie.title.toLowerCase().includes(parameter)) {
                searchResults.push(movie);
            }
        })

    return{
      ...state,
      searchResults
    }

    // gets details for movie selection (movie from search result list that was clicked)
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
        if (selection.length > 0) {
            selection.forEach(person => {
                crew.push(person);
            })
        } else {
            crew = [{'movie_id': 0, 'name': 'No crew data for selection!', 'character': 'Try another movie!'}]
        }

    return{
      ...state,
      currentSelection,
      crew
    }

    // case for if retrieval of selected movie failed (would be due to cast member API call), still need to add proper error handling
    case types.FAILED_SELECTION:
        if (action.payload) {
            //let noSelection = 'Error in selection retrieval! Try again later.'
            return {
                ...state,
                // currentSelection: noSelection,
            };
         } // else {
        //     return {
        //         ...state
        //     }
        // }

    default:
      return state;
  }
};

export default movieReducer;