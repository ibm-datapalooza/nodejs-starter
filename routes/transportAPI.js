var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');
var request = require('request');

var APP_ID = process.env.TRANSPORT_API_APP_ID;
var APP_KEY = process.env.TRANSPORT_API_APP_KEY;

// HTTP GET - /trainstations/latitude/longitude
// Return a list of trainstations near to a given latitude,longitude location
router.get('/trainstations/:lat/:lon', function(req,res,next) {
    
    //Extract and build parameters
    var lat = req.params.lat;
    var lon = req.params.lon;
    var url = 'http://transportapi.com/v3/uk/train/stations/near.json?app_id='+APP_ID+'&'+
              'app_key='+APP_KEY+'&lat='+lat+'&lon='+lon;

    //Call transportAPI
    request(url, function (error, response, body) {
        if (error) {
            return res.json(error);
        }
        var transportAPI_response = JSON.parse(body);

        //If we get an error, send it to the client
        if (transportAPI_response.error) {
            return res.json({err: transportAPI_response.error});
        }

        //Otherwise, extract the list of stations
        if (!error && response.statusCode == 200) {
            var stations = transportAPI_response.stations;
            if (stations != []) {

                //Send result to client
                res.json({
                    searchlat: transportAPI_response.searchlat, 
                    searchlon: transportAPI_response.searchlon, 
                    stations: stations
                });
            } else {
                res.json({err: 'No stations found'});
            }
        }
    });
});

// HTTP GET - /journey/fromLatitude/fromLongitude/toLatitude/toLongitude
// Return a step by step journey plan from start to end location
// Note - this uses Tfl journey planner so journey's outside of London will not work.
router.get('/journey/:fromLat/:fromLon/:toLat/:toLon', function(req,res,next) {
    
    //Extract and build parameters
    var fromLat = req.params.fromLat;
    var fromLon = req.params.fromLon;
    var toLat = req.params.toLat;
    var toLon = req.params.toLon;

    var url = 'http://transportapi.com/v3/uk/public/journey/from/'+
              'lonlat:'+fromLon+','+fromLat+'/to/lonlat:'+toLon+','+toLat+'.json'+
              '?app_id='+APP_ID+'&app_key='+APP_KEY+'&region=tfl';

    //Call transportAPI
    request(url, function (error, response, body) {

        if (error) {
            return res.json(error);
        }
        
        var transportAPI_response = JSON.parse(body);

        //If we get an error, send it to the client
        if (transportAPI_response.error) {
            return res.json({err: transportAPI_response.error});
        }

        //Otherwise, extract the journey steps
        if (!error && response.statusCode == 200) {
            var routes = transportAPI_response.routes;
            if (routes != []) {

                //Send result to client
                res.json({routes: routes});
            } else {
                res.json({err: 'No journey found'});
            }
        }
    });
});


module.exports = router;