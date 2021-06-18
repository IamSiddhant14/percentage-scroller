var ele =document.getElementById("text");
var op = window;
var height =op.offsetHeight;

document.addEventListener("scroll",moveit)

function moveit(){

    var scrolled = window.scrollY;
    var ans = parseInt((((scrolled+700)/13528.800)*100));
    document.querySelector("#text>span").innerText=ans;

}

window.addEventListener("scroll",moveit)