const http = require('http');
const fs = require('fs');

var port = 3000;

const server = http.createServer((req, res) => {
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

server.listen(port);
console.log(`http server listening on http://localhost:${port}`);
