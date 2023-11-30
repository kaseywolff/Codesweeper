import React, { useState, useEffect } from 'react';
import { SelectedLevel } from './types';
import './scss/app.scss';


import Game from './components/Game/Game.tsx';
import NavBar from './components/NavBar.tsx';
import Level from './components/Level.jsx'; // change to TS


export default function App(): JSX.Element {
  const [selectedLevel, setSelectedLevel] = useState<SelectedLevel>('intermediate');
  const [showLevelOptions, setShowLevelOptions] = useState<boolean>(false);

  const toggleLevelPopup = () => {
    setShowLevelOptions(!showLevelOptions);
  };

  // hide level popup if user clicks outside popup window
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {

      const target = e.target as Element
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
    <div id="app">
      <NavBar onLevelButtonClick={toggleLevelPopup} />
      {showLevelOptions && <Level selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />}
      <Game 
        selectedLevel={selectedLevel || 'intermediate'}
      />
      {/* leaderboard */}
      {/* personal best times */}
    </div>
  );
};