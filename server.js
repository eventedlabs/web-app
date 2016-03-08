var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
  var action = req.method + ' ' + req.url;

  switch(action) {
    case 'GET /':
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream('app/app.html').pipe(res);
      break;
    default:
      res.writeHead(404);
      res.end('Not Found\n')
  }
});

server.listen(3000);
console.log("http server listening on http://localhost:3000");
