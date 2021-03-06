/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description component that renders MovieDisplay and SearchDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieDisplay from '../components/MovieDisplay.jsx';
import SearchDisplay from '../components/SearchDisplay.jsx'
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  currentSelection: store.movies.currentSelection
});

const mapDispatchToProps = dispatch => ({
  getMovies: () => {
    dispatch(actions.getMovies())
},
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.getMovies();
  }

  render() {
    return(
      <div className="container">
          <h1 id="header">Brought to you by: Expedition Co.</h1>
        <div className="outerBox">
          <MovieDisplay></MovieDisplay>
          <SearchDisplay></SearchDisplay>
        </div>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);