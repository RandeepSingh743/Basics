// First we comapre two varaibles having same datatype 
/*
console.log(2>3);
console.log(1==1);
console.log(1>=1);
console.log(1>=2);
console.log(2*2);
console.log(2**2);
console.log(2**3);
console.log(2%4);
*/

// Now we compare where two datatypes are not same
// console.log("2" >1); // output is true 
// console.log("02"<1); // Output is false
/* 
 Here the javascript automatically convert String to Number 
 But it is not recomed because sometimes it convert String into number and sometime it show NAN(Not a number)
 Clean and readible code always preffer 
*/ 


// Now we compare null 
console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
/* 
1) here in first it takes null as zero and zero is not greater than 0
2) in second zero is greater and equal to zero which shows true
3) In third it show false the reason behind it (==) equality check  and (> , < , >= ,<= ) both of them are working differntly

*/

// Now we do same thing with undefined 
console.log(undefined == 0);
console.log(undefined >0);
console.log(undefined <0);
/*
1) In all operations undefined it shows false 
*/

// Now we do some strict Operations 
console.log("2" === 2);

