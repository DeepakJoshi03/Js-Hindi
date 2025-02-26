/*let score=undefined

console.log(typeof(score));
let valueInNumber=Number(score)    //type conversion ie score changes from string to number
console.log(typeof(valueInNumber));

console.log(valueInNumber); //will give NaN as output which means not a number for "33abc" and undefined
*/
//Notes
//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0
/*let isLoggedIn=0    
let BooleanIsloggedIn=Boolean(isLoggedIn)
console.log(BooleanIsloggedIn) */
// give false for "" and 0
//gives true for "Deepak" and 1

// let someNumber=33

// let stringNumber=String(someNumber)
// console.log(stringNumber);

//***************************** Operations*******************************


// let value=3
// let negValue=-value
// console.log(negValue);
 
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //for 2^3
// console.log(2/2);
// console.log(2%3);

let str1="Deepak"
let str2=" Joshi"
let str3 = str1 + str2
console.log(str3);


console.log("1"+2);//output will be 12
console.log(1+"2");//output will be 12
console.log("1"+2+2);//output will be 122

console.log(1+2+"2");//output will be 32 !Why??
//**It is based on which datatype is coming first**

let num1,num2,num3,num4;
num1=num2=num3= 2+2

let gameCounter=100;
console.log(gameCounter);

gameCounter++;
console.log(gameCounter);

let gameCounter2=100;
console.log(gameCounter2);

++gameCounter2;
console.log(gameCounter2);
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


