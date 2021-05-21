/*
There are two types of major context available to us
1. Global context : Main idea is to collect information
2. Execution Context : To run some code , it uses executiom context.
*/

var num = 2; // execution context of 1 line


function sayMe(){
    console.log("Say me");
}

sayMe(); // another execution context which  will run til the function is over

/*
There are majorly 3 aspects in execution context :
1. Variable object 
2. Scope chain
3. this : very special in javascript

There are 2 rules which is followed here:
1.Function declarations are scanned and made available
2.Variable declarations are scanned and made undefined
*/

tipper(5);

function tipper(a)
{
    //var bill = a;
    var bill = parseInt(a);
    console.log(bill + 5);
}

tipper("5");
tipper("a");

// bigTipper(80); // this will not work here, since variable declarations are scanned and made undefined
console.log(bigTipper);

var bigTipper =function (a)
{
    //var bill = a;
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper(700);

console.log(name);
var name ="khush";

function sayName(){
    var name = "KHUSH";
    console.log(name);
}
sayName();
console.log(name);