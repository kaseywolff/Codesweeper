// FUNCTION THAT SCANS AND REVEALS EMPTY NEIGHBORS IF A 0 IS CLICKED

// on click, provided index of square

// NEED TO ADD:
  // IF SQUARE IS FLAGGED, DO NOT REVEAL


function emptyNeighbors(index, valueArr, isRevealedArr, isFlagged) {
  // create array of whether or not surroundings should be checked
  let checkSurroundings = [];
  for (let i = 0; i < 81; i++) {
    checkSurroundings.push(false);
  }

  // creating an array that includes what the row/col coordinates of a square with id (i.e. the index of the selected square -> our click event takes in the id of the square, which is just it's index in the array of squares)
  // for example, if the the top left square has coordinates of [0, 0], and within the array of values, the index is 1.
  // the bottom right square has coordinates of [8, 8] and an id/ index of 80
  


  // would like to just pass in coordinates from state here instead of looping through and creating a coordinate array. will eventually refactor and clean up
  let coordinates = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      coordinates.push([i, j])
    }
  }

  // changing check surroundings for clicked square to true, because need to check surroundings
  checkSurroundings[index] = true;


  while(checkSurroundings.includes(true)) {
    let indexToCheck = checkSurroundings.indexOf(true)
    let row = coordinates[indexToCheck][0] // row coordinate of indexToCheck
    let col = coordinates[indexToCheck][1] // col coordinate of indexToCheck

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

          if (rowCoordCheck === checkRowExists && colCoordCheck === checkColExists && includesCheckIndex !== indexToCheck) {

              checkSurroundings[indexToCheck] = false;
              isRevealedArr[indexToCheck] = true;

              if (valueArr[includesCheckIndex] === 0 && isRevealedArr[includesCheckIndex] === false) {
                checkSurroundings[includesCheckIndex] = true;
                isRevealedArr[includesCheckIndex] = false;
              }else {
                checkSurroundings[includesCheckIndex] = false;
                isRevealedArr[includesCheckIndex] = true;
              }
              checkSurroundings[indexToCheck] = false;
              
            }
          }
        }

        if (r === 2 && c === 2 && isRevealedArr[indexToCheck] === false) {
            isRevealedArr[indexToCheck] = true;
          }
      }
    checkSurroundings[indexToCheck] = false;
  
  }

  // DONT WANT TO REVEAL SQUARES THAT ARE FLAGGED
  // change isRevealed to false here
  for (let f = 0; f < isFlagged.length; f++) {
    if (isFlagged[f] === true) {
      isRevealedArr[f] = false;
    }
  }
    

  
  return isRevealedArr;
};

export default emptyNeighbors;