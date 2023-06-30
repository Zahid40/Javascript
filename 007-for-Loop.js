const prompt = require("prompt-sync")();
// for(let i = 0 ; i < 20 ; i++){
//     console.log("Hello" + (i+1));
// }

/* let sum = 0;
let n = prompt("Enter The Value Of n = ");
n = Number.parseInt(n);
for(let i =1 ; i<n+1;i++){
    sum += i;
    console.log(i , "+");
}
console.log("The Sum of First " +n+" Natural numbers are " + sum );  */

//-----Factorial --------- claculator in js ------
let fact = 1;
let n = prompt("Enter The Number for Factorial = ");
n = Number.parseInt(n);
if(n === 1 || n=== 0){
    console.log("The Factorial of "+ n +" is 1")
}
else{
    for(let i = 1 ; i < n+1 ; i++){
        fact *= i;
    }
    console.log("The Factorial of "+ n +" is " + fact);
}