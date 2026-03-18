// for loop

for(let i=0;i<10;i++)
{
    let element=i;
    //console.log(i);
}

for(let i=0;i<=10;i++)
{
    //console.log(`outer loop value ${i}`);
    for(let j=0;j<=10;j++)
    {
        //console.log(`inner loop value ${j} and outer loop value ${i}`);
        //console.log(i,'*',j,'=',i*j);
    }
}

let myArray=["flash","batman","superman"];
for(let index=0;index<myArray.length;index++)
{
    let element=myArray[index];
   // console.log(element);
}

//--------------------break and continue------------------------------------------------
for(let i=1;i<=20;i++)
{
    if(i==5)
    {
        //console.log("5 is detected");
        break;
    }
   // console.log(i);
}
for(let i=1;i<=20;i++)
{
    if(i==5)
    {
        console.log("5 is detected");
        continue;
    }
    console.log(i);
}