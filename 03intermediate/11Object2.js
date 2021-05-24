var user = {
    firstName : "Khushboo",
    lastName : "Sahu",
    role : "Admin",
    logInCount : 32,
    facebookSignedIn : true,
    courseList :[],
    buyCourse: function(courseName) {
        // how to access the courseList for this user, what if courseList is defined somewhere else too, we use this keyword , since we are already inside user we cant use user.courseList
        this.courseList.push(courseName);
    },
    getCourseCount : function() {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`;
    },
    info : function(){
        return `
        Full name : ${this.firstName} ${this.lastName}
        loggedin from facebook : ${this.facebookSignedIn}
        Number of courses enrolled in : ${this.getCourseCount()}
        `
    }
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
console.log(user.getCourseCount());

console.log(user.info());