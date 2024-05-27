function myName(){
    console.log("V")
    console.log("i")
    console.log("h")
    console.log("a")
    console.log("n")
}
//myName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("vihan"))