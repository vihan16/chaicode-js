// primitive 

// 7 types - BigInt, Number, Boolean, String , null, Undefined, symbol

// Reference (non pr)

const score = 100
const scoreValue = 100.3
const isLoggedIn = true
const tempOutside = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId)

// array , object , function
const heros = ["abc","efg","hij"]

let myObj = {
    name : "vihan",
    age: 21,
}

const myFunction = function(){
    //console.log("my World");
}

// stake (primitive)  ,  heap (non- primitive)

let myname = "vihan patidar"
let anothername = myname
anothername = "vihaan"

console.log(myname)
console.log(anothername)

let userOne ={
    email: "one@gmail.com",
    upi:"one@sbii"
}

let userTwo = userOne

userTwo.email = "three@gmail.com"

console.log(userOne.email);
console.log(userTwo.email)