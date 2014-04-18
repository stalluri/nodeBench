function g () { return 1; }
function f () { 
  var ret = 0;
  for (var i = 1; i < 10000000000; i++) {
    ret += g ();
  }
  return ret;
}
var start_time = new Date();
console.log(f());
console.log(new Date()-start_time);
