import React from 'react';
import { SquareProps } from '../../types';
import '../../scss/squares.scss';

export default function Square(
  { id,
    isRevealed, 
    isFlagged, 
    value, 
    handleClick, 
    handleRightClick
  }: SquareProps
): JSX.Element {

  let display;
  let squareClass;

  // if square is not revealed (clicked) and square is not flagged (left click)
  if (!isRevealed && !isFlagged) {
    display = '';
    squareClass = 'hidden';
  } else {
    display = value;

    if (value !== '!') {
      squareClass = `square${value}`;
    } else {
      squareClass = 'squareX';
    };
  };

  // if square is not revealed (clicked) and square is flagged (left click)
  if (!isRevealed && isFlagged) {
    display = `/>`;
    squareClass = 'flagged';
  };


  return (
    <div className='square-div'>
      <button
        className={`square ${squareClass}`}
        id={id}
        onClick={handleClick}
        onContextMenu={handleRightClick}
      >
        {display}
      </button>
    </div>
  );
};