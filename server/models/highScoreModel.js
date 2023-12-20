const { Pool } = require('pg');

const PGURI = 'postgres://cpzyexwd:5ApK4ZYRty-nn4_UEUogooJt8zcc50sR@berry.db.elephantsql.com/cpzyexwd';

const pool = new Pool({
  connectionString: PGURI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('db connected');
    return pool.query(text, params, callback);
  },
};

// // TEST DATA
// const testData = require('../api/highscores/index');

// const highScoreModel = {
//   query: async (fileName) => {
//     console.log('model: db connected');
//     return testData[fileName];
//   },
// };

// module.exports = highScoreModel;


/* DATABASE SCHEMA
  CREATE TABLE beginner_high_scores (
    id UUID DEFAULT gen_random_uuid(),
    initials VARCHAR(3),
    time SMALLINT,
    date DATE
);

  INSERT INTO beginner_high_scores (initials,time,date)
  VALUES ('WOW', 15, '2023-12-19T02:20:24.289Z')
*/

