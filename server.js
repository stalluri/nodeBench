var http = require('http');
var noConnections =0;

http.createServer(function(req, res){
        //you will realize with logging that there will be two requests when you click in a browser. Probably one for favicon
        console.log("LOG : Request received at : "+Date.now());
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end('First node webserver saying hello!!');
        console.log("LOG : Response served successfully at : "+Date.now());
        console.log('LOG : No of connections :'+ ++noConnections);
}).listen(8080,'127.0.0.1');

console.log('First node webserver just started!');


