// In this we learn String which is non primitive datatype 
// There are 2 ways to create the String 

// First one 
let  myName="Randeep"
console.log(myName);

// 2nd way is by creating its obj
const diffName=new String('randeepsingh');
console.log(diffName);

// Now we see how to print in the strings in a better way by using backticks
console.log(`My pet name is ${diffName},My real name is ${myName} `);

// There are various methods in Strings 
console.log(diffName.toUpperCase());
console.log(diffName.toLowerCase());
console.log(diffName.charAt(0));
console.log(diffName.indexOf('a'));
console.log(diffName.length);
console.log(diffName.slice(5));
let Name="    Randeep Singh    ";
console.log(Name.trim());

