// for of loop
//[{},{},{},{},{}]
//["","",""]
const arr=[1,2,3,4,5,6,7,8,9];
for(const num of arr)
{
    //console.log(num);
}

const greeting="hellow world!";
for(const greet of greeting)
{
  //  console.log(greet);
}

//map
const map=new Map(); // map bhi ek tarah se object ki tarah hota hai jisme key value pairs hote hai and isme value unique hoti hai and jab ham map me key value insert karte ho ye usks order yad rakhta hai
map.set("IN","India");
map.set("USA","United State of America");
map.set("Fr","France");
//console.log(map); // yaha jis order me hamne key value set kiya hai map me unka yahi order hoga
map.set("IN","India"); // pahle se hi ye pair map me moujud hai to isse map me koi fark nahi padega kyoki map me unique key value pair hote hai to ye map me dobara se set nahi hoga or n hi error aayegi

for(const key of map)
{
   // console.log(key); // ye poore key-value pair ko print karega matlab yaha key me key-value dono aa rahe hai isliye ye key-value dono ko print karega
}

for(const [key,value] of map)   // ab yaha par key me key ki value aayegi and value me us key ki value aayegi matlab yaha par hamne kay-value pair ko [key,value] me divide kar diya
{
   // console.log(key,":-",value);
}

const myobj={
    game1:"NFS",
    game2:"batman"
};

/*
for(const [key,val] of myobj) // for of loop object me is tarike se iterate nahi karta hai
{
    console.log(key,val);
}
*/
