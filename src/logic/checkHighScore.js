export default function checkHighScore(time, selectedLevel) {
  const highScoreResults = {
    isTop5: false,
    data: {},
  };
  // fetch current high scores
  return fetch(`/api/highscores/${selectedLevel}`)
  .then(res => res.json())
  .then(currentHighScores => {
    const userTime = time/1000; // time in seconds
    highScoreResults.data = currentHighScores;
    
    // check if user's time is in the top 5
    const isTop5 = currentHighScores.some(score => {
      return userTime < score.time;
    });
    highScoreResults.isTop5 = isTop5;


    return highScoreResults;
  })
  .catch(error => {
    console.error('error checking top 5', error);
    return highScoreResults;
  });
};
