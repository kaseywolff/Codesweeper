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
const testData = require('../testBeginnerData.json');

const highScoreModel = {
  query: async (text, params) => {
    console.log('db connected (using test data)');
    return testData;
  },
};

module.exports = highScoreModel;