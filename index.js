const http = require('http');
http.createServer((req,res)=> {
    console.log('received a request');
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('Hello, this is my first nodejs program');
}).listen(8080);
