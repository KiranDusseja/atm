const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const newUser = require('./controller/newUserRouter.js');
const authenticator = require('./controller/authenticator');
const whidrawal = require('./controller/whidrawal');
const transfere = require('./controller/transfere');
const showBalance = require('./controller/balance');

// Dataparser, parsing data from react front end to Json
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// Morgan does logging
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
// Use the parson in the app
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Router endpoint to retrive data from front end, also inserts data into DB via NewUser.js
app.use('/api/newUser', newUser);
app.use('/api/login', authenticator);
app.use('/api/whidrawal', whidrawal);
app.use('/api/transfere', transfere);
app.use('/api/showBalance', showBalance);
// Defines server port number, set to 5000 for back end and 3000 for front end.
app.listen(port, () => console.log(`Back end is listening on port ${port}`));
