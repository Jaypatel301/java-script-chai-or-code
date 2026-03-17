/*
const user={
    username:"jay prakash",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        // yaha par this ka use ye batane ke liye kiya gaya hai ki username variable current context ka use karna hai: matlab user object ke andar wale username ka use kar rahe hai
        console.log(this); // ye yaha par current context ko print karega matlab yaha par current context user object hai to ye user object ko print kar dega
    }
}
//user.welcomeMessage();
//user.username="vijay";
//user.welcomeMessage();

console.log(this); // yaha par ye empty object print karega kyoki yaha current context node environment hai and global ke andar koi context hi nahi hai 
*/

/*
function chai(){
    let username="prakash";
    console.log(this.username); // yaha par iski value undefined aayegi kyoki this object context me hi kam karta hai
}
chai();
*/

/*
const chai=function(){
    let username="ajay";
    console.log(this.username); // yaha bhi iski value undefined aayegi
}
chai();
*/

/*
const chai=()=>{     // isko arrow function bolte hai
    let username="aman";
    console.log(this.username); // yaha par bhi iski value undefined aayegi
}
chai();
*/
//---------------------------------------------arrow function-------------------------------------------------------------

// ()=>{}  // this is the basic arrow function syntax
// also we can hold an arrow function into a variable like : const variableName=()=>{}

/*
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(4,6));
*/
/*
const addTwo=(num1,num2)=> num1+num2;   // ye bhi arrow function ko declare karne ka format hai jise emplicit return bolte hai:matlab yaha hame return likhne ki jarurat nahi hai ye khud se num1+num2 ko return kar dega
console.log(addTwo(4,7));
*/
/*
const addTwo=(num1,num2)=>(num1+num2); // yaha bhi hame return likhne ki jarurat nahi hai ye khud se num1+num2 return kar dega: matlab arrow function me yadi ham {} braces use karte hai to hame return likhne ki jarurat padti hai
console.log(addTwo(2,5));
*/
/*
const x=()=>{username:"jay"};  // yaha par ye object return nahi karta hai: ye undefined return karta hai
console.log(x());
*/

const x=()=>({username:"jay"}); // yaha par ye object return kar dega
console.log(x());
