var mysql = require('mysql'),
    config = require('./config');

var connection = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

connection.connect();

exports.enqueue = function(username, email, callback) {
  connection.query(
    'INSERT INTO queue (username, email) VALUES (?, ?);',
    [username, email],
    function(err, result) {
      if (err) throw err;
      callback();
  });
};
