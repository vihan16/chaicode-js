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