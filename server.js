const http = require('http')
const fs = require('fs')
const port = 5500

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html'})
  res.writeHead(200, {'Content-Type': 'style/css'})
  fs.readFile('./index.html', './basic_style.css', function(error, data) {
    if (error) {
      res.writeHead(404);
      res.write('Not the droid you&acute;re looking for');
    } else {
      res.write(data);
    }
    res.end();
  })
});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});
