import React, { useState, useEffect } from "react";


export default function Square({ 
  id, 
  revealed, 
  flagged, 
  value, 
  handleClick, 
  // handleRightClick 
}) {
  const [display, setDisplay] = useState('');
  const [squareClass, setSquareClass] = useState('hidden');
  // const [revealed, setRevealed] = useState(false)

  // revealed, isFlagged, value, id, handleClick, handleRightClick


    // if square is revealed
    if (revealed) {
      console.log('if revealed')
      console.log('value', value)
      setDisplay('k');
      // setSquareClass(`square${value}`);

    }
    console.log('display', display)

    // if (value !== '!') {
    //   setSquareClass(`square${value}`)
    // }else {
    //   setSquareClass(`squareX`)
    // };
    


    // if square is not revealed (clicked) and square is flagged (left click)
    // if (!revealed && flagged) {
    //   setDisplay(`/>`);
    //   setSquareClass('flagged');
    // };


    return(
      <div className='square'>
        <button 
          className={squareClass}
          id={id}
          onClick={handleClick}
          // onContextMenu={handleRightClick}
        >
          {display}
        </button>
      </div>
    )
};


// export default Square;