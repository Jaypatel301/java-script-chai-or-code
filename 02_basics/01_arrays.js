//const myArr=[0,1,2,3,4,5,6,7,8]; // isme ham alag alag tarah ki values bhi rakh sakte hai: matlab number,string ,boolean etc, and yaha ham array ko resize kar sakte hai
//console.log(myArr);
//console.log(myArr[2]); // arrays ko ham idexing se access kar sakte hai jo ki 0 se start hoti hai

//const secondArr=myArr;
//secondArr[0]=5;
//console.log(myArr);
//console.log(secondArr);
/*
  NOTE:-jab ham ek array ko dusre array me copy karte hai to wo shallow copy banata hai
        matlab dono same reference rakhte hai matlab jab ham kisi ek array me change karenge to wo change dono arrays me hoga
*/

//const myHeros=["saktiman","nagraj","doga"];
//console.log(myHeros);
//const thirdArr= new Array(0,1,2,3,4,5,6); // another way to declare an array
//console.log(thirdArr);

//----------------------------------------array methods-------------------------------------

const myArray=[0,1,2,3,4,5];
//console.log(myArray);
//myArray.push(6); // push ki help se ham last me value add kar sakte hai
//console.log(myArray);
//myArray.push(7,8); // push ki help se ham ek sath ek se jyada values bhi array me add kar sakte hai
//console.log(myArray);
//myArray.pop(); // pop ki help se ham array ki last value ko hata sakte hai
//console.log(myArray);
//myArray.unshift(9); // unshift ki help se ham kisi value ko array ke start me add kar sakte hai lekin ye operation costly hota hai
//console.log(myArray);
//myArray.unshift(11,12); // unshift ki help se ham ek se jyada values bhi array ke starting me add kar sakte hai
//console.log(myArray);
//myArray.shift(); // shift ki help se ham array ke starting se value remove kar sakte hai and ye operation bhi costly hota hai
//console.log(myArray);

//console.log(myArray.includes(9)); // isme ham array me includes ki help se ye pata kar sakte hai ki koi value array me hai ya nahi: ye hame true or false me answer deta hai
//console.log(myArray.includes(5));
//console.log(myArray.indexOf(10)); // isme ham array me indexof hi help se ye pata kar sakte hai ki kisi value ka index kya hai and yadi wo value array me nahi hai to hame -1 milega
//console.log(myArray.indexOf(4));

//const newMyArray=myArray.join(); // join ki help se ham kisi array ko string me convert kar sakte hai jisme array ke elements coma(,) se seperate rahte hai
//console.log(newMyArray);
//console.log(typeof(newMyArray));
//console.log(typeof(newMyArray[1]));

//const newSliceArray=myArray.slice(1,4); // slice use karne par hame ek subarray milta hai jisme jo indexes slice(startindex,endindex) pass karte hai us range ka array milta hai aur jisme end index exclude rahta hai and slice use karne par original array me koi effect nahi padta
//console.log(newSliceArray);
//console.log(myArray);

const newSpliceArray=myArray.splice(1,4); // splice use karne par hame ek subarray milta hai jisme jo indexes splice(startindex,endindex) pass karte hai us range ka array milta hai jisme endindex include rahta hai and splice use karne par original array me wahi values bachti hai jo splice me nahi aati matlab splice ka original array me effect padta hai
console.log(newSpliceArray);
console.log(myArray);