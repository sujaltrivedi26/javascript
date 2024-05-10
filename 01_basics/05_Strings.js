const name = "sujal"
const score = 60
let myTeamname = "star-lord" 


// console.log(name + score + "value"); not refer

console.log(`hello my name is ${name} and my scor is ${score} and my team name is ${myTeamname}`);

// console.log(myTeamname[3]);
// console.log(myTeamname.__proto__);

// console.log(myTeamname.length);
// console.log(myTeamname.toUpperCase());

console.log(myTeamname.charAt(6));
console.log(myTeamname.indexOf('l'));

const newString = myTeamname.substring(0, 4)
console.log(newString);

const anotherString = myTeamname.slice(-8, 4);
console.log(anotherString);

const newStringOne = "       sujal     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sujal.com/sujal%20trivedi"

console.log(url.replace('%20', '_'));

 console.log(url.includes('hrey'));
 