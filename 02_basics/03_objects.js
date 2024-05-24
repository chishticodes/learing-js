// singleton
/* when object is declared by constructor its singleton, otherwise its not an singleton object.
*/

// Object.create

// Object literals 

const mySym = Symbol('key1');




const jsUser = {
    name: "Bilal",
    "full name": "Bilal Chishti" ,
    [mySym]: "myKey1",
    age: 30,
    location: "karachi",
    email: "bilal@mail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(typeof(jsUser[mySym]));
// console.log(jsUser[mySym]);


jsUser.email = "bilal@gmail.com"
// Object.freeze(jsUser)
jsUser.name = "Bilal Hussain"
// console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello JS User");
}
jsUser.greetings = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greetings());