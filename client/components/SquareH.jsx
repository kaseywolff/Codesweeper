import React, { useState, useEffect } from "react";


export default function Square({ 
  isRevealed, 
  isFlagged, 
  value, 
  id, 
  handleClick, 
  handleRightClick 
}) {
  const [display, setDisplay] = useState('');
  const [squareClass, setSquareClass] = useState('hidden')

  // isRevealed, isFlagged, value, id, handleClick, handleRightClick


    // if square is not revealed (clicked) and square is not flagged (left click)
    if (isRevealed && !isFlagged) {
      console.log(display)
      setDisplay(value);
    }
    // if (isRevealed && !isFlagged) {
    //   setDisplay(value);

    //   if (value !== '!') {
    //     setSquareClass(`square${value}`)
    //   }else {
    //     squareClass = 'squareX'
    //   };
    // };

    // if square is not revealed (clicked) and square is flagged (left click)
    if (!isRevealed && isFlagged) {
      setDisplay(`/>`);
      setSquareClass('flagged');
    };


    return(
      <div className='square'>
        <button 
          className={squareClass}
          id={id}
          onClick={handleClick}
          onContextMenu={handleRightClick}
        >
          {display}
        </button>
      </div>
    )
};


// export default Square;