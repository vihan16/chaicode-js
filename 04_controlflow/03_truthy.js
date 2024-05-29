const userEmail = "vih@.com"

if (userEmail){
    console.log("got user email")

} else {
    console.log("don't have emaol")
}

//falsy value

//false,0, -0, Bigint 0n, "", null, undefined, NaN

//truthy value
//"0" , 'false'," ", [], {} , function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

// nullish coalescing operator (??) : null undefied 

let val1
//val1 = 5 ?? 6
//val1 = null ?? 2
//val1 undefind ?? 15
//val1 = null ?? 1 ?? 2

console.log(val1)

// terniary operator 