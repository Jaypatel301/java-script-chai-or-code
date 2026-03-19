const coding=["js","python","java","c","cpp"];

coding.forEach( function (key){    // isme key me ek ek karke array ki value aati rahegi jiska use ham function ke andar kar sakte hai
   // console.log(key);
});

coding.forEach( (key)=>{  // is arrow function me bhi key me ek ek karke array ki value aati rahegi jiska use ham function me kar sakte hai
   // console.log(key);
});

function printme(item)
{
    //console.log(item);
}
coding.forEach(printme); // isse bhi ek ek karke coding array ki sari values print ho jayengi


coding.forEach( (item,index,arr)=>{  // isme item ke array ki ek ek karke value , index in us value ka index , and arr ki array ki list aayegi
    //console.log(item,index,arr);  
});


const mycoding=[      // ye ek array hai jisme bahut sare object hai : matlab ye ek objects ka array hai
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
];
mycoding.forEach((item)=>{            // isme item me ek ek karke objects aayenge jisme ham . lagake objects ke data ko access kar sakte hai
    console.log(item.languageName);
    console.log(item.languageFileName);
});


