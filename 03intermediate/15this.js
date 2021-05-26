// JUST REMEMBER THIS:
// For all regular function calls, this points to window object

// Run in browser to get more clarity

console.log(this);
var user = {
    name : "Khush",
    courseCount : 4,
    getCourseCount : function(){
        console.log("Line 7", this);
        function Hello(){
            console.log("Line 10 ", this); // this is a regular function call so this will contain window object
        }
        Hello()// regular function call
    }


}
user.getCourseCount()// not a regular function call since this is called from the object user

function sayHello(){
    console.log(this);
}
sayHello(); // Regular function call