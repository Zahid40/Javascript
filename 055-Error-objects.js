try{
    console.log(Zahid);
    throw new ReferenceError("Water is not red in color");

}catch (error){
    console.log(error.name);
    console.log(error.message);
    // console.log(error.stack);
}