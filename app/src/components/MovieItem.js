import React, { Component } from 'react'
import './MovieItem.css'

export class MovieItem extends Component {
  render() {
    const { movie, onMovieClicked } = this.props
    const releaseDate = new Date(movie.release_date)
    return (
      <div className="MovieItem-movieItemContainer" style={movieItemContainerStyle} onClick={() => onMovieClicked(movie)}>
        <img src={movie.poster_path} alt="" style={posterStyle} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={movieTitleStyle}>{movie.title}</p>
          <p style={releaseDateStyle}>{releaseDate.getFullYear()}-{releaseDate.getMonth()}-{releaseDate.getDay()}</p>
        </div>
      </div>
    )
  }
}

const movieItemContainerStyle = {
  display: 'flex',
  cursor: 'pointer',
  padding: '5px',
}

/** @type {} */
const posterStyle = {
  height: '80px',
  objectFit: 'cover',
}

const movieTitleStyle = {
  margin: '0 0 0 10px',
  fontSize: '10pt',
  fontWeight: '600'
}

const releaseDateStyle = {
  margin: '5px 0 0 10px',
  fontSize: '10pt',
  fontWeight: 'light'
}

export default MovieItem
