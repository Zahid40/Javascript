const prompt = require("prompt-sync")();

//Guess Random Number
let guess = 0; // number of guesses
let a = 0;
let x = Math.random()*100  //it guesse like this (96.7456487754878)
x = Math.floor(x) // Guesses b/w 1 to 100  >> it guesses like this (96)
// console.log(x)
console.log("I have a Number now you need to guess which Number i have")
for(let i = 0; i<100 ; i++){
    a = Number.parseInt(prompt(`Attempt ${i+1} Guess =  `));
    if(a == x){
        console.log("Congratulations You WINN");
        break;
    }
    else{
        if(a < x){
            console.log("Your Number is Smaller then CORRECT number");
            if(x-a <= 5){
                console.log("And You So so Close");
            }
            else if(x-a <= 10){
                console.log("And You Pretty Close");
            }
            else if(x-a <= 20){
                console.log("And You Far");
            }
            else if(x-a <= 30){
                console.log("And You are so Far");
            }
        }
        else if(a > x){
            console.log("Your Number is Greater then CORRECT number");
            if(a-x <= 5){
                console.log("And You So so Close");
            }
            else if(a-x <= 10){
                console.log("And You Pretty Close");
            }
            else if(a-x <= 20){
                console.log("And You Far");
            }
            else if(a-x <= 30){
                console.log("And You are so Far");
            }
        }
        guess++;
    }
}
let score = 100-guess;
console.log("Score = ",score)
if(score == 100){
    console.log("Insane guess ")
}


