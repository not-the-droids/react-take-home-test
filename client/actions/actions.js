import * as types from '../constants/actionTypes';
import thunk from 'redux-thunk';
const axios = require('axios');


export const getMovies = () => (dispatch) => {
    axios
    .get('https://clutter-front-end-interview.herokuapp.com/movies.json')
    .then(response => {
        return dispatch(
            getMoviesSuccess({
            type: types.GET_MOVIES,
            payload: response.data
        })
        )
    })
    .catch(error => {
        return dispatch(
            getMoviesFailure({
            type: types.FAILED_GET_MOVIES,
            payload: error.message
        })
        )
    })
};
  
export const getMoviesSuccess = (res) => ({
    type: types.GET_MOVIES,
    payload: res
});

export const getMoviesFailure = (err) => ({
    type: types.FAILED_GET_MOVIES,
    payload: err
});

export const searchMovies = (keyword) => ({
    type: types.SEARCH_MOVIES,
    payload: keyword
});

export const searchResults = (resultsArr) => ({
    type: types.SEARCH_RESULTS,
    payload: resultsArr
});

// export const selection = (movieid) => ({
//     type: types.SELECTION,
//     payload: movieid
// });

export const selection = (movieid) => (dispatch) => {
    axios
    .get(`https://clutter-front-end-interview.herokuapp.com/movies/${movieid}/cast_members.json`)
    .then(response => {
        return dispatch(
            getSelectionSuccess({
            type: types.SELECTION,
            payload: response.data, movieid
        })
        )
    })
    .catch(error => {
        return dispatch(
            getSelectionFailure({
            type: types.FAILED_SELECTION,
            payload: error.message
        })
        )
    })
};

export const getSelectionSuccess = (res) => ({
    type: types.SELECTION,
    payload: res
});

export const getSelectionFailure = (err) => ({
    type: types.FAILED_SELECTION,
    payload: err
});