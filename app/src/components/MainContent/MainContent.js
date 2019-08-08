import React from 'react'
import PropTypes from 'prop-types'
import CastMember from '../CastMember'
import Center from '../Center'
import LoadingIndicator from '../LoadingIndicator'
import ClapperboardIcon from '../ClapperboardIcon'
import FeaturedCrewSection from '../FeaturedCrewSection'
import './MainContent.css'

const renderEmpty = () => (
  <div className="fullHeight">
    <Center>
      <ClapperboardIcon />
    </Center>
  </div>
)

const renderCast = (castIsLoading, cast) => {
  if (castIsLoading) {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Center>
          <LoadingIndicator />
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

export default function MainContent({ movieDetails, castIsLoading }) {
  if (movieDetails === undefined || movieDetails === null) {
    return renderEmpty()
  }

  const cast = movieDetails.cast || []
  const topBilledCast = cast.slice(0, 3)

  return (
    <div className="MainContent-mainContentContainer">
      <img src={movieDetails.poster_path} alt="Movie Poster" style={posterStyle} />
      <div style={overviewStyle.container}>
        <h2 style={subHeadingStyle}>{movieDetails.title}</h2>
        <div className='summaryContainer'>
          <h3 style={{ ...subHeadingStyle, lineHeight: '10pt' }}>Overview</h3>
          <p style={{ marginBottom: 0 }}>{movieDetails.overview}</p>
        </div>
        <FeaturedCrewSection />
      </div>
      {renderCast(castIsLoading, topBilledCast)}
    </div>
  )
}

const subHeadingStyle = {
  margin: 0,
}

const posterStyle = {
  gridArea: 'poster',
  width: '100%',
  borderRadius: '2%',
  // border: '1px solid #ccc'
  boxShadow: '0 0 5px #ccc'
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
  castIsLoading: PropTypes.bool
}
