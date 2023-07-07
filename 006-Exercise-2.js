const prompt = require("prompt-sync")();
//Q1
let a = prompt("Whats Your age ?")
if (a >= 10 && a <= 20) {
    console.log("Your Age is Verified")
}
else {
    console.log("You Are not Verified")
}

//Q2
let b = prompt("Choose Number ?")
switch (b) {
    case 1:
        console.log("hello , I am One 1")
        break;

    default:
        console.log("Error")
        break;
}

//Q3
let c = prompt("Choose Number ?")
let rmd1;
c = parseInt(c)
console.log(typeof c)
rmd1 = c % 2 || c % 3;
if (rmd1 == 0) {
    console.log("Number is divisible By 2 and 3")
}
else {
    console.log("No")
}

//Q4
let d = prompt("Choose Number ?")
let rmd;
d = parseInt(d)
rmd1 = d % 2;
rmd2 = d % 3;
if (rmd1 == 0) {
    console.log("Number is divisible By 2")
}
if (rmd2 == 0) {
    console.log("Number is divisible By 3")
}
else {
    console.log("No")
}

//Q5
let age = prompt("What is Your Age ?")
console.log("Yor age is ", (age <= 18 ? "Not Valid For Driving" : "Valid for Driving"))