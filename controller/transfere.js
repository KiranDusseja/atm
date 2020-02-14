const express = require('express');
const router = express.Router();
const transfereMoney = require('../models/transfereDb');

router.post('/', function(req, send) {
  // prettier-ignore
  const bankNumber = req.body.bankNumber
  const reciverBankNumber = req.body.transfereNumber;
  const transfereAmount = req.body.transfereAmount;

  console.log('Reciver banknumber is: ', reciverBankNumber);
  console.log('Banknumber is:', bankNumber);
  console.log('Transfere amount is: ', transfereAmount);
  transfereMoney(bankNumber, reciverBankNumber, transfereAmount);
});

module.exports = router;
