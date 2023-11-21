// BEGINNER MODE
  // 9x9 grid
  // 10 mines populated
  // placed at random

import boardSize from "./boardSize";



function mineGenerator(boardSize) {
  // need to generate 20 random numbers between 0 and 8 (coordinate starts at 0, this is for a 9x9 grid)
  function randomNumber(rowOrCol) {
    return Math.floor((Math.random() * rowOrCol) + 1);
  }

  const mineArr = [];

  // there need to be 10 mines for a 9x9 grid
  while (mineArr.length < boardSize.mines) {
    let randomRow = randomNumber(boardSize.rows);
    let randomCol = randomNumber(boardSize.cols);
    // each mine has 2 cordinates
    let coordinates = `r${randomRow}c${randomCol}`;
    
    // coordinates can not already exist, if they do not exist, then push into mineArr
    if (!mineArr.includes(coordinates)) {
      mineArr.push(coordinates)
    };
  };
  mineArr.sort();

  return mineArr
};


export default mineGenerator