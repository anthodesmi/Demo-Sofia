var http = require('http');

var express = require('express');
var _ = require('lodash');
var axios = require('axios');

var app = express();

var PORT = 3005;

app.get('/', function(req, res) {
    res.status(200).send('merry xmas');
});

app.listen(PORT, function() {
    console.log('Server is running on PORT:',PORT);
});

var server = http.createServer(function(req, res) {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Merry xmas\n");
});

server.listen(3000, function() {
    console.log('Server is running at 3000')
});