import React from 'react';
import Board from './Board.jsx';

const Game = ({ selectedLevel }) => {

  return (
    <div id="game">
      <h2>Codesweeper</h2>
      <Board selectedLevel={selectedLevel} />
    </div>
  );
};

export default Game;