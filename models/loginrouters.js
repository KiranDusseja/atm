const mysql = require('mysql'); // mysql also works with mariadb
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'atm',
  password: 'atm',
  database: 'users',
  multipleStatements: true
});
connection.connect(function(err) {
  if (!err) {
    console.log('MariaDB is connected');
  } else {
    console.log('Sorry good sir/madam/x gender, I failed to connect to the MariaDB database');
  }
});

module.exports = connection;
