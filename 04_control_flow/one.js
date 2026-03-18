// if statement
/*
   if(condition){   // yadi ye true hoga to iske andar ka code chalega nahi to nahi chalega
    // code 
   }
*/

// <,>,<=,>=,==,!=,===,!==: yaha par == type nahi dekhta jabki === data types bhi dekhta hai

/*
const temp=41;
if(temp<50){
    console.log("temperature is less than 50");
}
*/

/*
const temp=49;
if(temp<50)
{
    console.log("temperature is less than 50");
}
else
{
    console.log("temperature is greater than 50");
}
*/

/*
const score=200;
if(score>100){
    let power="fly";
    var highscore=true;
    console.log(`user power is ${power}`);
    console.log(`is user contain high score ${highscore}`);
}
//console.log(`user power is ${power}`);  // ye error dega kykoi power ka scope if ke andar hai lekin ham ise {} ke bahar access kar rahe hai
//console.log(`is user contain high score ${highscore}`); // ye error nahi dega kyoki var variable ka scope global hota hai: isliye ham var variable ka use karne se bachte hai
*/

/*
const balance=1000;
if(balance>500) console.log("balance is high");  // ye short hand property kahlata hai jisme ham if me { } use nahi karte lekin isme ; lagana jaruri hota hai 
*/

/*
const balance=1000;
if(balance>500) console.log("test1"), console.log("test2"); // aisa bhi kar sakte hai jab tak ; nahi lagayege tab tak if ka scope hi mana jayega lekin ye readable code nahi hota hai and ham aisa karne se bachte hai
*/

/*
let balance=1000;
if(balance<250)
{
    console.log("less than 250");
}
else if(balance<500)
{
    console.log("less than 500");
}
else if(balance<1000)
{
    console.log("less than 1000");
}
else
{
    console.log("greater than or equal to 1000");
    
}
*/


const isLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(isLoggedIn && debitCard)
{
    console.log("allow to buy course");   
}

if(loggedInFromGoogle || loggedInFromEmail)
{
    console.log("user logged in");
}

