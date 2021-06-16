const http = require('http');
const hostname = 'localhost';
const port = 8017;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World!</h1><hr>');
});
server.listen(port, hostname, () => {
    console.log(`running at ${ hostname }:${ port }/`);
});