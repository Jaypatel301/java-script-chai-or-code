function sayMyName(){
    console.log('j');
    console.log('a');
    console.log('y');
}

//sayMyName(); // function call/execution

/*
function addTwoNumbers(number1,number2){  // yaha par number1 and number2 parameters kahlate hai
    console.log(number1+number2);
}
addTwoNumbers(); // iska output NaN aayega kyoki hamne koi values pass nahi ki function call me
addTwoNumbers(2,3); // iska output 5 aa jayega : yaha par 2 and 3 arguments kahlayenge
*/

function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result;  // return ke bad function me kuchh bhi likhte hai to wo execute nahi hota hai
    // or ham  direct return number1+number2;  kar sakte hai
}
let ans=addTwoNumbers(4,5);
//console.log("ans:",ans);

/*
function loginUserMessage(username){    // yadi ham function call ke time username ki value pass nahi karenge to username me undefined rahega
    if(username===undefined)  // or if(!username) likh sakte hai kyoki undefined false ki tarah kam karta hai and ! lagane par true ho jata hai and if condition true ho jati hai
    {
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}
//console.log(loginUserMessage("jay prakash patel"));
console.log(loginUserMessage());
*/
/*
function loginUserMessage(username='jay'){   // is concept ko default value of parameter kahte hai: yadi ham loginUserMessage ko call karte time username ki value pass nahi karenge to username me by default "jay"  aa jayega
    return `${username} just logge in`;
}
console.log(loginUserMessage());
*/
/*
function calculateCartPrice(...num1){      // jab hame bahut sari values function me pass karni ho and hame pahle se pata nahi ho ki kitni values
    return num1;                           //pass karni hai to ham rest operator (...) ka use karte hai : jisse hum function call karte time jitni bhi values pass karenge un sab values ka array ban jayega jo ki num1 me store hoga
}
console.log(calculateCartPrice(100,200,400,500));
*/

function calculateCartPrice(value1,value2,...num1){  // isme jab ham function ko call karenge or arguments pass karenge to shuru ko 2 arguments value1 and value2 
    return num1;                                     // me aa jayege and uske bad jitne bhi arguments honge un sab ka array ban ke num1 me store ho jayega
}
//console.log(calculateCartPrice(100,200,400,500,700));
/*
const user={
    username:"jay",
    price:200
};
function handleObject(anyObject){       // is tarah ham object ko parameters ko form me lekar  usme kuchh operation kar sakte hai
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user);
handleObject({        // is tarah ham object ko call karte time bhi banakar pass kar sakte hai
    username:"vijay",
    price:399
});
*/

const myNewArray=[10,30,100,500];
function returnSecondValue(getArray){     // is tarike se ham kisi function me array ko lekar usse koi operation perform kar sakte hai
    return getArray[1];
}
//console.log(myNewArray);
console.log(returnSecondValue([38,40,2039,49,100,400]));  // is tarah ham array ko function call karte time bhi banakar pass kar sakte hai

