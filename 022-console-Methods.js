//prints all console functions
console.log(console)

//throwing custom error
console.error("hij")

//print objects into tabular form
let obj = {a:2,b:4,c:7}
console.table(obj)

//console.clear >> clear the console
console.clear()

//trowing warning
console.warn("warning")

//console.assert
console.assert(5<4);  //output : Assertion failed
console.assert(5>4);  //output : ____

//console.info   >> same as console.log
a = 8
console.info(a) //output : 8

//console.time()-console.timeEnd   >> how much tami taken by a function
console.time("forloop")
for(let i = 0 ; i<4 ; i++){
    console.log(i*69);
}
console.timeEnd("forloop")  //output : forloop: 3.425ms
console.time("whileloop")
let i =0;
while(i<4){
    console.log(i*69);
    i++
}
console.timeEnd("whileloop")  //output : whileloop: 24.38ms



