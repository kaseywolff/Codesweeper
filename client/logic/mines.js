function mineGenerator(boardSize) {
  // random number generator function for mine coordinates
  function randomNumber(rowOrCol) {
    return Math.floor((Math.random() * (rowOrCol - 1)) + 1);
  };

  const mineArr = [];

  // number of mines depends on user selected level (beginner 10, intermediate 40, expert 99)
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

  return mineArr;
};


export default mineGenerator;