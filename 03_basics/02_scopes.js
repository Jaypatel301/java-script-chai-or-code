/*
let a=10;
const b=20;
var c=30;
console.log(a);
console.log(b);
console.log(c);
*/
//--------------------------------------------------------------------------------------------------------------------------------------
/*
if(true){
    let a=10;
    const b=20;
    var c=30;
}
//console.log(a); // yaha "a is not defined" aayega kyoki let variable ka scope braces { } hota hai: matlab yadi hamne kisi let variable {} ke andar banaya hai to ham use { } ke bahar use nahi kar sakte
//console.log(b); // yaha "b is not defined" aayega kyoki const variable ka scope bhi { } hota hai
console.log(c); // yaha par 30 print hoga kyoki var varible ka scope whole program(global) hota hai: matalb yadi ham var variable ko kahi
// bhi declare kare ham uska use kisi bhi jagah kar sakte hai iska side effect ye ki yadi kisi program ko bahue sare log likh rahe hai and 
// kahi kisi function ya file ke andar var varible declare hai nahi hame uska pata nahi or hamne dobara usko declare kar liye ko usko use karte 
// time error aa jayega isliye ham var variable ka use avoid karte hai and uski jagah ham let variable ka use karte hai
*/
//---------------------------------------------------------------------------------------------------------------------------------------
let a=100;
if(true){
    let a=50;
    const b=20;
}
// yaha par ham yadi if ke bahar a ka use karenge ko uski value 100 rahegi and yadi if ke andar a ka use karenge to uski value 50 rahegi ye possible hota hai kyoki let variable ka scope { } hota hai: const variable ka scope bhi { } hota hai
//--------------------------------------------------------------------------------------------------------------------------------
/*
function one(){
    const username="jay";

    function two(){
        const website="youtube";
        console.log(username);
    }
    //console.log(website);  // yaha error aayega kyoki website function two ke andar hai aur ham usko function two ke bahar use kar rahe hai to scope ke bahar hone ke karan error aayega

    two();
}
one();
// note:-jab function ki nesting hoti hai tab child function parent function ke let and const variables ko use kar sakte hai lekin iska ulta nahi hota
*/
//--------------------------------------------------------------------------------------------------------------------------
/*
if(true){
    const username="jay";
    if(username==="jay"){
        const website=" youtube";
        console.log(username+website);
    }
    //console.log(website); // yaha error aayega
}
//console.log(username); // yaha bhi error aayega
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addOne(5)); // yaha error nahi aayegi kyoki yaha hoisting ho jati hai: normal function me hoisting hoti hai
function addOne(num){
    return num+1;
}
addOne(5);

console.log(addTwo(5));  // yaha error aa jayegi kyoki function expression me hoisting nahi hoti
const addTwo=function(num){   // isko function expression bolte hai
    return num+2;
}
addTwo(5);