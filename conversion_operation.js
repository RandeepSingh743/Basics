let score = 33;

console.log(typeof score);
// It shows the type of NUmber 
score ="33";
console.log(typeof score);
// It shows the type of String 

// How to change the String into number 
let valueInNUmber = Number(score);
console.log(typeof valueInNUmber);
// It shows the type of is number 

console.log(valueInNUmber);
// It shows the value inside it which is 33

// What if we also have some characters with number is it convert to number 
score="33abc";
valueInNUmber = Number(score);
console.log(typeof valueInNUmber);
// It can show the type of value is Number
console.log(valueInNUmber);
// Here it show NAN(Not a number ) 
console.log("---------*--------------*---------------------")
// Now we convert Number to String 
console.log("Now we convert Number to String");
let num=33;
let NumberString=String(num);
console.log(NumberString);
// Here it shows the value 33
console.log(typeof NumberString);
// Here it shows the datatype which is String 

num=null;
NumberString=String(num);
console.log(NumberString);
// here it shows Null

num="";
NumberString=String(num);
console.log(NumberString);
// here it shows Nothing
console.log(typeof NumberString); 
console.log("-------------------*----------------------*");
/*
Summarized Notes of Converting  Number to String 
33   => It shows 33 but its type is Stirng
null => It show Null 
""   => It show Nothing or blank output in the screen 
*/

// Now we convert Number to boolean 
console.log("Now we convert Number to boolean ");
let n=1;
let NumbertoBoolean=Boolean(n);
console.log(NumbertoBoolean);
// Here it shows true 
console.log(typeof NumbertoBoolean);

n="randeep";
NumbertoBoolean=Boolean(n);
console.log(NumbertoBoolean);
// Again it shows true 

n=null;
NumbertoBoolean=Boolean(n);
console.log(NumbertoBoolean);
// It show false here 

n="";
NumbertoBoolean=Boolean(n);
console.log(NumbertoBoolean);
// Again it Show false here

/*
Summarized notes of converting Number and String to Boolean
1 => It shows the value or output  true
0 => It shows the value or output false 
"randeep" => It show the value or output true 
null => It show the value or output false 
"" => It show the value or output false here

*/
