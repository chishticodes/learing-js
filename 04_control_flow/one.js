// if 

// const temperature = 50

// if(temperature < 50){
//     console.log(`temperature is less than 50`);
// }else{
//     console.log(`temperature is greater than 50`);
// }


// const score = 200;

// if (score > 100){
//     let power = 'fly'
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


// short hand notation for if

// const balance = 1000;
// if (balance > 500) console.log('test');

// if (balance < 500){
//     console.log('less than 500');
// } else if(balance < 750){
//     console.log('less than 750');
// }else if(balance < 900){
//     console.log("less than 900");
// } else {
//     console.log('less than 1200');
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log('Allow to buy course');
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log(`user logged in`);
}