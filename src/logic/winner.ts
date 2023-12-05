// FUNCTION TO DETERMINE IF THE PLAYER WINS THE GAME

/*
check that for each index, both of the below conditions are met:
  condition 1 (mine is correctly flagged):
    flagged = true
    mines = true
    revealed = false
  condition 2 (all non-mine squares are revealed):
    flagged = false
    mines = false
    revealed = true
*/

export default function winner(
  flaggedArr: boolean[], 
  minesArr: boolean[], 
  revealed: boolean[]
  ): boolean {
  let conditionsMet = true;

  for (let i = 0; i < flaggedArr.length; i++) {
    if (flaggedArr[i] === true && minesArr[i] === true && revealed[i] === false) {
      conditionsMet = true;
    }else if (flaggedArr[i] === false && minesArr[i] === false && revealed[i] === true) {
      conditionsMet = true;
    }else {
      conditionsMet = false;
      break;
    };
  };

  return conditionsMet;
};
