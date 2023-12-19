import React, { useState, useEffect } from 'react';
import HighScore from './HighScore';

export default function NewHighScore({ top5Time, time, highScoreData, selectedLevel }) {
  const [ inputValue, setInputValue ] = useState('');
  const [ top5data, setTop5data ] = useState(highScoreData);

  const handleEnterInitials = (value, id) => {
    // update the inputValue state
    setInputValue(value);

    // update the top5data state with the entered initials
    const updatedTop5data = top5data.map((score) =>
      score.id === id ? { ...score, initials: value.toUpperCase() } : score
    );
    setTop5data(updatedTop5data);
  };


  useEffect(() => {
    const newHighScore = {
      time: time, // time is in ms
      initials: '',
      date: new Date().toJSON(),
      newName: true,
    };

    console.log('newHighScore', newHighScore)

    // add new high score to existing high score data
    const updatedHighScoreData = [...highScoreData, newHighScore]

  
    const updatedTop5 = updatedHighScoreData
      .sort((a, b) => a.time - b.time)
      .slice(0, 5);

    setTop5data(updatedTop5);
  }, [top5Time])
  
  
    
    const highScoreRows = top5data.map((score, index) => {
      const isInitialsBlank = score.newName;
      return (
        <HighScore
          key={score.id}
          id={`popup-place${index + 1}`}
          style={{fontSize: '3.75vmin'}}
          place={index + 1}
          time={score.time}
          initials={score.initials}
          inputVisible={isInitialsBlank} // set this to true if the initials are blank, false if the initials exist
          inputValue={inputValue}
          onEnterInitials={(value) => handleEnterInitials(value, score.id)}
        />
      );
    });

  return (
    <div id='new-high-score-popup'>
      <div className='high-score-container'>
      <h3 style={{fontSize: '7vmin'}}>NEW HIGH SCORE!</h3>

      <div className='high-score-row high-score-header' style={{fontSize: '3vmin'}}>
        <div className='place'>RANK</div>
        <div className='time'>TIME</div>
        <div className='initials'>NAME</div>
      </div>

      {highScoreRows}
      <button className='enter'>ENTER</button>
      </div>
    </div>
  );
};
