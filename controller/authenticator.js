const express = require('express');
const router = express.Router();
const connection = require('../models/loginrouters');
const bcrypt = require('bcrypt');

router.post('/', function(req, result) {
  console.log('Starting authentification proccess');
  const CardNumber = req.body.cardnumber;
  const pin = req.body.pin;
  const cardState = req.body.cardState;
  console.log('Server cardstate is: ', cardState);
  console.log(pin, CardNumber);
  connection.query(
    'SELECT PIN, CardNumber, UserID FROM userCards WHERE CardNumber = ?',
    [CardNumber],
    function(error, results, fields) {
      if (error) {
        console.log('error ocurred', error);
        result.send({
          code: 400,
          failed: 'error ocurred'
        });
      } else if (results.length > 0 && cardState == 1) {
        bcrypt.compare(pin, results[0].PIN, function(err, res) {
          if (res) {
            console.log('login succefull');
            result.status(200);
            result.json({ message: results[0].CardNumber, status: true });
          } else if (res == false) {
            console.log('something went wrong/email and password does not match');
            console.log(err);
            result.status(200);
            result.json({ message: 'Wrong PIN', status: false });
          } else {
            console.log('result lenght is 0');
          }
        });
      } else if (cardState == 0) {
        connection.query(
          "UPDATE userCards SET Status = '0' WHERE CardNumber = '" + CardNumber + "'"
        );
      } else {
        console.log('result lenght is 0');
        result.status(200);
        result.json({ message: 'Could not find any matching cardnumbers', status: false });
      }
    }
  );
});

module.exports = router;
