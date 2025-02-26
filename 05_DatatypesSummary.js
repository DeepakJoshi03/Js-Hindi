//Datatypes can be divided into two categories based on how data is stored in memory and how can we access that data
//1.Primitive
//2.Non Primitive or Reference type


//1.Primitive-> These are called by value
// 7 Types : String,Number,boolean,null,undefined,Symbol(to make any value unique),Bigint
//Examples
// const score=100
// const scorevalue=100.3

// const isLoggedIn=false
// const outsidetemp=null
// let userEmail;//Undefined
const id= Symbol('123')
const id2=Symbol('123')
console.log(id===id2);//False




//2.Non Primitive or Reference type
// Types:Array,Objects,functions

const heros=["Deepak","Shaktiman","Padman"] //array
//Example of Object
let myobj={
    name:"Dj",
    age:22,
}
//Example of Function
const myFunction=function(){
    console.log("Hello World");
    
}

console.log(typeof myFunction);//output will be object function 
console.log(typeof null);//output will be object
console.log(typeof id);//output will be symbol


