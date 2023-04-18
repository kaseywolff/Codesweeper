// BEGINNER MODE
  // 9x9 grid
  // 10 mines populated
  // placed at random



function mineGenerator() {
  // need to generate 20 random numbers between 0 and 8 (coordinate starts at 0, this is for a 9x9 grid)
  function randomNumber() {
    return Math.floor((Math.random() * 8) + 1);
  }

  const mineArr = []

  // there need to be 10 mines for a 9x9 grid
  while (mineArr.length < 10) {
    let random1 = randomNumber();
    let random2 = randomNumber();
    // each mine has 2 cordinates
    let coordinates = `r${random1}c${random2}`;
    
    // coordinates can not already exist, if they do not exist, then push into mineArr
    if (!mineArr.includes(coordinates)) {
      mineArr.push(coordinates)
    };
  };
  mineArr.sort();

  return mineArr
};


export default mineGenerator