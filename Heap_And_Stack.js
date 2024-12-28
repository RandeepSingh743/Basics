/*
1) Stack memory = In stack memory primitives data types are store , and the copy of object is given to you 
2) Heap memory = In heap memory non-primitive datatypes are being store the refernce of the orignal object  is given to you
*/

// Here we learn about Stack memory 
let myName="randeep";
let anotherName=myName;
anotherName="paras";
console.log("My name is "+myName);
console.log("Another name is "+anotherName);

// In this we can see the output is change of anotherName because when we wrote anotherName=myName it gives you the copy of the object so if we change in the copy it doesn't refelect in another one 

// Heap Memory
let userOne =
{
    Email:"randeepSingh@gmail.com",
    Id:121,

};
let userTwo =userOne;
userTwo.Email="paras@email.com";
console.log(userOne.Email);
console.log(userTwo.Email);



