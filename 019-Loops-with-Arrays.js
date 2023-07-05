let num = [2,5,3,6,7]
for(let i = 0; i < num.length ; i++){
    console.log(num[i])
}

//foreach Loop    >> runs for every element in a array
num.forEach((element)=>{
    console.log(element*element)
})

//Array.from    >>converts string to array
let name = "Zahid"
console.log(name ,typeof name)
let arr = Array.from(name)
console.log(arr , typeof arr)  //>> output : [ 'Z', 'a', 'h', 'i', 'd' ] object

//for of loop   >> prints elements
let loopnum = [34,6,7,8,65,4,345,4,456,32,342]
for(let i of loopnum){
    console.log(i)
}
//for in loop     >> prints keys of elements whish is same 1,2,3..
for(let i in loopnum){
    console.log(i)
}