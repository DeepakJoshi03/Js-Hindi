const accountId = 13345532
let accountEmail= "herodeepakjoshi0312@gmail.com"
//No scope problem in let
var accPassword = "12345"
accCity= "jaipur"
let accountstate; //value will be undefined
// accountId= 2 //not allowed
console.log(accountId);
/*     Prefer not to use var
Because of issue i block scope and functional scope
*/
accountEmail="ac@.com"
accPassword="7463728"
accCity="Dehradun"
console.table([accountEmail,accPassword,accCity,accountstate]); //another method to print as many as variable and constant at once

