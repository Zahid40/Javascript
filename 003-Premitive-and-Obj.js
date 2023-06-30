// 7 Data Premitive Datatype ::
// nn bb ss u
// Null Number  Boolean BigInt  String Symbol  Undefine

let a = null
let b = 5747
let c = true
let d = BigInt("45") + BigInt("5")
let e = "Doopler"
let f = Symbol("I am a symbol")
let g = undefined // or let g;

console.log(a , b , c , d , e , f , g )
console.log(typeof d , a)

//Non-premitive datatype
//Objects

const item = {
    "Name" : "Zahid",
    "Id" : 56790456,
    "Hobby" : "Codding",
    "Website" : true,
    "Websitelink" : "zahid40.github.io"
}
console.log(item["Id"] ,item[  "Websitelink"])