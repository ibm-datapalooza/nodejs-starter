$(document).ready(function() {

    //Draw map
    var latlng = [51.518549,-0.0870156];
    var map = L.map('map').setView(latlng, 16);

    L.tileLayer('https://api2.ordnancesurvey.co.uk/mapping_api/v1/service/zxy/EPSG%3A3857/Outdoor 3857/{z}/{x}/{y}.PNG?key=sdJSoCa7r8w2rW5LNUsB9vZCjEP0zTEP', {
        maxZoom: 20,
        minZoom: 7
    }).addTo(map);

    L.marker(latlng).addTo(map)
    .bindPopup('Datapalooza Mashup')
    .openPopup();


    //Handle form submits
    $("#trainstations").click(function(e) {
        e.preventDefault();
        //Get values and make query
        var lat = $("#trainlat").val();
        var lng = $("#trainlng").val();

        $.get('/transportAPI/trainstations/'+lat+'/'+lng, function(response) {
            var code = hljs.highlight("json",JSON.stringify(response,null,2));
            $("code.transportapicode").html(code.value);
        });
    });

    $("#journeyplan").click(function(e) {
        e.preventDefault();
        //Get values and make query
        var fromlat = $("#journeyfromlat").val();
        var tolat = $("#journeytolat").val();
        var fromlng = $("#journeyfromlng").val();
        var tolng = $("#journeytolng").val();

        $.get('/transportAPI/journey/'+fromlat+'/'+fromlng+'/'+tolat+'/'+tolng, function(response) {
            var code = hljs.highlight("json",JSON.stringify(response,null,2));
            $("code.transportapicode").html(code.value);
        });
    });

    $("#weather24").click(function(e) {
        e.preventDefault();
        var lat = $("#weather24lat").val();
        var lng = $("#weather24lng").val();

        $.get('/weather/hourly/'+lat+'/'+lng, function(response) {
            var code = hljs.highlight("json",JSON.stringify(response,null,2));
            $("code.weathercode").html(code.value);
        });
    });

    $("#weather10").click(function(e) {
        e.preventDefault();
        var lat = $("#weather10lat").val();
        var lng = $("#weather10lng").val();

        $.get('/weather/daily/'+lat+'/'+lng, function(response) {
            var code = hljs.highlight("json",JSON.stringify(response,null,2));
            $("code.weathercode").html(code.value);
        });
    });


});
