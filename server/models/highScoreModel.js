// const { Pool } = require('pg');

// const PGURI = '';

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
    console.log('model: db connected (using test data)');
    console.log('model: Test Data:', testData); 
    return testData;
  },
};

module.exports = highScoreModel;