var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');


/* GET weather channel home page. */
router.get('/', function(req, res, next) {

    

    res.render('index', { title: 'Datapalooza Starter' });
});

module.exports = router;