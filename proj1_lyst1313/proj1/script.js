var counter = document.querySelector(".counter"); // since counter is a class, we are using . to access it
//var followers = document.querySelector(".followers");
var followers = document.getElementsByClassName("followers");

let count = 1;
// setInterval(function, millisecond)

setInterval( ()=> {
    if(count <1000){
        count++;
        counter.innerHTML = count;
    }
}, 1) ;

setTimeout ( ()=> {
    //followers.innerText= "Followers in Instagram !!!"
    followers[0].innerText= "Followers in Instagram !!!"

}, 5000);