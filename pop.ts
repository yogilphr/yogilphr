function Addition(no1 : number, no2 : number) : number
{
    return no1+no2; 
}

function Substraction(no1 : number, no2 : number) : number
{
    return no1-no2; 
}

var ret : number = 0;

ret = Addition(10,11);
console.log("Addition is : ",ret);

ret = Substraction(10,11);
console.log("Substraction is : ",ret);
