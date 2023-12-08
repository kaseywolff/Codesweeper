const highScoreModel = require('../models/highScoreModel');

const highScoreController = {};

// get all high score data
highScoreController.getHighScores = async (req, res, next) => {
  try {
    const level = req.params.level;
    const highScores = await highScoreModel.query(level);

    res.json(highScores);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

highScoreController.updateInitials = async (req, res, next) => {
  try {
    const level = req.params.level;
    const { initials } = req.body;

    const updatedHighScores = await highScoreModel.query(level);
    res.json(updatedHighScores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = highScoreController;
