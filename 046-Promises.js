//solution of callback hell/pyramid of Doom

let promise = new Promise(function(resolve,reject){
    console.log("I am log in promis")
    resolve(56)
})

console.log("Hello")
setTimeout(function(){
    console.log("Zahid")
},2000)
console.log("Hiiiiiii")
console.log(promise);