let num = [1,3,4,5,6,7,8]
console.log(typeof num)

//Array to String Conv.    >>it do not change orignal array , insted return new array
let b = num.toString();
console.log(b ,typeof b)

//Join Array With (somthing)     >>it do not change orignal array , insted return new array
let c = num.join("___")
console.log(c,typeof c)


//Element of Array in Orignal array , Not making new one

//pop >> Removes Last Element of Array in Orignal array , Not making new one
let d = num.pop()          // >> removes 8 ( last of element) from num ( array) and pop() Returns removed element(8)
console.log(num)   //>> left elements after poping of last 
console.log(d)  //>> poped element

//Push  >> Add element at last of array and returns pused element
let e = num.push(809)
console.log(num)   // >>array after pushing
console.log(e)  //Returns New Array Length >> 7

//Shift      >> Removes First element of array and return it
let f = num.shift();
console.log(num)     // return remains
console.log(f)  //return shifted element

//unshift >> Add element at first place in array
let g = num.unshift(45)
console.log(num)
console.log(g)   //Returns New Array Length >> 7

//delete
let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr ,"Length " +  arr.length)


