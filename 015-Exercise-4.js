//Q1
console.log("har\"".length);

//Q2
//--include    >> Output : True or False
let sent = "You are a Good Programmer"
let word = "not"
console.log(sent.includes(word));
console.log(`"The Word "${word}" ${sent.includes(word)?'is':'is Not'} in the Sentence `)
//--startsWith   >> Output : True or False
let word2 = "You"
console.log(sent.startsWith(word2));
//--endsWith   >> Output : True or False
console.log(sent.endsWith(word2));

//Q3
console.log("HelLO".toLowerCase());

//Q4
let str = "Give Me Rs 1000"
let amt2 = Number.parseInt(str.slice('Give Me Rs '.length)); //or
let amt = Number.parseInt(str.slice(11));
console.log(amt)
console.log(amt2)
console.log(typeof amt)

//Q5
let jo = "Joker"
jo[3] = "s"       // Do not change 4th cahr , because strings are imutable
console.log(jo)