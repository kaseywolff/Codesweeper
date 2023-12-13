import React, { useState, useEffect } from 'react';
import HighScore from './HighScore';

export default function NewHighScore({ top5Time, time, highScoreData, selectedLevel }) {
  useEffect(() => {
    console.log('new hs highScoreData', highScoreData);
  }, [highScoreData]);

  const top5 = highScoreData
    ? highScoreData.sort((a, b) => a.time - b.time).slice(0, 5)
    : [];

  const highScoreRows = top5.map((score, index) => (
    <HighScore
      key={score.id}
      id={`popup-place${index + 1}`}
      place={index + 1}
      time={score.time}
      initials={score.initials}
    />
  ));

  return (
    <div id='new-high-score-popup'>
      NEW HIGH SCORE!
      {highScoreRows}
    </div>
  );
}
