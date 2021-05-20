// user is only allowed to make purchase if 
// logged in
// email verified
// card Info valid
// if any 1 is missing, stop the purchase

var isLoggedIn =false;
var emailVerified = true;
var carInfoValid = true;
if(isLoggedIn && emailVerified && carInfoValid) 
{
    console.log("Allow user to make purchase");
}
else
{
    console.log("User is not allowed to make purchase");

}
