var http = require('http');
var noConnections =0;
var objToJson = {
  Name:"John Art",
  Email: "john.art@johnart.com",
  Address:"Tenclave drive, #304,Minneapolis, MT, 94305",
  Role:"Adminstrator"
};
var objToJson2 = {
  Job:"John Art",
  Email: "john.art@johnart.com",
  Address:"Tenclave drive, #304,Minneapolis, MT, 94305",
  Role:"Adminstrator"
};
var objToJson3= { 
  "trackinfo":{
    "parcelnr":123456,
    "provider":"DHL",
    "booleanStatus":false,
    "trackdetails":{
      "trackdetail":[
        {
        "date":"01.01.2010",
        "info":"Got parcel from Customer"
      },
      {
        "date":"02.01.2010",
        "info":"Shipped to Target depot"
      },
      {
        "date":"03.01.2010",
        "info":"Delivered to Customer"
      }
      ]
    }
  }};

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
      case '/job' :
        console.log("LOG : Request received for job : "+Date.now());
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(JSON.stringify(objToJson2));
      console.log("LOG : Response served successfully at : "+Date.now());
      break;
      case '/complex' :
        console.log("LOG : Request received for complex : "+Date.now());
      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(JSON.stringify(objToJson3));
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
