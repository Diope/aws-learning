const {hostname} = require("os");
const http = require("http");

const message = "Wow this is such a simple app, neat!";
const port = 8008;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(message);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname()}:${port}/`);
});