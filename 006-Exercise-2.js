const prompt = require("prompt-sync")();
/*  console.log("Q 1")
let a = prompt("Whats Your age ?")
if (a >= 10 && a <= 20) {
    console.log("Your Age is Verified")
}
else{
    console.log("You Are not Verified")
}

console.log("Q 2")
let b= prompt("Choose Number ?")
switch (b) {
    case 1:
        console.log("hello , I am One 1")
        break;

    default:
        console.log("Error")
        break;
} 

console.log("Q 3")
let c= prompt("Choose Number ?")
let rmd;
c = parseInt(c)
console.log(typeof c)
rmd1= c%2 || c%3;
if(rmd1 == 0){
    console.log("Number is divisible By 2 and 3")
}
else{
    console.log("No")
}


console.log("Q 4")
let d= prompt("Choose Number ?")
let rmd;
d = parseInt(d)
rmd1= d%2;
rmd2= d%3;
if(rmd1 == 0){
    console.log("Number is divisible By 2")
}
if(rmd2 == 0){
    console.log("Number is divisible By 3")
}
else{
    console.log("No")
}

*/

console.log("Q 5")
let age = prompt("What is Your Age ?")
console.log("Yor age is " , (age<=18? "Not Valid For Driving":"Valid for Driving"))
