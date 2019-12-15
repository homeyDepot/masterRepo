const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'homeRepoReviews'
});

module.exports = connection;