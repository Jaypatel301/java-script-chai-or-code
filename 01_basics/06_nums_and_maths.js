//const score=100;
//console.log(score);

//const balance=new Number(400); // another way to declare a number
//console.log(balance);

//-------------------------------methods in numbers-------------------------------------
//console.log(balance.toString()); // ye number ko string me convert kar deta hai jiska use ham different tarike se kar sakte hai
//console.log(balance.toString().length);  // is tarah ham string me convert karke iska length nikal sakte hai
//console.log(balance.toFixed(2)); // iska use karke ham apne according decimal ke bad ka size fix kar sakte hai; ham jitna value pass karenge utne ki ank tak fix ho jayega

//const nweval=100.52354;
//console.log(nweval.toPrecision(2));
//console.log(nweval.toPrecision(4));
//console.log(nweval.toPrecision(3));
//console.log(nweval.toPrecision(5));
//console.log(nweval.toPrecision(1));
/*ham toPrecision ka use karke poore number ke jitne digit tak precision karna hai utni value pass karte hai
  ye poore number me precision ka kam karta hai
  yadi hamne decimal ke pahle ke digits se bhi kam value pass ki to ye e ki power me number ko precise kar dete hai
*/

//const val=100000000034;
//console.log(val.toLocaleString());
//console.log(val.toLocaleString('en-IN'));
/*
jab value bahut badi ho jati hai jisko padhne me problem hoti hai to ham toLocalStirng me
convert kar lete hai jisse ye string me (,) comma se seperate karke value ko represent kar deat hai
or yedi ham koi value pass nahi karte to ye american style me convert karta hai
lekin yadi ham 'en-IN' value pass kar dete hai to ye indian style me convert kar deta hai
 */

//-------------------------------------------maths-------------------------------------------
//console.log(Math.abs(-4329)); // ye negative values ko positive bana deta hai
//console.log(Math.round(5.6)); // ye values ko round off kar deta h matlab decimal ke bad ki values ko hata deta hai yadi decimal me 4 se uper h to number me 1 increment kar deta hai nahi to aise hi de deta hai
//console.log(Math.ceil(2.3)); // ye decimal ke bad vali value hatakar 1 increment karke value deta hai
//console.log(Math.floor(4.9)); // ye decimal ke bad vali values ko hata deta hai

const value=50;
//console.log(Math.sqrt(23)); // ye kisi number ka square root deta hai
//console.log(Math.pow(2,3)); // ye hame power calculate karne me madat karta hai
//console.log(Math.min(1,4,3,5,6,4,7)); // ye hame bahut sari values me se minimum value deta hai
//console.log(Math.max(2,8,6,5,9)); // ye hame bahut sari values me se max value deta hai

//console.log(Math.random()); // ye hame 0 se 1 ke bich me koi random number generate karke deta hai
//console.log((Math.random()*10)+1); // ye hame 1 se 10 ke bich me koi random number generate karke dega
const min=10;
const max=20;
console.log((Math.random()*(max-min+1))+min); // ye hame min and max ke bich random value generate karke dega
