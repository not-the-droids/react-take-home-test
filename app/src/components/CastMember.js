import React from 'react'
import CastImagePlaceholder from './CastImagePlaceholder'
import Center from './Center'

const renderCastMemberPortrait = (profile_path) => {
  if (profile_path === null || profile_path === undefined) {
    return <CastImagePlaceholder />
  }

  return (
    <img
      src={`https://image.tmdb.org/t/p/original${profile_path}`}
      alt=""
      style={portraitStyle}
    />
  )
}

export default ({ castMemberData }) => (
  <div style={{ textAlign: 'center', width: '120px' }}>
    <Center>
      <div style={castPortraitStyle}>
        {renderCastMemberPortrait(castMemberData.profile_path)}
      </div>
    </Center>
    <p>{castMemberData.name}</p>
  </div>
)

/** @type{React.CSSProperties} */
const castPortraitStyle = {
  width: '80px',
  height: '80px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRadius: '50%',
  overflow: 'hidden',
  color: '#555',
  textAlign: 'center',
  fontSize: '10pt',
  boxShadow: '2px 2px 5px black'
}

/** @type{React.CSSProperties} */
const portraitStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '50% 30%',
}
