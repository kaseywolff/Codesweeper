import React from 'react';

export default function HighScores(
  { time,
    selectedLevel,
    newHighScore, // if result is ture, then allow for editing initials
  }
) {
  // fetch api data to get top 5 high scores

  // populate rows with top 5 high scores
  const highScores = 
  <div className='high-score-row'>
    <div className='place'></div>
    <div className='time'></div>
    <div className='high-score-initials'></div>
  </div>

  return (
    <div className='high-score-container'>
      {/* if newHighScore is true, then display 'congratulations' message */}

    </div>
  );
};