// Class Declaration
class Arithematic
{
    // Characteristics
    No1 : number;
    No2 : number;
    ans : number;
    // Behaviour
    constructor(x : number, y : number)
    {
        this.No1 = x;
        this.No2 = y;
        this.ans = 0;
    }
    Addition(): number 
    {
        this.ans = this.No1 + this.No2;
        return this.ans;
    }
    Substraction(): number 
    {
        this.ans = this.No1 - this.No2;
        return this.ans;
    }
}
var ret : number = 0;
var obj1 = new Arithematic(10,11);
var obj2 = new Arithematic(20,11);
ret = obj1.Addition();
console.log("Addition of obj1 is : ",ret);
ret = obj2.Addition();
console.log("Addition of obj2 is : ",ret)
