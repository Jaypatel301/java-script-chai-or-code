//const tinderUser=new Object();  // isse tinderUser name ka empty object ban gaya : jab ham constructor ki help se object create karte hai to use singleton kahte hai
//console.log(tinderUser);

const tinderUser={}; // isse bhi hame tinderUser name ka empty object milega
//console.log(tinderUser);
tinderUser.id="234abc";
tinderUser.name="jay prakash";
tinderUser.isLoggedIn=false;
//console.log(tinderUser);


const regularUser={
    email:"jayprakash@gmail.com",
    fullname:{                  // is tarah ham objects ki nesting kar sakte hai
        userfullName:{          // matlab ek object ke andar bhi objects banaya ja sakta hai
            firstName:"jay",
            lastName:"patel"
        }
    }
}
//console.log(regularUser);
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullName);
//console.log(regularUser.fullname.userfullName.firstName);

const obj1={ 1:"a",2:"b"};
const obj2={ 3:"c",4:"d"};
const obj5={5:"e",6:"f"};

//const obj3={obj1,obj2};  // aisa karne par hame object obj3 ke andar object obj1 and obj2 milenge
//console.log(obj3);

//const obj3=Object.assign(obj1,obj2,obj5); // aisa karne par object obj3 me obj1 and obj2 dono ke key:value pairs object obj3 me aa jate hai:matlab yaha object ke andar dono objects ki values aati hai n ki object aate hai
// yaha iska matlab hai ki obj1 me obj2 ki values aa rahi hai and obj1 obj3 me aa raha hai: isme ham 2 se jyada objects bhi pass kar sakte hai
//console.log(obj3);

//const obj4=Object.assign({},obj1,obj2,obj5); // is tarike se bhi ham 2 ya jyada objects ki values ko ek object me kar sakte hai
// isme ham ek {} empty array bhi pass karte hai jiska matlab hota hai ki sare objects ki values array me aayegi and uske bad array ki sari values
// object me chali jayengi
//console.log(obj4);

//const obj6={...obj1,...obj2,...obj5};  // isme ham spred operator ka use bhi kar sakte hai: jisme sare objects ki values ek object me aa jayengi
// jyadatar ham spred operator ka hi use karenge
//console.log(obj6);

/*
const user=[     // is tarike se ham ek array ke andar bhi object ho sakte hai
    {
        name:"jay",
        email:"jay@gmail.com"
    },
    {
        name:"vijay",
        email:"vijay@gmail.com"
    }
];
console.log(user[0].name); // array ke andar objects ki values ko access kar sakte hai
console.log(user[1].email);
*/
/*
const instaUser={
    name:"jay",
    age:23,
    email:"jay@gmail.com",
    isLogged:false,
    male:true
};
console.log(Object.keys(instaUser));  // isse hame ek keys of array milega jisme instaUser ki sari keys hongi
console.log(Object.values(instaUser)); // isse hame ek values of array milega jisme instaUser ki sari values hongi
console.log(Object.entries(instaUser)); // isse hame array of arrays milta hai jisme ek array ke andar 2 size ki bahut se array milte hai jisme 0 index me key and 1 index me uski value hoti hai
console.log(instaUser.hasOwnProperty("male")); // isse ham kisi object me check karte hai ki koi key array me hai ya nahi : ye true or false me value deta hai
console.log(Object.keys(instaUser).length);  // is tarah kisi object ki length nikal sakte hai
*/

//---------------------------------------------object destructure--------------------------------------------------------------------
/*
const course={
    courseName:"JS in hindi",
    price:"999",
    courseInstructor:"hitesh"
};
//console.log(course.courseInstructor); // is tarike se hame course objece ke andar ke key:values ko access karte hai
const {courseInstructor}=course; // is tarike se ham object ki kisi value ka destructure kar sakte hai: matlab isme ab hame bar bar 
// course.courseInstructor karne ki jarurat nahi hai ham isko direct courseInstructor likh ke use kar sakte hai
console.log(courseInstructor); // ye course.courseInstructor ka kam karega

const {courseInstructor: instructor}=course; // is tarike se kam key ka name bhi change kar sakte hai: ab course.courseInstructor ka kam instructor karega
console.log(instructor); // course.courseInstructor ki value print hogi
*/

//-----------------------------------------------JSON API------------------------------------------------------------------
/*
{
    "name":"jay",
    "age":23,
    "courseName":"JS in hindi",
    "price":"free"
}


[
    {},
    {},
    {}
]
*/
/*
  ek API menu ki tarah hoti hai jisme hame matlab nahi hota ki kaise ho raha hai , hame sirf matlab hota hai ki kya ho raha hai
  JSON API hame object ke room ke data deta hai jiski detail ham aage padenge
  JSON array ke format me bhi data return karta hai jisme bahut sare objects hote hai
*/