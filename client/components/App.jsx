import React, { Component } from 'react';
import { render } from 'react-dom';

import Grid from './Grid.jsx';

class App extends Component {
  render() {
    return (
      <div id="app">
        <nav className='navBar'>
          <button className='navLink'>Create Account</button>
          <div></div>
          <button className='navLink'>Login</button>
        </nav>
        <h2>Codesweeper</h2>
        <Grid/>
      </div>
    )
  }
}

export default App;