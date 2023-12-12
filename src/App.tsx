import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SelectedLevel } from './types';

import Game from './components/Game/Game';
import NavBar from './components/NavBar';
import Level from './components/Level';
import HighScores from './components/HighScore/HighScores';
import './scss/app.scss';

export default function App(): JSX.Element {
  const [selectedLevel, setSelectedLevel] = useState<SelectedLevel>('intermediate');
  const [showLevelOptions, setShowLevelOptions] = useState<boolean>(false);

  const toggleLevelPopup = () => {
    setShowLevelOptions(!showLevelOptions);
  };

  const handleLevelChange = (newLevel: SelectedLevel) => {
    setSelectedLevel(newLevel);
  };

  // hide level popup if the user clicks outside the popup window
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (showLevelOptions && target.closest('#levels-container') === null && target.closest('#level-button') === null) {
        setShowLevelOptions(false);
      };
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [showLevelOptions]);

  return (
    <Router>
      <div id="app">
        <NavBar onLevelButtonClick={toggleLevelPopup} />
        {showLevelOptions && <Level selectedLevel={selectedLevel} onLevelChange={handleLevelChange} />}
        
        <div>
          <Routes>
            <Route 
              path="/"
              element={<Game selectedLevel={selectedLevel ?? 'intermediate'} />}
            />
            <Route 
              path="/highscores"
              element={<HighScores selectedLevel={selectedLevel} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
