// Arrays Are the Collection of Data of Different Type
let marks = [23,78,98,67 , null , false , "Not Present"]
console.log(marks)
console.log(marks[3])
console.log(marks[5])

//Array Length
console.log("The Length Of Array ",marks.length)

//Adding Value in Array
marks[10] = 78;
console.log(marks[8])  // undefine >> because , 8th element not exist
console.log(marks[10])

//Altering Value in Array
marks[0] = 40
console.log(marks[0])

console.log(typeof marks) // output >> Object


//Quick quizz
let arry = [45 , 67 , 78 , 34 , 93 , 98 , 23 , 56]
for(let i = 0; i < arry.length ; i++){
    console.log("The Object Number ", i , "is",arry[i])
}