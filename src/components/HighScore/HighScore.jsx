import React from 'react';

export default function HighScore({ id, style, place, time, initials, inputVisible, inputValue }) {
  return (
    <div id={id} className='high-score-row' style={style}>
      <div className='place'>{`${place}.`}</div>
      <div className='time'>{time}</div>
      {inputVisible ? (
        // render the input field when inputVisible is true
        <input
          className='initials'
          type="text"
          value={inputValue}
          // onChange={(e) => onEnterInitials(e.target.value, id)}
          maxLength={3}
        />
      ) : (
        // render the initials div when inputVisible is false
        <div className='initials'>{initials}</div>
      )}
    </div>
  );
};