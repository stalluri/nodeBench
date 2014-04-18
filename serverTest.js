//Concurrent connections server test

var http = require('http');
var noOfConcurrentConnections =1000000;

// Agent default to max sockets of 5, we need more
http.globalAgent.maxSockets = noOfConcurrentConnections ;


var requestOptions = { 
  host: '127.0.0.1',
  port:8080,
  path:'/',
  agent:false,
  method:'GET'
}

//Response handler
var responseHandler = function (res) {

console.log("Req:uest successfull");  

}

// create more, agents un till we have enough 
for(var i = 0; i<=4000; i++){

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
