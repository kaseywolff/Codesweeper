const { Pool } = require('pg');
const { PG_URI } = require('../../config');


const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('db connected');
    return pool.query(text, params, callback);
  },
};
