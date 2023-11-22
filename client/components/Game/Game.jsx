import React, { useState } from 'react';
import Board from './Board.jsx';
import NavBar from '../NavBar.jsx';
import Level from '../Level.jsx';

const Game = ({ selectedLevel }) => {
  // const [selectedLevel, setSelectedLevel] = useState('intermediate');
  // const [showLevelOptions, setShowLevelOptions] = useState(false);

  // const toggleLevelPopup = () => {
  //   setShowLevelOptions(!showLevelOptions);
  // };

  return (
    <div id="game">
      {/* <NavBar onLevelButtonClick={toggleLevelPopup} />
      {showLevelOptions && <Level selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />} */}
      <h2>Codesweeper</h2>
      <Board 
        selectedLevel={selectedLevel} 
        // onLevelChange={setSelectedLevel} 
      />
    </div>
  );
};

export default Game;