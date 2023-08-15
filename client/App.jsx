import React, { Component } from 'react';
import { render } from 'react-dom';

import Game from './components/Game.jsx';
import NavBar from './components/NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div id="app">
        {/* <NavBar /> */}
        <Game />
        {/* leaderboard */}
        {/* personal best times */}
      </div>
    )
  }
}

export default App;