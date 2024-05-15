let myDate = new Date();
console.log(myDate); // not readable


console.log(myDate.toString()); // now its readable
console.log(myDate.toDateString()); // only display date
console.log(myDate.toLocaleString()); // date and time in a different format
console.log(myDate.toLocaleDateString()); // only date in different format(m/dd/yyyy)

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23);
let myCreatedDate1 = new Date(2023,0,23,16,20);
let myCreatedDate2 = new Date("2023-01-21");
let myCreatedDate3 = new Date("01-14-2023");
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toLocaleString());
console.log(myCreatedDate3.toLocaleString());



let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());
// always do comparision in milliseconds


// conversion into Seconds
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));
