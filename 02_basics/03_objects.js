// singleton
//Object.create

// object literals
const mySym=Symbol("key1");
const JsUser={
    name:"jay prakash",  // jab ham kisi key ko name aise declare karte hai to ye khud se "name" string me convert ho jata hai; isko ham objectName.key se access kar sakte hai and sath hi objectName["key"] se bhi access kar sakte hai
    "full name":"jay prakash pate",  // ham key ko pahle se hi string ke form me pahle se hi declare kar sakte hai: lekin isko ham objectName.key se access nahi kar sakte iske liye hame objectName["key"] se access karna padta hai
    [mySym]:"mykey1", // jab ham kisi symbol data type ko key ke roop me use karte hai to use [] ke andar likhte hai
    age:23,
    email:"jayprakash@gmail.com",
    location:"Bhopal",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
};

//console.log(JsUser.email);
//console.log(JsUser["email"]); // another way to access object elements
//console.log(JsUser.full name); // ye error dega kyoki hamne key ko "full name" declare kiya hai to ham isko objectName.key se access nahi kar sakte ; ham kewal isko objectName["key"] se hi access karte hai
//console.log(JsUser["full name"]);

//console.log(JsUser[mySym]); // jab symbol data type key ke roop me use hota hai to usse access karne ke liye objectName[key] ka use karna padta hai

//JsUser.email="jay@soit.com"; // aise ham object ki kisi value ko change/overwrite kar sakte hai
//console.log(JsUser.email);

//Object.freeze(JsUser); // object ko freeze karne par us object ki kisi value ko jab change/overwrite karenge to koi change nahi hoga matlab:overwrite bhi nahi hoga nahi koi error bhi nahi aayegi
//JsUser.email="ved@gmail.com"; // overwrite nahi hoga and error bhi nahi aayegi
//console.log(JsUser.email);

/* JsUser.greetings=function(){     // yaha hamne JsUser(object) ke andar ek greetings name ka function initialize kiya hai
    console.log("hello JS user");
}
*/
//console.log(JsUser.greetings); // ye ek function return karta hai
//console.log(JsUser.greetings()); // ye greetings function ko call karta hai
/*
JsUser.greetingsTwo=function(){
    console.log(`hello Js User,${this.name}`); // is tarike se ham backtics ` ` ka use karte hai taki ham ${} ka use karke kisi variable ka use kar sake:
} 
*/                                             // yaha hamne this ka use isliye kiya hai kyoki hamne object ke andar object ke kisi variable ko use kiya hai
//console.log(JsUser.greetingsTwo());

JsUser.homeTown="devpur";  // yadi hamne object ko freeze nahi kiye hai to ham object ke andar ko new key:value pair initialize kar sakte hai lekin yadi freeze ka use kiya hai to ham aisa nahi kar sakte
console.log(JsUser.homeTown);

