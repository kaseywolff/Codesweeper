const express = require('express');
const path = require('path');
const highScoreRouter = express.Router();
const highScoreController = require('../controllers/highScoreController');


highScoreRouter.get('/', 
  highScoreController.getHighScores,
  (req, res) => {
    res.status(200).json(res.locals.highscores)
  }
);

module.exports = highScoreRouter;