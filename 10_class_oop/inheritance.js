class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password= password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`)
    }
}

const chai =new Teacher('chai','chai@mail','23123')
chai.addCourse()