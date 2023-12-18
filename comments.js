// Create web server
// run server: node comments.js
// test: curl http://localhost:3000/comments

var http = require('http');
var fs = require('fs');
var qs = require('querystring');

var messages = [
    { name: 'John', message: 'hi' },
    { name: 'Jane', message: 'hello' }
];

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(messages));
    } else if (req.method === 'POST') {
        var body = '';
        req.setEncoding('utf8');
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            var message = qs.parse(body);
            messages.push(message);
            res.writeHead(302);
            res.end();
        });
    }
}).listen(3000);