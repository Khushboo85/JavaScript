sayHello(); // This runs here , since there is a global context which wraps the function (We ll understand more about it in later videos)

function sayHello(){
    console.log("Hello");
}

 if(2 === 2)
 {
     console.log("This is true");
 }
 if(2 === "2")
 {
     console.log("This is true");
 }
 var myName = "Khushboo"
//This would run perfectly fine in browser since there is a global context which is named window, here since we are running in node, window is not defined
 if(myName === window.myName){
    console.log("This is true statement");
 }
