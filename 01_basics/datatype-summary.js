// primitive data types
// 7 types: string,number,boolean, null,BigInt,symbol,undefined,NaN
//const marks=89;
//console.log(typeof marks);

//const percentage=90.34;
//console.log(typeof percentage);

//const name="jay";
//console.log(typeof name);

//const isLoggedIn=false;
//console.log(typeof isLoggedIn);

//const outsideTem=null;
//console.log(typeof outsideTem);

//let userEmail;  // undefined
//console.log(typeof userEmail);

//const id=Symbol('3456');
//console.log(typeof id);

//const bigNumber=43579234860980357678n;
//console.log(typeof bigNumber);

// reference(non primitive data types)
// array,object, function

//const heros=['shaktiman','pokemon','doga'];
//console.log(typeof heros);

/*let myObj={
    name:'jay prakash',
    age:22,
    Email:'pateljayprakash@gmail.com'
};
console.log(typeof myObj);
*/

/*const myFunction=function(){
    console.log('hello world');
}
console.log(typeof myFunction);
*/


//++++++++++++++++++++++++++++++++++memory concept++++++++++++++++++++++++++++++++++++++++
// primitive datatype(stack),  non primitive(heap)

// matlab yadi ham primitive data type ko kisi dusre variable me rakhte hai to hame uski copy milti hai
/*let emailAdressone='pateljay@gmail.com';
let emailAdresstwo=emailAdressone;
emailAdresstwo='vijaypatel@gmail.com';  // isse sirf emailAdresstwo ki value change hogi
console.log(emailAdressone,emailAdresstwo);
*/

// yadi ham non primitive data type ko kisi dusre variable me rakhte hai to hame uska reference (address) milta hai
/*let obj1={
    name:'jay',
    age:22
};

obj2=obj1;
obj2.age=20; // isse obj1 and obj2 dono ki age ki value change ho jayegi
console.log(obj1,obj2);
*/

