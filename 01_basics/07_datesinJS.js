//let myDate=new Date(); // 2026-03-12T11:06:18.479Z  isse hame current date mil jati hai
//console.log(myDate); 
//console.log(typeof(myDate));  // object

//console.log(myDate.toString());  // Thu mar 12 2026 11:06:18 GMT+0000 (coordinated universal time)
//console.log(myDate.toDateString()); // thu mar 12 2026
//console.log(myDate.toISOString());  // 2026-03-12T11:06:18.479Z
//console.log(myDate.toLocaleDateString()); // 3/12/26
//console.log(myDate.toLocaleString()); // 3/12/26, 11:06:18 AM  isse hame date and time dono milta hai
//console.log(myDate.toLocaleTimeString()); // 11:06:18 AM  isse hame time milta hai

//let myCreatedDate=new Date(2026,0,11); // isse ham koi bhi date generate kar sakte hai jisme year,month(jo ki 0 se 11 tak),tarikh likhte hai
//console.log(myCreatedDate); // 2026-01-11T00:00:00.000Z
//console.log(myCreatedDate.toDateString()); // sun jan 11 2026


//let createDate=new Date(2026,2,5,7,30,9);  // another way to declare date and time : year,month,day,hour,minute,second
//console.log(createDate.toLocaleString());

//let date=new Date("2026-01-05"); // another way to declare date :year-month(01 se 12)-day
//console.log(date);
//console.log(date.toDateString());

//let date=new Date("11-06-2026");  // another way to declare date: mm-dd-yy
//console.log(date.toDateString());
//console.log(date.getTime()); // ye 1 jan 1970 se lekar date tak kitne mili second huye hai batata hai

//let myTimeStamp=Date.now(); // ye 1-jan-1970 se lekar current time(date) tak kitne milisecond huye hai ye batata hai
//console.log(myTimeStamp);
//console.log(Math.floor(myTimeStamp/1000));  // aisa karke ham milisecond se second nikal sakte hai

let currentdate=new Date(); // isse hame current date mil jati hai
console.log(currentdate.getDate()); // isse ham current dd (day) nikal sakte hai
console.log(currentdate.getMonth()); // isse hame month number mil jata hai jo ki 0=>jan  ke hisab se aata hai
console.log(currentdate.getDay()); // isse hame din mil jata hai jo ki 1=>mon, 2=>tuesday ke according milta hai
