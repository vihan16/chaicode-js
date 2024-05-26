const marvel_heros = ["thor", "ironman", "america"];
const dc_heros = ["superman", "flash", "batman"];
marvel_heros.push(dc_heros);

//console.log(marvel_heros)

const allHeros = marvel_heros.concat(dc_heros);
//console.log(allHeros)

const allhero = [...marvel_heros, ...dc_heros];
//console.log(allhero);

const another_arr = [1,2,3,[4,5,6],7,8[8,7,[6,5]]]
const newano_arr = another_arr.flat(Infinity)

console.log(newano_arr)

let score1 = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score1,score2,score3))