const prompt = require("prompt-sync")();

//Q1
let Arruser = [];
let lenarruser = prompt("Define the Length of Array = ")
lenarruser = Number.parseInt(lenarruser)
for (let i = 0; i < lenarruser; i++) {
    Arruser.push(Number.parseInt(prompt(`Enter index ${i} value = `)));
}
console.log(Arruser)

//Q2
let Arruser2 = [];
let i = 0;
let vau;
do {
    vau = Number.parseInt(prompt(`Enter index ${i} value = `))
    Arruser2.push(vau);
    i++;
} while (vau != 0)
console.log(Arruser2)

//Q3
let num = [20, 56, 20, 49, 5, 30, 100, 2000, 56, 34, 70, 80, 36, 57]
let new_arr_filtered = num.filter((num) => {
    return num % 10 == 0;
});
console.log(new_arr_filtered);

//Q4
let sqr_num = [2, 7, 5, 3, 9, 10]
let squarearr = sqr_num.map((element) => {
    return element * element;
})
console.log(squarearr);

//Q5
let naturalnumbers = []
let n = prompt("Enter the number whose factorial you want = ")
n = Number.parseInt(n)
for (let i = 1; i <= n; i++) {
    naturalnumbers.push(i);
}
console.log(naturalnumbers)
console.log("The Length of Array = ", naturalnumbers.length)
let factorial = naturalnumbers.reduce((a, b) => {
    return a * b;
})
console.log("The Factorial of ", n, " is ", factorial);