// TODO : part1 for this keyword
// since we are running this on node which uses V8 engine it will show {}
// on browser it ll have a different output
console.log(this); // global context 

var game ="volleyball"

function sayName(){
    var name = "Khush";
    console.log(this);
}
sayName();
// run the same in browser , both console.log statment will show same output