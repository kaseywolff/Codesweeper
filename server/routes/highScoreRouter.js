const express = require('express');
const highScoreController = require('../controllers/highScoreController');

const highScoreRouter = express.Router();

highScoreRouter.get('/:level', highScoreController.getHighScores);

module.exports = highScoreRouter;
