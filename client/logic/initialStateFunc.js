import mineGenerator from "./mines";
import countNeighboringMines from "./countNeighboringMines";

// initial state function
export default function initialState(boardSize) {
  const mineCoords = mineGenerator(boardSize);
  const coordinates = [];
  const value = [];
  const isRevealed = [];
  const isMine = [];
  const isFlagged = [];
  const checkSurroundings = [];
  const symbol = '🤖';


  // create mine square coordinate array
  for (let i = 0; i < boardSize.rows; i++) {
    for (let j = 0; j < boardSize.cols; j++) {
      coordinates.push([i, j]);
      // check if the coordinates are a mine, set location to match format of mineCoords
      let loc = `r${i}c${j}`;
      if (mineCoords.includes(loc)) {
        // array index is square id, so if a square is a mine, push true in to isMine array so id and index match for later
        isMine.push(true);
      }else {
        isMine.push(false)
      };
    };
  };

  for (let i = 0; i < (boardSize.rows * boardSize.cols); i++) {
    // search for mines and update value array (value array containes the numbers that are displayed when a square is revealed)
    let val = countNeighboringMines(coordinates[i], mineCoords, isMine[i], boardSize.rows, boardSize.cols);
    value.push(val);
    // since already looping through all squares, default false for each index of isRevealed, isFlagged, and checkSurroundings arrays
    isRevealed.push(false);
    isFlagged.push(false);
    checkSurroundings.push(false);
  };

  const generatedState = {
    gameStart: false,
    coordinates: coordinates,
    value: value,
    isRevealed: isRevealed,
    isFlagged: isFlagged,
    isMine: isMine,
    mineCount: mineCoords.length,
    gameOver: false,
    symbol: symbol,
    reset: true,
  };

  return generatedState;
};