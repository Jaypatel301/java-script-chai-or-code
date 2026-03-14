const marval_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];


//marval_heros.push(dc_heros);
//console.log(marval_heros);
//console.log(marval_heros[3][2]);
/*
  jab ham kisi array me push ki help se koi array push karte hai to hame array of array milta
  hai matlab last index me ek poora array hi push ho jata : lekin jis array me ham push karte hai
  usi me changes hote hai
*/

//const allHeros=marval_heros.concat(dc_heros);
//console.log(allHeros);
/*
   jab ham concate karte hai to hame ek naya array milta hai jisme dono arrays ki values 
   concatenate ho jati hai : lekin iske liye hame ek naya array banana hota hai kyoki 
   concatenate existing array me nahi hota : iske liye ek naya array return hota hai
*/

//const all_new_heros=[...marval_heros,...dc_heros];
//console.log(all_new_heros);
/*
   jab ham spred operator [...variable1,...variable3,...variable3]  ka use karke abhi variables
   ki values ko ek sath karte hai: aur spred oprator ki madad se ham ek sath bahut se variable
   ki values ko add kar sakte hai
*/

//const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
//const real_another_array=another_array.flat(Infinity);
//console.log(real_another_array);
/*
   jab hamare pass array ke andar arrays hote hai and hame ek simple array chahiye hota hai
   tab ham flat ka use karte hai jisse hame ek simple array milta hai jisme ve sabhi values
   hoti hai jo pahle wale array me hoti hai:
   aur isme hame kiitne depth tak flat karna hai ye bhi pass kar sakte hai and yadi hame poora 
   flat karne hai and hame iski depth pata n ho to ham isme infinity pass kar dete hai
*/

//console.log(Array.isArray("jay prakash patel")); // isse ham kisi variable ka pata laga sakte hai ki wo array hai ya nahi
//console.log(Array.from("jay prakash patel")); // isse ham kisi variable ki values ko array me convert kar sakte hai
//console.log(Array.from({name:"jay"})); // lekin yadi ye array me convert nahi kar paya to ye empty array return karega


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
/*
   jaise hamare pass bahut sare variables hai and hame unhe array me convert karna ho to 
   ham array.of ka use karte hai
*/