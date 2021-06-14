var http = require('http');
var url = require('url');
var express = require('express');
var app = express();
var path = require('path');
var fileSystem = require('fs');
var options = {
    root: path.join(__dirname)
};

    app.use(express.static(__dirname + '/public'));
    
    app.get('/', function(req, res){
        app.redirect(302, '/capchat');
    });

    app.get('/capchat', function(req, res){
        res.sendFile('/capchat.html',options);
    });

    app.get('/singulier/:id', function(req, res) {
        var filePath = path.join("./singulier/", req.params.id+'.jpg');
        
        res.writeHead(200, {
        'Content-Type': 'image/jpg',
        });

        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(res);
    });

    app.get('/neutre/:id', function(req, res) {
        var filePath = path.join("./neutre/", req.params.id+'.jpg');

        res.writeHead(200, {
        'Content-Type': 'image/jpg',
        });

        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(res);
    });

    app.get('/hint', function(req, res) {
        var filePath = path.join("./singulier/hint.txt");

        res.writeHead(200, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin':'*'
        });

        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(res);
    });

    app.get('/capchat.js', function(req, res) {
        var filePath = path.join("public/capchat.js");

        res.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Access-Control-Allow-Origin':'*'
            });

        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(res);
    });

    app.get('/inject.js', function(req, res) {
        var filePath = path.join("public/inject.js");

        res.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Access-Control-Allow-Origin':'*'
            });

        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(res);
    });

    app.get('/horloge.js', function(req, res) {
        var filePath = path.join("public/horloge.js");

        res.writeHead(200, {
            'Content-Type': 'text/javascript',
            'Access-Control-Allow-Origin':'*'
            });

        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(res);
    });

    app.get('/style.css', function(req, res) {
        var filePath = path.join("public/style.css");

        res.writeHead(200, {
            'Content-Type': 'text/style',
            'Access-Control-Allow-Origin':'*'
            });

        var readStream = fileSystem.createReadStream(filePath);
        readStream.pipe(res);
    });

    app.get("*", function(req, res){
        res.send("Page not found");
    })
    

app.listen(8080);