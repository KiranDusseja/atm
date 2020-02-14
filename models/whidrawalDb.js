const connection = require('../models/loginrouters');

function takeMoney(amount, cardnumber) {
  // prettier-ignore
  console.log("db cardnumber is".cardnumber)
  console.log('db amount is', amount);
  connection.query(
    "UPDATE users.usercards SET Balance = CASE WHEN type = 'visa' AND balance>'" +
      amount +
      "' THEN Balance - '" +
      amount +
      "' ELSE CASE WHEN type='mastercard' AND (balance - '" +
      amount +
      "')>'-10000' THEN Balance - '" +
      amount +
      "' ELSE 'NEIN CASH' END END WHERE CardNumber = '" +
      cardnumber +
      "';",
    function(err) {
      if (err) {
        console.log('You too poor');
      } else {
        console.log('You got the cash');
      }
    }
  );
}

module.exports = takeMoney;
