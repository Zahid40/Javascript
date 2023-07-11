//Alert >> use to showing messages
alert("Hello");

//Prompt >> get input value from user
let a = prompt("enter the value of a") // returns always string

console.log(typeof a , a);
a = Number.parseInt(a)   //converts string to number
console.log(typeof a , a);

//confirm   >> show to confirm prosses by user with OK an CANCLE button
let write = confirm("Do you want to write");
//Ok  == true
//cancle == false
if(write == true){
    document.write("ok i write there");
}
else if(write == false){
    document.write("Allow me to write");
}