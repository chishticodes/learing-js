// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
    // console.log(num);
}

const greeting = "Hello World!"

for(const greet of greeting){
    // console.log(greet);
}



const map = new Map()
map.set('IN', 'India')
map.set('USA', 'America')
map.set('PK', 'Pakistan')
map.set('IN', 'India')

// console.log(map);


for (const [key, value] of map){
    // console.log(value);
}

// for of on object

// const myObject ={
//     'game1' : 'NFS',
//     'game2' : 'CS'
// }

// for(const [key, value] of myObject){
//     console.log(value);
// }

// maps work with for of loop but the objects don't work like that