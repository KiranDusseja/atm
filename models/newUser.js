const connection = require('../models/loginrouters');

function insertSql(users, card, res) {
  connection.query('INSERT INTO atmUsers SET ?', users, function(error, results, fields) {
    const lastID = results.insertId;
    card.UserID = lastID;
    if (error) {
      console.log('error ocurred', error);
    } else {
      console.log('The solution is: ', results);
      connection.query('INSERT INTO userCards SET ?', card, function(error, results, fields) {
        if (error) {
          console.log('error ocurred', error);
        } else {
          console.log('The solution is: ', results);
        }
      });
    }
  });
}

module.exports = insertSql;
