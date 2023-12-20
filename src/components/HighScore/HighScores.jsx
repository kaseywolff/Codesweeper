import React, { useEffect, useState } from 'react';
import HighScore from './HighScore';
import '../../scss/highscore.scss';

export default function HighScores({ selectedLevel }) {
  const [highScores, setHighScores] = useState([]);
  const [userInitials, setUserInitials] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/api/highscores/${selectedLevel}`)
      .then(res => res.json())
      .then(data => {
        setHighScores(data)
      })
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
      style={{fontSize: '4.5vmin'}}
      place={index + 1}
      time={score.time}
      initials={score.initials}
      inputVisible={false} // set this to true if the initials are blank, false if the initials exist
      inputValue={''}
      onEnterInitials={null}
    />
  ));


  return (
    <div className='high-score-container' style={{width: 'max-content'}} >
      <p id='high-score-level'>{selectedLevel}</p>
      <h3>HIGH SCORES</h3>

      <div className='high-score-row high-score-header' style={{fontSize: '3.5vmin'}}>
        <div className='place'>RANK</div>
        <div className='time'>TIME</div>
        <div className='initials'>NAME</div>
      </div>

      {highScoreRows}
    </div>
  );
};
