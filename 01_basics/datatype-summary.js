// primitive data types
// 7 types: string,number,boolean, null,BigInt,symbol,undefined,NaN
const marks=89;
console.log(typeof marks);

const percentage=90.34;
console.log(typeof percentage);

const name="jay";
console.log(typeof name);

const isLoggedIn=false;
console.log(typeof isLoggedIn);

const outsideTem=null;
console.log(typeof outsideTem);

let userEmail;  // undefined
console.log(typeof userEmail);

const id=Symbol('3456');
console.log(typeof id);

const bigNumber=43579234860980357678n;
console.log(typeof bigNumber);

// reference(non primitive data types)
// array,object, function

const heros=['shaktiman','pokemon','doga'];
console.log(typeof heros);

let myObj={
    name:'jay prakash',
    age:22,
    Email:'pateljayprakash@gmail.com'
};
console.log(typeof myObj);

const myFunction=function(){
    console.log('hello world');
}
console.log(typeof myFunction);