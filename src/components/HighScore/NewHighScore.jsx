import React, { useState, useEffect } from 'react';
import HighScore from './HighScore';

export default function NewHighScore({ top5Time, time, highScoreData, selectedLevel }) {
  const [ inputValue, setInputValue ] = useState('');
  const [ top5data, setTop5data ] = useState(highScoreData);


  useEffect(() => {
    const newHighScore = {
      time: Math.floor(time/1000),
      initials: '',
    };
    // add new high score to existing high score data
    const updatedHighScoreData = [...highScoreData, newHighScore]

  
    const updatedTop5 = updatedHighScoreData
      .sort((a, b) => a.time - b.time)
      .slice(0, 5);

    setTop5data(updatedTop5);
  }, [top5Time])
  
  
    
    const highScoreRows = top5data.map((score, index) => {
      const isInitialsBlank = !score.initials.trim();
      return (
        <HighScore
          key={score.id}
          id={`popup-place${index + 1}`}
          style={{fontSize: '4vmin'}}
          place={index + 1}
          time={score.time}
          initials={score.initials}
          inputVisible={isInitialsBlank} // set this to true if the initials are blank, false if the initials exist
          inputValue={inputValue}
        />
      );
    });

  return (
    <div id='new-high-score-popup'>
      <div className='high-score-container'>
      <h3 style={{fontSize: '7vmin'}}>NEW HIGH SCORE!</h3>
      {highScoreRows}
      <button className='enter'>ENTER</button>
      </div>
    </div>
  );
};
