import React, { Component } from 'react'
import logo from './logo.svg'
import Center from './components/Center'
import MainContent from './components/MainContent'

class App extends Component {
  state = {
    movieDetails: {
      "id": 497,
      "title": "Wonder Woman",
      "overview": "An Amazon princess comes to the world of Man to become the greatest of the female superheroes.",
      "tmdb_id": 297762,
      "release_date": "2017-05-30T00:00:00.000Z",
      "poster_path": "http://image.tmdb.org/t/p/w185/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg"
    }
  }

  render() {
    return (
      <div className="App" style={appContainerStyle} >
        <main style={mainContainerStyle}>
          <MainContent movieDetails={this.state.movieDetails} />
        </main>
        <aside style={sidebarContainerStyle}>
          <Center>
            <p>Sidebar</p>
          </Center>
        </aside>
      </div>
    );
  }
}

const appContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '[main] auto [sidebar] 250px',
  gridTemplateRows: 'auto',
  maxWidth: '900px',
  margin: 'auto',
}

const mainContainerStyle = {
  backgroundColor: 'lightgrey',
}

const sidebarContainerStyle = {
  backgroundColor: 'grey',
}

export default App;
