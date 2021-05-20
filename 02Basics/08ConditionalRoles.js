// Create an application with following Roles :
// admin : gets full access
// subadmin ; gets access to create /delete courses
// testprep :gets access to create /delete tests 
// user : gets access to consume content

var user ="abs"

switch(user)
{
    case "admin" : 
        console.log("Gets full aceess");
        break;
    case "subadmin" :
        console.log("gets access to create/delete courses");
        break;
    case "testprep" : 
        console.log("Gets access to create/ delete tests");
        break;
    case "user" : 
        console.log("gets access to consume the content");
        break;
    default :
        console.log("Trial User");
        break;
}