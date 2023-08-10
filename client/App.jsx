import React, { Component } from 'react';
import { render } from 'react-dom';

import Game from './components/Game.jsx';

class App extends Component {
  render() {
    return (
      <div id="app">
        <nav className='navBar'>
          <button className='navLink'>Create Account</button>
          <div></div>
          <button className='navLink'>Login</button>
        </nav>
        <Game/>
        {/* leaderboard */}
        {/* personal best times */}
      </div>
    )
  }
}

export default App;