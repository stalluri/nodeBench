var http = require('http');
var noConnections =0;
var objToJson = {
  userDetailsName:"John,Art",
  userDetailsEmail:"john.art@johnart.com",
  userDetailsRole:"NormalEngineer",
  userDetailsNewsletter:"No",
  userDetailsKeys:"adlkjfladjfd2343acxcclkjldafdfajldf"
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

    //Set required access controll headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control');
    
    console.log(req.url);
    console.log(req.url.replace(/\?_=\d+/g,""));
    console.log("replace url params"+req.url);

    //Base on requested URL serve the JSON
    switch(req.url.replace(/\?_=\d+/g,"")) {
      case '/person' :
        console.log("LOG : Request received for person : "+Date.now());
      // res.setHeader('Access-Control-Allow-Origin','http://localhost:8888/person');
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
  }).listen(8080,'127.0.0.1');

  console.log('First node API webserver just started!');
