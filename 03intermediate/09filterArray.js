var testArray = [2, 4, 6, 3, 1, 5, 6, 9, 8];

// console.log(testArray.fill(0));
// console.log(testArray.fill("k"));
// console.log(testArray.fill("k", 3));
//  fill(value, start, end) start is inclusive, end is exclusive
console.log(testArray.fill("k", 3, 7));

const myNumber =[1, 5, 88, 99, 76, 33, 55];
// when u use filter it returns new array.
const result = myNumber.filter( (num) => num != 55);
console.log(result);

const result1 = myNumber.filter( (num) => num<55 );
console.log(result1);

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];

console.log(users.slice(1,4));

console.log(users.slice(2));
// start from 1 and count 2 from there and delete all the elements in between and insert HI there
// users.splice(1, 3, "HI");
users.splice(1, 3, "HI", "BYE");

console.log(users);