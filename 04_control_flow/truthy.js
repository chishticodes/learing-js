const userEmail = []

if (userEmail){
    console.log('got user email');
} else {
    console.log("Don't have user email");
}


// falsy value 

// false, 0, -0, 0n in BigInt, "", null, undefined, NaN


// Truthy values 

// "0", 'false', ' ', [] empty array, {} empty Object, function(){} empty function


// checking if array is empty

if (userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}


// Object.keys(emptyObj) returns an array of keys
if(Object.keys(emptyObj).length == 0){
    console.log('object is empty');
}



// Nullish coalescing operator (??)

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10;


val1 = undefined ?? 15

// console.log(val1);


val1 = null ?? 10 ?? 20;

console.log(val1);


// Ternary Operator

// condition ? true : false 


const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80');
