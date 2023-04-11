// function that will scan and reveal empty neighbors
// stretch feature

  
// need to pass in id of square (index of square in the array) that is clicked and needs it's neighbors checked
// need value array
// need is revealed array

// just going to do a for for loop to get row and col to correlate with index value

// on click, provided index of square
// console.log('???')


function emptyNeighbors(index, valueArr, isRevealedArr) {
  // create array of whether or not surroundings should be checked
  let checkSurroundings = [];
  for (let i = 0; i < 81; i++) {
    checkSurroundings.push(false);
  }

  // creating an array that includes what the row/col coordinates of a square with id (i.e. the index of the selected square -> our click event takes in the id of the square, which is just it's index in the array of squares)
  // for example, if the the top left square has coordinates of [0, 0], and within the array of values, the index is 1.
  // the bottom right square has coordinates of [8, 8] and an id/ index of 80
  let rowCol = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      rowCol.push([i, j])
    }
  }
  // console.log(rowCol)

  // changing check surroundings for clicked square to true
  checkSurroundings[index] = true;

  while(checkSurroundings.includes(true)) {

    // console.log(checkSurroundings.indexOf(true))
    let indexToCheck = checkSurroundings.indexOf(true)
    let row = rowCol[indexToCheck][0]
    let col = rowCol[indexToCheck][1]


    

      // loop to check all surrounding squares/ coordinates of the provided index
      for (let r = -1; r < 2; r++) {
        for (let c = -1; c < 2; c++) {
          // getting the coordinates of the surrounding squares
          // i.e. if coordinates of provided square are [1, 1], we check the following coordinates:
            // [0, 0]
            // [0, 1]
            // [0, 2]
            // [1, 0]
            // [1, 1]
            // [1, 2]
            // [2, 0]
            // [2, 1]
            // [2, 2]
          let rowCheck = row + r;
          let colCheck = col + c;
          // console.log([rowCheck, colCheck])
          // console.log(rowCol)
          // console.log(rowCol[0])
          
          /* 
          the below loop is essentially a .includes() check, because .includes() does not work for checking if a specific array exists in an array
          basically read this as:
          if (rowCol.includes([rowCheck, colCheck])) {
            ...
          }
          */
          for (let a = 0; a < rowCol.length; a++) {
            let checkRowExists = rowCol[a][0]
            let checkColExists = rowCol[a][1]

            if (rowCheck === checkRowExists && colCheck === checkColExists) {
              let indexChecking = a;
              // console.log(indexChecking)
              // if (!isRevealedArr[indexChecking]) {
                checkSurroundings[indexToCheck] = false;
                if (valueArr[a] === 0) {
                  checkSurroundings[indexChecking] = true;
                  isRevealedArr[indexChecking] = true;
                }else {
                  checkSurroundings[indexChecking] = false;
                  isRevealedArr[indexChecking] = true;
                }

              // }
            }
          }

          checkSurroundings[index] = false

        }
      }
    

  }

  return isRevealedArr;
};

export default emptyNeighbors;

// let valuesArr = [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, '!', 2, 1, 1, 0, 0, 1, '!', 2, 1, 3, '!', 2, 0, 0, 1, 1, 1, 0, 2, '!', 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, '!', '!', 1, 1, '!', 1, 1, '!', 2, 3, 3, 1, 2, 2, 2, 1, 1, 1, '!', 1, 0, 1, '!', 1, 0, 0]

/*

| [0]  [[0]]  [0] |
| [1]   [1]   [0] |
| [!]   [1]   [0] |

*/

let valuesArr = [0, 0, 0, 1, 1, 0, '!', 1, 0]

let isRevealed = [];
for (let i = 0; i < 9; i++) {
  isRevealed.push(false)
}
console.log(isRevealed)



console.log(emptyNeighbors(1, valuesArr, isRevealed))
// -> isRevealed should equal [true, true, true, true, true, true, false, true, true]