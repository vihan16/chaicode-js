const temp = 40

// if (temp === 40){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature is greater than 41")
// }


// const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`user power: $(power)`)
// }
// console.log(`user power: $(power)`)


const userLoggedIn = true
const debitCard = true
const loggedfromGoogle = false
const loggedfromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to by coure")
}
if (loggedfromEmail || loggedfromGoogle){
    console.log("user logged in")
}