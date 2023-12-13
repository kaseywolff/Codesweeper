import React from 'react';

export default function HighScore({ id, place, time, initials, style }) {
  return(
    <div id={id} className='high-score-row' style={style}>
      <div className='place'>{`${place}.`}</div>
      <div className='time'>{time}</div>
      <div className='initials'>{initials}</div>
    </div>
  );
};