// node-postgres import
const { Pool } = require('pg')
// using dotenv, we've hidden - and are now retrieving - our heroku connection string:
require('dotenv').config();
const connectionString = process.env.API_KEY;

// query pool to be used by controllers - more info there
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

// exports
module.exports = pool;