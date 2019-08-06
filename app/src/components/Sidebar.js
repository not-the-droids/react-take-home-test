import React, { Component } from 'react'
import MovieItem from './MovieItem'
import Center from './Center'
import axios from 'axios'


export class Sidebar extends Component {
  constructor() {
    super();
    this.searchTimeout = null
  }

  state = {
    searchQuery: '',
    searchCandidates: []
  }

  onSearchChange = (e) => {
    if (this.searchTimeout !== null) {
      clearTimeout(this.searchTimeout);
    }

    const searchTerm = e.target.value
    const searchURL = `https://clutter-front-end-interview.herokuapp.com/movies.json?q[title_cont]=${searchTerm}`

    this.setState({
      searchQuery: searchTerm
    })

    if (searchTerm.length > 0) {
      this.searchTimeout = setTimeout(async () => {
        console.log('Searching for ' + searchTerm);
        const res = await axios.get(searchURL)
        if (res.data && res.data.length > 0) {
          console.log(res.data)
          this.setState({
            searchCandidates: res.data
          })
        } else {
          this.setState({
            searchCandidates: []
          })
        }
      }, 500)
    } else {
      this.setState({
        searchCandidates: []
      })
    }
  }

  renderMovieList(searchCandidates, onMovieClicked) {
    if (searchCandidates.length && searchCandidates.length > 0) {
      return (
        <ul style={{ padding: 0 }}>
          {searchCandidates.map(candidate => (
            <li key={candidate.id} style={movieListItemStyle}>
              <MovieItem movie={candidate} onMovieClicked={onMovieClicked} />
            </li>
          ))}
        </ul>
      )
    }

    // Only display this message if the user tried to search for a movie
    if (this.state.searchQuery.length > 0) {
      return (
        <div style={{ height: '100%' }}>
          <p>No Movies Found</p>
        </div >
      )
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.searchQuery !== this.state.searchQuery) {
      return false
    }

    return true
  }

  componentDidUpdate() {
    console.log('Updated')
  }

  render() {
    const { searchCandidates } = this.state
    const { onMovieClicked } = this.props

    return (
      <div style={sidebarContainerStyle}>
        <form action="" style={searchFormStyle} onSubmit={(e) => e.preventDefault()} autoComplete="off">
          <input type="text" name="searchField" id="searchField" style={searchFieldStyle} onChange={this.onSearchChange} autoComplete="off" />
        </form>
        {this.renderMovieList(searchCandidates, onMovieClicked)}
      </div >
    )
  }


}

/** @type {Shor} */
const movieListItemStyle = {
  marginBottom: '10px',
  listStyle: 'none'
}

const sidebarContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
  height: '100%',
}

const searchFormStyle = {
}

const searchFieldStyle = {
  width: '100%',
  minHeight: '2em',
  boxSizing: 'border-box'
}

export default Sidebar
