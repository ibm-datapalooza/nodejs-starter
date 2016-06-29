/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

//Environment variables
require('dotenv').config()

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Load routes
var index = require('./routes/index');
var os = require('./routes/os');
var transportAPI = require('./routes/transportAPI');
var weather = require('./routes/weather');

// create a new express server
var app = express();

//Views engine
app.set('views', path.join(__dirname, 'views'));

//Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Setup routes
app.use('/', index);
app.use('/os', os);
app.use('/transportAPI', transportAPI);
app.use('/weather', weather);

//EJS
app.set('view engine', 'ejs');


// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

