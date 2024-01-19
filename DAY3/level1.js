//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Manjunath";
let lastName = "Kalkutagi";
let country = "India";
let city = "ABD";
let age = 26;
let isMarried = true;
let year = 2021;

console.log(`First Name:${firstName}  Last Name:${lastName}`)

console.log(typeof('10') == typeof(10))
console.log(typeof('9.8') == typeof(10))

let todaysDate = new Date()
console.log("YEAR is ", todaysDate.getFullYear())
console.log("Month is ", todaysDate.getMonth());
console.log("Date is ", todaysDate.getDate());
console.log("Day is", todaysDate.getDay());
console.log("Hours is ", todaysDate.getHours());
console.log("Minutes is ", todaysDate.getMinutes());
var currentTimestamp = Math.floor(new Date().getTime() / 1000);
console.log(currentTimestamp);