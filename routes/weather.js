var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');
var cfenv = require('cfenv');
var request = require('request');

//Get credentials from Bluemix instance
var appEnv = cfenv.getAppEnv();
var weather_host = appEnv.services["weatherinsights"] 
        ? appEnv.services["weatherinsights"][0].credentials.url // Insights for Weather credentials passed in
        : ""; // or copy your credentials url here for standalone


// HTTP GET - daily weather forecast
// Returns a 10 day weather forecast for the given location
router.get('/daily/:lat/:lon', function(req, res) {

    //Extract location from HTTP call
    var lat = req.params.lat;
    var lon = req.params.lon;
    var geocode = lat+","+lon;

    callWeatherAPI("/api/weather/v2/forecast/daily/10day", {
        geocode: geocode || "51.5185059,-0.088304",
        units: "m",
        language: "en"
    }, function(err, result) {
        if (err) {
            res.send(err).status(400);
        } else {
            res.json(result);
        }
    });
});

// HTTP GET - hourly weather forecast
// Returns a 24hour weather forecast for the given location
router.get('/hourly/:lat/:lon', function(req, res) {

    //Extract location from HTTP call
    var lat = req.params.lat;
    var lon = req.params.lon;
    var geocode = lat+","+lon;

    callWeatherAPI("/api/weather/v2/forecast/hourly/24hour", {
        geocode: geocode || "51.5185059,-0.088304",
        units: "m",
        language: "en"
    }, function(err, result) {
        if (err) {
            res.send(err).status(400);
        } else {
            res.json(result);
        }
    });
});

function callWeatherAPI(path, query, callback) {
    var url = weather_host + path;
    request({
        url: url,
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            "Accept": "application/json"
        },
        qs: query
    }, function(err, req, data) {
        if (err) {
            callback(err);
        } else {
            if (req.statusCode >= 200 && req.statusCode < 400) {
                try {
                    callback(null, JSON.parse(data));
                } catch(e) {
                    console.log(e);
                    callback(e);
                }
            } else {
                console.log(err);
                callback({ message: req.statusCode, data: data });
            }
        }
    });
}

module.exports = router;