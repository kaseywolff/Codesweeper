/* <----- FUNCTION TO COUNT NEIGHBORING MINES -----> */
import { NeighboringMinesParams } from "../types";


export default function countNeighboringMines({
  coordinates, 
  mineCoords, 
  isMine, 
  rows, 
  cols
}: NeighboringMinesParams): number | string {
  if (isMine) return '!';
  const row = coordinates[0];
  const col = coordinates[1];
  let mineCount = 0;

  for (let r = -1; r < 2; r++) {
    for (let c = -1; c < 2; c++) {
      let rowCheck = row + r;
      let colCheck = col + c;
      // make sure the coordinates being checked exist (i.e. both row and col must be between 0 and 8 for a 9x9 grid)
      if (rowCheck >= 0 && rowCheck <= rows && colCheck >= 0 && colCheck <= cols) {
        if (mineCoords.includes(`r${rowCheck}c${colCheck}`)) {
          mineCount++;
        };
      };
    };
  };

  return mineCount;
};

/* 
visual/ explanation of above fx
  
  |[ ][ ][ ][ ]|
  |[X][X][X][ ]|
  |[X][O][X][ ]|
  |[X][X][X][ ]|
  |[ ][ ][ ][ ]|

  neighbors of square "O" are the "X" squares

  look one row up, one row down, same row
  look one col up, one col down, same col
    row + 1, col
    row - 1, col
    row, col - 1
    row, col + 1
    row + 1, col - 1
    row + 1, col + 1
    row - 1, col - 1
    row - 1, col + 1

*/