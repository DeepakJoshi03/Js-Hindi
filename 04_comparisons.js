//some common operators
// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2<1);

//Problems come when you compare different datatypes
//Example
// console.log("2" > 1);//sometimes we do not get the predictable result
// console.log("02" > 1);
//**** Null Case******
// console.log(null>0);//false
// console.log(null==0);//false
// console.log(null>=0);//true
//****the reason is that an equality check ==  and comparisons >< >= <= work differently
//Comparisons converts null to a number ,treating it as 0.
//Thats why null>=0 is true and null>0 is false 

//Cases of undefined
// console.log(undefined>0);//false
// console.log(undefined==0);//false
// console.log(undefined>=0);//False

// ===(Strict Check) It not only checks the values but also check its data type
//Example
console.log("2"===4);//False
console.log("2"==2);//True

