var user = {
    firstName : "Khushboo",
    lastName : "Sahu",
    role : "Admin",
    logInCount : 32,
    facebookSignedIn : true
};

console.log(user.firstName);
console.log(user["lastName"]);

user.logInCount =44;
console.log(user.logInCount);

console.log(user);
console.table(user);