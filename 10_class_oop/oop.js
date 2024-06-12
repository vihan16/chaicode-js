const user ={
    username: 'vihan',
    loginCount:5,
    signedIn: true,

    getUserDetails: function () {
        //console.log('got user details for DB');
        //console.log(`username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
//console.log(user.getUserDetails());
console.log(this);


function User(username,loginCount, isLoggedIn){
    this.username= username;
    this.loginCount = loginCount;
    this.isLoggedIn= isLoggedIn

    return this
}