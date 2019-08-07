import React, { Component } from 'react'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import axios from 'axios'
import constants from './constants'

class App extends Component {
  state = {
    castIsLoading: false,
  }

  onMovieClicked = async (movie) => {
    this.setState({
      movieDetails: movie,
      castIsLoading: true
    })

    const castURL = `https://clutter-front-end-interview.herokuapp.com/movies/${movie.id}/cast_members.json`

    const res = await axios.get(castURL)

    this.setState({
      castIsLoading: false,
      movieDetails: {
        ...movie,
        cast: res.data,
      }
    })
  }

  render() {
    return (
      <div className="App" style={appContainerStyle} >
        <main style={mainContainerStyle} className='mainContainer'>
          <MainContent
            movieDetails={this.state.movieDetails}
            castIsLoading={this.state.castIsLoading}
          />
        </main>
        <aside style={sidebarContainerStyle}>
          <Sidebar onMovieClicked={this.onMovieClicked} />
        </aside>
      </div>
    );
  }
}

const appContainerStyle = {
  margin: '30px auto',
  borderRadius: '20px',
  display: 'grid',
  gridTemplateColumns: '[main] auto [sidebar] 250px',
  gridTemplateRows: 'auto',
  maxWidth: '992px',
  maxHeight: '90vh',
  boxShadow: '0 0 100px black'
}

const mainContainerStyle = {
  color: 'white',
  borderTopLeftRadius: constants.PAGE_BORDER_RADIUS + 'px',
  borderBottomLeftRadius: constants.PAGE_BORDER_RADIUS + 'px',
}

const sidebarContainerStyle = {
  backgroundColor: 'white',
  maxHeight: '90vh',
  borderTopRightRadius: constants.PAGE_BORDER_RADIUS + 'px',
  borderBottomRightRadius: constants.PAGE_BORDER_RADIUS + 'px',
}

export default App;
