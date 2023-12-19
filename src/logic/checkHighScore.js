export default function checkHighScore(time, selectedLevel) {
  let isTop5 = false;
  const highScoreResults = {
    isTop5: isTop5,
    data: {},
  };
  // fetch current high scores
  return fetch(`http://localhost:3000/api/highscores/${selectedLevel}`)
  .then(res => res.json())
  .then(currentHighScores => {
    const userTime = time/1000; // time in seconds
    highScoreResults.data = currentHighScores;
    
    // check if user's time is in the top 5
    console.log('current hs', currentHighScores)
    if (currentHighScores.length >= 5) {
      isTop5 = currentHighScores.some(score => {
        return userTime < score.time;
      });
      highScoreResults.isTop5 = isTop5;
    }else {
      highScoreResults.isTop5 = true
    };
    return highScoreResults;
  })
  .catch(error => {
    console.error('error checking top 5', error);
    return highScoreResults;
  });
};
