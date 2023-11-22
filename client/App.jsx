import React, { useState } from 'react';
// import './scss/levels.scss'
// import './scss/app.scss'

import './scss/global.scss';


import Game from './components/Game/Game.jsx';
import NavBar from './components/NavBar.jsx';
import Level from './components/Level.jsx';

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState('intermediate');
  const [showLevelOptions, setShowLevelOptions] = useState(false);

  const toggleLevelPopup = () => {
    setShowLevelOptions(!showLevelOptions);
  };

  return (
    <div id="app">
      <NavBar onLevelButtonClick={toggleLevelPopup} />
      {showLevelOptions && <Level selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />}
      <Game 
        selectedLevel={selectedLevel}
      />
      {/* leaderboard */}
      {/* personal best times */}
    </div>
  );
};

export default App;