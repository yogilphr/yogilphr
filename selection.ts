function sequence()
{
    console.log("Demonstartion of sequence");
    var arr:number[]=[10,20,50,40];
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);

}

function iteration1():number
{
    console.log("Demonstartion of Iteration");
    var arr:number[]=[10,20,50,40];
    var icnt:number=0;
    var isum:number=0;
    isum=isum+arr[0];
    isum=isum+arr[1];
    isum=isum+arr[2];
    isum=isum+arr[3];

    return isum;
}
var iRet:number=0;
//iRet=iteration1();
//console.log("Addition is ",iRet);
//sequence();



function iteration2():number
{
    console.log("Demonstartion of Iteration");
    var arr:number[]=[10,20,50,40];
    var icnt:number=0;
    var isum:number=0;
    for(icnt=0;icnt<arr.length;icnt++)
    {
        isum=isum+arr[icnt];
    }
    return isum;
}
var iRet:number=0;
iRet=iteration2();
console.log("Addition is ",iRet);
//sequence();



function iteration3():number
{
    console.log("Demonstartion of Iteration");
    var arr:number[]=[10,20,50,40];
    var iValue:number=0;
    var isum:number=0;
    for(iValue of arr)
    {
        isum=isum+iValue;
    }
    return isum;
}
var iRet:number=0;
iRet=iteration3();
console.log("Addition is ",iRet);

function iteration4():number
{
    console.log("Iteration using For Index");
    var arr:number[]=[10,20,50,40];
    //var iIndex:number=0;
    var isum:number=0;
    for(var iIndex in arr)
    {
        isum=isum+arr[iIndex];
    }
    return isum;
}
var iRet:number=0;
iRet=iteration4();
console.log("Addition is ",iRet);

function iteration5():number
{
    console.log("Demonstartion of Iteration");
    var arr:number[]=[10,20,50,40];
    var icnt:number=0;
    var isum:number=0;
    while(icnt < arr.length)
        {
            isum=isum+arr[icnt];
            icnt++;

        }

        return isum;
    for(icnt=0;icnt<arr.length;icnt++)
    {
        isum=isum+arr[icnt];
    }


    return isum;
}
var iRet:number=0;
iRet=iteration2();
console.log("Addition is ",iRet);
//sequence();


function iteration6():number
{
    console.log("Demonstartion of Iteration");
    var arr:number[]=[10,20,50,40];
    var icnt:number=0;
    var isum:number=0;
    
    do{
        isum=isum+arr[icnt];
        icnt++;
    }
    while(icnt< arr.length)
        return isum;
}
var iRet:number=0;
iRet=iteration6();
console.log("Do While output is ",iRet);
//sequence();


function Compare(iNo1:number, iNo2:number)
{
    if(iNo1 > iNo2)
    {
        console.log("First is greater than Second");
    }
    else if(iNo1 < iNo2)
    {
        console.log("First is Less than Second");
    }
    else if(iNo1==iNo2)
    {
        console.log("Both the numbers are equal");
    }

}

Compare(100,100);

function MyDate(iNo:number)
{
    if(iNo==1){
        console.log("Day is Monday");
    }
    else if(iNo==2){
        console.log("Day is Tuesday");
    }
    else if(iNo==3){
        console.log("Day is Wednesday");
    }
    else if(iNo==4){
        console.log("Day is Thuresday");
    }
    else if(iNo==5){
        console.log("Day is Friday");
    }
    else if(iNo==6){
        console.log("Day is Saturday");
    }
    else if(iNo==7){
        console.log("Day is Sunday");
    }
}

MyDate(6);

function MyDate2(iNo:number)
{
    switch(iNo)
    {
        case 1:
                console.log("Monday");
                break;
        case 2:
                console.log("Tuesday");
                break;
        case 3:
                console.log("Wednesday");
                break;
        case 4:
                console.log("Thuresday");
                break;
        case 5:
                console.log("Friday");
                break;
        case 6:
                console.log("Saturday");
                break;
        case 7:
                console.log("Sunday");
                break;
        default:
                console.log("Wrong Input");
                break;
    }
}

MyDate2(10);
