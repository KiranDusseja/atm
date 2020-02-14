const connection = require('../models/loginrouters');
const express = require('express');
const router = express.Router();

function showBalance(cardNumber) {
  let balance = [];
  let ownBalance = 0;
  connection.query(
    "SELECT Balance from userCards WHERE CardNumber  = '" + cardNumber + "'",
    function(err, rows) {
      if (err) {
        throw err;
      } else {
        setValue(rows);
      }
    }
  );
  function setValue(value, res) {
    balance = value;
    ownBalance = balance[0].Balance;
    console.log('The user balance is: ', ownBalance);
    return ownBalance;
  }
  return ownBalance;
}
module.exports = showBalance;
