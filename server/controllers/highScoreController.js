const highScoreModel = require('../models/highScoreModel');

const highScoreController = {};

// get all high score data
highScoreController.getHighScores = async (req, res, next) => {
  try {
    const level = req.params.level;

    // map level to corresponding json dummy data file
    const levelJsonFiles = {
      beginner: 'beginner.json',
      intermediate: 'intermediate.json',
      expert: 'expert.json',
    };

    // fetch high scores from corresponding json dummy data file
    const fileName = levelJsonFiles[level];
    const highScores = await highScoreModel.query(fileName);

    res.json(highScores);
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  };
};

module.exports = highScoreController;
