const db = require('../models/highScoreModel');

const highScoreController = {};

// get all high score data
highScoreController.getHighScores = async (req, res, next) => {
  try {
    const level = req.params.level;
    const tableName =`${level.toLowerCase()}_high_scores`;

    // fetch high scores from database
    const highScores = await db.query(`SELECT * FROM ${tableName} ORDER BY time ASC`);

    res.locals.highscores = highScores;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'controller error'})
  };
};

// add (patch) newest high score
highScoreController.addHighScore = (req, res, next) => {

};