import React, { Component } from 'react';
import { render } from 'react-dom';

import Board from './Board.jsx';

class Game extends Component {
  render() {
    return (
      <div id="game">
        <h2>Codesweeper</h2>
        <Board/>
      </div>
    )
  }
}

export default Game;