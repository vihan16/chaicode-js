class user{
    constructor(username,email,password){
        this.username = username;
        this.email= email;
        this.password= password;
    }
    
    encryptPassword(){
        return`${this.password}abc`
    }
    changeUserName(){
        return`${this.username.toUpperCase()}`
    }
}

const chai = new UserActivation('chai','chai@gmail','1231')
console.log(chai.encryptPassword());
console.log(chai.changeUsername());