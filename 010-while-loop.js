const prompt = require("prompt-sync")();

let n = prompt("Enter the Value of N = ");
n = Number.parseInt(n);
let i = 0;
while(i < n){
    console.log(i+1)
    i++;
}
i = 0;
do{
    console.log(i+1);
    i++;
}while(i < n);