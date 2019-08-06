import React, { Component } from 'react'
import Center from './Center'

export class CastMember extends Component {
  render() {
    const { castMemberData } = this.props
    return (
      <div>
        <Center>
          <img src={`https://image.tmdb.org/t/p/original${castMemberData.profile_path}`} alt="" style={portraitStyle} />
        </Center>
        <p>
          {castMemberData.name}
        </p>
      </div>
    )
  }
}

const portraitStyle = {
  width: '75px',
  height: '75px',
  borderRadius: '50%',
  objectFit: 'cover',
  objectPosition: 'top',
}

export default CastMember
