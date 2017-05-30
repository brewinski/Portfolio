const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //parses incomming request bodys.
const cors = require('cors'); //allow request from different domain
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//Connect to database
mongoose.connect(config.database);

//Check DB connection
mongoose.connection.on('connected', () => {
  console.log('connected to database: ' + config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');

//Port number
const port = process.env.PORT || 8080;

// CORS middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//bodyParser middleware
app.use(bodyParser.json());


//passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

//Index route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Start server
app.listen(port, () => {
  console.log("Server started on port: "+port)
});
