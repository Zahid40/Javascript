console.log(a);  //this shows undefine because a hoisted by js on top with value undefine
var a=8; // now on line 2 that a has value of 8
console.log(a);  // output : 8


console.log(b)
const b = 0;  //let and const not initialized at top it goes to temorary dead zone.