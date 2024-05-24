const marvelHeros = ['thor', 'ironman', 'spiderman']
const dcHeros = ['superman','batman', 'flash']

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeros = [...marvelHeros,...dcHeros]
// console.log(allNewHeros);

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArr = anotherArr.flat(Infinity)
// console.log(realAnotherArr);


console.log(Array.isArray('Hitesh')); 
console.log(Array.from('Hitesh')); 
console.log(Array.from({name: "hitesh"})); //interesting case for interviews


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));




