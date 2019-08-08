/**
 * ************************************
 *
 * @module  MovieDisplay
 * @author
 * @date
 * @description presentation component that renders selected Search Result movie details
 *
 * ************************************
 */

import React from 'react';
import { connect } from 'react-redux';
// import * as actions from '../actions/actions';


const mapStateToProps = store => ({
    currentSelection: store.movies.currentSelection,
    crew: store.movies.crew
});
  
const mapDispatchToProps = dispatch => ({
    // not needed right now
});

const MovieDisplay = (props) => {

    // creating crew unit components from returned data
    const selectedCrew = props.crew.map(person => {
        return (
            <div key={person.movie_id} className="selectedCrewUnit" >
              {/* <img id={person.movie_id} src={person.profile_path} style={{ height:50 }}></img> */}
              <h3 id={person.movie_id} className="crewName">{person.name} </h3>
              <h5>{person.character}</h5>
            </div>
          )
    })

    // creating movie unit component from returned data, and rendering crew unit components
    const selectedMovie = props.currentSelection.map(movie => {
      if (selectedCrew) {
          return (
              <div key={movie.id} className="selectedMovieUnit" >
                <img id={movie.id} src={movie.poster_path} style={{ height: 500 }}></img>
                <h2 id={movie.id} className="unitTitle">{movie.title} ({movie.release_date.slice(0, 4)}) </h2>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Featured Crew</h3>
                {selectedCrew}
              </div>
            )
      }
  })

  // rendering selected movie
  return(
    <div className="displayBox">
      <h2>Selected Movie</h2>
      <div>
          {selectedMovie}
      </div>
    </div>

  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDisplay);