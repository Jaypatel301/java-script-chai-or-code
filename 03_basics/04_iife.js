// Immediately Invoked Function Expression (IIFE)
// global scope ke pollution ko hatane ke liye ham IIFE ka use karte hai
/*
(function chai(){    // isko ham name iife bhi bolte hai kykoi isme function definition me hamne function name chai rakha hai matlab jaha ham function bhi likhte hai usko named iife kaha jata hai
    console.log("DataBase connected");
})();   // yaha semicolon lagana jaruri hota hai
*/

//(function definition)(function call);   basic syntax of IIFE
/*
( ()=>{
    console.log("DataBase connected two");
})();   // is tarike se ham arrow function ko bhi iife bana sakte hai
*/

((name)=>{
    console.log(`DataBase connected and username is ${name}`);
})("jay");  // is tarike se ham iife me parameter bhi pass kar sakte hai

