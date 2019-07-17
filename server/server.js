const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const API_PORT = 3001;
const app = express();
app.use(cors());

//Database config
var config = require('./config');
const dbRoute = config.mongodb;

mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Routes
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

app.use('/', indexRouter);
app.use('/user', userRouter);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
