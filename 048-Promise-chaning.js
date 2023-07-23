//Promise-chain >>> Promise(resolve,reject),then().then().then()......
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve After 2 seconds");
        resolve(34)
    }, 2000)
})
p1.then((value) => {
    console.log("Value is  = ", value);
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("We are Done");
        },2000)
    })
    return p2;
}).then((value)=>{
    console.log(value);
    return 3; //js considerd as pre resolved promise return
}).then((v)=>{
    console.log("Finall Done with  =  ",v);
})