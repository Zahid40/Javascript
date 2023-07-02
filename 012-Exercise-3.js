//Q1
let Marks = {
    Harry : 98,
    Rohan : 87,
    Zahid : 89
}
for(let i = 0 ; i < Object.keys(Marks).length ; i++){
    console.log("The Marks of " ,Object.keys(Marks)[i] , "are" , Marks[Object.keys(Marks)[i]])
}

//Q2
for(a in Marks){
    console.log("The Marks of ",a, "are" , Marks[a]);
}