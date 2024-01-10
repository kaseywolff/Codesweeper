const { Pool } = require('pg');
const config = require('../../config');


const pool = new Pool({
  connectionString: config.PGURI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('db connected');
    return pool.query(text, params, callback);
  },
};
