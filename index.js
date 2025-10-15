// Index.js
var http = require("http");
var fs = require("fs");
const port = 8000;

//testing version updates

http.createServer(function(req, res) {
    fs.readFile("index.html", function(err, data) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error loading index.html");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
    
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});