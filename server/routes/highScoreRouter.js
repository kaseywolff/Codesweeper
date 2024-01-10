const express = require('express');
const highScoreController = require('../controllers/highScoreController');

const highScoreRouter = express.Router();

highScoreRouter.get('/:level', 
  highScoreController.getHighScores,
  (req, res) => res.status(200).json([...res.locals.highScores])
);

highScoreRouter.post('/:level', 
  highScoreController.addHighScore,
  (req, res) => res.status(200).json({})
);

// highScoreRouter.patch('/:level', highScoreController.updateInitials);

module.exports = highScoreRouter;
