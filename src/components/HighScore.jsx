import React from 'react';

export default function HighScore({ id, place, time, initials }) {
  return(
    <div id={id} className='high-score-row'>
      <div className='place'>{place}</div>
      <div className='time'>{time}</div>
      <div className='initials'>{initials}</div>
    </div>
  );
};