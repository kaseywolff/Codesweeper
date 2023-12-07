const highScoreModel = require('../models/highScoreModel');

const highScoreController = {};

// get all high score data
highScoreController.getHighScores = async (req, res, next) => {
  try {
    const level = req.params.level;
    const highScores = await highScoreModel.query(level);
    res.json(highScores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = highScoreController;
