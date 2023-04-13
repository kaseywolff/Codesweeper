// function that will scan and reveal empty neighbors
// stretch feature

  
// need to pass in id of square (index of square in the array) that is clicked and needs it's neighbors checked
// need value array
// need is revealed array

// just going to do a for for loop to get row and col to correlate with index value

// on click, provided index of square

// EDGE CASE IF CLICK ON 0 AND THERE ARE NO SURROUNDING 0s


function emptyNeighbors(index, valueArr, isRevealedArr) {
  // create array of whether or not surroundings should be checked
  let checkSurroundings = [];
  for (let i = 0; i < 81; i++) {
    checkSurroundings.push(false);
  }

  // creating an array that includes what the row/col coordinates of a square with id (i.e. the index of the selected square -> our click event takes in the id of the square, which is just it's index in the array of squares)
  // for example, if the the top left square has coordinates of [0, 0], and within the array of values, the index is 1.
  // the bottom right square has coordinates of [8, 8] and an id/ index of 80
  let coordinates = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      coordinates.push([i, j])
    }
  }
  // console.log(coordinates)

  // changing check surroundings for clicked square to true
  checkSurroundings[index] = true;
  // let loopCount = 1
  // console.log(loopCount);

  while(checkSurroundings.includes(true)) {
    // loopCount
    // console.log(checkSurroundings.indexOf(true))
    let indexToCheck = checkSurroundings.indexOf(true)
    // console.log(indexToCheck)
    let row = coordinates[indexToCheck][0] // row coordinate of indexToCheck
    let col = coordinates[indexToCheck][1] // col coordinate of indexToCheck
    // console.log(`coord: [${row}, ${col}] with indexToCheck ${indexToCheck};`)
    checkSurroundings[index] = false;
    checkSurroundings[indexToCheck] = false;


    
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
        let rowCoordCheck = row + r;
        let colCoordCheck = col + c;
        // console.log([rowCoordCheck, colCoordCheck])
        // console.log(coordinates)
        // console.log(coordinates[0])
        
        /* 
        the below loop is essentially a .includes() check, because .includes() does not work for checking if a specific array exists in an array
        basically read this as:
        if (coordinates.includes([rowCheck, colCheck])) {
          ...
        }
        */
        for (let includesCheckIndex = 0; includesCheckIndex < coordinates.length; includesCheckIndex++) {
          let checkRowExists = coordinates[includesCheckIndex][0] // grabs existing row coordinate from the square at that index
          let checkColExists = coordinates[includesCheckIndex][1] // grabs existing col coordinate from the square at that index

          // console.log('coordinates that exist: ', [checkRowExists, checkColExists])
          // console.log(coordinates[indexToCheck] === [0, 1])

          if (rowCoordCheck === checkRowExists && colCoordCheck === checkColExists && includesCheckIndex !== indexToCheck) {
              // && includesCheckIndex != indexToCheck) {
            // console.log([rowCoordCheck, colCoordCheck])
            // console.log([loopCount, includesCheckIndex])
            // console.log([checkRowExists, checkColExists])
            // console.log(indexChecking)
            // if (!isRevealedArr[indexChecking]) {
              checkSurroundings[indexToCheck] = false;
              isRevealedArr[indexToCheck] = true;
              // console.log([includesCheckIndex, valueArr[includesCheckIndex]])
              if (valueArr[includesCheckIndex] === 0 && isRevealedArr[includesCheckIndex] === false) {
                checkSurroundings[includesCheckIndex] = true;
                isRevealedArr[includesCheckIndex] = false;
                // console.log([loopCount, includesCheckIndex, checkSurroundings[includesCheckIndex]])
              }else {
                checkSurroundings[includesCheckIndex] = false;
                isRevealedArr[includesCheckIndex] = true;
                // console.log(checkSurroundings);
              }
              checkSurroundings[indexToCheck] = false;
            }
          }
        }

        // checkSurroundings[index] = false
        if (r === 2 && c === 2 && isRevealedArr[indexToCheck] === false) {
            isRevealedArr[indexToCheck] = true;
          }
      }
    checkSurroundings[indexToCheck] = false;
  
    // loopCount++;
  }
    

  
  console.log('isRevealedArr: ', isRevealedArr)
  return isRevealedArr;
};

export default emptyNeighbors;

// let valuesArr = [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 2, '!', 2, 1, 1, 0, 0, 1, '!', 2, 1, 3, '!', 2, 0, 0, 1, 1, 1, 0, 2, '!', 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, '!', '!', 1, 1, '!', 1, 1, '!', 2, 3, 3, 1, 2, 2, 2, 1, 1, 1, '!', 1, 0, 1, '!', 1, 0, 0]

/*

| [0]  [[0]]  [0] |
| [1]   [1]   [0] |
| [!]   [1]   [0] |

*/

// let valuesArr = [0, 0, 0, 1, 1, 0, '!', 1, 0]

// let isRevealed = [];
// for (let i = 0; i < 9; i++) {
//   isRevealed.push(false)
// }
// console.log(isRevealed)



// console.log(emptyNeighbors(8, valuesArr, isRevealed))
// -> isRevealed should equal [true, true, true, true, true, true, false, true, true]
// index 6, 7, 8 are not being revealed
// 7 and 8 should be revealed
// index 5 should flag surroundings to check