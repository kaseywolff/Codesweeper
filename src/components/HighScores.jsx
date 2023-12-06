import React, { useEffect, useState } from 'react';

export default function HighScores({ selectedLevel }) {
  const [highScores, setHighScores] = useState([]);
  
  // fetch api data to populate
  useEffect(() => {
    fetch(`/api/highscores/${selectedLevel}`)
      .then(response => response.json())
      .then(data => setHighScores(data))
      .catch(error => console.error('Error fetching high scores:', error));
  }, [selectedLevel]);

  // go through data to create components that will be displayed
  highScores.map((score, index) => (
    <div className='high-score-row'>
      <div className='place'>{index + 1}</div>
      <div className='time'>{score.time}</div>
      <div className='initials'>{score.initials}</div>
    </div>
  ));
  
  return (
    <div className='high-score-container'>
      <h1>High Scores</h1>
      {highScores}
    </div>
  );
};