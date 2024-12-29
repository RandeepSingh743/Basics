// in this section we learn about dates 
// let myDate=new Date()
// console.log(myDate)
// // What is type of my Date 
// console.log(typeof myDate);

// // Various functions to operate on the Dates 
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log( myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// What is want our selected Date 
// let newDate= new Date(2023, 0 , 23);
// console.log(newDate);
// console.log(newDate.toDateString())
// In JS Months are Staring from Zero

// Another method of date creation here we specifiy in another way 
let anotherDate= new Date("2023-01-15");
console.log(anotherDate.toDateString());

// What if we have to this in Indian syle which is mm-dd-yy
let iDate=new Date("01-16-2000");
console.log(iDate.toDateString());

// Time Stamps 
let myTimeStamp=Date.now();
console.log(myTimeStamp);