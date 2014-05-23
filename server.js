var fs=require('fs');
//Using http only instead of https for lack of SSL keys
var https = require('https');
var noConnections =0;
var selfCert={
  key:fs.readFileSync('/Users/satish/.ssh/stalluri_self_ssl/key.pem'),
  cert:fs.readFileSync('/Users/satish/.ssh/stalluri_self_ssl/cert.pem')
}

//Data to be sent in response to a http request
var jsonToSend = {
  key1 : "value1",
  key2: "value2",
  key3: "value3"
}
var imgToSend=fs.readFileSync('./apple.png');
var textToSend="Saying hello from a node server";

//Start the server on port 8888
https.createServer(selfCert,function(req, res){
        //you will realize with logging that there will be two requests when you click in a browser. Probably one for favicon
        console.log("LOG : Request received at : "+Date.now());

        //Send a json
        // res.writeHead(200, {'Content-Type':'application/json'});
        // res.end(JSON.stringify(jsonToSend));

        //Send an image
        // res.writeHead(200, {'Content-Type':'img/png'});
        // res.end(imgToSend,'binary');

        //Send a plain text
         res.writeHead(200, {'Content-Type':'text/plain'});
         res.end(textToSend);

        console.log("LOG : Response served successfully at : "+Date.now());
        console.log('LOG : No of connections served so far :'+ ++noConnections);
}).listen(8888,'127.0.0.1');

console.log('First node webserver just started!');


