import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HighScore from './HighScore';

export default function NewHighScore({ top5Time, time, highScoreData, selectedLevel }) {
  const [ inputValue, setInputValue ] = useState('');
  const [ inputError, setInputError ] = useState(null);
  const [ newHighScore, setNewHighScore ] = useState({
    id: 'newHighScore',
    time: time,
    initials: '',
    date: new Date().toJSON(),
  });

  const navigate = useNavigate();
  const initialsInputRef = useRef(null);

  const handleEnterInitials = (value) => {
    setInputValue(value.toUpperCase());

    // update the initials of the new high score directly
    setNewHighScore((prevHighScore) => ({
      ...prevHighScore,
      initials: value.toUpperCase()
    }));
  };

  // post new high score to database
  const saveNewHighScore = () => {
    // check if name is empty
    if (inputValue === '') {
      setInputError('required');
    } else {
      const body = {
        level: selectedLevel,
        initials: inputValue,
        time: newHighScore.time,
        date: newHighScore.date,
      };

      fetch(`http://localhost:3000/api/highscores/${selectedLevel}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          };
          return res.json();
        })
        .then(() => {
          navigate('/highscores');
        })
        .catch((err) => {
          console.error('saveNewHighScore fetch error', err);
        });
    };
  };


  useEffect(() => {
    // update the time of the new high score when top5Time changes
    setNewHighScore((prevHighScore) => ({
      ...prevHighScore,
      time: time,
      date: new Date().toJSON()
    }));
  }, [top5Time]);

  const highScoreRows = [newHighScore, ...highScoreData]
    .sort((a, b) => a.time - b.time)
    .slice(0, 5)
    .map((score, index) => {
      const isInitialsBlank = score.id === 'newHighScore';

      return (
        <HighScore
          key={score.id}
          id={`popup-place${index + 1}`}
          style={{ fontSize: '3.75vmin' }}
          place={index + 1}
          time={score.time}
          initials={score.initials}
          inputVisible={isInitialsBlank}
          inputValue={inputValue}
          onEnterInitials={(value) => handleEnterInitials(value)}
          inputRef={initialsInputRef}
        />
      );
    });

  // focus on the initials input
  useEffect(() => {
    if (initialsInputRef.current) {
      initialsInputRef.current.focus();
    };
  });


  return (
    <div id='new-high-score-popup'>
      <div className='high-score-container'>
        <h3 style={{ fontSize: '7vmin' }}>NEW HIGH SCORE!</h3>

        <div className='high-score-row high-score-header' style={{ fontSize: '3vmin' }}>
          <div className='place'>RANK</div>
          <div className='time'>TIME</div>
          <div className='initials'>NAME</div>
        </div>

        {highScoreRows}
        <button className='enter' onClick={saveNewHighScore} >
          ENTER
        </button>
      </div>
    </div>
  );
};
