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
//console.log("Result: ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}
//console.log(loginUserMessage("vihan"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 1000 , 2500))

const user = {
    username: "vihan",
    price: 100

}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)

}

handleObject(user)

const myArray = [200, 200 , 400,800]
function returnSecondValue(getArray){
    return getArray[3]

}
console.log(returnSecondValue(myArray))