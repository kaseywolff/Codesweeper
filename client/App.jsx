import React, { useState } from 'react';

import Game from './components/Game/Game.jsx';
import NavBar from './components/NavBar.jsx';
import Level from './components/Level.jsx';

const App = () => {
  const [showLevelOptions, setShowLevelOptions] = useState(false);

  const toggleLevelPopup = () => {
    setShowLevelOptions(!showLevelOptions);
  }

  return (
    <div id="app">
      <NavBar onLevelButtonClick={toggleLevelPopup} />
      {showLevelOptions && <Level />}
      <Game />
      {/* leaderboard */}
      {/* personal best times */}
    </div>
  );
};

export default App;