// var request = require('request');
// var userName="defunkt";
// var directoryName="orgs";

// // var url='https://api.github.com/users/';
// var url='http://www.google.com';


// request(url,function(error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body);
//   }else {
//     console.log("Some error");
//     console.log(error);
//   }

// });

var https=require('https');
var optionsGET = {
  url:'api.github.com/users/',
  path : '/users'+userName+'/'+directoryName,
  method:'GET'
}

console.log(optionsGET);

var requestGET = https.request(optionsGET, function(res) {
console.log("statusCode:"+ res.statusCode);
console.log("headers:"+ res.headers);

res.on ('data',function(data) {
  console.log('Got response from server');
  process.stdout.write(data);
  console.log('Connection closed');
});

});

requestGET.end();





