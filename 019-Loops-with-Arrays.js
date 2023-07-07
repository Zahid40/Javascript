let num = [2, 5, 3, 6, 7]
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

//Array.from    >>converts string to array
let name = "Zahid"
console.log(name, typeof name)
let arr = Array.from(name)
console.log(arr, typeof arr)  //>> output : [ 'Z', 'a', 'h', 'i', 'd' ] object

//for of loop   >> prints elements
let loopnum = [34, 6, 7, 8, 65, 4, 345, 4, 456, 32, 342]
for (let i of loopnum) {
    console.log(i)
}
//for in loop     >> prints keys of elements whish is same 1,2,3..
for (let i in loopnum) {
    console.log(i)
}

//foreach Loop    >> runs for every element in a array
//a.forEach((value , index , array )=>{//code});
[2, 4, 5].forEach((element, index, array) => {
    //index >> prints index of each elements
    //array >> prints whole array
    console.log(element * element, index, array)
})

//map >> performing oprations on each element and returns/creates new array.
let x = [3, 4, 5]
let a = x.map((value, index, array) => {
    console.log(value, index, array)
    return value * 10
})
console.log(a);

//Filter    >> filtering arrays 
let filter_arr = [2, 67, 45, 6, 9, 10, 45, 35, 86, 56, 4, 56, 24, 78, 56]
let new_filtered_arr = filter_arr.filter((function_filter) => {
    return function_filter < 10;
})
console.log(new_filtered_arr);  //returns <10 nubers in new array

//Reduce    >>Takes First two elements of array and performs function on it as you define under reduce func. and returns a value in NEW variable.
let reduce_arr = [1, 2, 3, 4]
let reduced_val = reduce_arr.reduce((a, b) => {
    return a + b;
})
console.log(reduced_val);


