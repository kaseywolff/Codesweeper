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
  // const level = req.params.level;
  const {
    level,
    initials,
    time,
    date
  } = req.body
  console.log('addHighScore req.body', req.body);

  // validate and sanitize the input to prevent SQL injection.
  // const sanitizedLevel = level.replace(/[^a-zA-Z0-9_]/g, ''); // only allow alphanumeric characters and underscore

  const queryParams = [level, initials, Number(time), date];
  const query = `
    INSERT INTO "high_scores" (level, initials, time, date)
    VALUES ($1, $2, $3, $4)
  `;

  db.query(query, queryParams)
    .then((data) => {
      console.log('query data', data);
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

// // get all high score data
// highScoreController.getHighScores = async (req, res, next) => {
//   try {
//     const level = req.params.level;
//     const highScores = await highScoreModel.query(level);

//     res.json(highScores);
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// highScoreController.updateInitials = async (req, res, next) => {
//   try {
//     const level = req.params.level;
//     const { initials } = req.body;

//     const updatedHighScores = await highScoreModel.query(level);
//     res.json(updatedHighScores);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

module.exports = highScoreController;
