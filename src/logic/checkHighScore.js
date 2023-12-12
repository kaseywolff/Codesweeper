export default function checkHighScore(time, selectedLevel) {
  // fetch current high scores
  return fetch(`http://localhost:3030/api/highscores/${selectedLevel}`)
  .then(res => res.json())
  .then(currentHighScores => {
    // check if user's time is in the top 5
    const userTime = time/1000; // time in seconds
    console.log('current hs data', currentHighScores)
    console.log('user time', userTime);
    const isTop5 = currentHighScores.every(score => userTime < score.time);
    return isTop5;
  })
  .catch(error => {
    console.error('error checking top 5', error);
    return false;
  });
};




// const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
//   // ... (existing code)

//   // WINNER: if mineCount = 0, need to check if all mines are flagged correctly
//   if (newMineCount === 0) {
//     if (winner(newIsFlagged, newIsMine, newIsRevealed)) {
//       setState((prevState) => ({ ...prevState, symbol: winnerSymbol, gameOver: true }));

//       // Fetch current high scores from the server
//       fetch(`/api/highscores/${selectedLevel}`)
//         .then(response => response.json())
//         .then(currentHighScores => {
//           // Check if the user's time is among the top 5
//           const userTime = // Get the user's time (you'll need to determine this based on your logic);
//           const isUserInTop5 = currentHighScores.some(score => userTime < score.time);

//           if (isUserInTop5) {
//             // Prompt the user to enter their initials (you can use a modal or another UI element)
//             const userInitials = window.prompt('Congratulations! Enter your initials for the high score:');

//             if (userInitials) {
//               // Update the high scores on the server with the user's initials
//               fetch(`/api/highscores/${selectedLevel}`, {
//                 method: 'PATCH',
//                 headers: {
//                   'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                   initials: userInitials,
//                   time: userTime,  // You may need to send the user's time to the server
//                 }),
//               })
//                 .then(updateResponse => {
//                   if (updateResponse.ok) {
//                     // Fetch and update high scores after updating the initials
//                     fetch(`/api/highscores/${selectedLevel}`)
//                       .then(updatedResponse => updatedResponse.json())
//                       .then(updatedHighScores => {
//                         setHighScores(updatedHighScores);
//                       })
//                       .catch(error => {
//                         console.error('Error fetching updated high scores:', error);
//                         alert('Error updating high scores. Please try again.');
//                       });
//                   } else {
//                     alert('Error updating high scores. Please try again.');
//                   }
//                 })
//                 .catch(error => {
//                   console.error('Error updating high scores:', error);
//                   alert('Error updating high scores. Please try again.');
//                 });
//             }
//           }
//         })
//         .catch(error => {
//           console.error('Error fetching current high scores:', error);
//           alert('Error updating high scores. Please try again.');
//         });
//     }
//   }
// }, [state]);
