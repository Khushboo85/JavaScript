// Allow user to access course if he is logged in from 
// Google
// Facebook
// email

var isLoggedInFromGoogle = false;
var isLoggedInFromFacebook = true;
var isLoggedInFromEmail = false;

if(isLoggedInFromEmail || isLoggedInFromFacebook || isLoggedInFromGoogle)
{
    console.log("User Logged In");
}
else{
    console.log("User not Logged in");
}