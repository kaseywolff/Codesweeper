const db = require('../models/highScoreModel');

const highScoreController = {};

// get all high score data
highScoreController.getHighScores = async (req, res, next) => {
  const level = req.params.level;
  const query = `SELECT * FROM high_scores WHERE level = '${level}'`;
  
  db.query(query)
    .then((data) => {
      res.locals.highScores = data.rows;
      return next();
    })
    .catch(err => next({
      log: 'Error at db.query inside highScoreController.getHighScores',
      message: { err }
    }));
};

highScoreController.addHighScore = async (req, res, next) => {
  const {
    level,
    initials,
    time,
    date
  } = req.body


  const queryParams = [level, initials, Number(time), date];
  const query = `
    INSERT INTO "high_scores" (level, initials, time, date)
    VALUES ($1, $2, $3, $4)
  `;

  db.query(query, queryParams)
    .then((data) => {
      res.locals.highScores = data.rows;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Error at db.query inside highScoreController.addHighScore',
        message: { err },
      })
    );
};


module.exports = highScoreController;
