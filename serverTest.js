//Script to test a simle nodejs server
//Before running this script run ulimit -n 8192 on your local 
//machine to increase number of file descriptors without which you will run into errors 

var http = require('http');

//Testing variables here
//Set the maximum no of concurrent connections
var maxConcurrentConnections =1000000;

// Agent default to max sockets of 5, we need more
http.globalAgent.maxSockets = maxConcurrentConnections ;


var requestOptions = {
  host: '127.0.0.1',
  port:8888,
  path:'/',
  agent:false,
  method:'GET'
}

//Response handler
var responseHandler = function (res) {
  var sentData='';
  console.log("Request successfull");
  res.resume();
  res.on('data', function (chunk) {
    if(res.statusCode == 200){
      console.log("Request successfull");
      sentData += chunk;
    }
  });
  res.on('end',function(){
    console.log("Client connected :" +i);
    console.log(sentData);
  }).on('error', function(e) {
    console.log("Error: " + options.host + "\n" + e.message);
  });;

}

// create more, agents until we have enough
for(var i = 0; i<=4; i++){

  http.request(requestOptions,responseHandler).end();

  /* function (res) {
     res.resume();
     res.on('data', function (chunk) {
     if(res.statusCode == 200){
     console.log("Request successfull");            }
     });
     res.on('end',function(){
     console.log("Client connected :" +i);
     }).on('error', function(e) {
     console.log("Error: " + options.host + "\n" + e.message);
     });;


     });*/

}
