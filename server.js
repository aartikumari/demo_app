var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demoHTML.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.write("hi");
    res.end();
  });
}).listen(8080);