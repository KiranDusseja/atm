var express = require('express');
var router = express.Router();
const insertSql = require('./newUser.js');
const bcrypt = require('bcrypt');

// prettier-ignore
router.post('/', function(req, res){
    let pin = req.body.pin 
    bcrypt.hash(pin, 15, function(err, hash) {
        pin = hash; 
        console.log(err);
        console.log("hashed pin should be".pin)
        console.log(pin)
        console.log("req",req.body);
        const today = new Date();
        const users={
          "fName":req.body.Fname,
          "lName":req.body.Lname,
          "CreatedAt":today,
          "Address":req.body.address,
          "SSN": req.body.ssn,    
        }
        const card={
          "bankNumber": req.body.bankNumber,
          "type": req.body.type,
          "CardNumber": req.body.cardNumber, 
          "CVC": req.body.cvc, 
          "expirationDate": req.body.expirationDate,
          "Balance":req.body.balance,
          "PIN": pin,
          "Status": true
    
        }
        insertSql(users, card)
        res.send("User succefully created")
    });

  }
  )
/* prettier-enable */
module.exports = router;
