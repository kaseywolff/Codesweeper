// BEGINNER MODE
  // 9x9 grid
  // 10 mines populated
  // placed at random



function mineGenerator() {
  // need to generate 20 random numbers between 0 and 8
  function randomNumber() {
    return Math.floor((Math.random() * 9) + 1);
  }
  

  

  const mineArr = []

  for (let i = 0; i < 10; i++) {
    let random1 = randomNumber();
    let random2 = randomNumber();
    // each mine has 2 cordinates
    let coordinates = `r${random1}c${random2}`;
    
    if (!mineArr.includes(coordinates)) {
      mineArr.push(coordinates)
    }
    // mine coordinates cannot overlap (will add later)
  }
  mineArr.sort();


  return mineArr

}


export default mineGenerator