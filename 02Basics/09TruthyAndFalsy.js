// Falsy values:
// undefined
// null
// 0
// ''
// NaN

var user; //undefined

var email = null;
if(email)
{
    console.log("Condition is true");
}
console.log(2+2);
console.log(2+"2");
console.log("2"+2);

var count = "2";
if(count == 2)
{
    console.log("Two");
}
if(count === 2) // === is used for strict checking, here it is checking the datatype also
{
    console.log("2");
}