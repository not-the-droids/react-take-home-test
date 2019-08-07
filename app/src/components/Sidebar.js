import React, { Component } from 'react'
import MovieItem from './MovieItem'
import Center from './Center'
import LoadingIndicator from './LoadingIndicator'
import axios from 'axios'


export class Sidebar extends Component {
  constructor() {
    super();
    this.searchTimeout = null
  }

  state = {
    searchQuery: '',
    loading: false,
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
        this.setState({
          loading: true,
        })

        const res = await axios.get(searchURL)

        if (res.data && res.data.length > 0) {
          this.setState({
            searchCandidates: res.data,
            loading: false,
          })
        } else {
          this.setState({
            searchCandidates: [],
            loading: false,
          })
        }
      }, 300)
    } else {
      this.setState({
        searchCandidates: []
      })
    }
  }

  renderMovieList(searchCandidates, onMovieClicked) {
    if (this.state.loading) {
      return (
        <div style={{ height: '100%' }}>
          <Center>
            <LoadingIndicator />
          </Center>
        </div>
      )
    }

    if (searchCandidates.length && searchCandidates.length > 0) {
      return (
        <ul style={movieListStyle}>
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
          <input
            type="text"
            name="searchField"
            id="searchField"
            style={searchFieldStyle}
            onChange={this.onSearchChange}
            autoComplete="off"
            placeholder="Search for a movie..."
          />
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
  height: '90vh',
  minHeight: '700px',
}

const movieListStyle = {
  maxHeight: '100%',
  overflow: 'auto',
  padding: '5px',
}

const searchFormStyle = {
}

const searchFieldStyle = {
  width: '100%',
  minHeight: '2.5em',
  boxSizing: 'border-box',
  borderRadius: '5px',
  border: '1px solid #eee',
  paddingLeft: '10px',
}

export default Sidebar
