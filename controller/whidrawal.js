const connection = require('../models/loginrouters');
const express = require('express');
const router = express.Router();
const takeMoney = require('../models/whidrawalDb');

router.post('/', function(req, res) {
  console.log('req.body is: ', req.body);
  console.log(req.body.amount);
  console.log(req.body.cardnumber);
  const amount = req.body.amount;
  const cardnumber = req.body.serverCardNumber;

  takeMoney(amount, cardnumber);
});

module.exports = router;
