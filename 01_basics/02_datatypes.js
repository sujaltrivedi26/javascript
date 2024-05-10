 "use strict"; // treat all JS code as newer version

 // alert(3+3)// we are using nodejs, not browser 

//  console.log(3+3)

//  console.log("sujal")


 let name =" sujal"
 let age= 15
 let isLoggedIn = false 
 let state;

 // number => 2 to power 53
 // bigint 
 // string => true/false
 // null => standalone value
 // undefined => is type of same undefined 
 // string =>""
 // symbol=> unique
 // object

//  console.log(typeof null); 

 //Primitive

 // 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

 const score = 200
 const scoreValue = 200.3

  console.log(typeof scoreValue);

 //const isLoggedIn = false
 const outsideTem = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

//  console.log(id=== anotherId);


 const bigNumber = 8329472387423847234n
 


 // Reference (Non primitive)

 // Array[], Objects{}, Functions (){} 

 const heros = ["Ironman", "Hulk", "Caption", "Thor"];
 let myObj ={
    name: "sujal",
    age: 22,}

 const myFunction = function (){
    console.log("Hello Wolrd");
    
 }
//  console.log(typeof anotherId);




// ********************************************************************
//**********************************************//
// Note:- In object value access in (.)<=    
// ImportantNote:- Stack:in stack the vaule give copy to original value.
// Heap: In Heap value are give reference vaule.
//*********************************************//                                         



// thre are two type of memory :-

// Stack (Primitive), Heap (Non-Primitive)

let myGameName ="starlorduser"

let anothername = myGameName 
anothername = "sujaltrivedi"

console.log(myGameName);
console.log(anothername);

let userOne = {
   emali: "user@gmail.come",
   AppleId: "sujal@tri"

}

let userTwo = userOne

userTwo.AppleId="trivedi@sujal"

console.log(userOne.AppleId);
console.log(userTwo.AppleId);