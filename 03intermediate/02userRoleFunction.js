// Define a function that can answer the role of a user.
// A user can be on following roles :
// admin : gets full access
// subadmin ; gets access to create /delete courses
// testprep :gets access to create /delete tests 
// user : gets access to consume content
// other : trial user.

// Input : getuserRole(name, role)

// function getuserRole(name, role){
//     switch (role) {
//         case "admin":
//             return `${name} is admin with all access` ;
//             break; // this is not necessary here
//         case "subadmin":
//             return `${name} is subadmin with access to create/delete courses` ;
//             break;
//         case "testprep":
//             return `${name} is testprep with access to create/delete tests` ;
//             break;
//         case "user":
//             return `${name} is user with access to consume content` ;
//             break;
//         default:
//             return `${name} is tral user`
//             break;
//     }
// }

// console.log(getuserRole("Khushboo", "admin")); 


var getuserRole= function(name, role){
    switch (role) {
        case "admin":
            return `${name} is admin with all access` ;
            break; // this is not necessary here
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses` ;
            break;
        case "testprep":
            return `${name} is testprep with access to create/delete tests` ;
            break;
        case "user":
            return `${name} is user with access to consume content` ;
            break;
        default:
            return `${name} is tral user`
            break;
    }
}

console.log(getuserRole("Khushboo", "admin")); 