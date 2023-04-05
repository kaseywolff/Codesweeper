import React, { Component } from 'react';
import { render } from 'react-dom';

const Square = (props) => {
  const { row, col, grid, handleClick, handleRightClick } = props;
  
  return(
    <div>
      <button 
        className="square"
        id={`r${row}c${col}`}
        onClick={handleClick}
        onContextMenu={handleRightClick}
      >
        {grid[`r${row}c${col}`]}
      </button>
    </div>
  )
}

export default Square;