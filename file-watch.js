
// Use filesystem module
var fs = require('fs'),
      targetFileName = process.argv[2],
      spawn = require('child_process').spawn ;

//Check if there is a valid target file name
if (!targetFileName ) {
  throw Error("No file name specified to watch !");
}

//Start watching the file using an event loop
fs.watch(targetFileName, function () {
  console.log("Inside before:"+Date.now());
  console.log("File"+targetFileName+" has just changed !!");
  
  var ls = spawn('ls', ['-lh',targetFileName]);
  ls.stdout.pipe(process.stdout);
  console.log("Inside after:" +Date.now());
});

console.log(Date.now());
console.log("Watching target.txt has just started !!");
console.log(Date.now());

// To list all methods of an object ; In this case we are listing all methods of Date
//console.log(Object.getOwnPropertyNames(Date));

