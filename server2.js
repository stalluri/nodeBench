var http = require('http');
var noConnections =0;
var objToJson = {
  Name:"John Art",
   Email: "john.art@johnart.com",
  Address:"Tenclave drive, #304,Minneapolis, MT, 94305",
  Role:Adminstrator
};


http.createServer(function(req, res){
        //you will realize with logging that there will be two requests when you click in a browser. Probably one for favicon
  //Base on requested URL serve the JSON
  switch(req.url) {
    case '/person' :
        console.log("LOG : Request received for person : "+Date.now());
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(objToJson));
        console.log("LOG : Response served successfully at : "+Date.now());
        break;
    default :
        console.log("LOG : Request received for default : "+Date.now());
        res.writeHead(200, {'Content-Type':'application/json'});
        res.end(JSON.stringify(objToJson));
        console.log("LOG : Response served successfully at : "+Date.now());
        break;
  }

}).listen(8888,'127.0.0.1');

console.log('First node API webserver just started!');


