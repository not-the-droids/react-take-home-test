import React, { Component } from 'react'
import './MovieItem.css'

export class MovieItem extends Component {
  render() {
    const { movie, onMovieClicked } = this.props
    return (
      <div className="MovieItem-movieItemContainer" style={movieItemContainerStyle} onClick={() => onMovieClicked(movie)}>
        <img src={movie.poster_path} alt="" style={posterStyle} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={movieTitleStyle}>{movie.title}</p>
        </div>
      </div>
    )
  }
}

const movieItemContainerStyle = {
  display: 'flex',
  cursor: 'pointer'
}

/** @type {} */
const posterStyle = {
  height: '100px',
}

const movieTitleStyle = {
  margin: '0 0 0 10px',
  fontSize: '10pt',
  fontWeight: '600'
}

export default MovieItem
