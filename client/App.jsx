import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
          <h1>AMAZING MOVIE DATABASE!</h1>
         <MainContainer />
      </div>
    )
  }
}

export default App;