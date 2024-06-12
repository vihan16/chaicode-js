let myHeros = ['thor','spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',
    
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.vihan = function(){
    console.log(`vihan is present in all objects`);
}

//heroPower.vihan()

//Inheritance
const Teacher ={
    makeVideo: true
}
const TeachingSupport ={
    isAvailable: false
}