import React, { Component } from 'react'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

class App extends Component {
  state = {
    loading: false,
    movieDetails: {
      "id": 736,
      "title": "One Flew Over the Cuckoo's Nest",
      "overview": "While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.",
      "tmdb_id": 510,
      "release_date": "1975-11-18T00:00:00.000Z",
      "poster_path": "http://image.tmdb.org/t/p/w185/2Sns5oMb356JNdBHgBETjIpRYy9.jpg",
      "cast": [
        {
          "character": "Randle Patrick McMurphy",
          "movie_id": 736,
          "tmdb_id": 514,
          "name": "Jack Nicholson",
          "profile_path": "/hINAkm21g80UbaAxA6rHhOaT5Jk.jpg"
        },
        {
          "character": "Nurse Mildred Ratched",
          "movie_id": 736,
          "tmdb_id": 7071,
          "name": "Louise Fletcher",
          "profile_path": "/A4Cn7LsuLlOXvOMKv5ez4ThyeZL.jpg"
        },
        {
          "character": "Martini",
          "movie_id": 736,
          "tmdb_id": 518,
          "name": "Danny DeVito",
          "profile_path": "/zKuyzmKzPLG7RJo7lbbHjx6CCZc.jpg"
        },
        {
          "character": "Harding",
          "movie_id": 736,
          "tmdb_id": 7072,
          "name": "William Redfield",
          "profile_path": "/5Tk02lfq65M4GT4lfCCfSais2Qg.jpg"
        },
        {
          "character": "Orderly Turkle",
          "movie_id": 736,
          "tmdb_id": 7077,
          "name": "Scatman Crothers",
          "profile_path": "/n3REW3TGbjLC8SbaZG7g48pm98n.jpg"
        },
        {
          "character": "Billy Bibbit",
          "movie_id": 736,
          "tmdb_id": 1370,
          "name": "Brad Dourif",
          "profile_path": "/6pqeGxtWEdDjYsnQfUkmzXLlDvs.jpg"
        },
        {
          "character": "Taber",
          "movie_id": 736,
          "tmdb_id": 1062,
          "name": "Christopher Lloyd",
          "profile_path": "/iQzG9apaIsHnn7iGrer3YEDp8Zo.jpg"
        },
        {
          "character": "Chief Bromden",
          "movie_id": 736,
          "tmdb_id": 68301,
          "name": "Will Sampson",
          "profile_path": "/qcufMVWjaK0jlcDkkUZ6Kawvj2l.jpg"
        },
        {
          "character": "Dr. John Spivey",
          "movie_id": 736,
          "tmdb_id": 7075,
          "name": "Dean R. Brooks",
          "profile_path": "/tDVJhGtIGsZFk3BkU7rJg1Q4LSy.jpg"
        },
        {
          "character": "Ellis",
          "movie_id": 736,
          "tmdb_id": 7073,
          "name": "Michael Berryman",
          "profile_path": "/vXvztwbkFc0Pz8ty0Jlaomo8P10.jpg"
        },
        {
          "character": "Charlie Cheswick",
          "movie_id": 736,
          "tmdb_id": 7085,
          "name": "Sydney Lassick",
          "profile_path": "/mhP4tdmLagLgSd7bJ7PcZjogl6d.jpg"
        },
        {
          "character": "Jim Sefelt",
          "movie_id": 736,
          "tmdb_id": 7079,
          "name": "William Duell",
          "profile_path": "/1X6Qj2BQyy6QniGx0P73t18UxRk.jpg"
        },
        {
          "character": "Fredrickson",
          "movie_id": 736,
          "tmdb_id": 3418,
          "name": "Vincent Schiavelli",
          "profile_path": "/9VAmZfthJ8pbDsJE8cJxIpnFcQy.jpg"
        },
        {
          "character": "Col. Matterson",
          "movie_id": 736,
          "tmdb_id": 7074,
          "name": "Peter Brocco",
          "profile_path": "/lOpG2Gi5EkytfuixtLoP0vWTyjK.jpg"
        },
        {
          "character": "Miller",
          "movie_id": 736,
          "tmdb_id": 7076,
          "name": "Alonzo Brown",
          "profile_path": null
        },
        {
          "character": "Warren",
          "movie_id": 736,
          "tmdb_id": 7078,
          "name": "Mwako Cumbuka",
          "profile_path": "/zaT8Douj37WsxH9Bxx1xej65hc3.jpg"
        },
        {
          "character": "Bancini",
          "movie_id": 736,
          "tmdb_id": 7080,
          "name": "Josip Elic",
          "profile_path": "/dKk8NtsT5HoUugnPnb3EMseX7i7.jpg"
        },
        {
          "character": "Beans Garfield",
          "movie_id": 736,
          "tmdb_id": 7083,
          "name": "Ken Kenny",
          "profile_path": null
        },
        {
          "character": "Washington",
          "movie_id": 736,
          "tmdb_id": 7082,
          "name": "Nathan George",
          "profile_path": null
        },
        {
          "character": "Hap Arlich",
          "movie_id": 736,
          "tmdb_id": 136195,
          "name": "Ted Markland",
          "profile_path": "/orBobhJSFxq1TgRM9qKv0lJwV9v.jpg"
        },
        {
          "character": "Rose",
          "movie_id": 736,
          "tmdb_id": 100560,
          "name": "Louisa Moritz",
          "profile_path": null
        },
        {
          "character": "Candy",
          "movie_id": 736,
          "tmdb_id": 133774,
          "name": "Mews Small",
          "profile_path": null
        },
        {
          "character": "Scanlon",
          "movie_id": 736,
          "tmdb_id": 276531,
          "name": "Delos V. Smith Jr.",
          "profile_path": null
        },
        {
          "character": "Nurse Itsu",
          "movie_id": 736,
          "tmdb_id": 7081,
          "name": "Lan Fendors",
          "profile_path": null
        },
        {
          "character": "Nurse Pilbow",
          "movie_id": 736,
          "tmdb_id": 1544194,
          "name": "Mimi Sarkisian",
          "profile_path": null
        },
        {
          "character": "Harbor Master",
          "movie_id": 736,
          "tmdb_id": 7084,
          "name": "Mel Lambert",
          "profile_path": null
        },
        {
          "character": "Night Supervisor",
          "movie_id": 736,
          "tmdb_id": 7086,
          "name": "Kay Lee",
          "profile_path": null
        },
        {
          "character": "Ellsworth",
          "movie_id": 736,
          "tmdb_id": 1544193,
          "name": "Dwight Marfield",
          "profile_path": null
        },
        {
          "character": "Ruckley",
          "movie_id": 736,
          "tmdb_id": 1544288,
          "name": "Tin Welch",
          "profile_path": null
        },
        {
          "character": "Lady on Pier (uncredited)",
          "movie_id": 736,
          "tmdb_id": 9893,
          "name": "Aurore Clément",
          "profile_path": "/i6p9msKzKG1P9I2QcCk3h3vuO5F.jpg"
        },
        {
          "character": "Woman in Crowd on Pier (uncredited)",
          "movie_id": 736,
          "tmdb_id": 5657,
          "name": "Anjelica Huston",
          "profile_path": "/Aiyv68gYWcEe9OYhyCkOa09kjmy.jpg"
        },
        {
          "character": "Actress on TV Screen (uncredited)",
          "movie_id": 736,
          "tmdb_id": 100601,
          "name": "Audrey Landers",
          "profile_path": "/qThVtmGSdt2fgWazMJmFFOxSGva.jpg"
        },
        {
          "character": "Captain on Shore (uncredited)",
          "movie_id": 736,
          "tmdb_id": 1310,
          "name": "Saul Zaentz",
          "profile_path": "/uL9ZwX0BWrPprjk78XzENiWCOY1.jpg"
        }
      ]
    }
  }

  onMovieClicked = (movie) => {
    this.setState({
      movieDetails: movie
    })
  }

  render() {
    return (
      <div className="App" style={appContainerStyle} >
        <main style={mainContainerStyle}>
          <MainContent movieDetails={this.state.movieDetails} />
        </main>
        <aside style={sidebarContainerStyle}>
          <Sidebar onMovieClicked={this.onMovieClicked} />
        </aside>
      </div>
    );
  }
}

const appContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '[main] auto [sidebar] 250px',
  gridTemplateRows: 'auto',
  maxWidth: '992px',
  margin: 'auto',
}

const mainContainerStyle = {
  backgroundColor: 'lightgrey',
}

const sidebarContainerStyle = {
  backgroundColor: 'grey',
}

export default App;
