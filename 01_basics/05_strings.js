const name='jay prakash patel';
const repoCount=1;
//console.log(name+repoCount+"values"); //string concatenation

//console.log(`Hello my name is ${name} and my repo count is ${repoCount} . this is my introduction`);

const Nickname=new String('vijay kumar patel'); // another way to declare a string
console.log(Nickname);
//console.log(Nickname[0]); // string me key value pairs se ham uske andar ke character access kar sakte hai

//---------------------------------methods in string-------------------------------------

console.log(Nickname.length); // isse hame string ki length pata chalti hai
console.log(Nickname.toUpperCase());  // isse string uppercase me ho jati hai
console.log(Nickname.charAt(6)); // isse ham kisi position me konsa character hai ye pata kar sakte hai
console.log(Nickname.indexOf('pa')); // isse ham kisi sub string ki position ka pata laga sakte hai
console.log(Nickname.substring(0,7)); // isse ham kisi substring ko nikal sakte hai jisme last index value excluded rahti hai
console.log(Nickname.slice(-10,-4)); // isse bhi ham kisi substring ko nikal sakte hai or isme ham negative value bhi pass kar sakte hai jisme -1 last se indexing shuru hoti hai
console.log(Nickname.trim()); // ye starting and ends ke sabhi spaces ko khatam kar deta hai
console.log(Nickname.replace("patel","singh")); // replace ka use karke ham kisi substring ko kisi dusre substring se change kar sakte hai
console.log(Nickname.includes('pat')); // isse ham pata laga sakte hai ki kisi string ke andar koi substring hai ya nahi; ye true or false me answer deta hai
console.log(Nickname.split(' ')); // ye strings ko seperator jo ki ham pass karte hai ke according substrings ke array me convert kar deta hai


