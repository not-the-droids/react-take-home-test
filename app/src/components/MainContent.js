import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Center from './Center'
import './MainContent.css'

export class MainContent extends Component {
  render() {
    const { movieDetails } = this.props
    return (
      <div class="mainContentContainer">
        <img src={movieDetails.poster_path} alt="Movie Poster" style={posterStyle} />
        <div style={overviewStyle.container}>
          <h2 style={overviewStyle.title}>{movieDetails.title}</h2>
          <div class='summaryContainer'>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
          </div>
          <h3>Featured Crew</h3>
          <ul class='castList'>
            <li>
              <div>
                <p>Bob Kane</p>
                <span>Character</span>
              </div>
            </li>
            <li>
              <div>
                <p>Bob Kane</p>
                <span>Character</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const posterStyle = {
  gridArea: 'poster'
}

const overviewStyle = {
  container: {
    gridArea: 'overview',
    display: 'grid',
    gridGap: '10px',
    gridTemplateRows: 'auto auto auto',
  },
  title: {
    margin: '0 0 20px 0',
  }
}

const castListStyle = {

}

MainContent.propTypes = {
  movieDetails: PropTypes.object,
}

export default MainContent
