const myArr = [0,1,2,3,5]
const myHero = ["abc" , "def"]
const arr2 = new Array(2, 3, 4, 7)
console.log(myArr[0])
console.log(arr2[1])

//array method 

//myArr.push(4)
//myArr.push(6)
//myArr.unshift(8)
//myArr.shifft()

//console.log(myArr.includes(3))
//console.log(myArr.indexOf(3))

//console.log(myArr)

//slice , splice

console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1 ,3)
console.log("C", myArr)
console.log(myn2)