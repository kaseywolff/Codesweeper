import React, { useEffect, useState } from 'react';
import '../scss/highscore.scss';

export default function HighScores({ selectedLevel }) {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/api/highscores/${selectedLevel}`)
      .then(res => res.json())
      .then(data => setHighScores(data))
      .catch(error => console.error('Error fetching high scores:', error));
  }, [selectedLevel]);

  return (
    <div className='high-score-container'>
      <h3>HIGH SCORES</h3>
      {highScores.map((score, index) => (
        <div key={score.id} className='high-score-row'>
          <div className='place'>{index + 1}</div>
          <div className='time'>{score.time}</div>
          <div className='initials'>{score.initials}</div>
        </div>
      ))}
    </div>
  );
};
