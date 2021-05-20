// Show user a button if he is authenticated,
// otherwise show him option to login/signup

var authenticated = false;

// if(authenticated)
// {
//     console.log("Show Sign Out button");
// }
// else{
//     console.log("Show Login / Signup option");
// }

authenticated ?  console.log("Show Sign Out button") : console.log("Show Login / Signup option");;