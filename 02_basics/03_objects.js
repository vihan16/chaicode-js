// singleton 

// object lterals
const mySym = Symbol("key1")
const jsUser = {
    name: "vihan",
    age: 22,
    [mySym]: "mykey1",
    location: "delhi",
    email: "vihan@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday" , "Saturday"]

}

// to use symbol key we use Square brackets , if we don't use brackets then it shows as a string

// console.log(jsUser.email)
// console.log(jsUser["isLoggedIn"])
// console.log(jsUser[mySym])

jsUser.email = "vihhhh@gmail.com"
//Object.freeze(jsUser)

//console.log(jsUser)

jsUser.greeting = function(){
    console.log("helo user")
}
jsUser.greeting2 = function(){
    console.log(`helo user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())