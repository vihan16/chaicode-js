const tinderUSer = new Object()
const tinderUser = {}

tinderUSer.id = "12345"
tinderUSer.name = "ihan"
tinderUSer.isLoggedIn = false

//console.log(tinderUSer)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname: {
            firstname: "vihan",
            lastname:"patidar"
        }
    }
}

//console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3)

const obj3 = {...obj1 , ...obj2}
//console.log(obj3)

//console.log(tinderUSer)
//console.log(Object.keys(tinderUSer))

const course = {
    courssename: "bla_bla",
    price:33,
    courseinstructor:"i'am"
}

//course.courseinstructor

const {courseinstructor} = course
console.log(courseinstructor)

//APIS

// {
//     "courssename": "bla_bla",
//     "price": "free",
//     "courseinstructor":"i'am"
// }