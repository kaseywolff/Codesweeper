const express = require('express');
const highScoreController = require();
const highScoreRouter = express.Router();


highScoreRouter.get('/:level', 
  highScoreController.getHighScores,
  (req, res) => {
    res.status(200).json(res.locals.highscores)
  }
);

module.exports = highScoreRouter;