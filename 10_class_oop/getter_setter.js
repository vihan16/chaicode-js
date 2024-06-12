class User {
    constructor(email,password){
        this.email=email;
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}

const vihan = new User('vihan@mail','1234')
console.log(vihan.password);