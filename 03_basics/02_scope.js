
//var c = 300
let a = 400

if (true) {
    let a = 100
    const b = 20
    //console.log("Inner:", a)
}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username = "vihan"

    function two(){
        const website = "utube"
        console.log(username)
    }
    //console.log(website)

    two()
}
//one()

if (true){
    const username = "vihan"
    if (username === "vihan"){
        const website = "utube"
        console.log(username + website)
    }
    //confirm.log(website)
}
//console.log(username)