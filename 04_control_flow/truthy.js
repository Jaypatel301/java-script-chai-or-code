/*
const userEmail="j@prakash.com";
if(userEmail){
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}
*/

/*
   falsy values: matlab jinko false assume kiya jata hai:-
   false, 0, -0, BigInt 0n, "", null, undefined, NaN
   inke alawa jo bhi values hoti hai wo sab truthy valuse me aati hai matlab unko true assume kiya jata hai
*/
/*
   truthy values:-
   "0", 'false', " ", [], {}, function(){}, 
*/

/*
const emptyArry=[];
if(emptyArry.length===0){    // is tarike se ham koi array empty hai ya nahi check karte hai
    console.log("Array is empty");
}
*/

/*
const emptyObject={};
if(Object.keys(emptyObject).length===0){    // is tarike se ham check kar sakte hai ki koi object empty hai ya nahi
    console.log("object is empty");
}
*/

// false==0 , false=='' , 0 == ''     in sabka result true aata hai

//----------- Nullish coalescing operator (??) : null undefined------------------------------
let val1;
//val1=5 ?? 10;
//console.log(val1); // 5
//val1=null ?? 10;
//console.log(val1);  // 10
//val1=undefined ?? 15;
//console.log(val1);
//val1=null ?? 10 ?? 20;
//console.log(val1); // 10

//------------------------- terniary operator --------------------------------------------
// condition ? true: false
const iceTeaPrice=100;
iceTeaPrice>80 ? console.log("more than 80"): console.log("more than 80");