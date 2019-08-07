import React, { Component } from 'react'
import Center from './Center'

export class CastMember extends Component {
  render() {
    const { castMemberData } = this.props
    return (
      <div style={{ textAlign: 'center', width: '120px' }}>
        <Center>
          <div style={castPortraitStyle}>
            <img src={`https://image.tmdb.org/t/p/original${castMemberData.profile_path}`} alt="" style={portraitStyle} />
          </div>
        </Center>
        <p>{castMemberData.name}</p>
      </div>
    )
  }
}

/** @type{React.CSSProperties} */
const castPortraitStyle = {
  width: '100px',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRadius: '50%',
  overflow: 'hidden',
  color: '#555',
  textAlign: 'center',
  fontSize: '10pt',
  border: '1px solid white',
  boxShadow: '2px 2px 5px black'
}

/** @type{React.CSSProperties} */
const portraitStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '50% 30%',
}

export default CastMember
