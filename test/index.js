request = require('request-json');
var client = request.createClient('http://localhost:9000/api/');

function on(){
    switch_lamp('on');
}

function off(){
    switch_lamp('off');
}

function switch_lamp(state){
    //state: on / off
    client.get(state, function(err, res, body) {
        console.log(res.statusCode);
        console.log(body);
    });
}

on();
off();