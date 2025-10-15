// Index.js
var http = require("http");
const port = 8000;

//testing version updates

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "html" });
    res.end("Hello World!");
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});