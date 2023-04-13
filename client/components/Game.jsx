import React, { Component } from 'react';
import { render } from 'react-dom';

import Grid from './Grid.jsx';

class Game extends Component {
  render() {
    return (
      <div id="game">
        <h2>Codesweeper</h2>
        <Grid/>
      </div>
    )
  }
}

export default Game;