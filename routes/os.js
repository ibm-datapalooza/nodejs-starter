var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');


var key = 'sdJSoCa7r8w2rW5LNUsB9vZCjEP0zTEP';

/* GET os page. */
router.get('/', function(req, res, next) {

    

    res.render('index', { title: 'Datapalooza Starter' });
});

//HTTP GET - Send API key to client
router.get('/key', function(req,res,next) {
    res.json({key: key});
});

module.exports = router;