const prompt = require("prompt-sync")();

//Q1
/*let Marks = {
    Harry : 98,
    Rohan : 87,
    Zahid : 89
}
for(let i = 0 ; i < Object.keys(Marks).length ; i++){
    console.log("The Marks of " ,Object.keys(Marks)[i] , "are" , Marks[Object.keys(Marks)[i]])
}

//Q2
for(a in Marks){
    console.log("The Marks of ",a, "are" , Marks[a]);
}*/

//Q3

let num = 0;

while (put != num) {
    var put = prompt("Enter the Pass number = ");
    put = Number.parseInt(put)
    console.log("Try again !!");
}
console.log("Correct");


/*for (let i = 0; i < 10; i++) {
    let put = prompt("Enter the Pass number = ");
    put = Number.parseInt(put);
    if (put === num) {
        console.log("Correct");
        break;
    }
    else {
        console.log("Try Again !!");
    }
}*/

// Q4 
let a, b, c, d, f;
meanof5 = () => {
    return (a + b + c + d + e) / 5;
}
a = prompt("a = ");
a = Number.parseInt(a);
b = prompt("b = ");
b = Number.parseInt(b);
c = prompt("c = ");
c = Number.parseInt(c);
d = prompt("d = ");
d = Number.parseInt(d);
e = prompt("e = ");
e = Number.parseInt(e);
console.log("The Mean of 5 Numbers are ", meanof5());
