myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
};

for(const key in myObject)   // isme key me myobject ki keys aayegi jinki help se ham myObject[key] se ham values access kar sakte hai
{
    //console.log(key);
    //console.log(myObject[key]);
}

const programming=["js","c++","c","java","c#","python","java"];

for(const key in programming)  // yaha key me indexes aayenge jinki help se ham values ko access kar sakte hai
{
   // console.log(key);
   // console.log(programming[key]);
}

const map=new Map(); 
map.set("IN","India");
map.set("USA","United State of America");
map.set("Fr","France");

for(const key in map)  // yaha for in loop se map me iteration nahi hota hai
{
    console.log(key);
}