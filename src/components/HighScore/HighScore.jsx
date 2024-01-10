import React from 'react';

export default function HighScore(
  { id, 
    style, 
    place, 
    time, // time in database is in ms, converted to seconds in the div below
    initials, 
    inputVisible, 
    inputValue, 
    onEnterInitials ,
    inputRef
  }
) {

  return (
    <div id={id} className='high-score-row' style={style}>
      <div className='place'>{`${place}.`}</div>
      <div className='time'>{Math.floor(time/1000)}</div>
      {inputVisible ? (
        // render the input field when inputVisible is true
        <input
          id={`input-${id}`}
          ref={inputRef}
          className='initials initials-input'
          type="text"
          value={inputValue}
          onChange={(e) => onEnterInitials(e.target.value)}
          maxLength={3}
        />
      ) : (
        // render the initials div when inputVisible is false
        <div className='initials'>{initials}</div>
      )}
    </div>
  );
};
