function sayHello(name){
    console.log("Hello there, Khushboo");
    console.log("Hello there " + name);
    console.log(`Hello there , ${name}. How are you ?`);
}

sayHello(); //calling a function
// sayHello; // Referencing a function
 
sayHello("harry");

function namastey (){
    return "Hello"
}
var greetings = namastey();
console.log(greetings);
console.log(namastey());