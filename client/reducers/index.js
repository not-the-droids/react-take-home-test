/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import movieReducer from './movieReducer';


// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  movies: movieReducer,
});

// make the combined reducers available for import
export default reducers;

