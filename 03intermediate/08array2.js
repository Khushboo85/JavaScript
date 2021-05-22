// function isEven(element){
//     // if(element %2 === 0)
//     //     return true;
//     // return false;
//     return element%2 === 0;
// }

// var isEven = function (element){
//     return element % 2 === 0;
// }
var isEven = (element) => {
    return element % 2 === 0;
}
//What happens if we rempve the return keyword ?
// var isEven = (element) => {
//     element % 2 === 0;
// }
console.log(isEven(7));

var result = [2,4,6,8].every(isEven);
console.log(result);
// every() will return true if for every element it return strue.
var result = [2,3,6,8].every(isEven);
console.log(result);

// var result = [2,4, 6,8].every ( () => {})
//  if u use {} in the arrow function then it must return something 
// if you dont want to return anything then u can only write one statement in it. u can use () to avoid any confusion
//  How to write call back

var result = [2,4, 6,8].every ( (e) => { return e%2 ===0})
console.log(result);

var result = [2, 4, 6, 8].every ( (e) => ( e%2 ===0 ) ) ;
console.log(result);