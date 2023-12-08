const express = require('express');
const highScoreController = require('../controllers/highScoreController');

const highScoreRouter = express.Router();

highScoreRouter.get('/:level', highScoreController.getHighScores);

highScoreRouter.patch('/:level', highScoreController.updateInitials);

module.exports = highScoreRouter;
