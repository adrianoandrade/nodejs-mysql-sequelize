var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var load = require('express-load');
const dotenv = require('dotenv');

dotenv.config();

var port = process.env.PORT;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser({ limit: '250mb' }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/check', function (req, res) {
    res.json({ error: false })
})

load('routes')
    .into(app);

server.listen(port, function () {
    console.log('listening on *:' + port);
});