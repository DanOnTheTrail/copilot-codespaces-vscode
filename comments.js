// Create web server
// The web server should respond to a request to any of the following URLs:
// /index
// /about
// /contact
// /blog
// /blog/2018
// /blog/2018/10
// /blog/2018/10/13
// with a page that displays the URL that was requested.
// Example:
// If the user requests /blog/2018/10/13, the server should respond with a page that says "You requested the URL: /blog/2018/10/13"

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`You requested the URL: ${path}`);
}).listen(8080);