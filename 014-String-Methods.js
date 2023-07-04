let nam = "Zahid"
//Lenght
console.log(nam.length)
//To Uppercase
console.log(nam.toUpperCase())
//To Lowercase
console.log(nam.toLowerCase())
//Slice
console.log(nam.slice(2))     // prints = hid , (2,infi)
console.log(nam.slice(2,4))     // prints = hi , (2,4}

//replace  >> case sensitive ( H != h)
let name2 = "Paresh bahi"
name2 = name2.replace("bahi", "bro");
console.log(name2);

//Concat
let frnd = "Jd";
console.log(nam.concat(" is a friend of " ,frnd, " \,Ok !!" ))

//Trim ( for spaces)
let frnd2 = "                      Aman            "    // only trim Before and after , not between
console.log(frnd2.trim())



//Quik Quiz
for(let i = 0 ; i < nam.length ; i++){
    console.log(nam[i]);
}

