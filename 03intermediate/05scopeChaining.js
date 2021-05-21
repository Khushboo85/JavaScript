var name ="Khushboo"

console.log("Line number 3 ", name);

function sayName(){
    var name ="KHUSH";
    console.log("Line number 6 ", name);
    sayNameTwo();
    function sayNameTwo(){
    console.log("Line number 10 ", name);
    }
}
sayName();