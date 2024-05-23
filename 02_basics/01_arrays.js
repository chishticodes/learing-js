// array


const myArr = [0,1,2,3,4,5]
// array make shallow copy
// shallow copy is when an object share same reference poin as original value meaning if the obect will change original array will also change

const myHeros = ['Ammi', 'good friends', 'teachers']
// console.log(myHeros[0]);


// Array Methods

myArr.push(7);
// console.log(myArr);
myArr.pop();
// console.log(myArr);
myArr.unshift(9);
// console.log(myArr);
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));

const newArr = myArr.join(); //it converts array in string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));


// Slice and Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C", myArr);

// the main difference between slice and splice method is that splice change the original way that only the those elements remain which are not selected in the range of splice