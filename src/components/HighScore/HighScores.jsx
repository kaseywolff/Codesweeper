import React, { useEffect, useState } from 'react';
import HighScore from './HighScore';
import '../../scss/highscore.scss';

export default function HighScores({ selectedLevel }) {
  const [highScores, setHighScores] = useState([]);
  const [userInitials, setUserInitials] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3030/api/highscores/${selectedLevel}`)
      .then(res => res.json())
      .then(data => setHighScores(data))
      .catch(error => console.error('Error fetching high scores:', error));
  }, [selectedLevel]);

  // order the top 5 fastest times
  const top5 = highScores
    .sort((a, b) => a.time - b.time)
    .slice(0, 5);

  const highScoreRows = top5.map((score, index) => (
    <HighScore
      key={score.id}
      id={`place${index + 1}`}
      style={{fontSize: '5.75vmin'}}
      place={index + 1}
      time={score.time}
      initials={score.initials}
      inputVisible={false} // set this to true if the initials are blank, false if the initials exist
      inputValue={''}
    />
  ));


  return (
    <div className='high-score-container'>
      <p id='high-score-level'>{selectedLevel}</p>
      <h3>HIGH SCORES</h3>
      {highScoreRows}
    </div>
  );
};