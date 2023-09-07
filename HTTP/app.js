const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the home');
    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to the about page');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("<h1>404 error</h1> <br> <p>page not found </p> <br> <a href='/'> back to home</a>)")
    }
});

server.listen(5000);
