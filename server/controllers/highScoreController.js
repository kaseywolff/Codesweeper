const db = require('../models/highScoreModel');

const highScoreController = {};

// get all high score data
highScoreController.getHighScores = async (req, res, next) => {
  // query to send to db
  // const queryStr = `
  
  // `;
  db.query()
    .then((data) => {
      console.log('controller: data', data)
      res.locals.clients = data;
      return next();
    })
    .catch(err => next({
      log: 'Error at db.query inside high score controller.getHighScores',
      message: { err }
    }));
};


// add (patch) newest high score
highScoreController.addHighScore = (req, res, next) => {

};

module.exports = highScoreController;
