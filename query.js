var Pool = require('pg').Pool;
var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'homework 9',
  password: '12345',
  port: 5432,
});

module.exports = pool;