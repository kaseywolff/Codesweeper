// // function to check for neighboring mines

//   // look one row up, one row down, same row
//   // row + 1, col
//   // row - 1, col
//   // row, col - 1
//   // row, col + 1
//   // row + 1, col - 1
//   // row + 1, col + 1
//   // row - 1, col - 1
//   // row - 1, col + 1


// function checkForMines(currLoc, mineArr) {
//   if (mineArr.includes(currLoc)) return '*';
//   // console.log(currLoc);
//   // console.log(mineArr);
//   // console.log(grid)
//   const row = Number(currLoc[1])
//   const col = Number(currLoc[3])
//   // console.log(row)
//   // console.log(col)

  
//   let mineCount = 0;

//   let rowCheck = -1;
//   let colCheck = -1;
//   let rowMax = 8; // CHANGE TO 8 for 9 rows (index)
//   let colMax = 8; // CHANGE TO 8
//   let rowStop = 1;
//   let colStop = 1;

//   if (row === 0) {
//     rowCheck = 0
//   }
//   if (row === rowMax) {
//     rowStop = 0;
//   }
//   if (col === 0) {
//     colCheck = 0
//   }
//   if (col === colMax) {
//     colStop = 0;
//   }

//   for (let r = rowCheck; r <= rowStop; r++) {
//     // console.log(rowCheck)
//     // console.log(rowStop)
//     for (let c = colCheck; c <= colStop; c++) {
//       let checkLoc = `r${r}c${c}`
//       // console.log(checkLoc)
//       if (mineArr.includes(checkLoc)) {
//         mineCount++
//       }
//     }
//   }

//   return mineCount
// }

// // const mineArrTest = ["r1c0"]

// // current location will always be passed in in the form 'r#c#'

// // const testLoc = 'r1c2'

// // const testGrid = {
// //   r0c0: 0,
// //   r0c1: 0,
// //   r0c2: '*',
// //   r1c0: '*',
// //   r1c1: 0,
// //   r1c2: 0,
// //   r2c0: 0,
// //   r2c1: 0,
// //   r2c2: 0,
// // }

// /*
//   [0 0 *]
//   [* 0 0]
//   [0 0 0]
// */

// // console.log(checkForMines(testLoc, mineArrTest, testGrid))

function checkForMines(location, mineArr, grid) {
  if (mineArr.includes(location)) return '*';
  let rowLoc = Number(location[1])
  console.log('rowLoc: ', rowLoc)
  let colLoc = Number(location[3])
  console.log('colLoc: ', colLoc)

  let mineCount = 0;

  // // top left corner
  // if (rowLoc === 0 && colLoc === 0) {
  //   // check to the right
  //   let checkRight = 'r0c1';
  //   let checkDownRight = 'r1c1';
  //   let checkDown = 'r1c0';
  //   if (mineArr.includes(checkRight)) {
  //     mineCount++
  //   }
  //   if (mineArr.includes(checkDownRight)) {
  //     mineCount++
  //   }
  //   if (mineArr.includes(checkDown)) {
  //     mineCount++
  //   }
  // }

  //  // top right corner
  //  if (rowLoc === 0 && colLoc === 8) {
  //   // check to the right
  //   let checkLeft = 'r0c7';
  //   let checkDownLeft = 'r1c7';
  //   let checkDown = 'r1c8';
  //   if (mineArr.includes(checkLeft)) {
  //     mineCount++
  //   }
  //   if (mineArr.includes(checkDownLeft)) {
  //     mineCount++
  //   }
  //   if (mineArr.includes(checkDown)) {
  //     mineCount++
  //   }
  // }

  //  // bottom left corner
  //  if (rowLoc === 8 && colLoc === 0) {
  //   // check to the right
  //   let checkRight = 'r8c1';
  //   let checkUpRight = 'r7c1';
  //   let checkUp = 'r7c0';
  //   if (mineArr.includes(checkRight)) {
  //     mineCount++
  //   }
  //   if (mineArr.includes(checkUpRight)) {
  //     mineCount++
  //   }
  //   if (mineArr.includes(checkUp)) {
  //     mineCount++
  //   }
  // }

  // // bottom right corner
  // if (rowLoc === 8 && colLoc === 8) {
  //   // check to the right
  //   let checkLeft = 'r8c7';
  //   let checkUpLeft = 'r7c7';
  //   let checkUp = 'r7c8';
  //   if (mineArr.includes(checkLeft)) {
  //     mineCount++
  //   }
  //   if (mineArr.includes(checkUpLeft)) {
  //     mineCount++
  //   }
  //   if (mineArr.includes(checkUp)) {
  //     mineCount++
  //   }
  // }

  // // top row
  // if (rowLoc === 0) {
  //   let checkLeft = colLoc - 1;
  //   let checkRight = rowLoc + 1;
  //   let checkDownLeft = colLoc
  // }

  // middle squares
  for (let r = -1; r < 2; r++) {
    for (let c = -1; c < 2; c++) {
      let locCheck = `r${rowLoc + r}c${colLoc + c}`
      if (grid[locCheck]) {
        if (mineArr.includes(locCheck)) {
          mineCount++
        }
      }
    }
  }

  return mineCount

}

export default checkForMines;