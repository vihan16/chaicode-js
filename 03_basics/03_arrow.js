const user = {
    username: "vihan",
    price: 333,

    welcomemsg: function(){
        console.log(`${this.username} , welcome to website` )
    }
}

user.welcomemsg()
user.username = "vvvv"
user.welcomemsg()

console.log(this)

// function chai(){
//     let username = "vihan"
//     console.log(this.username)
// }

// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3, 4))