import React, { useState, useEffect } from "react";


export default function Square({ 
  revealed, 
  flagged, 
  value, 
  id, 
  handleClick, 
  handleRightClick 
}) {
  const [display, setDisplay] = useState('');
  const [squareClass, setSquareClass] = useState('hidden');
  // const [revealed, setRevealed] = useState(false)

  // revealed, isFlagged, value, id, handleClick, handleRightClick


    // if square is not revealed (clicked) and square is not flagged (left click)
    if (!revealed && !flagged) {
      setDisplay(value);
      // setRevealed(true);
    };

    if (value !== '!') {
      setSquareClass(`square${value}`)
    }else {
      setSquareClass(`squareX`)
    };
    


    // if square is not revealed (clicked) and square is flagged (left click)
    if (!revealed && flagged) {
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