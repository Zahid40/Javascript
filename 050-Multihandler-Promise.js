let p1 = new Promise((resolve,reject)=>{
    console.log("Processing......")
    setTimeout(()=>{
        resolve(1)
    },3000);
})

p1.then((value)=>{
    console.log("Resolved With Value = " , value)
}).catch((error)=>{console.log(Error)})

p1.then((value)=>{
    setTimeout(()=>{
        console.log("No errors Occured");
    },2000)
})

p1.then((value)=>{
    setTimeout(()=>{
        console.log("Next Promise soon");

    },5000)
})