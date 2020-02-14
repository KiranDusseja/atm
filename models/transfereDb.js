const connection = require('../models/loginrouters');

function transfereMoney(cardnumber, transfereNumber, transfereAmount) {
  connection.query(
    "SELECT CardNumber, Balance FROM userCards WHERE cardNumber = '" + cardnumber + "'",
    function(err, rows) {
      if (err) {
        throw err;
      } else {
        setValue(rows);
      }
    }
  );
  function setValue(value, res) {
    userAccount = value;
    connection.query(
      "UPDATE users.userCards SET Balance = CASE when type = 'visa' AND balance > '" +
        transfereAmount +
        "' THEN balance - '" +
        transfereAmount +
        "' ELSE CASE WHEN type='mastercard' AND (balance - '" +
        transfereAmount +
        "') >'-10000' THEN Balance - '" +
        transfereAmount +
        "' ELSE 'NEIN CASH' END END WHERE CardNumber ='" +
        cardnumber +
        "';",
      function(err) {
        if (err) {
          console.log('You too poor');
        } else {
          connection.query(
            "UPDATE userCards SET balance = balance + '" +
              transfereAmount +
              "' WHERE cardNumber = '" +
              transfereNumber +
              "'"
          );
          console.log('You transfered the moneys');
        }
      }
    );
  }
}
module.exports = transfereMoney;
