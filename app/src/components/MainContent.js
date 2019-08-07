import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CastMember from './CastMember'
import Center from './Center'
import { ImpulseSpinner } from 'react-spinners-kit'
import './MainContent.css'

export class MainContent extends Component {
  renderEmpty = () => (
    <div className="fullHeight">
      <Center>
        <p>Search for a movie!</p>
      </Center>
    </div>
  )

  renderCast = (castIsLoading, cast) => {
    if (castIsLoading) {
      return (
        <div style={{ width: '100%', height: '100%' }}>
          <Center>
            <ImpulseSpinner
              frontColor='#aaa'
              backColor='rgba(0,0,0,0)'
              loading={true}
            />
          </Center>
        </div>
      )
    }

    if (cast && cast.length && cast.length > 0) {
      return (
        <div style={topBilledListContainerStyle}>
          <h3>Top Billed Cast</h3>
          <ul style={topBilledListStyle}>
            {cast.map(castMember => (
              <li key={castMember.tmdb_id} style={topBilledListItemStyle}>
                <CastMember castMemberData={castMember}></CastMember>
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }

  render() {
    const { movieDetails, castIsLoading } = this.props

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
        {this.renderCast(castIsLoading, topBilledCast)}
      </div>
    )
  }
}

const posterStyle = {
  gridArea: 'poster',
  width: '100%',
  borderRadius: '2%',
  // border: '1px solid #ccc'
  boxShadow: '0 0 5px #ccc'
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
  display: 'flex',
  alignItems: 'start',
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
