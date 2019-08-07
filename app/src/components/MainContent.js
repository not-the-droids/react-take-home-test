import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CastMember from './CastMember'
import Center from './Center'
import './MainContent.css'

export class MainContent extends Component {
  renderEmpty = () => (
    <div className="fullHeight">
      <Center>
        <p>Search for a movie!</p>
      </Center>
    </div>
  )

  render() {
    const { movieDetails } = this.props

    if (movieDetails === undefined || movieDetails === null) {
      return this.renderEmpty()
    }

    const cast = movieDetails.cast || []
    const topBilledCast = cast.slice(0, 3)

    return (
      <div className="mainContentContainer">
        <img src={movieDetails.poster_path} alt="Movie Poster" style={posterStyle} />
        <div style={overviewStyle.container}>
          <h2 style={titleStyle}>{movieDetails.title}</h2>
          <div className='summaryContainer'>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
          </div>
          <div>
            <h3>Featured Crew</h3>
            <ul className='castList'>
              <li>
                <div>
                  <p>Bob Kane</p>
                  <span>Character</span>
                </div>
              </li>
              <li>
                <div>
                  <p>Sam Hamm</p>
                  <span>Screenplay</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div style={topBilledListContainerStyle}>
          <h3>Top Billed Cast</h3>
          <ul style={topBilledListStyle}>
            {topBilledCast.map(castMember => (
              <li key={castMember.tmdb_id} style={topBilledListItemStyle}>
                <CastMember castMemberData={castMember}></CastMember>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const posterStyle = {
  gridArea: 'poster',
  width: '100%',
  borderRadius: '2%',
}

const titleStyle = {
  // fontFamily: "Coda, sans-serif"
}

const overviewStyle = {
  container: {
    gridArea: 'overview',
    display: 'grid',
    gridGap: '30px',
    gridTemplateRows: 'auto auto auto',
  },
}

const topBilledListContainerStyle = {
  gridArea: 'cast',
}

const topBilledListStyle = {
  padding: 0,
}

const topBilledListItemStyle = {
  listStyle: 'none',
  display: 'inline-block',
  marginRight: '1em'
}

MainContent.propTypes = {
  movieDetails: PropTypes.object,
}

export default MainContent
