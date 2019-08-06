import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CastMember from './CastMember'
import './MainContent.css'

export class MainContent extends Component {
  /**
   * Choose n random elements from the given array, and
   * return them as a new array.
   * 
   * @param {[object]} arr The array from which to choose the elements
   * @param {number} n The number of random elements to choose
   * @returns {[object]} The new array of n randomly chosen elements
   */
  chooseRandom = (arr, n) => {
    if (n >= arr.length) {
      n = arr.length - 1
    } else if (n < 0) {
      n = 0
    }

    /**
     * Use Fisher-Yates shuffle (Knuth variation) to
     * choose n random elements in linear time.
     * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */
    const placeholder = [...arr]
    const result = []
    let max = arr.length - 1

    while (n > 0) {
      const choiceIndex = Math.floor(Math.random() * max)
      const temp = placeholder[max]
      placeholder[max] = placeholder[choiceIndex]
      placeholder[choiceIndex] = temp
      result.push(placeholder[max])
      n--
      max--
    }

    return result
  }

  render() {
    const { movieDetails } = this.props
    const cast = movieDetails.cast || []
    const topBilledCast = cast.slice(0, 3)

    return (
      <div className="mainContentContainer">
        <img src={movieDetails.poster_path} alt="Movie Poster" style={posterStyle} />
        <div style={overviewStyle.container}>
          <h2>{movieDetails.title}</h2>
          <div className='summaryContainer'>
            <h3>Overview</h3>
            <p>{movieDetails.overview}</p>
          </div>
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
}

const overviewStyle = {
  container: {
    gridArea: 'overview',
    display: 'grid',
    gridGap: '10px',
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
