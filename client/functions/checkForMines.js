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


function checkForMines(location, mineArr, grid) {
  if (mineArr.includes(location)) return '*';
  let rowLoc = Number(location[1])
  // console.log('rowLoc: ', rowLoc)
  let colLoc = Number(location[3])
  // console.log('colLoc: ', colLoc)

  // console.log('cfm function location: ', location)
  // console.log('cfm function grid: ', grid)

  let mineCount = 0;

  for (let r = -1; r < 2; r++) {
    for (let c = -1; c < 2; c++) {
      let locCheck = `r${rowLoc + r}c${colLoc + c}`
      // console.log('grid loc check: ', locCheck, grid[locCheck])
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


// let data = [];
// //will map through height(y) 
// for (let i = 0; i < 2; i++) {
//   //and push our data values to it
//   data.push([]);
//   //will map through width(x) 
//   for (let j = 0; j < 2; j++) {
//     //and hide everything at first (we make a clean board)
//     data[i][j] = {
//       x: i,
//       y: j,
//       isDog: false,
//     }
//   }
// }

// console.log(data)

