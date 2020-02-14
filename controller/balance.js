const express = require('express');
const router = express.Router();
const showBalance = require('../models/showBalance');

router.post('/', function(req, res) {
  const cardNumber = req.body.cardnumber;
  const result = showBalance('666');
  console.log('result is: ', result);
  res.json({
    code: 200,
    balance: result
  });
});

module.exports = router;
