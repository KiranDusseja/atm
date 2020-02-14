const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

// Creates the needed schema
let userSchema = new Schema({
  name: String,
  created_at: Date,
  updated_at: Date,
  balance: Number,
  address: String,
  ssn: Number,
  bankNumber: Number,
  hash: String,
  salt: String,
  cards: [
    {
      formType: String, // Visa eller Mastercard
      cardNumber: Number,
      cvc: Number,
      expirationDate: Date,
      pin: String,
      status: Boolean
    }
  ],
  whitdrawal: [
    {
      amount: Number,
      date: String,
      reason: String
    }
  ]
});

userSchema.pre('save', function(next) {
  const currentDate = new Date();
  // 10 defines salt rounds
  let pin = this.cards[0].pin;
  bcrypt
    .hash(pin, 10)
    .then(pin => {
      this.updated_at = currentDate;
      this.date = currentDate;
      this.cards[0].pin = pin;
      console.log('Pin is ' + pin);
      if (!this.created_at) this.created_at = currentDate;
      next();
    })
    .catch(err => {
      next(err);
    });
});

userSchema.statics.authenticate = function(name, callback) {
  userSchema
    .findOne({
      name: name
    })
    .exec(function(err, userSchema) {
      if (err) {
        return callback(err);
      } else if (!userSchema) {
        var err = new Error('User not found');
        err.status = 401;
        return callback(error);
      }

      bcrypt.compare(name, userSchema.name, function(err, result) {
        if (result == true) {
          return callback(null, userSchema);
        } else {
          return callback();
        }
      });
    });
};

// Creates model for schema
const AtmUser = mongoose.model('AtmUser', userSchema);

// Export so it is available for the rest of the application
module.exports = AtmUser;
