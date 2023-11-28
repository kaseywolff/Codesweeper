import React, { useState, useEffect } from 'react';
import './scss/app.scss';


import Game from './components/Game/Game.jsx';
import NavBar from './components/NavBar.jsx';
import Level from './components/Level.jsx';

const App = () => {
  const [selectedLevel, setSelectedLevel] = useState('intermediate');
  const [showLevelOptions, setShowLevelOptions] = useState(false);

  const toggleLevelPopup = () => {
    setShowLevelOptions(!showLevelOptions);
  };

  // hide level popup if user clicks outside popup window
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (showLevelOptions && e.target.closest('#levels-container') === null && e.target.closest('#level-button') === null) {
        setShowLevelOptions(false);
      };
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showLevelOptions]);



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