import React, { useState, useEffect } from 'react';
import HighScore from './HighScore';

export default function NewHighScore({ top5Time, time, highScoreData, selectedLevel }) {
  const [ inputValue, setInputValue ] = useState('');

  useEffect(() => {
    console.log('new hs highScoreData', highScoreData);
  }, [highScoreData]);

  const top5 = highScoreData
    ? highScoreData.sort((a, b) => a.time - b.time).slice(0, 5)
    : [];

  const highScoreRows = top5.map((score, index) => {
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
}
