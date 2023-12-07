// const { Pool } = require('pg');

// const PGURI = 'postgres://cpzyexwd:5ApK4ZYRty-nn4_UEUogooJt8zcc50sR@berry.db.elephantsql.com/cpzyexwd';

// const pool = new Pool({
//   connectionString: PGURI
// });

// module.exports = {
//   query: (text, params, callback) => {
//     console.log('db connected');
//     return pool.query(text, params, callback);
//   },
// };

// TEST DATA
const testData = require('../api/highscores/intermediate.json');

const highScoreModel = {
  query: async () => {
    console.log('DB connected (using test data)');
    return testData;
  },
};

module.exports = highScoreModel;
